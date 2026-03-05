import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioItems } from '../../constants';
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
          </div>
          {item.docUrl && (
            <div className="modal-footer">
              <a href={item.docUrl} download className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', zIndex: 10 }}>
                <i className="fas fa-file-download" />
                <span>{t('portfolio-btn-download')}</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
