import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations.contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (!res.ok) throw new Error("Failed");
      setIsSubmitted(true);
      toast({ title: t.toast.successTitle[language], description: t.toast.successDesc[language] });
    } catch (err) {
      toast({ title: t.toast.errorTitle[language], description: t.toast.errorDesc[language], variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20"><div className="container"><div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t.title[language]}</h1>
        <p className="mt-6 text-xl text-muted-foreground">{t.subtitle[language]}</p>
      </div></div></section>
      <section className="pb-24"><div className="container"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="glass-card rounded-2xl p-8">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6"><CheckCircle2 className="h-8 w-8 text-primary" /></div>
              <h2 className="text-2xl font-bold">{t.success.title[language]}</h2>
              <p className="mt-2 text-muted-foreground">{t.success.description[language]}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div><label htmlFor="name" className="block text-sm font-medium mb-2">{t.form.name[language]}</label><Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t.form.namePlaceholder[language]} required className="h-12" /></div>
              <div><label htmlFor="email" className="block text-sm font-medium mb-2">{t.form.email[language]}</label><Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t.form.emailPlaceholder[language]} required className="h-12" /></div>
              <div><label htmlFor="company" className="block text-sm font-medium mb-2">{t.form.company[language]}</label><Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder={t.form.companyPlaceholder[language]} className="h-12" /></div>
              <div><label htmlFor="message" className="block text-sm font-medium mb-2">{t.form.message[language]}</label><Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={t.form.messagePlaceholder[language]} required className="min-h-[150px] resize-none" /></div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>{isSubmitting ? t.form.sending[language] : <>{t.form.submit[language]}<Send className="ml-2 h-4 w-4" /></>}</Button>
            </form>
          )}
        </div>
        <div className="space-y-8">
          <div><h2 className="text-2xl font-bold mb-6">{t.info.title[language]}</h2><p className="text-muted-foreground">{t.info.description[language]}</p></div>
          <div className="space-y-6">
            <div className="flex items-start gap-4"><div className="p-3 rounded-xl bg-primary/10"><Mail className="h-5 w-5 text-primary" /></div><div><h3 className="font-semibold">{t.info.email[language]}</h3><p className="text-muted-foreground">webdevelopment@thenovastudio.be</p></div></div>
            <div className="flex items-start gap-4"><div className="p-3 rounded-xl bg-primary/10"><MapPin className="h-5 w-5 text-primary" /></div><div><h3 className="font-semibold">{t.info.location[language]}</h3><p className="text-muted-foreground">{t.info.locationValue[language]}</p></div></div>
            <div className="flex items-start gap-4"><div className="p-3 rounded-xl bg-primary/10"><Clock className="h-5 w-5 text-primary" /></div><div><h3 className="font-semibold">{t.info.responseTime[language]}</h3><p className="text-muted-foreground">{t.info.responseTimeValue[language]}</p></div></div>
          </div>
          <div className="p-6 rounded-2xl bg-secondary/50">
            <h3 className="font-semibold mb-2">{t.info.whatHappens[language]}</h3>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="font-medium text-foreground">1.</span>{t.info.step1[language]}</li>
              <li className="flex gap-2"><span className="font-medium text-foreground">2.</span>{t.info.step2[language]}</li>
              <li className="flex gap-2"><span className="font-medium text-foreground">3.</span>{t.info.step3[language]}</li>
            </ol>
          </div>
        </div>
      </div></div></section>
      <Footer />
    </main>
  );
};

export default Contact;
