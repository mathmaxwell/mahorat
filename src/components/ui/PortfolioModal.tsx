import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioItems } from '../../constants';
// @ts-ignore
import docxFile from '../../files/file.docx?url';
import './PortfolioModal.css';

export function PortfolioModal({ itemKey, onClose }: { itemKey: string; onClose: () => void }) {
  const { t } = useLanguage();
  const item = portfolioItems.find((p) => p.key === itemKey);

  useEffect(() => {
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = ''; // or 'unset'
    };
  }, []);

  if (!item) return null;

  // We are using dangerouslySetInnerHTML here assuming translation strings are safe 
  // and it will allow us to format the long description with HTML (bullets, bold text etc)
  const longDescKey = `portfolio-${item.key}-long-desc`;
  const longDesc = t(longDescKey);
  
  // If the key is returned (meaning translation missing), we just show a placeholder or nothing
  const contentHtml = longDesc === longDescKey ? `<p>Tafsilotlar tez orada qoshiladi...</p>` : longDesc;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-wrapper">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>&times;</button>
          <div className="modal-header">
            <h3>{t(`portfolio-${item.key}`)}</h3>
            <p className="modal-short-desc">{t(`portfolio-${item.key}-desc`)}</p>
          </div>
          <div className="modal-body">
            <div className="modal-text" dangerouslySetInnerHTML={{ __html: contentHtml }} />
            <div className="modal-oferta-section">
              <p className="modal-oferta-text">
                {t('portfolio-modal-oferta')}
              </p>
              <a href={docxFile} download="file.docx" className="modal-download-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                {t('portfolio-btn-download')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
