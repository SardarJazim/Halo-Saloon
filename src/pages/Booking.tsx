import React, { useState } from "react";
import { Check } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || "Failed to book appointment.");
      }
    } catch (err) {
      setError("A server error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white p-12 text-center space-y-8 border border-luxury-ink/5 shadow-2xl">
           <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mx-auto text-luxury-ink">
              <Check size={40} />
           </div>
           <h2 className="luxury-heading text-4xl">Booking Confirmed</h2>
           <p className="text-xs opacity-60 leading-relaxed">
             Thank you, {formData.name}. We have received your booking request for {formData.service} on {formData.date}. Our team will contact you shortly to confirm.
           </p>
           <button 
            onClick={() => setSubmitted(false)}
            className="text-[11px] uppercase tracking-widest border-b border-luxury-ink pb-2 font-bold"
           >
             Book Another Session
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-luxury-gold font-bold">Reservations</span>
            <h1 className="luxury-heading text-6xl md:text-8xl leading-none">SECURE YOUR <br/><span className="italic">MOMENT</span></h1>
            <p className="text-sm opacity-60 leading-relaxed max-w-sm">
              Appointments are essential to provide the focused attention your elegance deserves. 
            </p>
          </div>
          
          <div className="space-y-8 pt-10">
             <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Direct Inquiries</p>
                <p className="luxury-heading text-3xl font-light">(903) 555-0123</p>
             </div>
             <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-widest opacity-40">Special Events</p>
                <p className="text-sm font-light">For weddings or group bookings, please email our events coordinator at events@halosalon.com</p>
             </div>
          </div>
        </div>

        <div className="bg-white p-12 border border-luxury-ink/5 shadow-sm">
           <form onSubmit={handleSubmit} className="space-y-8">
              {error && <div className="p-4 bg-red-50 text-red-500 text-xs tracking-wider uppercase">{error}</div>}
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold">Full Name</label>
                    <input 
                      required
                      name="name"
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-luxury-cream/30 border-b border-luxury-ink/20 py-3 px-2 focus:outline-none focus:border-luxury-gold text-sm transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold">Email Address</label>
                    <input 
                      required
                      name="email"
                      onChange={handleChange}
                      type="email" 
                      className="w-full bg-luxury-cream/30 border-b border-luxury-ink/20 py-3 px-2 focus:outline-none focus:border-luxury-gold text-sm transition-colors" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold">Phone Number</label>
                    <input 
                      required
                      name="phone"
                      onChange={handleChange}
                      type="tel" 
                      className="w-full bg-luxury-cream/30 border-b border-luxury-ink/20 py-3 px-2 focus:outline-none focus:border-luxury-gold text-sm transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold">Requested Service</label>
                    <select 
                      required
                      name="service"
                      onChange={handleChange}
                      className="w-full bg-luxury-cream/30 border-b border-luxury-ink/20 py-3 px-2 focus:outline-none focus:border-luxury-gold text-sm transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="Precision Cut">Precision Cut</option>
                      <option value="Balayage Art">Balayage Art artistry</option>
                      <option value="Silk Styling">Silk Styling</option>
                      <option value="Grooming">Grooming & Fade</option>
                      <option value="Other">Custom Treatment</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold">Preferred Date</label>
                    <input 
                      required
                      name="date"
                      onChange={handleChange}
                      type="date" 
                      className="w-full bg-luxury-cream/30 border-b border-luxury-ink/20 py-3 px-2 focus:outline-none focus:border-luxury-gold text-sm transition-colors" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold">Preferred Time</label>
                    <input 
                      required
                      name="time"
                      onChange={handleChange}
                      type="time" 
                      className="w-full bg-luxury-cream/30 border-b border-luxury-ink/20 py-3 px-2 focus:outline-none focus:border-luxury-gold text-sm transition-colors" 
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-luxury-ink text-luxury-cream py-5 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold hover:text-luxury-ink transition-all disabled:opacity-50"
              >
                {loading ? "Processing Request..." : "Request Appointment"}
              </button>
           </form>
        </div>
      </div>
    </div>
  );
}
