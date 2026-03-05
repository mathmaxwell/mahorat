import { useLanguage } from '../../context/LanguageContext';
import type { Lang } from '../../types';

export function Footer() {
  const { lang, changeLang, t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nrXatT9WN0nazxCknXtEfJG63iS6Ly.png"
              alt="Mahorat Soft"
              className="footer-logo"
            />
            <p>{t('footer-desc')}</p>
            <div className="social-links">
              {[
                { icon: 'fa-instagram', href: 'https://www.instagram.com/mahorat_soft/' },
                { icon: 'fa-telegram', href: 'https://t.me/MahoratSoft' },
                { icon: 'fa-facebook-f', href: '#' },
                { icon: 'fa-linkedin-in', href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="social-btn" target="_blank" rel="noreferrer">
                  <i className={`fab ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-col">
            <h4>{t('footer-links')}</h4>
            <ul>
              {[
                { id: 'home', label: 'nav-home' },
                { id: 'services', label: 'nav-services' },
                { id: 'portfolio', label: 'nav-portfolio' },
                { id: 'contact', label: 'nav-contact' },
              ].map(l => (
                <li key={l.id}><a href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollTo(l.id) }}>{t(l.label)}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t('footer-services')}</h4>
            <ul>
              {['service-web', 'service-mobile', 'service-backend', 'service-cloud'].map(k => (
                <li key={k}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>{t(k)}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{t('footer-legal')}</h4>
            <ul>
              <li><a href="#">{t('footer-terms')}</a></li>
              <li><a href="#">{t('footer-privacy')}</a></li>
              <li><a href="#">{t('footer-cookies')}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer-copyright')}</p>
          <div className="lang-switcher">
            {(['uz', 'ru', 'en'] as Lang[]).map(l => (
              <button key={l} className={`lang-btn ${lang === l ? 'active' : ''}`} onClick={() => changeLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
