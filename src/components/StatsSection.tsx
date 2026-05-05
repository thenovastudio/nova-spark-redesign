import { AnimatedCounter } from './AnimatedCounter'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function StatsSection() {
  const { language } = useLanguage()

  const stats = [
    {
      nl: { end: 50, label: 'Websites opgeleverd' },
      en: { end: 50, label: 'Websites delivered' },
      fr: { end: 50, label: 'Sites livrés' },
    },
    {
      nl: { end: 98, label: 'Klanttevredenheid', suffix: '%' },
      en: { end: 98, label: 'Client satisfaction', suffix: '%' },
      fr: { end: 98, label: 'Satisfaction client', suffix: '%' },
    },
    {
      nl: { end: 4, label: 'Weken gemiddelde oplevering', suffix: '' },
      en: { end: 4, label: 'Weeks avg. delivery', suffix: '' },
      fr: { end: 4, label: 'Semaines livraison moy.', suffix: '' },
    },
    {
      nl: { end: 40, label: 'Meer conversies gemiddeld', suffix: '%' },
      en: { end: 40, label: 'Avg. conversion lift', suffix: '%' },
      fr: { end: 40, label: 'Augmentation moy. conversions', suffix: '%' },
    },
  ]

  const t = language as keyof typeof stats[0]

  return (
    <section className="py-16 md:py-20 border-y border-border">
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
