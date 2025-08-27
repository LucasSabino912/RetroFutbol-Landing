import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'RetroFútbol - Camisetas de Fútbol Vintage',
  description: 'Descubre la colección exclusiva de camisetas de fútbol retro de RetroFútbol. Revive la historia y la pasión del fútbol con diseños auténticos y de alta calidad.',
  keywords: "camisetas de fútbol retro, vintage, fútbol, camisetas, retro, historia del fútbol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-body text-foreground antialiased"
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
