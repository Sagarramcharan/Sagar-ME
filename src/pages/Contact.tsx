import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "5c613377-aeca-48e3-a766-32f848e687bd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        console.error("Error submitting form", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 min-h-screen pt-32 pb-24 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-6 text-center md:text-left">Let's Connect</h1>
          <p className="text-slate-400 text-base md:text-lg mb-12 text-center md:text-left">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-lg">sagarsatapathy24@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-lg">8688887665</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-red-400" />
              </div>
              <span className="text-lg">HYDERABAD TELANGANA</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-6 md:p-8 rounded-3xl shadow-2xl">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input required type="text" id="name" name="name" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input required type="email" id="email" name="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea required id="message" name="message" rows={5} className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none" placeholder="How can I help you?"></textarea>
            </div>
            
            {status === 'success' && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium text-center">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium text-center">
                Something went wrong. Please try again.
              </div>
            )}

            <button disabled={isSubmitting} type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center">
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
