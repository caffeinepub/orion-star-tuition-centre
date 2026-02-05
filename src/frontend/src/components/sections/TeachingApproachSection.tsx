import { CheckCircle2 } from 'lucide-react';

export default function TeachingApproachSection() {
  const approaches = [
    'Interactive learning sessions with real-world examples',
    'Regular assessments and progress tracking',
    'Doubt-clearing sessions and one-on-one support',
    'Comprehensive study materials and practice worksheets',
    'Parent-teacher communication for holistic development',
    'Focus on conceptual understanding, not just memorization',
  ];

  return (
    <section id="teaching" className="w-full py-16 md:py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Teaching Approach
            </h2>
            <p className="text-lg text-muted-foreground">
              At Orion Star Tuition Centre, we believe in nurturing each student's potential through personalized attention and proven teaching methodologies.
            </p>
            
            <div className="space-y-4">
              {approaches.map((approach, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-base text-foreground">{approach}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-base text-muted-foreground italic">
                "We don't just teach subjects; we inspire a love for learning and build confidence that lasts a lifetime."
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medium bg-card p-8">
              <img
                src="/assets/generated/orion-star-icons-set.dim_512x512.png"
                alt="Teaching methodology icons"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
