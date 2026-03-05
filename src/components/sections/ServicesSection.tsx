import { useLanguage } from '../../context/LanguageContext';
import { services } from '../../constants';
import { RevealSection } from '../ui/RevealSection';

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="section" id="services">
      <RevealSection>
        <div className="section-header">
          <span className="section-tag">✦ {t('nav-services')}</span>
          <h2 className="section-title"><span className="gradient-text">{t('services-title')}</span></h2>
          <p className="section-sub">{t('services-subtitle')}</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.key} className="service-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-icon-wrap">
                <i className={`fas ${s.icon}`} />
              </div>
              <h3>{t(`service-${s.key}`)}</h3>
              <p>{t(`service-${s.key}-desc`)}</p>
              <div className="card-glow" />
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
