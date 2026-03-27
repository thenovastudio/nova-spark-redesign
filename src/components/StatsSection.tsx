import { AnimatedCounter } from './AnimatedCounter'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function StatsSection() {
  const { language } = useLanguage()

  const stats = [
    {
      nl: { end: 50, label: 'Websites Gebouwd' },
      en: { end: 50, label: 'Websites Built' },
      fr: { end: 50, label: 'Sites Construits' },
    },
    {
      nl: { end: 98, label: 'Klant Tevredenheid %', suffix: '%' },
      en: { end: 98, label: 'Client Satisfaction %', suffix: '%' },
      fr: { end: 98, label: 'Satisfaction Client %', suffix: '%' },
    },
    {
      nl: { end: 4, label: 'Externe Lancering Weken', suffix: 'w' },
      en: { end: 4, label: 'Average Launch Weeks', suffix: 'w' },
      fr: { end: 4, label: 'Semaines de Lancement Moyennes', suffix: 'w' },
    },
    {
      nl: { end: 40, label: 'Toename Conversies %', suffix: '%' },
      en: { end: 40, label: 'Avg. Conversion Increase %', suffix: '%' },
      fr: { end: 40, label: 'Augmentation Moyenne des Conversions %', suffix: '%' },
    },
  ]

  const t = language as keyof typeof stats[0]

  return (
    <section className="section-padding bg-gradient-to-b from-primary/5 to-background border-b border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              end={stat[t].end}
              suffix={stat[t].suffix || ''}
              label={stat[t].label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
