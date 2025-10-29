import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/index.css";
import { Providers } from "./providers";
import { ClientProviders } from "./client-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FutScore - Notícias de Futebol",
  description: "As últimas notícias do mundo do futebol. Brasileirão, Champions League, mercado da bola e muito mais.",
  authors: [{ name: "Lovable" }],
  openGraph: {
    title: "FutScore - Notícias de Futebol",
    description: "As últimas notícias do mundo do futebol",
    type: "website",
    images: [
      {
        url: "https://lovable.dev/opengraph-image-p98pqg.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lovable_dev",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ClientProviders>
            {children}
          </ClientProviders>
        </Providers>
      </body>
    </html>
  );
}
