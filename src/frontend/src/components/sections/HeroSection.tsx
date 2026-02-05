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
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Quality Education Since Day One</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Orion Star Tuition Centre
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Empowering students from Class 1 to Class 12
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              We provide comprehensive, personalized education that helps students excel academically and build confidence for their future. Join us on a journey of learning and growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                className="text-base font-medium"
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
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
