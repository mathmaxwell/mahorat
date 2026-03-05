import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { Lang } from '../../types';

export function Header() {
  const { lang, changeLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nrXatT9WN0nazxCknXtEfJG63iS6Ly.png"
            alt="Mahorat Soft"
          />
        </a>

        <nav className={`nav ${mobileOpen ? 'open' : ''}`}>
          {['home', 'about', 'portfolio', 'services', 'benefits', 'why-mahorat', 'contact'].map(id => (
            <a key={id} href={`#${id}`} className="nav-link" onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
              {t(`nav-${id === 'why-mahorat' ? 'why' : id}`)}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <div className="lang-switcher">
            {(['uz', 'ru', 'en'] as Lang[]).map(l => (
              <button key={l} className={`lang-btn ${lang === l ? 'active' : ''}`} onClick={() => changeLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="burger" onClick={() => setMobileOpen(o => !o)}>
            <span className={mobileOpen ? 'open' : ''}></span>
            <span className={mobileOpen ? 'open' : ''}></span>
            <span className={mobileOpen ? 'open' : ''}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
