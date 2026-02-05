import { BookOpen, Calculator, FlaskConical, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function ClassesSubjectsSection() {
  const classGroups = [
    {
      title: 'Class 1 - 5',
      subtitle: 'Foundation Years',
      description: 'Building strong fundamentals in core subjects with engaging, age-appropriate teaching methods.',
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi'],
      icon: BookOpen,
      color: 'text-chart-1',
      bgColor: 'bg-chart-1/10',
    },
    {
      title: 'Class 6 - 8',
      subtitle: 'Middle School',
      description: 'Developing critical thinking and problem-solving skills across all major subjects.',
      subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi', 'Computer Science'],
      icon: Calculator,
      color: 'text-chart-2',
      bgColor: 'bg-chart-2/10',
    },
    {
      title: 'Class 9 - 10',
      subtitle: 'Secondary Level',
      description: 'Comprehensive board exam preparation with focus on conceptual clarity and application.',
      subjects: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Science', 'Hindi', 'Computer Applications'],
      icon: FlaskConical,
      color: 'text-chart-3',
      bgColor: 'bg-chart-3/10',
    },
    {
      title: 'Class 11 - 12',
      subtitle: 'Senior Secondary',
      description: 'Specialized coaching for board exams and competitive entrance preparation.',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science', 'Accountancy', 'Business Studies', 'Economics'],
      icon: Globe,
      color: 'text-chart-4',
      bgColor: 'bg-chart-4/10',
    },
  ];

  return (
    <section id="classes" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Classes & Subjects
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive curriculum coverage from Class 1 to Class 12, tailored to each student's learning needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classGroups.map((group, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/30 transition-all hover:shadow-soft">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${group.bgColor} rounded-xl`}>
                    <group.icon className={`h-7 w-7 ${group.color}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-heading mb-1">
                      {group.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-primary">
                      {group.subtitle}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {group.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Subjects Offered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
