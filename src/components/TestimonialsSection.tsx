import { useLanguage } from '@/lib/i18n/LanguageContext'
import { Star } from 'lucide-react'
import { useState } from 'react'

export function TestimonialsSection() {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      nl: {
        text: 'Codevio heeft onze online aanwezigheid volledig getransformeerd. De website trekt nu veel meer klanten aan en onze conversies zijn gestegen met 40%.',
        author: 'Sarah M.',
        company: 'E-commerce Bedrijf',
      },
      en: {
        text: 'Codevio completely transformed our online presence. The website now attracts far more customers and our conversions have increased by 40%.',
        author: 'Sarah M.',
        company: 'E-commerce Business',
      },
      fr: {
        text: 'Codevio a complètement transformé notre présence en ligne. Le site attire maintenant beaucoup plus de clients et nos conversions ont aug​menté de 40%.',
        author: 'Sarah M.',
        company: 'Entreprise E-commerce',
      },
    },
    {
      nl: {
        text: 'Het team was professioneel, communiceerde duidelijk en leverde precies wat ze beloofd hadden. Zeer aangeraden!',
        author: 'Jan K.',
        company: 'SaaS Startup',
      },
      en: {
        text: 'The team was professional, communicated clearly, and delivered exactly what they promised. Highly recommended!',
        author: 'Jan K.',
        company: 'SaaS Startup',
      },
      fr: {
        text: "L'équipe était professionnelle, communiquait clairement et a livré exactement ce qu'elle avait promis. Hautement recommandé!",
        author: 'Jan K.',
        company: 'Startup SaaS',
      },
    },
    {
      nl: {
        text: 'Snelle levering, kwaliteitswerk en geweldig ondersteuning na lancering. Dit is het bedrijf waar je naar op zoekt.',
        author: 'Maria L.',
        company: 'Mode Boutique',
      },
      en: {
        text: 'Fast delivery, quality work, and great support after launch. This is the company you are looking for.',
        author: 'Maria L.',
        company: 'Fashion Boutique',
      },
      fr: {
        text: 'Livraison rapide, travail de qualité et excellent support après le lancement. Ceci est l\'entreprise que vous cherchez.',
        author: 'Maria L.',
        company: 'Boutique de Mode',
      },
    },
    {
      nl: {
        text: 'Het kostte ons niet meer dan verwacht, was voltooid op tijd, en het resultaat overtrof onze verwachtingen.',
        author: 'Peter B.',
        company: 'Adviesbureau',
      },
      en: {
        text: 'It cost us no more than expected, was completed on time, and the result exceeded our expectations.',
        author: 'Peter B.',
        company: 'Consulting Firm',
      },
      fr: {
        text: "Cela ne nous a rien coûté de plus que prévu, a été achevé à temps et le résultat a dépassé nos attentes.",
        author: 'Peter B.',
        company: 'Cabinet de Conseil',
      },
    },
  ]

  const t = testimonials[activeIndex][language as keyof typeof testimonials[0]]

  return (
    <section className="section-padding bg-background/50 border-y border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-4">
            {language === 'nl' ? 'Wat onze klanten zeggen' : language === 'fr' ? 'Ce que disent nos clients' : 'What Our Clients Say'}
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            {language === 'nl'
              ? 'Echt feedback van bedrijven die met ons hebben samengewerkt'
              : language === 'fr'
              ? "Véritables retours d'entreprises qui ont travaillé avec nous"
              : "Real feedback from businesses we've worked with"}
          </p>

          <div className="bg-background border border-border/30 rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-2xl font-semibold text-foreground mb-6 leading-relaxed">
              "{t.text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-secondary">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.company}</p>
              </div>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-primary w-8' : 'bg-border w-3 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
