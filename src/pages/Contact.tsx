import React, { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || "Failed to send message.");
      }
    } catch (err) {
      setError("A server error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 space-y-6">
           <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">Connect</span>
           <h1 className="luxury-heading text-6xl md:text-8xl">REACH <span className="italic">OUT</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-40">Address</h4>
                  <div className="flex items-start space-x-3 text-sm">
                    <MapPin size={18} className="mt-1 flex-shrink-0 text-luxury-gold" />
                    <p className="leading-relaxed font-light">123 Elite Way,<br/>Longview, TX 75601</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-40">Direct</h4>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone size={18} className="flex-shrink-0 text-luxury-gold" />
                    <p className="font-light">(903) 555-0123</p>
                  </div>
               </div>
            </div>

            <div className="space-y-4">
               <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-40">Email</h4>
               <div className="flex items-center space-x-3 text-sm">
                 <Mail size={18} className="flex-shrink-0 text-luxury-gold" />
                 <p className="font-light">concierge@halosalon.com</p>
               </div>
            </div>

            <div className="aspect-video w-full grayscale border border-luxury-ink/10 filter brightness-95">
               {/* Embedded Google Map Placeholder - Longview, TX centered */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107447.27961168057!2d-94.81977792618035!3d32.50070381667086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86363ecce64d9f71%3A0xe54d9c79219e8df3!2sLongview%2C%20TX!5e0!3m2!1sen!2sus!4v1714771234567!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
          </div>

          <div className="bg-white p-12 border border-luxury-ink/5 shadow-sm">
             {submitted ? (
               <div className="py-20 text-center space-y-6">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto text-luxury-ink">
                    <Send size={24} />
                  </div>
                  <h3 className="luxury-heading text-3xl">Inquiry Received</h3>
                  <p className="text-xs opacity-60">We've received your message and will respond within 24 business hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] uppercase tracking-widest border-b border-luxury-ink pb-1"
                  >
                    Send Another
                  </button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-12">
                  <h3 className="luxury-heading text-3xl">Direct Message</h3>
                  {error && <div className="p-4 bg-red-50 text-red-500 text-xs">{error}</div>}
                  
                  <div className="space-y-12">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold">Your Name</label>
                       <input 
                         required
                         name="name"
                         onChange={handleChange}
                         type="text" 
                         placeholder="John Doe"
                         className="w-full bg-transparent border-b border-luxury-ink/10 py-4 px-1 focus:outline-none focus:border-luxury-gold transition-colors text-sm" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold">Email Address</label>
                       <input 
                         required
                         name="email"
                         onChange={handleChange}
                         type="email" 
                         placeholder="john@example.com"
                         className="w-full bg-transparent border-b border-luxury-ink/10 py-4 px-1 focus:outline-none focus:border-luxury-gold transition-colors text-sm" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-widest font-bold">Your Inquiry</label>
                       <textarea 
                         required
                         name="message"
                         onChange={handleChange}
                         rows={4} 
                         placeholder="How can we assist you?"
                         className="w-full bg-transparent border-b border-luxury-ink/10 py-4 px-1 focus:outline-none focus:border-luxury-gold transition-colors text-sm resize-none" 
                       />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-luxury-ink text-luxury-cream py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-ink transition-all disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Transmit Inquiry"}
                  </button>
               </form>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
