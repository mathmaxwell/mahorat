import { useLanguage } from '../../context/LanguageContext';
import { stats } from '../../constants';
import { RevealSection } from '../ui/RevealSection';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export function WhyMahoratSection() {
  const { t } = useLanguage();

  return (
    <section className="section" id="why-mahorat">
      <RevealSection>
        <div className="section-header">
          <span className="section-tag">✦ {t('nav-why')}</span>
          <h2 className="section-title"><span className="gradient-text">{t('why-title')}</span></h2>
          <p className="section-sub">{t('why-subtitle')}</p>
        </div>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon-wrap">
                <i className={`fas ${['fa-project-diagram', 'fa-smile', 'fa-code', 'fa-calendar-alt'][i]}`} />
              </div>
              <div className="stat-num">
                <AnimatedCounter target={s.num} />{s.suffix}
              </div>
              <div className="stat-label">{t(s.label)}</div>
              <div className="stat-progress"><div className="stat-bar" style={{ width: `${(s.num / 200) * 100}%` }} /></div>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
