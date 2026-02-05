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
    <section id="about" className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Why Choose Orion Star?
          </h2>
          <p className="text-lg text-muted-foreground">
            We are committed to providing exceptional education that nurtures academic excellence and personal growth for every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-all hover:shadow-soft">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
