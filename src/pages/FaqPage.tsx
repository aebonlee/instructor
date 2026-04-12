import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface FaqItem {
  category: string
  q: string
  a: string
}

export default function FaqPage() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const items = t('faq.items') as unknown as FaqItem[]
  const categories = t('faq.categories') as unknown as Record<string, string>
  const categoryOrder = ['application', 'fee', 'material', 'general']

  function toggle(i: number) {
    setOpenIndex(prev => prev === i ? null : i)
  }

  return (
    <>
      <div className="faq-hero">
        <div className="container">
          <h1>{t('faq.title')}</h1>
          <p>{t('faq.subtitle')}</p>
        </div>
      </div>
      <div className="container faq-content">
        {categoryOrder.map(catKey => {
          const catItems = items.filter(item => item.category === catKey)
          if (catItems.length === 0) return null
          return (
            <div key={catKey}>
              <h2 className="faq-category-title">
                {categories[catKey]}
              </h2>
              {catItems.map(item => {
                const globalIndex = items.indexOf(item)
                return (
                  <div key={globalIndex} className={`faq-item${openIndex === globalIndex ? ' open' : ''}`}>
                    <div className="faq-question" onClick={() => toggle(globalIndex)}>
                      <span>{item.q}</span>
                      <i className="fa-solid fa-chevron-down" />
                    </div>
                    <div className="faq-answer">
                      <div className="faq-answer-inner">{item.a}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </>
  )
}
