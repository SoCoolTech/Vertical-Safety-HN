/* Interacciones del sitio. Todos los identificadores usan el prefijo verticalSafety. */
(() => {
  const verticalSafetyMenuToggle = document.querySelector('[data-vshn-menu-toggle]');
  const verticalSafetyMobileNavigation = document.querySelector('[data-vshn-navigation]');
  if (verticalSafetyMenuToggle && verticalSafetyMobileNavigation) {
    verticalSafetyMenuToggle.addEventListener('click', () => {
      const verticalSafetyMenuIsOpen = verticalSafetyMobileNavigation.classList.toggle('is-open');
      verticalSafetyMenuToggle.setAttribute('aria-expanded', String(verticalSafetyMenuIsOpen));
      verticalSafetyMenuToggle.setAttribute('aria-label', verticalSafetyMenuIsOpen ? 'Cerrar menú' : 'Abrir menú');
    });
    verticalSafetyMobileNavigation.addEventListener('click', (verticalSafetyNavigationEvent) => {
      if (verticalSafetyNavigationEvent.target.closest('a')) {
        verticalSafetyMobileNavigation.classList.remove('is-open');
        verticalSafetyMenuToggle.setAttribute('aria-expanded', 'false');
        verticalSafetyMenuToggle.setAttribute('aria-label', 'Abrir menú');
      }
    });
  }

  const verticalSafetyMotionTargets = document.querySelectorAll('.vshn-card, .vshn-training-card, .vshn-training-detail, .vshn-service-detail, .vshn-value-card, .vshn-brand-section, .vshn-brand-teaser, .vshn-stat-card, .vshn-wide-promo, .vshn-photo-carousel');
  verticalSafetyMotionTargets.forEach((verticalSafetyMotionTarget) => verticalSafetyMotionTarget.classList.add('vshn-reveal'));
  if ('IntersectionObserver' in window) {
    const verticalSafetyRevealObserver = new IntersectionObserver((verticalSafetyEntries, verticalSafetyObserver) => {
      verticalSafetyEntries.forEach((verticalSafetyEntry) => {
        if (verticalSafetyEntry.isIntersecting) {
          verticalSafetyEntry.target.classList.add('is-visible');
          verticalSafetyObserver.unobserve(verticalSafetyEntry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -35px 0px' });
    verticalSafetyMotionTargets.forEach((verticalSafetyMotionTarget) => verticalSafetyRevealObserver.observe(verticalSafetyMotionTarget));
  } else {
    verticalSafetyMotionTargets.forEach((verticalSafetyMotionTarget) => verticalSafetyMotionTarget.classList.add('is-visible'));
  }

  const verticalSafetyCarousel = document.querySelector('[data-vshn-carousel]');
  if (verticalSafetyCarousel) {
    const verticalSafetyCarouselTrack = verticalSafetyCarousel.querySelector('[data-vshn-carousel-track]');
    const verticalSafetyCarouselSlides = Array.from(verticalSafetyCarousel.querySelectorAll('.vshn-photo-slide'));
    const verticalSafetyCarouselStatus = verticalSafetyCarousel.querySelector('[data-vshn-carousel-status]');
    const verticalSafetyPreviousButton = verticalSafetyCarousel.querySelector('[data-vshn-carousel-prev]');
    const verticalSafetyNextButton = verticalSafetyCarousel.querySelector('[data-vshn-carousel-next]');
    let verticalSafetyCarouselIndex = 0;
    const verticalSafetyUpdateCarousel = () => {
      const verticalSafetyVisibleSlide = verticalSafetyCarouselSlides[verticalSafetyCarouselIndex];
      if (verticalSafetyVisibleSlide && verticalSafetyCarouselTrack) {
        verticalSafetyCarouselTrack.style.transform = `translateX(-${verticalSafetyCarouselIndex * 100}%)`;
        if (verticalSafetyCarouselStatus) verticalSafetyCarouselStatus.textContent = `${String(verticalSafetyCarouselIndex + 1).padStart(2,'0')} / ${String(verticalSafetyCarouselSlides.length).padStart(2,'0')}`;
      }
    };
    verticalSafetyPreviousButton?.addEventListener('click', () => {
      verticalSafetyCarouselIndex = (verticalSafetyCarouselIndex - 1 + verticalSafetyCarouselSlides.length) % verticalSafetyCarouselSlides.length;
      verticalSafetyUpdateCarousel();
    });
    verticalSafetyNextButton?.addEventListener('click', () => {
      verticalSafetyCarouselIndex = (verticalSafetyCarouselIndex + 1) % verticalSafetyCarouselSlides.length;
      verticalSafetyUpdateCarousel();
    });
    verticalSafetyUpdateCarousel();
  }

  const verticalSafetyInquiryForm = document.querySelector('[data-vshn-contact-form]');
  if (verticalSafetyInquiryForm) {
    verticalSafetyInquiryForm.addEventListener('submit', (verticalSafetySubmitEvent) => {
      verticalSafetySubmitEvent.preventDefault();
      if (!verticalSafetyInquiryForm.reportValidity()) return;
      const verticalSafetyFormFields = new FormData(verticalSafetyInquiryForm);
      const verticalSafetyInquiryText = [
        'Hola, deseo recibir información de Vertical Safety Honduras.',
        `Nombre: ${verticalSafetyFormFields.get('vshn-name')}`,
        `Empresa: ${verticalSafetyFormFields.get('vshn-company') || 'No indicada'}`,
        `Correo: ${verticalSafetyFormFields.get('vshn-email')}`,
        `Teléfono: ${verticalSafetyFormFields.get('vshn-phone') || 'No indicado'}`,
        `Servicio: ${verticalSafetyFormFields.get('vshn-interest')}`,
        `Mensaje: ${verticalSafetyFormFields.get('vshn-message') || 'Sin mensaje adicional'}`
      ].join('\n');
      const verticalSafetyWhatsAppUrl = `https://wa.me/50496939045?text=${encodeURIComponent(verticalSafetyInquiryText)}`;
      const verticalSafetyFormStatus = verticalSafetyInquiryForm.querySelector('[data-vshn-form-status]');
      if (verticalSafetyFormStatus) verticalSafetyFormStatus.textContent = 'Se abrirá WhatsApp con tu solicitud preparada. Revisa el mensaje y presiona enviar.';
      window.open(verticalSafetyWhatsAppUrl, '_blank', 'noopener,noreferrer');
    });
  }
})();
