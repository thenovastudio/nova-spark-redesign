import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { SEOHead } from "@/components/SEOHead";

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations.contact;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
    toast({
      title: t.toast.successTitle[language],
      description: t.toast.successDesc[language],
    });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen">
      <SEOHead page="contact" />
      <Navbar />

      <section className="pt-32 pb-16 border-b border-border md:pb-20">
        <div className="container max-w-3xl border-l-4 border-primary pl-6">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary">
            {t.title[language]}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            {t.subtitle[language]}
          </p>
        </div>
      </section>

      <section className="pb-24 pt-16">
        <div className="container max-w-2xl">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-secondary">
                {t.success.title[language]}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {t.success.description[language]}
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                className="mt-6 border-border hover:border-primary/50"
              >
                Verstuur nog een bericht
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                value={formData.name}
                placeholder={t.form.namePlaceholder[language]}
                required
                onChange={handleChange}
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                placeholder={t.form.emailPlaceholder[language]}
                required
                onChange={handleChange}
              />
              <Input
                name="company"
                value={formData.company}
                placeholder={t.form.companyPlaceholder[language]}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                value={formData.message}
                placeholder={t.form.messagePlaceholder[language]}
                required
                onChange={handleChange}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                {isSubmitting ? (
                  t.form.sending[language]
                ) : (
                  <>
                    {t.form.submit[language]}
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;