import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Send,
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { SEOHead } from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ScrollReveal";

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations.contact;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      toast({
        title: t.toast.successTitle[language],
        description: t.toast.successDesc[language],
      });
    } catch (err) {
      console.error("Contact form submission error:", err);
      toast({
        title: t.toast.errorTitle[language],
        description: t.toast.errorDesc[language],
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <SEOHead page="contact" />
      <Navbar />

      {/* Full-width split hero — left text, right form */}
      <section className="relative pt-32 md:pt-40 pb-0 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left — Hero text + contact info */}
            <div className="lg:sticky lg:top-40 pb-16 md:pb-24">
              <ScrollReveal>
                <p className="text-sm font-medium text-primary tracking-wide mb-6 uppercase">
                  {language === "nl" ? "Neem Contact Op" : language === "fr" ? "Contactez-Nous" : "Get In Touch"}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={50}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-secondary mb-6">
                  {t.title[language]}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-12">
                  {t.subtitle[language]}
                </p>
              </ScrollReveal>

              {/* Contact details — minimal inline style */}
              <ScrollReveal delay={150}>
                <div className="space-y-6 mb-12">
                  <a
                    href="mailto:contact@codevio.be"
                    className="group flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.info.email[language]}</p>
                      <p className="font-semibold">contact@codevio.be</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.info.location[language]}</p>
                      <p className="font-semibold text-foreground">{t.info.locationValue[language]}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.info.responseTime[language]}</p>
                      <p className="font-semibold text-foreground">{t.info.responseTimeValue[language]}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Steps — horizontal pills */}
              <ScrollReveal delay={200}>
                <div className="border-t border-border pt-8">
                  <p className="text-sm font-semibold text-secondary mb-5">{t.info.whatHappens[language]}</p>
                  <div className="space-y-3">
                    {[t.info.step1[language], t.info.step2[language], t.info.step3[language]].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Form card */}
            <div className="pb-16 md:pb-24">
              <ScrollReveal delay={200}>
                <div className="rounded-2xl border border-border bg-background shadow-lg p-8 md:p-10 lg:p-12">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="relative inline-flex justify-center items-center mb-8">
                        <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/10 animate-ping" />
                        <div className="relative w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                          <CheckCircle2 className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-secondary mb-3">
                        {t.success.title[language]}
                      </h2>
                      <p className="text-lg text-muted-foreground max-w-sm mx-auto mb-8">
                        {t.success.description[language]}
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-border hover:border-primary/50 px-6"
                      >
                        {t.success.sendAnother[language]}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-bold text-secondary">
                          {language === "nl" ? "Stuur ons een bericht" : language === "fr" ? "Envoyez-nous un message" : "Send us a message"}
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          {language === "nl" ? "Velden met * zijn verplicht" : language === "fr" ? "Les champs avec * sont obligatoires" : "Fields marked with * are required"}
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div className="space-y-2">
                          <label
                            htmlFor="contact-name"
                            className={`text-sm font-semibold transition-colors duration-200 ${
                              focusedField === "name" ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {t.form.name[language]}
                          </label>
                          <Input
                            id="contact-name"
                            name="name"
                            value={formData.name}
                            placeholder={t.form.namePlaceholder[language]}
                            required
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className="h-12 bg-muted/30 border-border focus:bg-background focus:border-primary/50 transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <label
                            htmlFor="contact-email"
                            className={`text-sm font-semibold transition-colors duration-200 ${
                              focusedField === "email" ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {t.form.email[language]}
                          </label>
                          <Input
                            id="contact-email"
                            name="email"
                            type="email"
                            value={formData.email}
                            placeholder={t.form.emailPlaceholder[language]}
                            required
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className="h-12 bg-muted/30 border-border focus:bg-background focus:border-primary/50 transition-all"
                          />
                        </div>

                        {/* Company */}
                        <div className="space-y-2">
                          <label
                            htmlFor="contact-company"
                            className={`text-sm font-semibold transition-colors duration-200 ${
                              focusedField === "company" ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {t.form.company[language]}
                          </label>
                          <Input
                            id="contact-company"
                            name="company"
                            value={formData.company}
                            placeholder={t.form.companyPlaceholder[language]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("company")}
                            onBlur={() => setFocusedField(null)}
                            className="h-12 bg-muted/30 border-border focus:bg-background focus:border-primary/50 transition-all"
                          />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                          <label
                            htmlFor="contact-message"
                            className={`text-sm font-semibold transition-colors duration-200 ${
                              focusedField === "message" ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {t.form.message[language]}
                          </label>
                          <Textarea
                            id="contact-message"
                            name="message"
                            value={formData.message}
                            placeholder={t.form.messagePlaceholder[language]}
                            required
                            onChange={handleChange}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            className="min-h-[140px] bg-muted/30 border-border focus:bg-background focus:border-primary/50 transition-all resize-none"
                          />
                        </div>

                        {/* Submit */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-13 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] mt-2"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              {t.form.sending[language]}
                            </span>
                          ) : (
                            <>
                              {t.form.submit[language]}
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;