import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Experienced Teachers',
      description: 'Our qualified educators bring years of teaching expertise and passion for student success.',
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Personalized attention with limited students per batch ensures focused learning.',
    },
    {
      icon: Target,
      title: 'Focused Curriculum',
      description: 'Structured syllabus aligned with school boards to maximize academic performance.',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of helping students achieve excellent grades and build confidence.',
    },
  ];

  return (
    <section id="about" className="w-full py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5 leading-tight">
            Why Choose Orion Star?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We are committed to providing exceptional education that nurtures academic excellence and personal growth for every student.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-soft group"
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/15 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Illustration */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative rounded-2xl overflow-hidden shadow-medium">
            <img
              src="/assets/generated/orion-star-about-illustration.dim_1200x800.png"
              alt="Orion Star Tuition Centre learning environment and student success"
              width={1200}
              height={800}
              className="w-full h-auto aspect-[3/2]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
