export default function About() {
  const team = [
    { name: "Julian Voss", role: "Creative Director", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" },
    { name: "Aria Thorne", role: "Senior Colorist", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=800" },
    { name: "Markus Reed", role: "Style Expert", image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="pt-20 pb-40 space-y-40">
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">The Story</span>
          <h1 className="luxury-heading text-6xl md:text-8xl leading-none">THE HALO <br/> <span className="italic">IDENTITY</span></h1>
          <p className="text-sm opacity-70 leading-relaxed max-w-md">
            Founded in 2026, Halo Salon was born from a singular vision: to create a space where hair styling transcends routine maintenance and becomes a form of artistic expression. 
          </p>
          <p className="text-sm opacity-70 leading-relaxed max-w-md">
            Located in the heart of Longview, our salon combines urban sophistication with Texas warmth, offering a retreat for those who value precision, elegance, and personal care.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden bg-luxury-ink">
            <img 
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=1000" 
              alt="About Halo Salon" 
              className="w-full h-full object-cover opacity-80 transition-transform duration-1000 hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-luxury-gold flex items-center justify-center p-8 text-center text-[10px] uppercase tracking-widest font-bold text-luxury-ink">
             Excellence in Craftsmanship
          </div>
        </div>
      </section>

      <section className="bg-luxury-ink py-40">
        <div className="max-w-7xl mx-auto px-6 text-luxury-cream grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="luxury-heading text-4xl">Our Mission</h3>
            <p className="text-xs opacity-60 leading-loose">To empower individuals through transformative hair artistry that mirrors their inner confidence and sophistication.</p>
          </div>
          <div className="space-y-4">
            <h3 className="luxury-heading text-4xl">Unwavering Value</h3>
            <p className="text-xs opacity-60 leading-loose">We believe in quality over quantity, using only the most refined products and techniques in the industry.</p>
          </div>
          <div className="space-y-4">
            <h3 className="luxury-heading text-4xl">Client Vision</h3>
            <p className="text-xs opacity-60 leading-loose">Every appointment is a collaboration. We listen first, artistically translate second.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
           <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">The Collective</span>
           <h2 className="luxury-heading text-5xl md:text-7xl">Master Stylists</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {team.map((member, i) => (
            <div key={i} className="text-center space-y-6">
               <div className="aspect-square rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 mx-auto max-w-[300px]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div>
                  <h4 className="luxury-heading text-2xl">{member.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">{member.role}</p>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
