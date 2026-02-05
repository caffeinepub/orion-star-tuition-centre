import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function HeroSection() {
  const scrollToEnquiry = () => {
    const element = document.getElementById('enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: 'url(/assets/generated/orion-star-pattern-tile.dim_512x512.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px'
        }} />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-7 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-medium text-primary">Quality Education Since Day One</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1]">
              Orion Star Tuition Centre
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed">
              Empowering students from Class 1 to Class 12
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              We provide comprehensive, personalized education that helps students excel academically and build confidence for their future. Join us on a journey of learning and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                onClick={scrollToEnquiry}
                className="text-base font-medium shadow-medium hover:shadow-lg transition-all"
              >
                Enquire Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-base font-medium border-2"
              >
                View Classes
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img
                src="/assets/generated/orion-star-hero.dim_1600x600.png"
                alt="Students learning at Orion Star Tuition Centre"
                width={1600}
                height={600}
                className="w-full h-auto aspect-[8/3]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
