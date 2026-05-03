export default function Services() {
  const serviceCategories = [
    {
      name: "Haircutting & Styling",
      items: [
        { name: "Consultation & Signature Cut", price: "75", desc: "A personalized cut experience including scalp massage." },
        { name: "Director's Signature Cut", price: "120", desc: "Expert assessment and styling by our Creative Lead." },
        { name: "Global Styling & Finish", price: "60", desc: "Editorial-grade blowouts and finishing." },
        { name: "Grooming & Fade", price: "55", desc: "Precision masculine aesthetics and grooming." },
      ]
    },
    {
      name: "Color Artistry",
      items: [
        { name: "Full Balayage", price: "280", desc: "Hand-painted dimension for natural-toned transitions." },
        { name: "Signature Lightening", price: "190", desc: "Traditional highlight techniques for maximum impact." },
        { name: "Tone & Gloss Transformation", price: "95", desc: "Refresh and revitalize your current shade." },
        { name: "Single Process Color", price: "110", desc: "Consistent global color application." },
      ]
    },
    {
       name: "Treatments & Extensions",
       items: [
         { name: "Keratin Smooth Therapy", price: "350", desc: "Eliminate frizz and restore structural integrity." },
         { name: "Extension Consultation", price: "FREE", desc: "Bespoke assessment for length and volume additions." },
         { name: "Deep Conditioning Halo", price: "45", desc: "Intensive moisture bath for damaged strands." },
       ]
    }
  ];

  return (
    <div className="pt-20 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-32 space-y-6">
           <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">The Menu</span>
           <h1 className="luxury-heading text-6xl md:text-8xl">CURATED <br/><span className="italic">SERVICES</span></h1>
           <p className="text-sm opacity-60 leading-relaxed">
             All services include a detailed consultation to ensure your vision is executed with absolute precision. Prices listed are starting values.
           </p>
        </div>

        <div className="space-y-32">
          {serviceCategories.map((cat, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
              <div className="lg:border-r border-luxury-ink/10 lg:pr-12">
                 <h2 className="luxury-heading text-4xl lg:text-3xl sticky top-32">{cat.name}</h2>
              </div>
              <div className="lg:col-span-2 space-y-16">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="group flex flex-col md:flex-row justify-between items-start md:items-end border-b border-luxury-ink/5 pb-8 transition-colors hover:border-luxury-gold">
                    <div className="space-y-4 max-w-md">
                      <h3 className="luxury-heading text-2xl group-hover:text-luxury-gold transition-colors">{item.name}</h3>
                      <p className="text-xs opacity-50 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="font-light text-xl italic">${item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 bg-luxury-ink p-20 text-luxury-cream text-center space-y-8">
           <h3 className="luxury-heading text-4xl">Interested in a Transformation?</h3>
           <p className="text-sm opacity-60 max-w-md mx-auto">Our specialists are ready to guide you through your next style evolution.</p>
           <div>
              <a href="/book" className="inline-block bg-luxury-gold text-luxury-ink px-12 py-4 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white transition-colors">
                 Begin Your Journey
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}
