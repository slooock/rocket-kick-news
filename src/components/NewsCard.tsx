import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  timeAgo: string;
  featured?: boolean;
}

const NewsCard = ({ image, category, title, excerpt, timeAgo, featured }: NewsCardProps) => {
  return (
    <article className={`group cursor-pointer hover-lift ${featured ? 'md:col-span-2' : ''}`}>
      <div className="card-gradient rounded-2xl overflow-hidden border border-border h-full">
        {/* Image */}
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          
          {/* Category Badge */}
          <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">
            {category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className={`font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {excerpt}
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
