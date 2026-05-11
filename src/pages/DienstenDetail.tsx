import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import { ArrowRight, ArrowLeft } from "lucide-react";

// This is a dynamic component to handle all the sub-services
export default function DienstenDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  
  // Format the ID to a readable title
  const title = id ? id.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : "Dienst";

  return (
    <main className="min-h-screen flex flex-col">
      <SEOHead page="services" />
      <Navbar />

      <section className="pt-40 pb-20 flex-1">
        <div className="container">
          <div className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {language === "nl" ? "Terug naar overzicht" : language === "fr" ? "Retour à l'aperçu" : "Back to overview"}
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-secondary">
              {title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              {language === "nl" 
                ? "Deze pagina wordt momenteel opgebouwd. Binnenkort vind je hier alle uitgebreide informatie over deze specifieke dienst, inclusief werkwijze, prijzen en veelgestelde vragen."
                : language === "fr"
                ? "Cette page est actuellement en construction. Bientôt, vous trouverez ici toutes les informations détaillées sur ce service spécifique, y compris la méthode de travail, les prix et les questions fréquentes."
                : "This page is currently being built. Soon you will find all detailed information about this specific service here, including workflow, pricing and FAQs."}
            </p>

            <div className="p-8 bg-muted/30 border border-border/50 rounded-2xl">
              <h3 className="text-xl font-bold text-secondary mb-4">
                {language === "nl" ? "Direct aan de slag?" : language === "fr" ? "Commencer tout de suite ?" : "Get started right away?"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === "nl" 
                  ? "Hoewel deze pagina nog in opbouw is, leveren we deze dienst al wel. Neem contact met ons op voor meer informatie."
                  : language === "fr"
                  ? "Bien que cette page soit encore en construction, nous fournissons déjà ce service. Contactez-nous pour plus d'informations."
                  : "Although this page is still under construction, we are already providing this service. Contact us for more information."}
              </p>
              <FlowHoverButton asChild size="lg" variant="default" icon={<ArrowRight className="h-4 w-4" />}>
                <Link to="/contact">
                  {language === "nl" ? "Neem contact op" : language === "fr" ? "Contactez-nous" : "Contact us"}
                </Link>
              </FlowHoverButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
