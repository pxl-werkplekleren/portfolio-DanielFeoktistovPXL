(() => {
  const {
    contactContent,
    cvContent,
    homeContent,
    primaryNav,
    sectionGroups,
    wplSections,
  } = window.PORTFOLIO_DATA

  const app = document.querySelector('#app')
  let currentPath = document.body.dataset.route || '/'
  const currentLocation = window.location.pathname
  const htmlMarker = '/html/'
  const siteBasePath = currentLocation.includes(htmlMarker)
    ? currentLocation.slice(0, currentLocation.indexOf(htmlMarker) + 1)
    : currentLocation.slice(0, currentLocation.lastIndexOf('/') + 1)

  const pageFiles = {
    '/': 'index.html',
    '/cv': 'cv.html',
    '/contact': 'contact.html',
    '/wpl1/introductie': 'wpl1-introductie.html',
    '/wpl1/logboek': 'wpl1-logboek.html',
    '/wpl1/ontwikkeling': 'wpl1-ontwikkeling.html',
    '/wpl1/opdrachten': 'wpl1-opdrachten.html',
    '/wpl1/reflectie': 'wpl1-reflectie.html',
    '/wpl2/case-beschrijving': 'wpl2-case-beschrijving.html',
    '/wpl2/mijn-aandeel': 'wpl2-mijn-aandeel.html',
    '/wpl2/eindreflectie': 'wpl2-eindreflectie.html',
  }

  const routeByFile = Object.fromEntries(
    Object.entries(pageFiles).map(([route, file]) => [file, route]),
  )
  let currentShellKey = ''

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;')
  }

  function resolveAssetPath(path) {
    if (!path) return '#'
    if (/^(https?:|mailto:|tel:|#)/.test(path)) return path

    const normalized = path.startsWith('/') ? path.slice(1) : path
    return `${siteBasePath}${normalized}`
  }

  function getPageHref(path) {
    const file = pageFiles[path] || 'index.html'

    return path === '/'
      ? `${siteBasePath}index.html`
      : `${siteBasePath}html/${file}`
  }

  function getRouteFromHref(href) {
    try {
      const url = new URL(href, window.location.href)
      const parts = url.pathname.split('/').filter(Boolean)
      const lastPart = parts.at(-1) || 'index.html'

      if (!parts.length || lastPart === 'index.html') {
        return '/'
      }

      return routeByFile[lastPart] || null
    } catch {
      return null
    }
  }

  function isPrimaryActive(item) {
    if (item.to === '/') return currentPath === '/'
    if (item.label === 'WPL1') return currentPath.startsWith('/wpl1/')
    if (item.label === 'WPL2') return currentPath.startsWith('/wpl2/')
    return currentPath === item.to
  }

  function getVisiblePrimaryNav() {
    if (currentPath === '/cv' || currentPath === '/contact') {
      return primaryNav.filter((item) => item.label !== 'WPL1' && item.label !== 'WPL2')
    }

    if (currentPath.startsWith('/wpl1/') || currentPath.startsWith('/wpl2/')) {
      return primaryNav.filter((item) => item.label !== 'CV' && item.label !== 'Contact')
    }

    return primaryNav
  }

  function getCurrentGroup() {
    if (currentPath.startsWith('/wpl1/')) return sectionGroups.wpl1
    if (currentPath.startsWith('/wpl2/')) return sectionGroups.wpl2
    return null
  }

  function getSection() {
    return wplSections.find((item) => item.path === currentPath) ?? null
  }

  function getShellKey() {
    if (currentPath === '/') return 'home'
    if (currentPath.startsWith('/wpl1/')) return 'wpl1'
    if (currentPath.startsWith('/wpl2/')) return 'wpl2'
    if (currentPath === '/cv' || currentPath === '/contact') return 'profile'
    return 'default'
  }

  function getSkillWidth(level) {
    return `${Math.max(0, Math.min(level, 5)) * 20}%`
  }

  function renderNavLink(item) {
    const activeClass = isPrimaryActive(item) ? ' router-link-active router-link-exact-active' : ''
    const href = getPageHref(item.to)

    return `
      <a class="nav-link${activeClass}" href="${href}" data-route="${item.to}">
        ${escapeHtml(item.label)}
      </a>
    `
  }

  function renderSubNavLink(item) {
    const activeClass = item.path === currentPath ? ' router-link-active router-link-exact-active' : ''
    const href = getPageHref(item.path)

    return `
      <a class="nav-link${activeClass}" href="${href}" data-route="${item.path}">
        ${escapeHtml(item.navLabel)}
      </a>
    `
  }

  function renderActionButton(button) {
    if (button.external) {
      return `
        <a
          class="arcade-button"
          href="${escapeHtml(button.href)}"
          target="_blank"
          rel="noreferrer noopener"
        >
          ${escapeHtml(button.label)}
        </a>
      `
    }

    return `
      <a class="arcade-button" href="${getPageHref(button.to)}" data-route="${button.to}">
        ${escapeHtml(button.label)}
      </a>
    `
  }

  function renderTopbar() {
    if (currentPath === '/') return ''

    return `
      <header class="topbar">
        <section class="topbar-main panel">
          <a class="brand" href="${getPageHref('/')}" data-route="/">
            <span class="brand-mark">DF</span>
            <span class="brand-copy">
              <strong>Daniel Feoktistov</strong>
            </span>
          </a>

          <nav class="main-nav" aria-label="Hoofdnavigatie">
            ${getVisiblePrimaryNav().map((item) => renderNavLink(item)).join('')}
          </nav>
        </section>
      </header>
    `
  }

  function renderSubnav() {
    const currentGroup = getCurrentGroup()

    if (!currentGroup) return ''

    return `
      <section class="subnav-panel panel">
        <p class="eyebrow subnav-label">${escapeHtml(currentGroup.label)}</p>
        <nav class="sub-nav" aria-label="Subnavigatie werkplekleren">
          ${currentGroup.links.map((item) => renderSubNavLink(item)).join('')}
        </nav>
      </section>
    `
  }

  function renderHome() {
    return `
      <div class="page-shell home-page">
        <section class="landing-shell panel">
          <article class="landing-copy">
            <div class="hero-copy">
              <p class="eyebrow">PORTFOLIO</p>
              <h1>${escapeHtml(homeContent.title)}</h1>
              <p class="lead">${escapeHtml(homeContent.subtitle)}</p>
              <div class="content-stack">
                ${homeContent.intro.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
              </div>
            </div>

            <div class="landing-actions">
              ${homeContent.heroButtons.map(renderActionButton).join('')}
            </div>
          </article>

          <article class="landing-portrait">
            <div class="portrait-frame landing-photo-frame">
              <img
                src="${resolveAssetPath('assets/daniel-feoktistov.jpg')}"
                alt="Portret van Daniel Feoktistov"
              />
            </div>
          </article>
        </section>
      </div>
    `
  }

  function renderSkillRows(skills) {
    return skills
      .map(
        (skill, index) => `
          <article class="cv-skill-row">
            <div class="cv-skill-head">
              <span>${escapeHtml(skill.name)}</span>
              <span class="cv-skill-label">${escapeHtml(skill.label)}</span>
            </div>
            <div class="cv-skill-meter" aria-label="${escapeHtml(`${skill.name}: ${skill.label}`)}">
              <span
                class="cv-skill-fill"
                style="--skill-width: ${getSkillWidth(skill.level)}; animation-delay: ${index * 90}ms;"
              ></span>
            </div>
          </article>
        `,
      )
      .join('')
  }

  function renderSkillCards(skills) {
    return skills
      .map(
        (skill, index) => `
          <article class="cv-soft-card">
            <div class="cv-skill-head">
              <span>${escapeHtml(skill.name)}</span>
              <span class="cv-skill-label">${escapeHtml(skill.label)}</span>
            </div>
            <div class="cv-skill-meter" aria-label="${escapeHtml(`${skill.name}: ${skill.label}`)}">
              <span
                class="cv-skill-fill"
                style="--skill-width: ${getSkillWidth(skill.level)}; animation-delay: ${index * 90}ms;"
              ></span>
            </div>
          </article>
        `,
      )
      .join('')
  }

  function renderCv() {
    return `
      <div class="page-shell">
        <section class="cv-sheet panel">
          <header class="cv-header">
            <div class="cv-header-copy">
              <p class="eyebrow">Curriculum Vitae</p>
              <p class="cv-name">${escapeHtml(cvContent.name)}</p>
              <p class="cv-role">${escapeHtml(cvContent.role)}</p>
            </div>

            <div class="button-row cv-header-actions">
              <a
                class="arcade-button"
                href="${resolveAssetPath(cvContent.cvPdfHref)}"
                target="_blank"
                rel="noreferrer noopener"
              >
                Open originele CV PDF
              </a>
              <a class="arcade-button ghost" href="${getPageHref('/contact')}" data-route="/contact">Ga naar contact</a>
            </div>
          </header>

          <div class="cv-top-grid">
            <div class="cv-column">
              <section class="cv-sidebar-section">
                <h2 class="cv-section-title">Contact</h2>
                <ul class="cv-contact-list">
                  <li>${escapeHtml(cvContent.phone)}</li>
                  <li>${escapeHtml(cvContent.email)}</li>
                  <li>${escapeHtml(cvContent.address)}</li>
                  <li>Rijbewijs B</li>
                </ul>
              </section>

              <section class="cv-sidebar-section">
                <h2 class="cv-section-title">Opleidingen</h2>
                <div class="cv-side-stack">
                  ${cvContent.education
                    .map(
                      (item) => `
                        <article class="cv-side-item">
                          <p class="timeline-meta">${escapeHtml(item.period)}</p>
                          <h3>${escapeHtml(item.title)}</h3>
                          <p>${escapeHtml(item.school)}</p>
                        </article>
                      `,
                    )
                    .join('')}
                </div>
              </section>

              <section class="cv-sidebar-section">
                <h2 class="cv-section-title">Talenkennis</h2>
                <div class="cv-skill-list">
                  ${renderSkillRows(cvContent.languages)}
                </div>
              </section>
            </div>

            <div class="cv-column">
              <section class="cv-main-section">
                <h2 class="cv-section-title">Studentenjobs</h2>
                <div class="cv-job-list">
                  ${cvContent.jobs
                    .map(
                      (job) => `
                        <article class="cv-job-card">
                          <div class="cv-job-heading">
                            <div>
                              <h3>${escapeHtml(job.title)}</h3>
                              <p>${escapeHtml(job.company)} | ${escapeHtml(job.location)}</p>
                            </div>
                            <p class="timeline-meta">${escapeHtml(job.period)}</p>
                          </div>
                          <ul class="rich-list">
                            ${job.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
                          </ul>
                        </article>
                      `,
                    )
                    .join('')}
                </div>
              </section>

              <section class="cv-main-section">
                <h2 class="cv-section-title">Soft Skills</h2>
                <div class="cv-soft-grid">
                  ${renderSkillCards(cvContent.softSkills)}
                </div>
              </section>
            </div>
          </div>

          <section class="cv-main-section cv-studentjobs">
            <h2 class="cv-section-title">Hard Skills</h2>
            <div class="cv-hard-grid">
              ${renderSkillCards(cvContent.hardSkills)}
            </div>
          </section>
        </section>
      </div>
    `
  }

  function renderContact() {
    return `
      <div class="page-shell contact-page">
        <section class="page-hero panel">
          <p class="eyebrow">Contact</p>
          <h1>Stuur mij een bericht</h1>
          <p class="lead">${escapeHtml(contactContent.note)}</p>
        </section>

        <section class="panel">
          <p class="eyebrow">Mail launcher</p>
          <form class="mail-form" id="contact-form">
            <label>
              Jouw naam
              <input id="contact-name" type="text" placeholder="Naam" />
            </label>
            <label>
              Onderwerp
              <input id="contact-subject" type="text" placeholder="Onderwerp" value="Contact via portfolio" />
            </label>
            <label>
              Bericht
              <textarea id="contact-message" rows="6" placeholder="Schrijf hier jouw bericht..."></textarea>
            </label>
            <a class="arcade-button" id="contact-mailto" href="mailto:${escapeHtml(contactContent.email)}">
              Open mailapp en verstuur
            </a>
          </form>
        </section>
      </div>
    `
  }

  function renderSection(section) {
    if (!section) {
      return `
        <div class="page-shell">
          <section class="panel rich-content">
            <div class="section-content-header">
              <h1 class="section-content-title">Pagina niet gevonden</h1>
              <p class="section-content-lead">Deze sectie bestaat niet of is verplaatst.</p>
            </div>
            <a class="arcade-button" href="${getPageHref('/')}" data-route="/">Terug naar home</a>
          </section>
        </div>
      `
    }

    const hasHtmlContent = Boolean(section.html?.trim())
    const showSectionHeader = section.showSectionHeader !== false

    return `
      <div class="page-shell">
        ${
          showSectionHeader && !hasHtmlContent
            ? `
              <section class="panel rich-content">
                <div class="section-content-header${section.cta ? ' section-content-header--with-cta' : ''}">
                  <div class="section-content-copy">
                    <h1 class="section-content-title">${escapeHtml(section.title)}</h1>
                    ${section.lead ? `<p class="section-content-lead">${escapeHtml(section.lead)}</p>` : ''}
                  </div>
                  ${
                    section.cta
                      ? `
                        <a
                          class="arcade-button"
                          href="${resolveAssetPath(section.cta.href)}"
                          ${section.cta.external ? 'target="_blank" rel="noreferrer noopener"' : ''}
                        >
                          ${escapeHtml(section.cta.label)}
                        </a>
                      `
                      : ''
                  }
                </div>
              </section>
            `
            : ''
        }

        ${
          hasHtmlContent
            ? `
              <section class="panel rich-content">
                ${
                  showSectionHeader
                    ? `
                      <div class="section-content-header">
                        <h1 class="section-content-title">${escapeHtml(section.title)}</h1>
                        ${section.lead ? `<p class="section-content-lead">${escapeHtml(section.lead)}</p>` : ''}
                      </div>
                    `
                    : ''
                }
                <div>${section.html}</div>
              </section>
            `
            : ''
        }
      </div>
    `
  }

  function updateContactMailto() {
    const nameInput = document.querySelector('#contact-name')
    const subjectInput = document.querySelector('#contact-subject')
    const messageInput = document.querySelector('#contact-message')
    const mailLink = document.querySelector('#contact-mailto')

    if (!nameInput || !subjectInput || !messageInput || !mailLink) return

    const lines = [
      'Hallo Daniel,',
      '',
      messageInput.value || 'Ik neem contact met je op via je portfolio.',
      '',
    ]

    if (nameInput.value) {
      lines.push('Groeten,', nameInput.value)
    }

    const subject = subjectInput.value || 'Contact via portfolio'
    mailLink.href = `mailto:${contactContent.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
  }

  function bindPageInteractions() {
    const contactForm = document.querySelector('#contact-form')

    if (!contactForm || typeof contactForm.addEventListener !== 'function') return

    contactForm.addEventListener('submit', (event) => event.preventDefault())

    ;['#contact-name', '#contact-subject', '#contact-message'].forEach((selector) => {
      const field = document.querySelector(selector)
      if (field && typeof field.addEventListener === 'function') {
        field.addEventListener('input', updateContactMailto)
      }
    })

    updateContactMailto()
  }

  function renderPage() {
    if (currentPath === '/') return renderHome()
    if (currentPath === '/cv') return renderCv()
    if (currentPath === '/contact') return renderContact()
    return renderSection(getSection())
  }

  function renderShell() {
    return `
      <div class="app-shell">
        <div id="topbar-slot">${renderTopbar()}</div>
        <div id="subnav-slot">${renderSubnav()}</div>
        <main id="page-slot"></main>
      </div>
    `
  }

  function updateDocumentTitle() {
    if (currentPath === '/') {
      document.title = 'Portfolio | Daniel Feoktistov'
      return
    }

    if (currentPath === '/cv') {
      document.title = 'CV | Daniel Feoktistov'
      return
    }

    if (currentPath === '/contact') {
      document.title = 'Contact | Daniel Feoktistov'
      return
    }

    const section = getSection()
    document.title = section ? `${section.title} | Daniel Feoktistov` : 'Portfolio | Daniel Feoktistov'
  }

  function renderApp() {
    const nextShellKey = getShellKey()

    if (nextShellKey !== currentShellKey || !document.querySelector('#page-slot')) {
      app.innerHTML = renderShell()
      currentShellKey = nextShellKey
    } else {
      const topbarSlot = document.querySelector('#topbar-slot')
      const subnavSlot = document.querySelector('#subnav-slot')

      if (topbarSlot) topbarSlot.innerHTML = renderTopbar()
      if (subnavSlot) subnavSlot.innerHTML = renderSubnav()
    }

    const pageSlot = document.querySelector('#page-slot')
    if (pageSlot) {
      pageSlot.innerHTML = renderPage()
    }

    updateDocumentTitle()
    bindPageInteractions()
  }

  function navigateTo(route, href, replace = false) {
    currentPath = route
    document.body.dataset.route = route

    if (replace) {
      window.history.replaceState({ route }, '', href)
    } else {
      window.history.pushState({ route }, '', href)
    }

    renderApp()
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-route]')

    if (!link) return
    if (link.target === '_blank' || link.hasAttribute('download')) return

    const href = link.getAttribute('href')
    const route = link.dataset.route || getRouteFromHref(href)

    if (!href || !route) return

    event.preventDefault()
    navigateTo(route, href)
  })

  window.addEventListener('popstate', () => {
    const route = getRouteFromHref(window.location.href) || '/'
    currentPath = route
    document.body.dataset.route = route
    renderApp()
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  })

  renderApp()
})()
