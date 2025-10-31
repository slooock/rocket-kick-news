"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";

interface News {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  timeAgo: string;
}

interface Comment {
  id: number;
  author: string;
  text: string;
  timeAgo: string;
}

export default function NewsDetailPage() {
  const params = useParams();
  const newsId = parseInt(params.id as string);

  const [news, setNews] = useState<News | null>(null);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(`/api/news/${newsId}`);
        if (response.ok) {
          const data = await response.json();
          setNews(data);
          setLikes(data.likes || 0);
          setComments(data.comments || []);
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchNewsData();
  }, [newsId]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-center">Carregando...</p>
          </div>
        </main>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Notícia não encontrada</h1>
          <Link href="/">
            <Button>Voltar para home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/news/${newsId}/like`, {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
        setLiked(!liked);
      }
    } catch (error) {
      console.error('Erro ao dar like:', error);
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim() && authorName.trim()) {
      try {
        const response = await fetch(`/api/news/${newsId}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            author: authorName,
            text: newComment,
          }),
        });

        if (response.ok) {
          const savedComment = await response.json();
          
          setComments([
            ...comments,
            {
              id: savedComment.id,
              author: savedComment.author,
              text: savedComment.text,
              timeAgo: "agora",
            },
          ]);
          
          setNewComment("");
          setAuthorName("");
        }
      } catch (error) {
        console.error('Erro ao adicionar comentário:', error);
        alert('Erro ao adicionar comentário. Tente novamente.');
      }
    } else {
      alert('Por favor, preencha seu nome e o comentário.');
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge className="mb-4">{news.category}</Badge>
            <h1 className="text-4xl font-bold mb-4">{news.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{news.timeAgo}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
              width={1200}
              height={675}
            />
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            {news.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-foreground/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex items-center gap-4 py-6 border-y border-border mb-8">
            <Button
              variant={liked ? "default" : "outline"}
              onClick={handleLike}
              className="gap-2"
            >
              <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
              {likes}
            </Button>
            <Button variant="outline" className="gap-2">
              <MessageCircle className="h-5 w-5" />
              {comments.length}
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-5 w-5" />
              Compartilhar
            </Button>
            <Link href={`/news/${newsId}/edit`}>
              <Button variant="outline" className="gap-2">
                Editar
              </Button>
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Comentários ({comments.length})</h2>

            <div className="mb-6 space-y-4">
              <div>
                <Label htmlFor="author">Seu nome</Label>
                <Input
                  id="author"
                  type="text"
                  placeholder="Digite seu nome..."
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="comment">Comentário</Label>
                <Textarea
                  id="comment"
                  placeholder="Adicione um comentário..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={4}
                  className="mt-2"
                />
              </div>
              <Button onClick={handleAddComment}>Publicar comentário</Button>
            </div>

            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="card-gradient rounded-lg p-4 border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-semibold">{comment.author}</span>
                    <span className="text-sm text-muted-foreground">{comment.timeAgo}</span>
                  </div>
                  <p className="text-foreground/90">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
