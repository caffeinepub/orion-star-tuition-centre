import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our classes or want to enroll your child? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone Numbers Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    Call Us
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Primary Contact</p>
                    <a
                      href="tel:8754585354"
                      className="text-2xl font-semibold text-foreground hover:text-primary transition-colors block"
                    >
                      8754585354
                    </a>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Alternate Contact</p>
                    <a
                      href="tel:9677219328"
                      className="text-2xl font-semibold text-foreground hover:text-primary transition-colors block"
                    >
                      9677219328
                    </a>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Call us anytime to discuss your child's educational needs
                </p>
              </div>

              {/* Additional Info Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    Office Hours
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-border">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t border-border">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Us Section */}
            <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Visit Our Centre
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                We welcome parents and students to visit our tuition centre. Experience our learning environment and meet our dedicated teachers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8754585354"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call to Schedule Visit
                </a>
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setTimeout(() => {
                      window.location.href = '/#enquiry';
                    }, 300);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/90 transition-colors"
                >
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
