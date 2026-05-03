import { Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const featuredServices = [
    { title: "Precision Cut", price: "75+", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" },
    { title: "Balayage Art", price: "200+", image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800" },
    { title: "Silk Styling", price: "60+", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" },
  ];

  const testimonials = [
    { name: "Ashley Thorne", text: "Truly the best salon experience I've had in Texas. The attention to detail is unmatched." },
    { name: "Michael Vance", text: "Clean, professional, and sophisticated. My stylist understood exactly what I wanted." },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-luxury-ink">
        <div className="absolute inset-0 opacity-40">
           <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1920" 
            alt="Salon View" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full text-center md:text-left">
          <div className="max-w-2xl space-y-8">
            <h1 className="luxury-heading text-6xl md:text-8xl text-luxury-cream leading-[0.9]">
              REVEAL YOUR <br/> <span className="italic">ANGELIC</span> ELEGANCE
            </h1>
            <p className="text-luxury-cream/70 text-sm md:text-base tracking-wide max-w-md">
              A meticulously crafted sanctuary for high-end styling and premium hair care in the heart of Longview.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <Link to="/book" className="bg-luxury-gold text-luxury-ink px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors text-center">
                Book Session
              </Link>
              <Link to="/services" className="border border-luxury-cream/30 text-luxury-cream px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-luxury-cream hover:text-luxury-ink transition-colors text-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute bottom-10 right-10 hidden xl:block">
           <div className="writing-mode-vertical text-luxury-cream/20 text-[10px] uppercase tracking-[1em] rotate-180">
              ESTABLISHED 2026 • LONGVIEW TX
           </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">Offerings</span>
              <h2 className="luxury-heading text-5xl md:text-7xl">Featured Artistry</h2>
            </div>
            <Link to="/services" className="text-xs uppercase tracking-widest border-b border-luxury-ink pb-2 hover:text-luxury-gold hover:border-luxury-gold transition-all">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredServices.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-gray-200">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="luxury-heading text-2xl">{service.title}</h3>
                  <span className="text-xs font-light opacity-60">From ${service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers / Packages Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
             <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">Exclusives</span>
             <h2 className="luxury-heading text-5xl md:text-7xl">Curated <span className="italic">Packages</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative aspect-[16/9] lg:aspect-auto lg:h-[600px] overflow-hidden bg-luxury-ink"
            >
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f80d9179?auto=format&fit=crop&q=80&w=1200" 
                alt="Bridal Package" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-ink via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 space-y-6 text-luxury-cream">
                <span className="text-[10px] uppercase tracking-[0.4em] font-medium border-b border-luxury-gold pb-1">Limited Availability</span>
                <h3 className="luxury-heading text-4xl md:text-5xl">The Grand Bridal <br/> Experience</h3>
                <p className="text-xs opacity-60 max-w-xs leading-relaxed">A comprehensive 4-hour sanctuary session for your most significant day. Includes trial, treatment, and precision styling.</p>
                <div className="pt-4">
                  <span className="text-xl font-serif italic">$550</span>
                  <Link to="/book" className="ml-8 text-[10px] uppercase tracking-widest font-bold border-b border-white pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-all">Enquire Now</Link>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8 flex flex-col justify-between">
               <motion.div 
                 whileHover={{ x: 10 }}
                 className="flex flex-col md:flex-row bg-luxury-cream border border-luxury-ink/5 p-10 gap-8 h-full"
               >
                  <div className="flex-1 space-y-4">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold font-bold">Seasonal</span>
                    <h4 className="luxury-heading text-3xl">Summer Luminance</h4>
                    <p className="text-[11px] opacity-60 leading-relaxed">Signature Balayage, gloss treatment, and botanical hydration for sun-kissed perfection.</p>
                    <p className="text-lg font-serif italic pt-4">$320</p>
                  </div>
                  <div className="hidden md:block w-32 aspect-square bg-luxury-ink overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=300" 
                      alt="Summer Promo" 
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
               </motion.div>

               <motion.div 
                 whileHover={{ x: 10 }}
                 className="flex flex-col md:flex-row bg-luxury-cream border border-luxury-ink/5 p-10 gap-8 h-full"
               >
                  <div className="flex-1 space-y-4">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold font-bold">Essentials</span>
                    <h4 className="luxury-heading text-3xl">The Gentleman's Ritual</h4>
                    <p className="text-[11px] opacity-60 leading-relaxed">Precision fade, luxury straight-razor detailing, and exfoliating scalp massage.</p>
                    <p className="text-lg font-serif italic pt-4">$110</p>
                  </div>
                   <div className="hidden md:block w-32 aspect-square bg-luxury-ink overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1621605815971-fbc38c665ab3?auto=format&fit=crop&q=80&w=300" 
                      alt="Mens Promo" 
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Testimonials Section */}
      <section className="py-40 bg-luxury-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32 space-y-4">
             <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">Accolades</span>
             <h2 className="luxury-heading text-5xl md:text-7xl">Voice of the <span className="italic">Halo</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {testimonials.map((t, idx) => (
              <div key={idx} className="space-y-8 flex flex-col items-center text-center group">
                 <div className="flex justify-center space-x-1 text-luxury-gold opacity-40 group-hover:opacity-100 transition-opacity">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                 </div>
                 <p className="luxury-heading text-xl md:text-2xl leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                   "{t.text}"
                 </p>
                 <div className="pt-4 space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.3em] font-bold">{t.name}</p>
                    <p className="text-[9px] opacity-30 tracking-widest uppercase">Verified Client</p>
                 </div>
              </div>
            ))}
            {/* Added an extra testimonial for the grid */}
            <div className="space-y-8 flex flex-col items-center text-center group">
               <div className="flex justify-center space-x-1 text-luxury-gold opacity-40 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
               </div>
               <p className="luxury-heading text-xl md:text-2xl leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                 "Professionalism that feels personal. Longview has been waiting for a studio with this level of creative caliber."
               </p>
               <div className="pt-4 space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.3em] font-bold">Julianne Meyers</p>
                  <p className="text-[9px] opacity-30 tracking-widest uppercase">Member since 2026</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Single Quote Callout (Replaces original simple testimonial) */}
      <section className="py-32 bg-luxury-ink text-luxury-cream overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <div className="flex justify-center space-x-1 text-luxury-gold">
               {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <h3 className="luxury-heading text-3xl md:text-5xl leading-tight">
               "The sanctuary of style I've always searched for. Halo Salon feels like a hidden gem where you're treated with absolute grace."
            </h3>
            <div className="space-y-1">
               <p className="text-[11px] uppercase tracking-[0.3em] font-medium">Elena Rodriguez</p>
               <p className="text-[10px] opacity-40">Luxury Branding Consultant</p>
            </div>
         </div>
      </section>
    </div>
  );
}
