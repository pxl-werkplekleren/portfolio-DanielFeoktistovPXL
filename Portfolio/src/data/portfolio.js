export const homeContent = {
  title: 'Daniel Feoktistov',
  subtitle: 'Graduaat Programmeren',
  intro: [
    'Mijn naam is Daniel Feoktistov en ik volg de opleiding Graduaat Programmeren aan Hogeschool PXL.',
    'Ik ben geïnteresseerd in backend development, softwarekwaliteit, data engineering en AI.',
    'In dit portfolio toon ik mijn groei als programmeur doorheen Werkplekleren 1 en 2.',
    'Ik werkte onder andere met C#, Java, SQL, Git, HTML/CSS en Vue.js.',
    'Met dit portfolio wil ik laten zien wat ik al kan en hoe ik verder wil groeien als IT`er.',
  ],
  highlights: [
    { label: 'Focus', value: 'Backend, kwaliteit en AI' },
    { label: 'Stack', value: 'C#, Java, SQL, Git, Vue.js' },
    { label: 'Doel', value: 'Blijven groeien richting stage en professionele software' },
  ],
  heroButtons: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/daniel-feoktistov-72a16839a/',
      external: true,
    },
    { label: 'CV Pagina', to: '/cv' },
    { label: 'Werkplekleren', to: '/wpl1/introductie' },
  ],
}

export const cvContent = {
  name: 'Daniel Feoktistov',
  role: 'Student Graduaat Programmeren',
  phone: '+32 488 51 49 50',
  email: 'ddamn1020@gmail.com',
  address: 'Gouden Regenstraat 44',
  cvPdfHref: '/assets/documents/feoktistov_daniel_cv.pdf',
  languages: [
    { name: 'Nederlands', level: 3.5, label: 'Sterk' },
    { name: 'Engels', level: 4.5, label: 'Uitstekend' },
    { name: 'Russisch', level: 4.5, label: 'Moedertaal' },
    { name: 'Frans', level: 2.5, label: 'Matig' },
    { name: 'Japans', level: 2, label: 'Starter' },
    { name: 'Koreaans', level: 2, label: 'Starter' },
  ],
  hardSkills: [
    { name: '.NET', level: 4.4, label: 'Sterk' },
    { name: 'JavaScript', level: 4.5, label: 'Sterk' },
    { name: 'HTML/CSS', level: 4.5, label: 'Sterk' },
    { name: 'Git/GitHub', level: 4.5, label: 'Sterk' },
    { name: 'Linux', level: 4.5, label: 'Sterk' },
    { name: 'Windows', level: 4.5, label: 'Sterk' },
    { name: 'Java', level: 4.5, label: 'Sterk' },
    { name: 'Python', level: 4.5, label: 'Sterk' },
    { name: 'Power BI', level: 4.5, label: 'Sterk' },
    { name: 'SQL', level: 4.5, label: 'Sterk' },
    { name: 'MongoDB', level: 4.5, label: 'Sterk' },
    { name: 'Security', level: 4.5, label: 'Sterk' },
  ],
  softSkills: [
    { name: 'Teamwork (scrum / stand-ups)', level: 4, label: 'Sterk' },
    { name: 'Duidelijke communicatie', level: 4, label: 'Sterk' },
    { name: 'Probleemoplossend denken', level: 4, label: 'Sterk' },
    { name: 'Leergierig', level: 5, label: 'Uitstekend' },
    { name: 'Verantwoordelijk', level: 4, label: 'Sterk' },
    { name: 'Plannen en deadlines halen', level: 4, label: 'Sterk' },
  ],
  education: [
    {
      period: '2025 - heden',
      title: 'Graduaat Programmeren',
      school: 'Hogeschool PXL',
    },
    {
      period: '2022 - 2025',
      title: 'Professionele Bachelor Toegepaste Informatica AI',
      school: 'Hogeschool PXL',
    },
    {
      period: '2020 - 2022',
      title: 'TSO Elektromechanica',
      school: 'Campus de Helix',
    },
  ],
  jobs: [
    {
      title: 'Pizzabakker',
      period: '2018 - heden',
      company: 'Guiliano keuken',
      location: 'Maasmechelen',
      bullets: [
        'Mise-en-place van deeg, sauzen en toppings volgens hygiëne- en kwaliteitsnormen.',
        'Pizza`s samenstellen, bakken en afwerken met focus op snelheid, consistentie en presentatie.',
        'Voorraad opvolgen, ingrediënten aanvullen en de werkruimte georganiseerd houden.',
        'Stressbestendig samenwerken tijdens shifts en piekuren met vlotte communicatie binnen het team.',
      ],
    },
    {
      title: 'Kok',
      period: '2024 - heden',
      company: 'Guiliano keuken',
      location: 'Maasmechelen',
      bullets: [
        'Mise-en-place van noodles, pasta, sauzen en ingrediënten volgens HACCP-richtlijnen.',
        'Gerechten bereiden en dresseren met aandacht voor kwaliteit, timing en porties.',
        'Leveringen controleren, stock aanvullen en de werkpost ordelijk houden.',
        'Teamgericht werken tijdens drukke service en duidelijk afstemmen tijdens shifts.',
      ],
    },
  ],
}

export const contactContent = {
  email: 'ddamn1020@gmail.com',
  phone: '+32 488 51 49 50',
  linkedin: 'https://www.linkedin.com/in/daniel-feoktistov-72a16839a/',
  note: 'Gebruik het formulier hieronder om een e-mail op te stellen. Je standaard mailapp opent dan automatisch met jouw onderwerp en bericht ingevuld.',
}

export const wplSections = [
  {
    course: 'wpl1',
    slug: 'introductie',
    path: '/wpl1/introductie',
    navLabel: 'Introductie',
    title: 'Introductie',
    eyebrow: 'Werkplekleren 1',
    showHero: false,
    lead: '',
    html: `
      <p>Ik ben Daniel Feoktistov en ik volg de opleiding Graduaat Programmeren aan Hogeschool PXL. Ik woon in Maasmechelen en ik koos voor deze richting omdat ik graag logisch nadenk, problemen oplos en iets wil bouwen dat mensen echt kunnen gebruiken. In dit portfolio voor Werkplekleren 1 toon ik hoe ik doorheen het vak ben gegroeid en waar ik aan gewerkt heb. Het portfolio bestaat uit vier onderdelen: logboek, ontwikkeling, opdrachten en reflectie. In het logboek houd ik mijn planning bij en noteer ik welke taken en evaluatiemomenten ik op welke datum uitvoer. In het onderdeel ontwikkeling leg ik uit waarom ik voor deze opleiding koos, welke competenties belangrijk zijn voor een programmeur en hoe ik mezelf binnen de verschillende profielen situeer, met concrete voorbeelden. Bij opdrachten beschrijf ik per opdracht welke uitdagingen ik tegenkwam, hoe ik ze heb aangepakt en wat ik daaruit heb geleerd. Ik vind het belangrijk om niet alleen het eindresultaat te tonen, maar ook mijn werkwijze en verbeterpunten. Daarom blik ik in de reflectie eerlijk terug op wat goed ging, wat beter kon en hoe ik daarin verder wil groeien. Je kan elk onderdeel makkelijk terugvinden via de links in de navigatiebalk. Zo krijg je een duidelijk beeld van mijn werk, mijn leerproces en mijn ontwikkeling als toekomstige programmeur.</p>
    `,
  },
  {
    course: 'wpl1',
    slug: 'logboek',
    path: '/wpl1/logboek',
    navLabel: 'Logboek',
    title: 'Logboek',
    eyebrow: 'Werkplekleren 1',
    lead: 'Mijn semesterplanning met lessen, evaluaties en opdrachten.',
    html: `
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Periode</th>
              <th>Inhoud</th>
              <th>Evaluaties</th>
              <th>Opdrachten</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>22/09 - 26/09</td>
              <td><ul><li>Introductie werkplekleren</li><li>Wat is programmeren</li><li>Introductie POP, X-Factor en SDG's</li><li>Introductie Scratch</li></ul></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>2</td>
              <td>29/09 - 03/10</td>
              <td><ul><li>Oriënteringstraject</li><li>Installatie Git en GitHub</li><li>Introductie Git en GitHub</li></ul></td>
              <td><ul><li>LockDownBrowser</li></ul></td>
              <td>-</td>
            </tr>
            <tr>
              <td>3</td>
              <td>06/10 - 10/10</td>
              <td><ul><li>POP motivatie, kernkwadranten en reflecteren</li><li>Labo Git en GitHub</li></ul></td>
              <td>-</td>
              <td><ul><li>Scratch</li></ul></td>
            </tr>
            <tr>
              <td>4</td>
              <td>13/10 - 17/10</td>
              <td><ul><li>POP planning en studieaanpak</li></ul></td>
              <td><ul><li>Git en GitHub</li></ul></td>
              <td><ul><li>Reflecteren</li></ul></td>
            </tr>
            <tr>
              <td>5</td>
              <td>20/10 - 24/10</td>
              <td><ul><li>Gastsprekers</li><li>EPOS reflectie van oriënteringstraject</li></ul></td>
              <td><ul><li>Gastsprekers</li></ul></td>
              <td><ul><li>Planning</li></ul></td>
            </tr>
            <tr>
              <td>Vakantie</td>
              <td>-</td>
              <td>Herfstvakantie</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>6</td>
              <td>03/11 - 07/11</td>
              <td><ul><li>POP leren analyseren</li></ul></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>7</td>
              <td>10/11 - 14/11</td>
              <td><ul><li>POP carriërekompas</li><li>Feedback evaluatie</li></ul></td>
              <td><ul><li>C# Console</li></ul></td>
              <td><ul><li>POP carriërekompas</li></ul></td>
            </tr>
            <tr>
              <td>8</td>
              <td>17/11 - 21/11</td>
              <td><ul><li>POP personal branding</li><li>Introductie curriculum vitae</li><li>Introductie portfolio</li></ul></td>
              <td>-</td>
              <td><ul><li>Feedback evaluatie C# Console</li></ul></td>
            </tr>
            <tr>
              <td>9</td>
              <td>24/11 - 28/11</td>
              <td><ul><li>Instroombevraging</li><li>Feedback evaluatie</li></ul></td>
              <td><ul><li>HTML en CSS</li></ul></td>
              <td>-</td>
            </tr>
            <tr>
              <td>10</td>
              <td>01/12 - 05/12</td>
              <td><ul><li>Documenteren en debuggen in C#</li><li>Labo Debugging</li></ul></td>
              <td><ul><li>Debugging</li></ul></td>
              <td><ul><li>Feedback evaluatie debugging</li></ul></td>
            </tr>
            <tr>
              <td>11</td>
              <td>08/12 - 12/12</td>
              <td><ul><li>Labo WPF</li><li>Gastsprekers</li></ul></td>
              <td><ul><li>SDGâ€™s</li></ul></td>
              <td>-</td>
            </tr>
            <tr>
              <td>12</td>
              <td>15/12 - 19/12</td>
              <td><ul><li>POP kernkwadranten</li><li>Afwerken curriculum vitae</li><li>Afwerken labo WPF</li></ul></td>
              <td>-</td>
              <td><ul><li>Curriculum Vitae</li></ul></td>
            </tr>
            <tr>
              <td>Vakantie</td>
              <td>-</td>
              <td>Kerstvakantie</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>13</td>
              <td>05/01 - 09/01</td>
              <td><ul><li>Infosessie Thalento</li></ul></td>
              <td><ul><li>C# WPF</li></ul></td>
              <td><ul><li>Portfolio</li></ul></td>
            </tr>
            <tr>
              <td>14</td>
              <td>12/01 - 16/01</td>
              <td><ul><li>Introductie Corda</li><li>Feedback evaluatie C# WPF</li></ul></td>
              <td><ul><li>Inhaalmoment</li></ul></td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  },
  {
    course: 'wpl1',
    slug: 'ontwikkeling',
    path: '/wpl1/ontwikkeling',
    navLabel: 'Ontwikkeling',
    title: 'Ontwikkeling',
    eyebrow: 'Werkplekleren 1',
    lead: 'Waarom deze opleiding bij mij past, welke competenties belangrijk zijn en hoe ik mezelf daarin situeer.',
    html: `
      <section class="inner-block">
        <h2>Mijn keuze voor deze opleiding</h2>
        <h3>Waarom kies je voor de opleiding programmeren?</h3>
        <p>Ik kies voor de opleiding Programmeren omdat ik graag logisch nadenk en voldoening haal uit het oplossen van problemen. Wanneer iets niet werkt, vind ik het net boeiend om stap voor stap te achterhalen waar het misloopt en hoe ik het kan verbeteren. Wat mij extra motiveert, is dat ik met code concrete oplossingen kan bouwen die anderen echt kunnen gebruiken: een website, een app of een programma dat een taak eenvoudiger maakt. Ik vind het ook interessant dat programmeren zowel creativiteit als structuur vraagt. Je bedenkt een oplossing, maar je moet die ook helder, overzichtelijk en onderhoudbaar uitwerken. Bovendien zie ik vaak snel resultaat, wat mij stimuleert om te blijven oefenen en bij te leren. Eerder volgde ik de bachelor Toegepaste Informatica, maar ik behaalde toen helaas niet de minimale vereisten om de opleiding verder te zetten. Daarom kies ik nu bewust voor het graduaat, zodat ik mijn kennis en vaardigheden doelgericht kan opbouwen. Op langere termijn wil ik met die stevige basis de stap naar de bachelor opnieuw zetten.</p>
        <h3>Waarom denk je dat dit beroep bij jou past?</h3>
        <p>Ik denk dat het beroep programmeur bij mij past omdat ik het leuk vind om applicaties te bouwen en stap voor stap iets werkends te creÃ«ren. Dat merkte ik tijdens het WPF-gedeelte van C#-Essentials, waar ik een toepassing opbouwde en al doende leerde testen, fouten opsporen en mijn code verbeteren. Ook bij de CV-opdracht zag ik hoe belangrijk het is om een resultaat helder en gebruiksvriendelijk te presenteren. Het motiveert mij om een idee om te zetten in een oplossing die mensen echt kunnen gebruiken. Daarnaast spreekt het mij aan dat ik in dit beroep vaak in team werk. Ik vind samenwerken waardevol, omdat ik kan bijleren van anderen, feedback kan verwerken en samen tot een beter resultaat kom. Ook de variatie in de sector past bij mij: ik kan projectgericht werken met duidelijke deadlines, of productgericht meebouwen aan een toepassing die continu verbetert. Tot slot vind ik de toekomstzekerheid van IT belangrijk, en ook het vooruitzicht op een stabiel inkomen en een goed loon.</p>
      </section>
      <section class="inner-block">
        <h2>Competenties programmeur</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>OLR</th>
                <th>Omschrijving</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2"><b>Rol: Ontwerper</b></td>
              </tr>
              <tr>
                <td>OLR1</td>
                <td>De gegradueerde bereidt de realisatie van een softwareproject voor.</td>
              </tr>
              <tr>
                <td>OLR2</td>
                <td>
                  De gegradueerde maakt op basis van de analyse een onderbouwd voorstel voor:
                  <br />
                  a. het ontwerp,
                  <br />
                  b. de programmeertaal en
                  <br />
                  c. de methodiek.
                  <br />
                  De gegradueerde stemt het voorstel af met de softwareontwikkelaar, analist en/of projectleider.
                </td>
              </tr>
              <tr>
                <td colspan="2"><b>Rol: Programmeur</b></td>
              </tr>
              <tr>
                <td>OLR3</td>
                <td>De gegradueerde realiseert softwareapplicaties en gegevensstructuren. De gegradueerde werkt hierbij planmatig binnen de context van het projectplan, de beschikbare tools en de vooropgestelde methodiek.</td>
              </tr>
              <tr>
                <td>OLR4</td>
                <td>De gegradueerde is medeverantwoordelijk voor de eigen digitale werkomgeving en draagt bij tot de gedeelde infrastructuur die nodig is voor het ontwikkelen, testen en in productie brengen van projecten.</td>
              </tr>
              <tr>
                <td>OLR5</td>
                <td>De gegradueerde programmeert softwaretoepassingen volgens de standaarden en afspraken binnen de organisatie.</td>
              </tr>
              <tr>
                <td>OLR6</td>
                <td>De gegradueerde gaat in overleg met de softwareontwikkelaar, analist en/of projectleider na of het opgeleverde product onderhoud en/of aanpassingen nodig heeft. De gegradueerde voert het onderhoud en de aanpassingen projectmatig uit, rekening houdend met eerder gemaakte afspraken.</td>
              </tr>
              <tr>
                <td colspan="2"><b>Rol: Tester</b></td>
              </tr>
              <tr>
                <td>OLR7</td>
                <td>De gegradueerde gaat volgens testscenario's de werking en functionaliteit van de gerealiseerde code na en verbetert deze op basis van feedback van de softwareontwikkelaar, analist, projectleider en/of gebruikers.</td>
              </tr>
              <tr>
                <td colspan="2"><b>Rol: Communicator / Teamspeler</b></td>
              </tr>
              <tr>
                <td>OLR8</td>
                <td>De gegradueerde werkt constructief en actief samen in een multidisciplinair team en participeert actief tijdens overlegmomenten. De gegradueerde zoekt mee naar oplossingen om problemen te vermijden.</td>
              </tr>
              <tr>
                <td>OLR9</td>
                <td>De gegradueerde communiceert en rapporteert efficiënt over het geleverde werk, aangepast aan het doelpubliek en gebruikt hiervoor het gepaste Engelstalige vakjargon.</td>
              </tr>
              <tr>
                <td>OLR10</td>
                <td>De gegradueerde documenteert de zelf ontwikkelde applicaties op een adequate en overzichtelijke manier gebruikmakend van een kennisdatabank en volgens de afspraken binnen de organisatie. De gegradueerde geeft kwalitatieve input voor de gebruikershandleidingen, referentiegidsen en online hulpbronnen.</td>
              </tr>
              <tr>
                <td colspan="2"><b>Rol: Levenslang lerende IT-professional</b></td>
              </tr>
              <tr>
                <td>OLR11</td>
                <td>De gegradueerde onderhoudt zijn deskundigheidsniveau door relevante duurzame IT- en maatschappelijke ontwikkelingen actief op te volgen.</td>
              </tr>
              <tr>
                <td>OLR12</td>
                <td>De gegradueerde is zelfkritisch, ontwikkelt de nodige zelfkennis en gebruikt deze om zijn persoonlijke en professionele groei te bevorderen.</td>
              </tr>
              <tr>
                <td>OLR13</td>
                <td>De gegradueerde handelt deontologisch en duurzaam, en houdt rekening met de veiligheids- en privacyrichtlijnen.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="inner-block">
        <h2>Situering binnen profiel</h2>
        <div class="rich-grid">
          <article class="info-card">
            <h3>Rol: Ontwerper</h3>
            <p><strong>Waar sta ik momenteel?</strong> Ik sta nog aan het begin als ontwerper.</p>
            <p><strong>Wat lukt al goed?</strong> Ik kan een opdracht gedeeltelijk analyseren en mijn aanpak voorbereiden door de stappen van de uitwerking te plannen. Daarbij heb ik soms nog ondersteuning nodig.</p>
            <p><strong>Wat lukt nog niet?</strong> Ik vind het nog moeilijk om mijn keuzes te onderbouwen, zoals het ontwerp, de programmeertaal en de projectmethodiek. Ook vind ik het uitdagend om een softwareproject volledig zelfstandig voor te bereiden en zeker te zijn van mijn aanpak.</p>
          </article>
          <article class="info-card">
            <h3>Rol: Programmeur</h3>
            <p><strong>Waar sta ik momenteel?</strong> Ik sta op een gemiddeld tot gevorderd niveau als programmeur.</p>
            <p><strong>Wat lukt al goed?</strong> Ik kan planmatig applicaties uitwerken, mijn werkomgeving beheren en code schrijven volgens afspraken en standaarden. Ik kan onderhoud en aanpassingen projectmatig aanpakken en bestaande code uitbreiden of herstructureren wanneer dat nodig is. Daarnaast kan ik fouten opsporen en verbeteren en werk ik stap voor stap naar een correct resultaat toe.</p>
            <p><strong>Wat lukt nog niet?</strong> Ik wil nog sneller en zelfstandiger worden, vooral wanneer ik aan een nieuwe opdracht begin en zelf de beste aanpak moet kiezen zonder veel ondersteuning.</p>
          </article>
          <article class="info-card">
            <h3>Rol: Tester</h3>
            <p><strong>Waar sta ik momenteel?</strong> Ik sta op een beginnend niveau als tester.</p>
            <p><strong>Wat lukt al goed?</strong> Ik kan functionaliteit controleren, eenvoudige testgevallen opstellen en mijn code verbeteren op basis van feedback.</p>
            <p><strong>Wat lukt nog niet?</strong> Ik wil nog systematischer leren testen met testscenario's en mijn testresultaten beter en regelmatiger bijhouden.</p>
          </article>
          <article class="info-card">
            <h3>Rol: Communicator / Teamspeler</h3>
            <p><strong>Waar sta ik momenteel?</strong> Ik sta op een gemiddeld niveau als communicator/teamspeler.</p>
            <p><strong>Wat lukt al goed?</strong> Ik kan actief samenwerken en overleggen in een multidisciplinair team. Ik communiceer duidelijk naar het doelpubliek en gebruik daarbij gepast Engelstalig vakjargon. Daarnaast denk ik mee in oplossingen en probeer ik problemen zoveel mogelijk te voorkomen door afspraken en feedback serieus te nemen.</p>
            <p><strong>Wat lukt nog niet?</strong> Documenteren doe ik nog niet altijd voldoende en ik wil hierin nog groeien door mijn werk vaker en overzichtelijker bij te houden.</p>
          </article>
          <article class="info-card">
            <h3>Rol: Levenslang lerende IT-professional</h3>
            <p><strong>Waar sta ik momenteel?</strong> Ik sta op een gemiddeld niveau als levenslang lerende IT-professional.</p>
            <p><strong>Wat lukt al goed?</strong> Ik ben bereid om bij te leren, mezelf kritisch te evalueren en mijn groei bewust op te volgen.</p>
            <p><strong>Wat lukt nog niet?</strong> Ik wil nog meer rekening houden met informatiebeveiliging en privacy en daar sneller goede gewoontes in ontwikkelen.</p>
          </article>
        </div>
      </section>
      <section class="inner-block">
        <h2>Voorbeelden van activiteiten</h2>
        <div class="timeline-list">
          <article class="timeline-item">
            <h3>Ontwerper</h3>
            <p><strong>1. Activiteit:</strong> Later wil ik requirements verzamelen bij een opdrachtgever en deze duidelijk uitschrijven.</p>
            <p><strong>Motivatie:</strong> Dit hoort bij de rol ontwerper, omdat ik eerst goed moet begrijpen wat de klant nodig heeft voordat ik een oplossing kan ontwerpen.</p>
            <p><strong>2. Activiteit:</strong> Later wil ik een eerste ontwerp uitwerken, bijvoorbeeld in de vorm van een wireframe.</p>
            <p><strong>Motivatie:</strong> Ontwerpen helpt om de structuur en functionaliteit vooraf vast te leggen, zodat de uitwerking efficienter en duidelijker verloopt.</p>
            <p><strong>3. Activiteit:</strong> Later wil ik mijn ontwerpkeuzes beter kunnen onderbouwen, zoals de keuze voor programmeertaal en ontwikkelmethode, en die afstemmen met een team of lector.</p>
            <p><strong>Motivatie:</strong> Dit hoort bij de rol ontwerper, omdat ik mijn aanpak moet kunnen motiveren en mijn keuzes moet kunnen afstemmen met anderen om tot een passende oplossing te komen.</p>
          </article>
          <article class="timeline-item">
            <h3>Programmeur</h3>
            <p><strong>1. Activiteit:</strong> Ik heb met Git en GitHub gewerkt aan een project voor versiebeheer en samenwerking.</p>
            <p><strong>Motivatie:</strong> Dit hoort bij de rol programmeur, omdat versiebeheer nodig is om code te beheren, wijzigingen op te volgen en samen aan verschillende onderdelen te werken.</p>
            <p><strong>2. Activiteit:</strong> Ik heb voor school een groter programma gemaakt in Java.</p>
            <p><strong>Motivatie:</strong> Dit past bij de rol programmeur, omdat je software leert bouwen en structureren en omdat het waardevol is om met meerdere programmeertalen te kunnen werken.</p>
            <p><strong>3. Activiteit:</strong> Ik verbeter regelmatig mijn code en structuur, zodat mijn programma's duidelijker en vlotter werken.</p>
            <p><strong>Motivatie:</strong> Dit hoort bij de rol programmeur, omdat onderhoud en kwaliteitsverbetering belangrijk zijn om software correct, leesbaar en uitbreidbaar te houden.</p>
          </article>
          <article class="timeline-item">
            <h3>Tester</h3>
            <p><strong>1. Activiteit:</strong> Ik heb unit tests geschreven in Java om mijn code automatisch te controleren.</p>
            <p><strong>Motivatie:</strong> Dit hoort bij de rol tester, omdat automatische testen helpen om fouten sneller te vinden en de kwaliteit te bewaken.</p>
            <p><strong>2. Activiteit:</strong> Tijdens een PE rond C# debugging heb ik bugs opgespoord, gereproduceerd en opgelost.</p>
            <p><strong>Motivatie:</strong> Dit past bij testen, omdat je nagaat waar de toepassing fout loopt en controleert of ze daarna opnieuw correct werkt.</p>
            <p><strong>3. Activiteit:</strong> Later wil ik bewust programma's of websites uitgebreid testen tot ze uitvallen of crashen, bijvoorbeeld door extreme of foutieve invoer, veel acties na elkaar of onverwachte situaties.</p>
            <p><strong>Motivatie:</strong> Dit helpt mij om zwakke punten te ontdekken en om de toepassing stabieler en betrouwbaarder te maken.</p>
          </article>
          <article class="timeline-item">
            <h3>Communicator / Teamspeler</h3>
            <p>(Deze ervaringen deed ik enkele jaren geleden in 1TIN; momenteel zit ik in 1PRO.)</p>
            <p><strong>1. Activiteit:</strong> Tijdens het project in 1TIN deden we daily stand-ups om te bespreken wat iedereen die dag zou doen en of er problemen waren.</p>
            <p><strong>Motivatie:</strong> Dit hoort bij teamwork, omdat je afstemt, elkaar kan helpen en de samenwerking vlotter laat verlopen.</p>
            <p><strong>2. Activiteit:</strong> In het project van 1TIN gaven we om de twee weken een demo aan onze 'klant' om de voortgang te tonen.</p>
            <p><strong>Motivatie:</strong> Dit hoort bij communicatie, omdat je je werk duidelijk moet uitleggen aan een doelpubliek en verwachtingen moet afstemmen.</p>
            <p><strong>3. Activiteit:</strong> In het project van 1TIN heb ik samen met het team taken afgesproken en verdeeld, en daarna mijn voortgang teruggekoppeld.</p>
            <p><strong>Motivatie:</strong> Dit hoort bij teamwork, omdat duidelijke afspraken en opvolging misverstanden en vertragingen helpen voorkomen.</p>
          </article>
          <article class="timeline-item">
            <h3>Levenslang lerende IT-professional</h3>
            <p><strong>1. Activiteit:</strong> Ik verwerk feedback van lectoren bij PE's en pas mijn werk aan om te leren uit fouten.</p>
            <p><strong>Motivatie:</strong> Dit hoort bij levenslang leren, omdat ik reflecteer en mijn aanpak verbeter op basis van feedback.</p>
            <p><strong>2. Activiteit:</strong> Ik lees documentatie over frameworks zoals Vue en .NET om mijn kennis te verbreden.</p>
            <p><strong>Motivatie:</strong> Dit past bij deze rol, omdat IT voortdurend verandert en je zelfstandig moet kunnen bijleren.</p>
            <p><strong>3. Activiteit:</strong> Ik heb extra oefeningen gemaakt voor C# Essentials om de leerstof beter onder de knie te krijgen.</p>
            <p><strong>Motivatie:</strong> Dit toont levenslang leren, omdat ik zelf initiatief neem om mijn vaardigheden te versterken.</p>
          </article>
        </div>
      </section>
    `,
  },
  {
    course: 'wpl1',
    slug: 'opdrachten',
    path: '/wpl1/opdrachten',
    navLabel: 'Opdrachten',
    title: 'Opdrachten',
    eyebrow: 'Werkplekleren 1',
    lead: 'Per opdracht toon ik wat de opdracht inhield, wat mijn uitdaging was en wat ik eruit leerde.',
    html: `
      <div class="assignment-grid">
        <article class="info-card"><h3>1. LockDown Browser</h3><p><strong>Beschrijving:</strong> We moesten de LockDown Browser installeren en tijdens de les testen.</p><p><strong>Persoonlijke uitdaging:</strong> Dit was voor mij geen grote uitdaging, maar ik moest wel zorgvuldig controleren of alles correct werkte op mijn toestel.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd hoe ik met de LockDown Browser moet werken.</p></article>
        <article class="info-card"><h3>2. Scratch</h3><p><strong>Beschrijving:</strong> We kregen drie weken de tijd om een ballonnenspel te programmeren in Scratch.</p><p><strong>Persoonlijke uitdaging:</strong> Ik vond het uitdagend om zelf uit te zoeken hoe events, clones en eigen functies werken.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd dat je veel kan bijleren via online bronnen (zoals YouTube) en dat geduld belangrijk is.</p></article>
        <article class="info-card"><h3>3. Git en GitHub</h3><p><strong>Beschrijving:</strong> We moesten onze kennis van Git en GitHub testen via een eenvoudige HTML-opdracht.</p><p><strong>Persoonlijke uitdaging:</strong> Dit was voor mij niet zo moeilijk, maar ik moest wel nauwkeurig werken om geen stappen te vergeten.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd hoe ik correct commits maak en hoe ik wijzigingen naar een repository push en terug ophaal via pull.</p></article>
        <article class="info-card"><h3>4. Reflecteren</h3><p><strong>Beschrijving:</strong> Na het indienen van ons Scratchproject kregen we één week tijd om een reflectie te schrijven.</p><p><strong>Persoonlijke uitdaging:</strong> Ik vond het moeilijk om de link te leggen met mijn kernkwadranten en dit te onderbouwen met voorbeelden uit mijn Scratchproject.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd dat het helpt om eerst sleutelwoorden te noteren en daarna stap voor stap zinnen uit te werken tot een vlotte tekst.</p></article>
        <article class="info-card"><h3>5. Gastsprekers</h3><p><strong>Beschrijving:</strong> We kregen twee gastsprekers die vertelden over hun werkveld, en nadien moesten we hierover een reflectie schrijven.</p><p><strong>Persoonlijke uitdaging:</strong> Ik vond het moeilijk om in vijf minuten een tekst van 100 woorden te schrijven met een duidelijke mening.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd dat ik gerichter moet noteren tijdens gastlessen, zodat ik achteraf gemakkelijker mijn mening kan formuleren.</p></article>
        <article class="info-card"><h3>6. Planning</h3><p><strong>Beschrijving:</strong> We moesten een gedetailleerde semesterplanning maken met deadlines van taken en geplande PE's, en ook een weekplanning met wat we doorheen de week zouden doen.</p><p><strong>Persoonlijke uitdaging:</strong> Het was uitdagend om alle deadlines te verzamelen en tegelijk buffertijd, verplaatsingstijd en studietijd realistisch in te plannen.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd hoe ik mijn tijd beter kan beheren en realistischer kan plannen.</p></article>
        <article class="info-card"><h3>7. C# Console - PlanetRush</h3><p><strong>Beschrijving:</strong> Tijdens deze PE maakten we een C# consoleapplicatie ('PlanetRush') met variabelen, controle- en herhalingsstructuren en methodes.</p><p><strong>Persoonlijke uitdaging:</strong> Ik maakte soms kleine fouten, zoals een verkeerde if-voorwaarde in de setter van DesiredMetal en een fout bij de grenswaarden van de random number generator.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd dat ik aandachtiger moet lezen en meer moet oefenen om zulke fouten te vermijden.</p></article>
        <article class="info-card"><h3>8. Carrièrekompas</h3><p><strong>Beschrijving:</strong> We moesten een vacatureopdracht maken rond werkveldverkenning binnen de IT-sector voor programmeurs/developers.</p><p><strong>Persoonlijke uitdaging:</strong> Ik vond het uitdagend om de bedrijfscultuur (Quinn en Rohrbaugh) te analyseren en mijn eigen soft skills en verbeteracties duidelijk te beschrijven.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd om beter over mezelf na te denken en om bedrijfsculturen te koppelen aan een specifiek bedrijf.</p></article>
        <article class="info-card"><h3>9. Feedback C# Console</h3><p><strong>Beschrijving:</strong> We moesten een algemene reflectie schrijven over 'PlanetRush' op basis van een modeloplossing in video-vorm.</p><p><strong>Persoonlijke uitdaging:</strong> Mijn uitdaging was om kritisch te vergelijken met de modeloplossing en eerlijk te benoemen wat ik de volgende keer anders zou aanpakken.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd hoe ik gerichter kan vergelijken met een modeloplossing en mijn werk kan evalueren.</p></article>
        <article class="info-card"><h3>10. HTML en CSS</h3><p><strong>Beschrijving:</strong> Voor deze PE moesten we een webpagina zo goed mogelijk namaken met HTML en CSS.</p><p><strong>Persoonlijke uitdaging:</strong> Ik had het moeilijk omdat ik niet goed wist hoeveel elementen ik nodig had en hoe ik de layout correct met flexbox moest opbouwen.</p><p><strong>Bijgeleerd:</strong> Ik begrijp nu beter hoe ik een pagina structureer en flexbox gebruik voor een nette lay-out.</p></article>
        <article class="info-card"><h3>11. Debugging</h3><p><strong>Beschrijving:</strong> We moesten fouten uit een bestaande consoleapplicatie halen met de debuggingtools in Visual Studio.</p><p><strong>Persoonlijke uitdaging:</strong> Ik vond de opdrachten haalbaar, maar ik had één vereiste verkeerd begrepen.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd dat ik de vereisten de volgende keer beter en aandachtiger moet lezen.</p></article>
        <article class="info-card"><h3>12. Feedback Debugging</h3><p><strong>Beschrijving:</strong> We moesten een reflectie schrijven over de debugging-PE en antwoorden op open vragen over voorbereiding, hulpmiddelen en zelfvertrouwen bij buganalyse.</p><p><strong>Persoonlijke uitdaging:</strong> Het was niet moeilijk om te antwoorden, maar ik moest erop letten dat ik volledige zinnen schreef en mijn antwoorden duidelijk motiveerde.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd dat volledige zinnen en duidelijke formuleringen mijn reflectie sterker maken.</p></article>
        <article class="info-card"><h3>13. SDG's</h3><p><strong>Beschrijving:</strong> We maakten een korte reflectie over SDG's, bekeken een video, zochten info over de bedrijven en legden een link met de projecten van de gastsprekers.</p><p><strong>Persoonlijke uitdaging:</strong> De uitdaging was vooral om de juiste link te leggen tussen een SDG en de inhoud van de presentatie.</p><p><strong>Bijgeleerd:</strong> Ik heb beter geleerd wat SDG's zijn en welke bedrijven mij interesseren voor een mogelijke stage.</p></article>
        <article class="info-card"><h3>14. Curriculum Vitae (HTML/CSS)</h3><p><strong>Beschrijving:</strong> We moesten voor de kerstvakantie een CV maken met HTML en CSS.</p><p><strong>Persoonlijke uitdaging:</strong> Ik vond het uitdagend om een goede lay-out te kiezen, creatief te zijn en CSS correct toe te passen.</p><p><strong>Bijgeleerd:</strong> Ik heb veel bijgeleerd over CSS, zoals structuur opbouwen met elementen, werken met flexbox, positionering en eenvoudige animaties.</p></article>
        <article class="info-card"><h3>15. C# WPF</h3><p><strong>Beschrijving:</strong> Voor deze PE moesten we de GUI van een WPF-applicatie zo goed mogelijk nabouwen als vervolg op het labo.</p><p><strong>Persoonlijke uitdaging:</strong> Ik had vooral moeite met de layout en besteedde daar veel tijd aan, waardoor ik minder tijd had om de C#-code volledig af te werken.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd dat ik meer moet oefenen op layout-opbouw en rustiger moet blijven werken.</p></article>
        <article class="info-card"><h3>16. Portfolio</h3><p><strong>Beschrijving:</strong> We moesten een portfolio schrijven over onze ervaringen binnen Werkplekleren 1.</p><p><strong>Persoonlijke uitdaging:</strong> Ik vond het uitdagend om over mezelf na te denken en mijn mening duidelijk te verwoorden.</p><p><strong>Bijgeleerd:</strong> Ik heb geleerd hoe belangrijk het is om mijn leerproces te benoemen en mijn ervaringen gestructureerd te beschrijven.</p></article>
      </div>
    `,
  },
  {
    course: 'wpl1',
    slug: 'reflectie',
    path: '/wpl1/reflectie',
    navLabel: 'Reflectie',
    title: 'Reflectie',
    eyebrow: 'Werkplekleren 1',
    lead: 'Mijn AIM-reflectie, mijn kernkwadranten en wat ik meeneem naar Werkplekleren 2.',
    html: `
      <section class="inner-block">
        <h2>AIM-reflectie op WPL1</h2>
        <p>In semester 1 volgde ik Werkplekleren 1, een opleidingsonderdeel waarin ik zowel aan IT-taken als aan mijn professionele groei werkte. Ik maakte thuis opdrachten zoals een klein project in Scratch, een CV/portfolio met HTML en CSS, en ik oefende op plannen, reflecteren en het uitvoeren van permanente evaluaties. Door die combinatie kreeg ik niet alleen technische oefenkansen, maar ook een beter beeld van wat er in een professionele context verwacht wordt, zoals kwaliteit afleveren, deadlines respecteren en duidelijk communiceren.</p>
        <p>Een bijzonder positief element vond ik de feedback na ingediende opdrachten. Die feedback maakte duidelijk wat al sterk was en wat ik nog moest verbeteren, waardoor ik gerichter kon bijleren. De opdracht die mij het meest verraste, was het maken van een CV met HTML en CSS: ik merkte dat ik creativiteit kan combineren met structuur en dat kleine details, zoals layout, typografie en animaties, een groot verschil maken in hoe professioneel iets overkomt. Door daarmee te experimenteren leerde ik ook beter iteratief werken: eerst een basisversie bouwen en daarna stap voor stap verbeteren.</p>
        <p>Wat ik minder leuk en soms frustrerend vond, was dat we bij de laatste opdrachten en de PE minder of geen feedback kregen, terwijl ik die net nodig had om te weten of ik op de juiste weg zat. Ook het schrijven van reflecties vond ik uitdagend, vooral het koppelen van de leerstof aan mijn eigen ervaringen. Daardoor voelde reflecteren soms als extra werk, in plaats van als iets dat mij echt vooruithelpt.</p>
        <p>Het nieuwe inzicht dat ik meeneem naar het volgende semester, is dat ik vaker naar de lessen zal gaan, zodat ik een beter netwerk kan opbouwen en leerkrachten later ook iets positiefs over mij kunnen zeggen. Zo maak ik meer kans op een stage in een bepaald bedrijf. De meest waardevolle les die ik hierbij meeneem uit de lessen over werkplekverkenning, is dat zichtbaarheid en een professionele houding, zoals aanwezig zijn, meedoen en vragen stellen, mee bepalen welke kansen je later krijgt.</p>
        <p>Ik zou een persoonlijk succes tijdens Werkplekleren 1 noemen dat ik geslaagd ben voor dit vak, omdat ik graag aan een groot project wil werken en volgend jaar ook stage wil doen.</p>
      </section>
      <section class="inner-block">
        <h2>Wat neem ik mee naar volgende WPL</h2>
        <div class="rich-grid">
          <article class="info-card">
            <h3>Kernkwaliteit</h3>
            <p>Structuur</p>
          </article>
          <article class="info-card">
            <h3>Valkuil</h3>
            <p>Perfectionisme</p>
          </article>
          <article class="info-card">
            <h3>Uitdaging</h3>
            <p>Creativiteit</p>
          </article>
          <article class="info-card">
            <h3>Allergie</h3>
            <p>Chaos</p>
          </article>
        </div>
        <p>Tijdens Werkplekleren 1 merkte ik dat mijn kernkwaliteit vooral structuur is, omdat ik mijn taken graag overzichtelijk plan en stap voor stap uitvoer op basis van de features en verwachtingen die op voorhand zijn opgesteld. Die structuur hielp mij om opdrachten tijdig af te werken en om duidelijke keuzes te maken, bijvoorbeeld bij het bouwen van een C# WPF-programma.</p>
        <p>Tegelijk merkte ik dat ik soms te perfectionistisch werk. Bij de PE van de C# WPF-applicatie heb ik bijvoorbeeld erg veel tijd besteed aan de lay-out, waardoor ik minder tijd overhield voor het C#-gedeelte. Daardoor loop ik het risico dat ik deadlines moeilijker haal of dat ik stress krijg wanneer er nog veel werk moet gebeuren.</p>
        <p>In WPL2 wil ik mijn creativiteit verder ontwikkelen door vaker kleine projecten te maken, zoals mijn portfolio en mijn CV, en door bewust extra features te verzinnen en uit te proberen. Een concreet doel is dat ik bij oefeningen zoals Blackjack (C# Essentials) telkens minstens één uitbreiding bedenk, bijvoorbeeld een betere UI, extra spelregels of een scorehistoriek, zodat ik leer om verder te denken dan enkel de basisvereisten. Aan mijn lector of werkplekcoach wil ik ook vragen hoe ik sneller ideeën kan omzetten in haalbare features en hoe ik kan inschatten welke extra's realistisch zijn binnen de tijd die we krijgen.</p>
        <p>Daarnaast wil ik beter leren omgaan met mijn allergie chaos, bijvoorbeeld wanneer teamgenoten weinig bijdragen of wanneer plannen plots veranderen. Ik wil dan blijven werken met een duidelijke taakverdeling, korte deadlines en heldere communicatie, zodat ik zelf vooruit kan blijven gaan zonder te blokkeren. Op die manier kan ik rustiger blijven en toch blijven doorwerken, ook als de situatie minder gestructureerd is.</p>
      </section>
      <section class="inner-block">
        <h2>X-factor</h2>
        <p>...</p>
      </section>
    `,
  },
  {
    course: 'wpl2',
    slug: 'case-beschrijving',
    path: '/wpl2/case-beschrijving',
    navLabel: 'Case beschrijving',
    title: 'Case beschrijving',
    eyebrow: 'Werkplekleren 2',
    lead: 'Pokr Team 4 PROGRAMMEREN',
    html: `
      <p>Tijdens WPL2 werkten we in groep 4 aan de case Pokr. Pokr is een app voor kleine teams binnen KMO’s. De app helpt teams om bedrijfsdoelen eenvoudig op te stellen, op te volgen en regelmatig te bespreken. Veel bedrijven houden hun doelen vandaag bij in Excel of PowerPoint, maar daardoor is het niet altijd duidelijk wat belangrijk is, wie verantwoordelijk is en welke stappen nog moeten gebeuren.</p>
      <p>Met Pokr kunnen bedrijven zich registreren en hun organisatie opdelen in verschillende teams. Binnen die teams kunnen gebruikers doelen aanmaken, een eigenaar aanduiden en een volgende stap toevoegen. Teamleden kunnen via korte check-ins aangeven wat er gebeurd is, wat eventueel vastzit en welke actie daarna volgt. Zo krijgt het team een duidelijk overzicht van lopende doelen, verantwoordelijkheden en vooruitgang.</p>
      <p>Binnen dit project lag mijn focus vooral op de frontend en backend van de applicatie. Aan de frontend was het belangrijk om duidelijke en gebruiksvriendelijke schermen te voorzien waarmee gebruikers snel doelen, teams en check-ins kunnen beheren. Aan de backend lag de nadruk op het correct verwerken en opslaan van gegevens, zoals bedrijven, gebruikers, teams, doelen, KPI’s, check-ins en logs. Ook de adminfunctionaliteiten waren belangrijk, zodat beheerders bedrijven, teams, gebruikers en statistieken kunnen opvolgen. Op die manier ondersteunt Pokr teams om meer structuur, eigenaarschap en ritme te brengen in het opvolgen van hun doelen.</p>
    `,
  },
  {
    course: 'wpl2',
    slug: 'mijn-aandeel',
    path: '/wpl2/mijn-aandeel',
    navLabel: 'Mijn aandeel',
    title: 'Mijn aandeel',
    eyebrow: 'Werkplekleren 2',
    lead: 'Pokr Team 4 PROGRAMMEREN',
    html: `
      <p>Binnen dit project lag mijn grootste bijdrage vooral bij de backend van de applicatie. Ongeveer 80% van mijn werk bestond uit backendontwikkeling in C#. Ik heb ervoor gezorgd dat de belangrijkste entiteiten, zoals users, teams, permissions en de tussentabellen zoals companysubscriptions, teammembers en companyleads, correct werden uitgewerkt binnen de domeinlaag. Hierdoor kreeg de applicatie een duidelijke structuur en konden de verschillende onderdelen logisch met elkaar samenwerken.</p>
      <p>Daarnaast heb ik gewerkt aan de communicatie tussen de database en de backend via ORM. Op die manier konden gegevens op een efficiënte manier worden opgeslagen, opgehaald en aangepast. Samen met Rauf heb ik ook gezorgd voor de beveiliging van wachtwoorden door hashing toe te passen met Argon2Id. Verder heb ik een eigen mailservice opgezet met de gratis SMTP-server van Brevo. Deze mailservice werd gebruikt om gebruikers een bevestigingsmail te sturen bij registratie, zodat ze hun e-mailadres konden bevestigen. Ook wanneer een team een doel had bereikt, kon er automatisch een mail worden verstuurd.</p>
      <p>In de application layer heb ik mee businesslogica toegepast, zodat de juiste regels en processen binnen de applicatie gevolgd werden. Daarnaast heb ik verschillende controllers aangemaakt waarmee API’s werden opgebouwd. Deze API’s zorgden ervoor dat de backend correct kon communiceren met de frontend.</p>
      <p>Naast mijn backendtaken heb ik ook aan enkele onderdelen van de frontend gewerkt. De frontend werd gemaakt met Vue.js, waardoor ik eerst moest onderzoeken hoe dit framework werkte en hoe de structuur van de frontend was opgebouwd. Zo heb ik de email confirmation page gemaakt, waar gebruikers hun e-mailadres kunnen bevestigen via een geldige link. Ook heb ik de reset password page uitgewerkt, zodat gebruikers na het klikken op een link in hun mail een nieuw wachtwoord kunnen instellen. Tot slot heb ik gewerkt aan de billingmodule, waarmee bedrijven hun abonnement kunnen aanpassen en betalingen kunnen uitvoeren.</p>
    `,
  },
  {
    course: 'wpl2',
    slug: 'eindreflectie',
    path: '/wpl2/eindreflectie',
    navLabel: 'Eindreflectie',
    title: 'Eindreflectie',
    eyebrow: 'Werkplekleren 2',
    lead: 'De volledige eindreflectie is als pdf beschikbaar.',
    cta: {
      label: 'Open eindreflectie PDF',
      href: '/assets/documents/Opdracht_eindreflectie_WPL2_Feoktistov_Daniel.pdf',
      external: true,
    },
    html: ``,
  },
]

export const primaryNav = [
  { label: 'Home', to: '/' },
  { label: 'CV', to: '/cv' },
  { label: 'Contact', to: '/contact' },
  { label: 'WPL1', to: '/wpl1/introductie' },
  { label: 'WPL2', to: '/wpl2/case-beschrijving' },
]

export const sectionGroups = {
  wpl1: {
    label: 'Werkplekleren 1',
    links: wplSections.filter((section) => section.course === 'wpl1'),
  },
  wpl2: {
    label: 'Werkplekleren 2',
    links: wplSections.filter((section) => section.course === 'wpl2'),
  },
}

export function getSectionByPath(course, slug) {
  return wplSections.find((section) => section.course === course && section.slug === slug)
}
