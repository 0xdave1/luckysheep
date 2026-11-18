const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const dialog = document.querySelector('#info-dialog');

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  siteNav?.classList.toggle('is-open', !isOpen);
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation');
    siteNav.classList.remove('is-open');
  });
});

document.querySelectorAll('[data-unavailable]').forEach((control) => {
  control.addEventListener('click', () => dialog?.showModal());
});

dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.querySelector('.dialog-ok')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
