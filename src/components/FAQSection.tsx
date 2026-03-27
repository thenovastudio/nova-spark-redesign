import { useLanguage } from '@/lib/i18n/LanguageContext'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function FAQSection() {
  const { language } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      nl: {
        q: 'Hoeveel kost een website laten bouwen?',
        a: 'De kosten variëren afhankelijk van de complexiteit en vereisten. We werken met vaste prijzen zodat je precies weet wat je betaalt. Contacteer ons voor een offerte.',
      },
      en: {
        q: 'How much does it cost to build a website?',
        a: 'The cost varies depending on complexity and requirements. We work with fixed pricing so you know exactly what you will pay. Contact us for a quote.',
      },
      fr: {
        q: 'Combien coûte la création d\'un site web?',
        a: 'Le coût varie en fonction de la complexité et des exigences. Nous travaillons avec des prix fixes pour que vous sachiez exactement ce que vous paierez. Contactez-nous pour un devis.',
      },
    },
    {
      nl: {
        q: 'Hoe lang duurt het voordat mijn website klaar is?',
        a: 'Meestal zijn we klaar in 2-4 weken, afhankelijk van de scope van het project. We houden je wekelijks op de hoogte van de voortgang.',
      },
      en: {
        q: 'How long does it take to build my website?',
        a: 'Typically, we deliver in 2-4 weeks, depending on project scope. We keep you updated weekly on progress.',
      },
      fr: {
        q: 'Combien de temps faut-il pour construire mon site web?',
        a: 'Généralement, nous livrons en 2-4 semaines, selon la portée du projet. Nous vous tenons informé du progrès chaque semaine.',
      },
    },
    {
      nl: {
        q: 'Wat gebeurt er na lancering?',
        a: 'We bieden voortdurende ondersteuning, updates en optimisatieadviezen. Je bent nooit alleen na de lancering van je website.',
      },
      en: {
        q: 'What happens after launch?',
        a: 'We offer ongoing support, updates, and optimization suggestions. You are never alone after your website launches.',
      },
      fr: {
        q: 'Que se passe-t-il après le lancement?',
        a: 'Nous offrons un support continu, des mises à jour et des suggestions d\'optimisation. Vous n\'êtes jamais seul après le lancement de votre site.',
      },
    },
    {
      nl: {
        q: 'Kan ik mijn website later updaten?',
        a: 'Ja! De custom code betekent dat je website volledig van jou is. We kunnen je trainen of wijzigingen voor je implementeren.',
      },
      en: {
        q: 'Can I update my website later?',
        a: 'Yes! The custom code means your website is completely yours. We can train you or implement changes for you.',
      },
      fr: {
        q: 'Puis-je mettre à jour mon site web plus tard?',
        a: 'Oui! Le code personnalisé signifie que votre site est entièrement vôtre. Nous pouvons vous former ou mettre en œuvre des modifications pour vous.',
      },
    },
    {
      nl: {
        q: 'Hoe zorgen jullie ervoor dat mijn website gevonden wordt?',
        a: 'Elke website die we builden is SEO-klaar met technische optimalisaties, schema markup en best practices ingebouwd.',
      },
      en: {
        q: 'How do you ensure my website gets found?',
        a: 'Every website we build is SEO-ready with technical optimizations, schema markup, and best practices built-in.',
      },
      fr: {
        q: 'Comment vous assurez-vous que mon site web est trouvé?',
        a: 'Chaque site que nous construisons est prêt pour le référencement avec des optimisations techniques, un balisage de schéma et les meilleures pratiques intégrées.',
      },
    },
  ]

  const t = language as keyof typeof faqs[0]

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight mb-4">
            {language === 'nl'
              ? 'Veel Gestelde Vragen'
              : language === 'fr'
              ? 'Questions Fréquemment Posées'
              : 'Frequently Asked Questions'}
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            {language === 'nl'
              ? 'Vind antwoorden op veelgestelde vragen'
              : language === 'fr'
              ? 'Trouvez des réponses aux questions fréquemment posées'
              : 'Find answers to your questions'}
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className="border border-border/30 rounded-lg overflow-hidden hover:border-primary/40 transition-colors">
                  <div className="bg-background/60 p-6 flex items-center justify-between hover:bg-background transition-colors">
                    <h3 className="text-lg font-bold text-secondary pr-4">{faq[t].q}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {openIndex === index && (
                    <div className="bg-primary/5 px-6 py-4 border-t border-border/20">
                      <p className="text-muted-foreground leading-relaxed">{faq[t].a}</p>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
