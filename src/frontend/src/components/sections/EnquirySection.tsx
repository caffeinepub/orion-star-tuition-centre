import EnquiryForm from '../enquiry/EnquiryForm';

export default function EnquirySection() {
  return (
    <section id="enquiry" className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Interested in enrolling your child? Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
          
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
