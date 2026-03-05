import { useLanguage } from '../../context/LanguageContext';
import { RevealSection } from '../ui/RevealSection';

export function AboutSection() {
  const { t, lang } = useLanguage();

  return (
    <section className="section" id="about">
      <RevealSection>
        <div className="section-header">
          <span className="section-tag">✦ {t('nav-about')}</span>
          <h2 className="section-title"><span className="gradient-text">{t('about-title')}</span></h2>
          <p className="section-sub">{t('about-subtitle')}</p>
        </div>
        <div className="about-grid">
          <div className="about-content">
            <p className="about-desc">{t('about-desc')}</p>
            <div className="features-list">
              {[
                { icon: 'fa-rocket', key: 'feature1' },
                { icon: 'fa-bolt', key: 'feature2' },
                { icon: 'fa-users', key: 'feature3' },
              ].map(f => (
                <div key={f.key} className="feature-item">
                  <div className="feature-icon"><i className={`fas ${f.icon}`} /></div>
                  <div>
                    <h4>{t(`about-${f.key}`)}</h4>
                    <p>{t(`about-${f.key}-desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-img-wrap">
            <div className="about-img-glow" />
            <img
              src="https://images.pexels.com/photos/7511751/pexels-photo-7511751.jpeg"
              alt="MahoratSoft Team"
              className="about-img"
            />
            <div className="about-img-badge">
              <i className="fas fa-check-circle" />
              <span>5+ {lang === 'uz' ? 'yil tajriba' : lang === 'ru' ? 'лет опыта' : 'years exp'}</span>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
