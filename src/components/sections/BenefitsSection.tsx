import { useLanguage } from '../../context/LanguageContext';
import { benefits } from '../../constants';
import { RevealSection } from '../ui/RevealSection';

export function BenefitsSection() {
  const { t } = useLanguage();

  return (
    <section className="section section-dark" id="benefits">
      <RevealSection>
        <div className="section-header">
          <span className="section-tag">✦ {t('nav-benefits')}</span>
          <h2 className="section-title"><span className="gradient-text">{t('benefits-title')}</span></h2>
          <p className="section-sub">{t('benefits-subtitle')}</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={b.key} className="benefit-card" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="benefit-num">0{i + 1}</div>
              <div className="benefit-icon"><i className={`fas ${b.icon}`} /></div>
              <h3>{t(`benefit-${b.key}`)}</h3>
              <p>{t(`benefit-${b.key}-desc`)}</p>
              <div className="benefit-glow" />
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
