import { useLanguage } from '../../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-content">
        <div className="hero-badge">✦ MAHORAT SOFT INFO</div>
        <h1 className="hero-title">
          <span className="gradient-text">{t('hero-title')}</span>
        </h1>
        <p className="hero-desc">{t('hero-desc')}</p>
        <div className="hero-btns">
          <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
            <span>{t('hero-btn-contact')}</span>
            <i className="fas fa-arrow-right" />
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('services')}>
            {t('hero-btn-services')}
          </button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><span className="hs-num">150+</span><span className="hs-label">{t('stat-1-label')}</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><span className="hs-num">50+</span><span className="hs-label">{t('stat-2-label')}</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><span className="hs-num">10+</span><span className="hs-label">{t('stat-4-label')}</span></div>
        </div>
      </div>
      <div className="hero-image-wrap">
        <div className="hero-image-ring" />
        <div className="hero-image-ring ring2" />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4gnta6067vKGOEVNBjVoThDe5HYBup.png"
          alt="Mahorat Soft IT"
          className="hero-img"
        />
        <div className="hero-badge-float badge-f1"><i className="fas fa-code" /> React</div>
        <div className="hero-badge-float badge-f2"><i className="fas fa-mobile-alt" /> Flutter</div>
        <div className="hero-badge-float badge-f3"><i className="fas fa-cloud" /> AWS</div>
      </div>
    </section>
  );
}
