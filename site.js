/* Estructura compartida de Vertical Safety HN. Identificadores con prefijo verticalSafety. */
(() => {
  const verticalSafetyCurrentPage = document.body.dataset.vshnPage || 'inicio';
  const verticalSafetyNavigationItems = [
    ['inicio','Inicio','index.html'],['productos','Productos','productos.html'],['nosotros','Nosotros','nosotros.html'],['servicios','Servicios','servicios.html'],
    ['capacitaciones','Capacitaciones','capacitaciones.html'],['marcas','Marcas','marcas.html'],['contacto','Contacto','contacto.html']
  ];
  const verticalSafetyNavigationMarkup = verticalSafetyNavigationItems.map(([verticalSafetyKey,verticalSafetyLabel,verticalSafetyHref]) =>
    `<a href="${verticalSafetyHref}" ${verticalSafetyCurrentPage===verticalSafetyKey?'aria-current="page"':''}>${verticalSafetyLabel}</a>`).join('');
  const verticalSafetyHeaderTarget = document.querySelector('[data-vshn-header]');
  if(verticalSafetyHeaderTarget){
    verticalSafetyHeaderTarget.innerHTML=`<header class="vshn-header"><div class="vshn-container vshn-nav">
      <a class="vshn-brand" href="index.html" aria-label="Vertical Safety, inicio"><img class="vshn-brand__official-logo" src="assets/vertical-safety-logo-horizontal-white.png" alt="Logotipo oficial de Vertical Safety"></a>
      <nav class="vshn-links" data-vshn-navigation aria-label="Navegación principal">${verticalSafetyNavigationMarkup}</nav>
      <div class="vshn-nav__actions"><a class="vshn-cta" href="https://wa.me/50496939045?text=${encodeURIComponent('Hola, deseo solicitar asesoría técnica con Vertical Safety.') }" target="_blank" rel="noopener">☏ Solicitar asesoría</a></div>
      <button class="vshn-menu-toggle" type="button" data-vshn-menu-toggle aria-expanded="false" aria-controls="vshn-primary-navigation" aria-label="Abrir menú">☰</button>
    </div></header>`;
    verticalSafetyHeaderTarget.querySelector('[data-vshn-navigation]').id='vshn-primary-navigation';
  }
  const verticalSafetyFooterTarget=document.querySelector('[data-vshn-footer]');
  if(verticalSafetyFooterTarget){
    verticalSafetyFooterTarget.innerHTML=`<footer class="vshn-footer"><div class="vshn-container"><div class="vshn-footer-grid">
      <div><a class="vshn-brand" href="index.html" aria-label="Vertical Safety, inicio"><img class="vshn-brand__official-logo" src="assets/vertical-safety-logo-horizontal-white.png" alt="Logotipo oficial de Vertical Safety"></a><p>Soluciones profesionales para operaciones seguras en altura, acceso por cuerda y rescate.</p></div>
      <div><h3>Explora</h3>${verticalSafetyNavigationItems.map(([verticalSafetyKey,verticalSafetyLabel,verticalSafetyHref])=>`<a href="${verticalSafetyHref}">${verticalSafetyLabel}</a>`).join('')}</div>
      <div><h3>Soluciones</h3><a href="servicios.html#equipamiento">Equipamiento profesional</a><a href="servicios.html#auditorias">Auditorías de seguridad</a><a href="servicios.html#ingenieria">Ingeniería e instalación</a><a href="capacitaciones.html">Capacitaciones</a></div>
      <div><h3>Contacto · Honduras</h3><a href="https://wa.me/50496939045" target="_blank" rel="noopener">WhatsApp: +504 9693-9045</a><a href="mailto:ventashonduras@verticalsafetyes.com">ventashonduras@verticalsafetyes.com</a><p>Honduras · El Salvador</p></div>
    </div><div class="vshn-footer__bottom"><span>© ${new Date().getFullYear()} Vertical Safety. Todos los derechos reservados.</span><span>Precisión · Seguridad · Conocimiento · Confianza</span></div></div></footer>`;
  }
})();
