import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioItems } from '../../constants';
import { RevealSection } from '../ui/RevealSection';
import { PortfolioModal } from '../ui/PortfolioModal';

export function PortfolioSection() {
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <section className="section section-dark" id="portfolio">
      <RevealSection>
        <div className="section-header">
          <span className="section-tag">✦ {t('nav-portfolio')}</span>
          <h2 className="section-title"><span className="gradient-text">{t('portfolio-title')}</span></h2>
          <p className="section-sub">{t('portfolio-subtitle')}</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, i) => (
            <div key={item.key} className="portfolio-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="portfolio-img-wrap">
                <img src={item.img} alt={t(`portfolio-${item.key}`)} />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <h3>{t(`portfolio-${item.key}`)}</h3>
                    <p>{t(`portfolio-${item.key}-desc`)}</p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                      {item.hasDetails ? (
                        <button 
                          className="btn btn-primary" 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedItem(item.key);
                          }}
                          style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}
                        >
                          {t('portfolio-btn-details')}
                        </button>
                      ) : (
                        <div className="portfolio-link" style={{ cursor: 'default' }}>
                          <i className="fas fa-external-link-alt" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>
      
      {selectedItem && (
        <PortfolioModal itemKey={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
