import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-ink text-luxury-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-2xl tracking-widest uppercase">Halo</span>
            <div className="h-8 w-[1px] bg-luxury-cream/30 mx-2" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-light">Salon</span>
          </div>
          <p className="text-xs leading-relaxed opacity-60 max-w-xs">
            A premium salon experience in Longview, Texas. We specialize in bringing out the angelic elegance in every client.
          </p>
          <div className="flex space-x-4 opacity-60">
            <Facebook size={18} className="hover:text-luxury-gold cursor-pointer" />
            <Instagram size={18} className="hover:text-luxury-gold cursor-pointer" />
            <Twitter size={18} className="hover:text-luxury-gold cursor-pointer" />
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold">Location</h4>
          <div className="space-y-4 opacity-60 text-xs">
            <div className="flex items-start space-x-3">
              <MapPin size={16} className="mt-0.5" />
              <span>123 Elite Way, Longview, TX 75601</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={16} />
              <span>(903) 555-0123</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={16} />
              <span>bookings@halosalon.com</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold">Hours</h4>
          <div className="space-y-2 opacity-60 text-xs">
            <div className="flex justify-between">
              <span>Mon - Fri</span>
              <span>9:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>10:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold">Newsletter</h4>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border border-luxury-cream/20 px-4 py-2 text-xs w-full focus:outline-none focus:border-luxury-gold" 
            />
            <button className="bg-luxury-gold text-luxury-ink px-4 py-2 text-[10px] uppercase tracking-widest font-bold">Join</button>
          </div>
          <p className="text-[10px] opacity-40">Get insights on latest hair trends and offers.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-luxury-cream/10 text-center">
        <p className="text-[10px] opacity-40">© 2026 Halo Salon. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
