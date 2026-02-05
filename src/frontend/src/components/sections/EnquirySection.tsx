import EnquiryForm from '../enquiry/EnquiryForm';

export default function EnquirySection() {
  return (
    <section id="enquiry" className="relative w-full py-20 md:py-28 bg-muted/30 overflow-hidden">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ 
          backgroundImage: 'url(/assets/generated/orion-star-pattern-tile.dim_512x512.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px'
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5 leading-tight">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Interested in enrolling your child? Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
          
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
