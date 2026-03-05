import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { sendToTelegram } from '../../utils/telegram';
import { RevealSection } from '../ui/RevealSection';

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const ok = await sendToTelegram(formData.name, formData.phone, formData.subject, formData.message);
    setSubmitting(false);
    setSubmitMsg(ok ? t('form-success') : t('form-error'));
    if (ok) setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitMsg(''), 5000);
  };

  return (
    <section className="section section-dark" id="contact">
      <RevealSection>
        <div className="section-header">
          <span className="section-tag">✦ {t('nav-contact')}</span>
          <h2 className="section-title"><span className="gradient-text">{t('contact-title')}</span></h2>
          <p className="section-sub">{t('contact-subtitle')}</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            {[
              { icon: 'fa-map-marker-alt', label: t('contact-address'), val: t('contact-address-text'), href: null },
              { icon: 'fa-phone', label: t('contact-phone'), val: '+998 94 785 00 28', href: 'tel:+998947850028' },
              { icon: 'fa-envelope', label: t('contact-email'), val: 'info@mahoratsoft.uz', href: 'mailto:info@mahoratsoft.uz' },
              { icon: 'fa-clock', label: t('contact-hours'), val: t('contact-hours-text'), href: null },
            ].map((item, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon-wrap"><i className={`fas ${item.icon}`} /></div>
                <div>
                  <h4>{item.label}</h4>
                  {item.href ? <a href={item.href}>{item.val}</a> : <p>{item.val}</p>}
                </div>
              </div>
            ))}
            <div className="social-row">
              <h4>{t('contact-social')}</h4>
              <div className="social-links">
                {[
                  { icon: 'fa-facebook-f', href: '#' },
                  { icon: 'fa-twitter', href: '#' },
                  { icon: 'fa-linkedin-in', href: '#' },
                  { icon: 'fa-instagram', href: 'https://www.instagram.com/mahorat_soft/' },
                  { icon: 'fa-telegram', href: 'https://t.me/MahoratSoft' },
                ].map((s, i) => (
                  <a key={i} href={s.href} className="social-btn" target="_blank" rel="noreferrer">
                    <i className={`fab ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>{t('form-name')}</label>
                <input
                  type="text" required
                  placeholder={t('form-name-placeholder')}
                  value={formData.name}
                  onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label>{t('form-email')}</label>
                <input
                  type="email" required
                  placeholder={t('form-email-placeholder')}
                  value={formData.email}
                  onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>{t('form-phone')}</label>
                <input
                  type="tel"
                  placeholder={t('form-phone-placeholder')}
                  value={formData.phone}
                  onChange={e => setFormData(d => ({ ...d, phone: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label>{t('form-subject')}</label>
                <input
                  type="text" required
                  placeholder={t('form-subject-placeholder')}
                  value={formData.subject}
                  onChange={e => setFormData(d => ({ ...d, subject: e.target.value }))}
                />
              </div>
            </div>
            <div className="form-group">
              <label>{t('form-message')}</label>
              <textarea
                required
                placeholder={t('form-message-placeholder')}
                value={formData.message}
                onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
              />
            </div>
            {submitMsg && <div className={`form-msg ${submitMsg.includes('!') ? 'success' : 'error'}`}>{submitMsg}</div>}
            <button type="submit" className="btn btn-primary btn-full" disabled={submitting}>
              {submitting ? <span className="spinner" /> : <><span>{t('form-submit')}</span><i className="fas fa-paper-plane" /></>}
            </button>
          </form>
        </div>
      </RevealSection>
    </section>
  );
}
