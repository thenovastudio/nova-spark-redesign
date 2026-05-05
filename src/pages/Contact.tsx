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
  MessageSquare,
  FileText,
  Handshake,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";
import { SEOHead } from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ScrollReveal";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://dvlvbgptrkzngxceahfc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2bHZiZ3B0cmt6bmd4Y2VhaGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3MjA4OTQsImV4cCI6MjA5MTI5Njg5NH0.Ntum3NZsgRuGon_EJjVAxVNbFk_VrEugFd1PIZmEEo8"
);

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
      const { error } = await supabase.from("contact_requests").insert({
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        message: formData.message,
      });

      if (error) throw error;

      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      toast({
        title: t.toast.successTitle[language],
        description: t.toast.successDesc[language],
      });
    } catch (err) {
      console.error("Contact form submission error:", err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      label: t.info.email[language],
      value: "webdevelopment@thenovastudio.be",
      href: "mailto:webdevelopment@thenovastudio.be",
    },
    {
      icon: MapPin,
      label: t.info.location[language],
      value: t.info.locationValue[language],
    },
    {
      icon: Clock,
      label: t.info.responseTime[language],
      value: t.info.responseTimeValue[language],
    },
  ];

  const steps = [
    {
      icon: MessageSquare,
      text: t.info.step1[language],
    },
    {
      icon: FileText,
      text: t.info.step2[language],
    },
    {
      icon: Handshake,
      text: t.info.step3[language],
    },
  ];

  return (
    <main className="min-h-screen">
      <SEOHead page="contact" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="max-w-3xl border-l-4 border-primary pl-6">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-bold text-secondary">
                {t.title[language]}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
                {t.subtitle[language]}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content — Two Column Layout */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column — Contact Info */}
            <div className="lg:col-span-2 space-y-10">
              {/* Contact Details Cards */}
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold text-secondary mb-6">
                    {t.info.title[language]}
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {t.info.description[language]}
                  </p>

                  <div className="space-y-4">
                    {contactDetails.map((detail, index) => (
                      <div
                        key={index}
                        className="group flex items-start gap-4 p-4 rounded-lg border border-border bg-background hover:border-primary/30 hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <detail.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            {detail.label}
                          </p>
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="text-foreground font-semibold hover:text-primary transition-colors"
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-semibold">
                              {detail.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* What Happens Next */}
              <ScrollReveal delay={150}>
                <div className="p-6 rounded-lg border border-border bg-muted/30">
                  <h3 className="text-lg font-bold text-secondary mb-5">
                    {t.info.whatHappens[language]}
                  </h3>
                  <div className="space-y-5">
                    {steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 relative">
                          <div className="w-9 h-9 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                            <span className="text-sm font-bold text-primary">
                              {index + 1}
                            </span>
                          </div>
                          {index < steps.length - 1 && (
                            <div className="absolute top-9 left-1/2 -translate-x-1/2 w-0.5 h-5 bg-primary/15" />
                          )}
                        </div>
                        <div className="pt-1.5">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column — Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={200}>
                <div className="p-8 md:p-10 rounded-xl border border-border bg-background shadow-sm">
                  {isSubmitted ? (
                    <div className="text-center py-16">
                      <div className="relative inline-flex justify-center items-center">
                        <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/10 animate-ping" />
                        <div className="relative w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                          <CheckCircle2 className="h-10 w-10 text-primary" />
                        </div>
                      </div>
                      <h2 className="mt-8 text-3xl font-bold text-secondary">
                        {t.success.title[language]}
                      </h2>
                      <p className="mt-3 text-lg text-muted-foreground max-w-md mx-auto">
                        {t.success.description[language]}
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="mt-8 border-border hover:border-primary/50 px-6"
                      >
                        {t.success.sendAnother[language]}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email — side by side on desktop */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="contact-name"
                            className={`text-sm font-semibold transition-colors duration-200 ${
                              focusedField === "name"
                                ? "text-primary"
                                : "text-foreground"
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
                            className="h-12 bg-muted/30 border-border focus:bg-background transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="contact-email"
                            className={`text-sm font-semibold transition-colors duration-200 ${
                              focusedField === "email"
                                ? "text-primary"
                                : "text-foreground"
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
                            className="h-12 bg-muted/30 border-border focus:bg-background transition-all"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-company"
                          className={`text-sm font-semibold transition-colors duration-200 ${
                            focusedField === "company"
                              ? "text-primary"
                              : "text-foreground"
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
                          className="h-12 bg-muted/30 border-border focus:bg-background transition-all"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label
                          htmlFor="contact-message"
                          className={`text-sm font-semibold transition-colors duration-200 ${
                            focusedField === "message"
                              ? "text-primary"
                              : "text-foreground"
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
                          className="min-h-[160px] bg-muted/30 border-border focus:bg-background transition-all resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-13 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
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