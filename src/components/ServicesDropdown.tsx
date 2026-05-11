import { Link } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { 
  Monitor, Tag, PenTool, ShoppingCart, BarChart, ShieldAlert,
  Search, Zap, Server, Users, Mail, MessageCircle, ArrowRight
} from "lucide-react";

export function ServicesDropdown({ children, isActive }: { children: React.ReactNode, isActive: boolean }) {
  const { language } = useLanguage();
  
  // Hardcoded for now based on the requested design
  // We can add EN/FR translations later if needed, but for now we'll match the screenshot exactly (NL)
  const isNl = language === "nl";

  return (
    <div className="group relative">
      {/* The Trigger (nav link) */}
      <div className={`cursor-pointer text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-lg flex items-center gap-1 ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}>
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60 group-hover:rotate-180 transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      {/* The Dropdown Menu (Mega Menu) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
        <div className="w-[850px] bg-[#0a0a0a] border border-border/40 rounded-2xl shadow-2xl p-6 flex gap-8">
          
          {/* Column 1: Websites */}
          <div className="flex-1">
            <h4 className="text-[11px] font-bold text-primary uppercase tracking-wider mb-4 pl-3">
              {isNl ? "Websites" : "Websites"}
            </h4>
            <div className="flex flex-col gap-1">
              <Link to="/services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <Monitor className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                    {isNl ? "Website laten maken" : "Have a website built"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {isNl ? "Bekijk alle formules" : "View all formulas"}
                  </div>
                </div>
              </Link>
              
              <Link to="/services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <Tag className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                    {isNl ? "Betaalbare website" : "Affordable website"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {isNl ? "Vanaf €299/jaar" : "From €299/year"}
                  </div>
                </div>
              </Link>
              
              <Link to="/services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <PenTool className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                    {isNl ? "Website compleet" : "Complete website"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {isNl ? "Website, branding en juridisch" : "Website, branding and legal"}
                  </div>
                </div>
              </Link>
              
              <Link to="/services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <ShoppingCart className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                    {isNl ? "Webshop laten maken" : "Have a webshop built"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {isNl ? "Direct online verkopen" : "Start selling online directly"}
                  </div>
                </div>
              </Link>
              
              <Link to="/services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <BarChart className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                    {isNl ? "Website analyse" : "Website analysis"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {isNl ? "Inzicht in bezoekersgedrag" : "Insights into visitor behavior"}
                  </div>
                </div>
              </Link>
              
              <Link to="/services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <ShieldAlert className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                    {isNl ? "Website herstel" : "Website recovery"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {isNl ? "Gehackt? Ik los het op" : "Hacked? I solve it"}
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2: Diensten */}
          <div className="flex-1">
            <h4 className="text-[11px] font-bold text-primary uppercase tracking-wider mb-4 pl-3">
              {isNl ? "Diensten" : "Services"}
            </h4>
            <div className="flex flex-col gap-1">
              <Link to="/services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <Search className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                    {isNl ? "SEO diensten" : "SEO services"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {isNl ? "Hoger scoren in Google" : "Rank higher in Google"}
                  </div>
                </div>
              </Link>
              
              <Link to="/services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <Zap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                    {isNl ? "Google Ads" : "Google Ads"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {isNl ? "Direct zichtbaar in Google" : "Directly visible in Google"}
                  </div>
                </div>
              </Link>
              
              <Link to="/services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <Server className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                    {isNl ? "Webhosting en onderhoud" : "Web hosting and maintenance"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {isNl ? "Hosting, backups en support" : "Hosting, backups and support"}
                  </div>
                </div>
              </Link>
              
              <Link to="/services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <Users className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                    {isNl ? "Bezoekersstatistieken" : "Visitor statistics"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {isNl ? "Statistieken en heatmaps" : "Statistics and heatmaps"}
                  </div>
                </div>
              </Link>
              
              <Link to="/services" className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-white group-hover/item:text-primary transition-colors">
                    {isNl ? "Mail met Microsoft 365" : "Mail with Microsoft 365"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {isNl ? "Professioneel mailadres" : "Professional email address"}
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Column 3: CTA Panel */}
          <div className="w-[280px] bg-[#1a1a1a] rounded-xl p-6 flex flex-col justify-center gap-4 shrink-0 border border-white/5">
            <Link to="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg p-4 transition-colors">
              <div className="font-bold text-base mb-1">
                {isNl ? "Offerte aanvragen" : "Request a quote"}
              </div>
              <div className="text-xs opacity-80">
                {isNl ? "Gratis en vrijblijvend" : "Free and without obligation"}
              </div>
            </Link>
            
            <a href="https://wa.me/32000000000" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg p-4 transition-colors flex items-center gap-3">
              <MessageCircle className="w-5 h-5 shrink-0" />
              <div className="font-bold text-sm">
                {isNl ? "Chat via WhatsApp" : "Chat via WhatsApp"}
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
