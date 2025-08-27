import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Shirt, Star, Twitter, Instagram, Facebook, ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
          <Shirt className="h-6 w-6 text-primary" />
          <span>RetroFútbol</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="#coleccion" className="transition-colors hover:text-primary">Colección</Link>
          <Link href="#historia" className="transition-colors hover:text-primary">Historia</Link>
          <Link href="#opiniones" className="transition-colors hover:text-primary">Opiniones</Link>
        </nav>
        <Button asChild>
          <Link href="#comprar">Comprar ahora <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-3.5rem)] w-full">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Estadio de fútbol vintage con ambiente épico"
        fill
        className="object-cover"
        data-ai-hint="vintage football stadium"
        priority
      />
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center text-primary-foreground p-4">
        <h1 className="font-headline text-5xl font-bold md:text-7xl lg:text-8xl text-shadow-lg shadow-black/50">
          RetroFútbol
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-shadow-sm shadow-black/50">
          La historia del fútbol, cosida en cada camiseta.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#coleccion">Ver colección</Link>
          </Button>
          <Button size="lg" variant="secondary">
            Envíos a todo el país
          </Button>
        </div>
      </div>
    </section>
  )
}

const shirts = [
  {
    name: "La Eléctrica '86",
    description: 'Inspirada en la magia del Diego en México.',
    imageUrl: 'https://picsum.photos/600/800?random=1',
    imageHint: 'vintage football jersey argentina'
  },
  {
    name: "Furia Naranja '74",
    description: 'El fútbol total holandés en su máxima expresión.',
    imageUrl: 'https://picsum.photos/600/800?random=2',
    imageHint: 'retro football shirt netherlands'
  },
  {
    name: "Garra Charrúa '50",
    description: 'Revive la hazaña épica del Maracanazo.',
    imageUrl: 'https://picsum.photos/600/800?random=3',
    imageHint: 'classic soccer jersey uruguay'
  },
  {
    name: "Tricampeão '70",
    description: 'El Jogo Bonito de Pelé y Brasil en estado puro.',
    imageUrl: 'https://picsum.photos/600/800?random=4',
    imageHint: 'historic football uniform brazil'
  }
];

function CollectionSection() {
  return (
    <section id="coleccion" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-4xl font-bold md:text-5xl">Colección 2025</h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">Diseños que marcaron una época. Calidad que perdura.</p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {shirts.map((shirt, index) => (
            <Card key={index} className="group overflow-hidden border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2">
              <CardHeader className="p-0">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={shirt.imageUrl}
                    alt={`Camiseta ${shirt.name}`}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={shirt.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 bg-card">
                <CardTitle className="font-headline text-2xl">{shirt.name}</CardTitle>
                <CardDescription className="mt-2">{shirt.description}</CardDescription>
                <Button className="mt-4 w-full" variant="outline">Ver detalles</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function HistorySection() {
  return (
    <section id="historia" className="relative bg-secondary py-20 sm:py-32">
       <div className="absolute inset-0 opacity-[0.02]">
        <Image
          src="https://picsum.photos/1920/1080?grayscale"
          alt="Textura de papel viejo"
          fill
          className="object-cover"
          data-ai-hint="old paper texture"
        />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Nuestra Historia</h2>
          <p className="mt-6 text-lg leading-relaxed">
            RetroFútbol nació de una pasión inquebrantable: la de revivir los momentos que convirtieron al fútbol en el deporte más hermoso del mundo. No solo vendemos camisetas; curamos recuerdos. Cada diseño es un homenaje a los héroes, las hazañas y la estética inolvidable que definieron generaciones. Usamos materiales de la más alta calidad para que no solo vistas una réplica, sino que sientas una pieza de historia.
          </p>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: "La calidad es increíble, se siente como una camiseta de la época. ¡Volví a tener 10 años! El envío fue rapidísimo.",
    author: "Javier M.",
    location: "Buenos Aires, Argentina",
  },
  {
    quote: "¡Mi camiseta del '74 es una obra de arte! Los detalles, el escudo bordado... todo perfecto. Súper recomendables.",
    author: "Sofía G.",
    location: "Madrid, España",
  }
];

function TestimonialsSection() {
  return (
    <section id="opiniones" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-4xl font-bold md:text-5xl">Lo que dicen nuestros clientes</h2>
        <div className="mt-16 mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between bg-card p-6 shadow-lg">
              <div>
                <div className="flex gap-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-lg italic text-muted-foreground">"{testimonial.quote}"</blockquote>
              </div>
              <cite className="mt-6 not-italic font-bold">{testimonial.author} <span className="font-normal text-muted-foreground">- {testimonial.location}</span></cite>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTASection() {
  return (
    <section id="comprar" className="bg-primary text-primary-foreground py-20 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl font-bold md:text-5xl">¿Listo para vestir la historia?</h2>
        <p className="mt-4 mx-auto max-w-2xl text-lg text-primary-foreground/80">Nuestras colecciones son de edición limitada. No te quedes sin la tuya.</p>
        <Button size="lg" variant="secondary" className="mt-8">
          Comprar antes de que se agoten
        </Button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center gap-6">
          <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 transition-colors hover:text-primary" /></Link>
          <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 transition-colors hover:text-primary" /></Link>
          <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 transition-colors hover:text-primary" /></Link>
        </div>
        <p className="mt-6 text-sm">&copy; {new Date().getFullYear()} RetroFútbol. Todos los derechos reservados. Una marca con pasión.</p>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ScrollReveal>
          <CollectionSection />
        </ScrollReveal>
        <ScrollReveal>
          <HistorySection />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
