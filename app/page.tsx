const projects = [
  { number: '01', title: 'Chay Suede', subtitle: 'Hermès · Prada · Brioni · Giorgio Armani', image: '/portfolio/chay-2026/01-chay-hermes-prada.jpg', alt: 'Chay Suede usando Hermès e Prada com styling de Thiago Biagi', note: 'Celebrity styling' },
  { number: '02', title: 'Laura Neiva', subtitle: 'Celebrity styling', image: '/portfolio/celebrity-portrait/01.jpg', alt: 'Laura Neiva em retrato preto e branco com óculos', note: 'Celebrity styling' },
  { number: '03', title: 'João Guilherme', subtitle: 'Prime Video · Brioni · Cartier · Zerezes', image: '/portfolio/joao-guilherme.jpg', alt: 'João Guilherme usando Brioni, Cartier e Zerezes com styling de Thiago Biagi', note: 'Celebrity styling' },
  { number: '04', title: 'Wagner Moura', subtitle: 'GQ Brasil · Dior', image: '/portfolio/instagram-full/wagner-moura.jpg', alt: 'Wagner Moura para GQ Brasil', note: 'Cover story' },
  { number: '05', title: 'Kaká', subtitle: 'GQ Brasil · Fashion editorial', image: '/portfolio/instagram-full/kaka.jpg', alt: 'Kaká para GQ Brasil', note: 'Celebrity styling' },
  { number: '06', title: 'Rodrigo Santoro', subtitle: 'Red carpet · Evening tailoring', image: '/portfolio/instagram-full/rodrigo-santoro.jpg', alt: 'Rodrigo Santoro em styling de gala', note: 'Celebrity styling' },
  { number: '07', title: 'Agnes Nunes', subtitle: 'Music · Fashion portrait', image: '/portfolio/instagram-full/agnes-nunes.jpg', alt: 'Agnes Nunes em editorial musical', note: 'Image' },
  { number: '08', title: 'João Vicente', subtitle: 'Dries Van Noten · Omega', image: '/portfolio/instagram/joao-vicente-gala.jpg', alt: 'João Vicente de Castro em styling de gala', note: 'Celebrity styling' },
  { number: '09', title: 'Arthur Paek', subtitle: "L'Officiel Hommes Brasil", image: '/portfolio/instagram-full/arthur-paek-editorial.jpg', alt: 'Arthur Paek em editorial de alfaiataria', note: 'Celebrity styling' },
  { number: '10', title: 'Isabelle Drummond', subtitle: 'Victoria Beckham · NK Store', image: '/portfolio/isabelle-drummond/01-victoria-beckham.jpg', alt: 'Isabelle Drummond usando Victoria Beckham com styling de Thiago Biagi', note: 'Celebrity styling' },
];

const chayLooks = [
  ['/portfolio/chay-2026/01-chay-hermes-prada.jpg', 'Hermès · Prada'],
  ['/portfolio/chay-2026/02-chay-prada.jpg', 'Prada'],
  ['/portfolio/chay-2026/03-chay-salustiano-brasil.jpg', 'Salustiano Brasil'],
  ['/portfolio/chay-2026/04-chay-salustiano-brasil.jpg', 'Salustiano Brasil'],
  ['/portfolio/chay-2026/05-chay-brioni-armani.jpg', 'Brioni · Giorgio Armani'],
  ['/portfolio/chay-2026/06-chay-brioni.jpg', 'Brioni'],
  ['/portfolio/chay-2026/07-chay-salustiano-brasil.jpg', 'Salustiano Brasil'],
  ['/portfolio/chay-2026/08-chay-officine-creative-salustiano.jpg', 'Officine Creative · Salustiano Brasil'],
];

const capituloFinal = [
  ['/portfolio/capitulo-final/01.jpg', 'Retrato feminino com venda de renda'],
  ['/portfolio/capitulo-final/02.jpg', 'Retrato masculino em branco'],
  ['/portfolio/capitulo-final/03.jpg', 'Retrato feminino com tipografia sobre o rosto'],
  ['/portfolio/capitulo-final/04.jpg', 'Páginas impressas do editorial'],
  ['/portfolio/capitulo-final/05.jpg', 'Retrato feminino em preto e branco'],
  ['/portfolio/capitulo-final/06.jpg', 'Retrato feminino diante de cenário lunar'],
  ['/portfolio/capitulo-final/07.jpg', 'Página impressa com retrato masculino'],
  ['/portfolio/capitulo-final/08.jpg', 'Retrato masculino com pássaro'],
  ['/portfolio/capitulo-final/09.jpg', 'Retrato feminino com véu'],
];

const missDiorImages = [
  ['/portfolio/miss-dior/01.jpg', 'Modelo em alfaiataria preta entre flores'],
  ['/portfolio/miss-dior/02.jpg', 'Modelo em alfaiataria preta com rosas'],
  ['/portfolio/miss-dior/03.jpg', 'Retrato feminino em vestido preto'],
  ['/portfolio/miss-dior/04.jpg', 'Modelo em vestido preto diante de cenário floral'],
  ['/portfolio/miss-dior/05.jpg', 'Frasco de Miss Dior sobre luva com laço'],
  ['/portfolio/miss-dior/06.jpg', 'Retrato feminino com penteado em laços'],
  ['/portfolio/miss-dior/07.jpg', 'Modelo em preto com laços brancos'],
  ['/portfolio/miss-dior/08.jpg', 'Retrato em preto e branco com flores'],
];

const missDiorFilms = [
  '/portfolio/miss-dior/film-01.mp4',
  '/portfolio/miss-dior/film-02.mp4',
  '/portfolio/miss-dior/film-03.mp4',
  '/portfolio/miss-dior/film-04.mp4',
];

const pietRiachueloImages = Array.from({ length: 18 }, (_, index) => [
  `/portfolio/piet-riachuelo/${String(index + 1).padStart(2, '0')}.jpg`,
  `Campanha PIET + Riachuelo, imagem ${index + 1}`,
]);

const pietRiachueloFilms = [
  '/portfolio/piet-riachuelo/film-01.mp4',
  '/portfolio/piet-riachuelo/film-02.mp4',
];

const marinaHeroImages = [
  '/portfolio/magazine-covers/marina-ruy-barbosa-marie-claire-setembro-2026.jpg',
  '/portfolio/magazine-covers/marina-ruy-barbosa-marie-claire-setembro-2026-alt.jpg',
  '/portfolio/magazine-covers/marina-editorial-01.jpg',
  '/portfolio/magazine-covers/marina-editorial-02.jpg',
  '/portfolio/magazine-covers/marina-editorial-03.jpg',
];

const galleryImages = [
  ['/portfolio/instagram-full/armor-editorial.jpg', 'Editorial masculino com armadura'],
  ['/portfolio/instagram-full/borsoi.jpg', 'Editorial masculino para Dior'],
  ['/portfolio/instagram-full/julio-reis.jpg', 'Retrato em linguagem Polaroid'],
  ['/portfolio/instagram-full/fucking-young.jpg', 'Editorial para Fucking Young'],
  ['/portfolio/instagram-full/portrait-white.jpg', 'Retrato feminino em branco'],
  ['/portfolio/instagram-full/bazaar.jpg', 'Editorial para Harper’s Bazaar Men'],
  ['/portfolio/instagram-full/garden.jpg', 'Editorial feminino em jardim'],
  ['/portfolio/instagram-full/night-suit.jpg', 'Tailoring noturno'],
  ['/portfolio/instagram-full/white-dress.jpg', 'Vestido branco em retrato editorial'],
  ['/portfolio/instagram-full/suit-camera.jpg', 'Editorial masculino de alfaiataria'],
  ['/portfolio/instagram-full/field-suit.jpg', 'Alfaiataria em locação externa'],
  ['/portfolio/instagram-full/pearl-dress.jpg', 'Editorial feminino em vestido bordado'],
  ['/portfolio/instagram-full/yellow-portrait.jpg', 'Retrato masculino em amarelo'],
  ['/portfolio/instagram-full/denim-portrait.jpg', 'Retrato masculino em denim'],
];

const motion = [
  ['Db0nUrmuKC-', '/portfolio/motion/01.jpg'], ['DbOUSBKu6LA', '/portfolio/motion/02.jpg'],
  ['DaNiK5JIWu_', '/portfolio/motion/03.jpg'], ['DZn3Tv6glDK', '/portfolio/motion/04.jpg'],
  ['DYPPqFGuKx3', '/portfolio/motion/05.jpg'], ['DXzx-KjxwrN', '/portfolio/motion/06.jpg'],
  ['DRicB_WDh5I', '/portfolio/motion/07.jpg'], ['DNY97QMOqxg', '/portfolio/motion/08.jpg'],
];

const covers = [
  { title: 'Marina Ruy Barbosa', publication: 'Marie Claire Brasil · Setembro 2026', image: '/portfolio/magazine-covers/marina-ruy-barbosa-marie-claire-setembro-2026.jpg', alt: 'Capa da Marie Claire Brasil de setembro de 2026 com Marina Ruy Barbosa', story: ['/portfolio/magazine-covers/marina-ruy-barbosa-marie-claire-setembro-2026-alt.jpg', '/portfolio/magazine-covers/marina-editorial-01.jpg', '/portfolio/magazine-covers/marina-editorial-02.jpg', '/portfolio/magazine-covers/marina-editorial-03.jpg'] },
  { title: 'João Guilherme', publication: 'GQ Brasil · Men of the Year 2024', image: '/portfolio/magazine-covers/SaveVid.Net_469257802_18478644646027380_1905629404697638516_n.jpg', alt: 'Capa da GQ Brasil com João Guilherme', story: ['/portfolio/joao-guilherme.jpg'] },
  { title: 'Fabio Porchat', publication: 'GQ Brasil · Creativity Awards 2025', image: '/portfolio/magazine-covers/SaveVid.Net_497871643_18509216137027380_8014493567002082460_n.jpg', alt: 'Capa da GQ Brasil com Fabio Porchat', story: [] },
  { title: 'Arthur Paek', publication: "L’Officiel Hommes Brasil", image: '/portfolio/magazine-covers/SaveVid.Net_502357379_18518750551027380_5881339525250106580_n.jpg', alt: 'Capa da L’Officiel Hommes Brasil com Arthur Paek', story: ['/portfolio/instagram-full/arthur-paek-editorial.jpg'] },
  { title: 'Pedro Novaes', publication: "Harper’s Bazaar Man Brasil", image: '/portfolio/magazine-covers/snapinsta-1788229422354.jpg', alt: 'Capa da Harper’s Bazaar Man Brasil com Pedro Novaes', story: [] },
  { title: 'Rodrigo Santoro', publication: 'Harper’s Bazaar Man · Poesia de Verão', image: '/portfolio/magazine-covers/snapinsta-1788229453666.jpg', alt: 'Capa da Harper’s Bazaar Man com Rodrigo Santoro', story: ['/portfolio/instagram-full/rodrigo-santoro.jpg'] },
  { title: 'Wagner Moura', publication: 'GQ Brasil · Men of the Year · Dior', image: '/portfolio/magazine-covers/03-gq-dior.jpg', alt: 'Capa da GQ Brasil com Wagner Moura', story: ['/portfolio/instagram-full/wagner-moura.jpg'] },
  { title: 'Chay Suede', publication: 'GQ Brasil · Gucci', image: '/portfolio/magazine-covers/04-gq-gucci-chay.jpg', alt: 'Capa da GQ Brasil com Chay Suede', story: ['/portfolio/chay-2026/01-chay-hermes-prada.jpg'] },
  { title: 'Kaká', publication: 'GQ Brasil · Dolce & Gabbana', image: '/portfolio/magazine-covers/01-gq-dolce-gabbana.jpg', alt: 'Capa da GQ Brasil com Kaká', story: ['/portfolio/instagram-full/kaka.jpg'] },
  { title: 'Kaká', publication: 'GQ Brasil · Capa alternativa', image: '/portfolio/magazine-covers/02-gq-dolce-gabbana.jpg', alt: 'Capa alternativa da GQ Brasil com Kaká', story: ['/portfolio/instagram-full/kaka.jpg'] },
];

export default function Home() {
  const [viewMode, setViewMode] = useState<'grid' | 'large'>('grid');
  const [openCover, setOpenCover] = useState<number | null>(null);

  return (
    <main className={`site-view site-view-${viewMode}`}>
      <header className="site-header">
        <a className="wordmark" href="#top">THIAGO BIAGI</a>
        <nav aria-label="Navegação principal">
          <a href="#work">Portfolio</a><a href="#work">Celebrities</a><a href="#styling-study">Styling Study</a><a href="#motion">Motion</a><a href="#magazine">Magazine</a><a href="#about">Sobre</a><a href="#contact">Contato</a>
        </nav>
        <div className="view-options" aria-label="Opções de visualização">
          <button type="button" className={viewMode === 'grid' ? 'active' : ''} aria-pressed={viewMode === 'grid'} onClick={() => setViewMode('grid')}>Grid</button>
          <i>/</i>
          <button type="button" className={viewMode === 'large' ? 'active' : ''} aria-pressed={viewMode === 'large'} onClick={() => setViewMode('large')}>Large</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-editorial-copy">
          <div className="hero-topline"><span>Fashion editor &amp; creative consultant</span><span>São Paulo · 2026</span></div>
          <div className="hero-bottom">
            <h1>Thiago Biagi</h1>
            <div className="hero-details">
              <div><strong>Inside</strong><span>Celebrity styling</span><span>Editorial stories</span><span>Magazine covers</span></div>
              <div><strong>Bookings</strong><a href="mailto:thiago.biagi@onyn.com.br">thiago.biagi@onyn.com.br</a><a href="https://www.instagram.com/thiagobiagi/" target="_blank" rel="noreferrer">Instagram @thiagobiagi ↗</a><a href="https://www.tiktok.com/@thiagobiagi" target="_blank" rel="noreferrer">TikTok @thiagobiagi ↗</a></div>
            </div>
          </div>
        </div>
        <figure className="hero-editorial-image">
          <div className="hero-campaign-slides">
            {marinaHeroImages.map((image, index) => <img src={image} alt={`Marina Ruy Barbosa para Marie Claire Brasil, destaque ${index + 1}`} key={image} />)}
          </div>
          <figcaption>Marina Ruy Barbosa / Marie Claire Brasil</figcaption>
        </figure>
      </section>

      <section className="marina-covers-post" aria-labelledby="marina-covers-title">
        <div className="section-heading"><p id="marina-covers-title">Marina Ruy Barbosa / Marie Claire Brasil</p><span>Setembro 2026</span></div>
        <div className="marina-covers-pair">
          <figure><img src="/portfolio/magazine-covers/marina-ruy-barbosa-marie-claire-setembro-2026.jpg" alt="Primeira capa da Marie Claire Brasil com Marina Ruy Barbosa" /><figcaption><span>01</span><p>Marina Ruy Barbosa / Marie Claire Brasil</p></figcaption></figure>
          <figure><img src="/portfolio/magazine-covers/marina-ruy-barbosa-marie-claire-setembro-2026-alt.jpg" alt="Segunda capa da Marie Claire Brasil com Marina Ruy Barbosa" /><figcaption><span>02</span><p>Marina Ruy Barbosa / Marie Claire Brasil</p></figcaption></figure>
        </div>
        <div className="marina-editorial-strip">
          <figure><img src="/portfolio/magazine-covers/marina-editorial-01.jpg" alt="Marina Ruy Barbosa em ensaio para a Marie Claire Brasil" /><figcaption>Ensaio / Marie Claire Brasil</figcaption></figure>
          <figure><img src="/portfolio/magazine-covers/marina-editorial-02.jpg" alt="Retrato editorial de Marina Ruy Barbosa" /><figcaption>Fotos / Ivan Erick — Thinkers Mgmt</figcaption></figure>
          <figure><img src="/portfolio/magazine-covers/marina-editorial-03.jpg" alt="Marina Ruy Barbosa em retrato do ensaio de setembro de 2026" /><figcaption>Setembro 2026</figcaption></figure>
        </div>
      </section>

      <section className="image-wall" aria-label="Galeria editorial">
        {galleryImages.map(([src, alt], index) => (
          <figure key={src} className={`wall-image wall-image-${index + 1}`}>
            <img src={src} alt={alt} loading={index < 4 ? 'eager' : 'lazy'} />
            <figcaption><span>{String(index + 1).padStart(2, '0')}</span><p>{alt}</p></figcaption>
          </figure>
        ))}
      </section>

      <section className="work" id="work">
        <div className="section-heading"><p>Celebrity portfolio</p><span>01 — 10</span></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image"><img src={project.image} alt={project.alt} loading="lazy" /></div>
              <div className="project-meta">
                <span>{project.number}</span>
                <div><h3>{project.title}</h3><p>{project.subtitle}</p></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="lookbook" id="styling-study" aria-labelledby="lookbook-title">
        <div className="section-heading"><p id="lookbook-title">Chay Suede / Styling study</p><span>01 — 08</span></div>
        <div className="lookbook-grid">
          {chayLooks.map(([image, brands], index) => (
            <figure key={image}>
              <img src={image} alt={`Chay Suede usando ${brands}`} loading="lazy" />
              <figcaption><span>{String(index + 1).padStart(2, '0')}</span><p>{brands}</p></figcaption>
            </figure>
          ))}
        </div>
        <aside className="lookbook-press">
          <span>Chay Suede / Fashion context</span>
          <p>Além da atuação, Chay desenvolve uma marca de moda autoral ligada à memória de seu avô.</p>
          <a href="https://oglobo.globo.com/ela/gente/noticia/2026/08/09/chay-suede-fala-sobre-paternidade-fe-e-marca-de-moda-que-homenageia-o-avo.ghtml" target="_blank" rel="noreferrer">Leia no O Globo ↗</a>
        </aside>
      </section>

      <section className="agnes-study" id="agnes-mondepars" aria-labelledby="agnes-title">
        <div className="section-heading"><p id="agnes-title">Agnes Nunes / Mondepars</p><span>01 — 03</span></div>
        <div className="agnes-grid">
          <figure className="agnes-film">
            <video src="/portfolio/agnes-mondepars/film.mp4" autoPlay muted loop playsInline controls preload="metadata" aria-label="Fashion film de Agnes Nunes usando Mondepars" />
            <figcaption>01 / Fashion film</figcaption>
          </figure>
          <figure><img src="/portfolio/agnes-mondepars/01.jpg" alt="Agnes Nunes usando Mondepars em retrato de perfil" loading="lazy" /><figcaption>02 / Agnes Nunes · Mondepars</figcaption></figure>
          <figure><img src="/portfolio/agnes-mondepars/02.jpg" alt="Agnes Nunes usando Mondepars em retrato frontal" loading="lazy" /><figcaption>03 / Agnes Nunes · Mondepars</figcaption></figure>
        </div>
      </section>

      <section className="miss-dior-study" id="miss-dior" aria-labelledby="miss-dior-title">
        <div className="section-heading"><p id="miss-dior-title">Miss Dior / Editorial</p><span>01 — 12</span></div>
        <div className="miss-dior-grid">
          {missDiorFilms.map((film, index) => (
            <figure className="miss-dior-film" key={film}>
              <video src={film} autoPlay muted loop playsInline controls preload="metadata" aria-label={`Fashion film Miss Dior ${index + 1}`} />
              <figcaption>{String(index + 1).padStart(2, '0')} / Fashion film</figcaption>
            </figure>
          ))}
          {missDiorImages.map(([image, alt], index) => (
            <figure key={image}>
              <img src={image} alt={alt} loading="lazy" />
              <figcaption>{String(index + 5).padStart(2, '0')} / Miss Dior</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="piet-study" id="piet" aria-labelledby="piet-title">
        <div className="section-heading"><p id="piet-title">PIET + Riachuelo / Campaign study</p><span>01 — 20</span></div>
        <div className="piet-grid">
          {pietRiachueloFilms.map((film, index) => (
            <figure className="piet-film" key={film}>
              <video src={film} autoPlay muted loop playsInline controls preload="metadata" aria-label={`Fashion film PIET + Riachuelo ${index + 1}`} />
              <figcaption>{String(index + 1).padStart(2, '0')} / Fashion film</figcaption>
            </figure>
          ))}
          {pietRiachueloImages.map(([image, alt], index) => (
            <figure key={image}>
              <img src={image} alt={alt} loading="lazy" />
              <figcaption>{String(index + 3).padStart(2, '0')} / Campaign</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="chapter-study" id="capitulo-final" aria-labelledby="chapter-title">
        <div className="section-heading"><p id="chapter-title">Capítulo Final / Numéro Netherlands</p><span>01 — 09</span></div>
        <div className="chapter-grid">
          {capituloFinal.map(([image, alt], index) => (
            <figure key={image}>
              <img src={image} alt={alt} loading="lazy" />
              <figcaption>{String(index + 1).padStart(2, '0')} / Editorial</figcaption>
            </figure>
          ))}
        </div>
        <details className="chapter-credits-panel">
          <summary><span>Créditos</span><span>Ver ficha técnica +</span></summary>
          <div className="chapter-credits">
            <div><p>Creative director <a href="https://www.instagram.com/amaurineto_/" target="_blank" rel="noreferrer">@amaurineto_</a></p><p>DOP &amp; film colorist <a href="https://www.instagram.com/pedropmaciel/" target="_blank" rel="noreferrer">@pedropmaciel</a></p><p>Photography <a href="https://www.instagram.com/hudsonrennan/" target="_blank" rel="noreferrer">@hudsonrennan</a></p><p>Styling <a href="https://www.instagram.com/thiagobiagi/" target="_blank" rel="noreferrer">@thiagobiagi</a></p><p>Hair <a href="https://www.instagram.com/shady_jordan/" target="_blank" rel="noreferrer">@shady_jordan</a></p><p>Makeup <a href="https://www.instagram.com/holland.vision/" target="_blank" rel="noreferrer">@holland.vision</a></p></div>
            <div><p>Set designer <a href="https://www.instagram.com/cenna_visualecenografia/" target="_blank" rel="noreferrer">@cenna_visualecenografia</a></p><p>Studio <a href="https://www.instagram.com/studio_photo_3/" target="_blank" rel="noreferrer">@studio_photo_3</a></p><p>Models <a href="https://www.instagram.com/anick_chan/" target="_blank" rel="noreferrer">@anick_chan</a>, <a href="https://www.instagram.com/fabiomori_/" target="_blank" rel="noreferrer">@fabiomori_</a>, <a href="https://www.instagram.com/maximorodriguezzz/" target="_blank" rel="noreferrer">@maximorodriguezzz</a></p><p>Agency <a href="https://www.instagram.com/waymodel/" target="_blank" rel="noreferrer">@waymodel</a></p><p>Background <a href="https://www.instagram.com/iurilis/" target="_blank" rel="noreferrer">@iurilis</a></p><p>Photography assistant <a href="https://www.instagram.com/fernandobentes/" target="_blank" rel="noreferrer">@fernandobentes</a></p><p>Retouching <a href="https://www.instagram.com/vetroretouching/" target="_blank" rel="noreferrer">@vetroretouching</a></p></div>
            <div><p>Styling assistance <a href="https://www.instagram.com/lauraduter/" target="_blank" rel="noreferrer">@lauraduter</a>, <a href="https://www.instagram.com/guilhermo_lima/" target="_blank" rel="noreferrer">@guilhermo_lima</a></p><p>Hair assistance <a href="https://www.instagram.com/kevinkinno/" target="_blank" rel="noreferrer">@kevinkinno</a></p><p>1AC <a href="https://www.instagram.com/hanhan.h4n/" target="_blank" rel="noreferrer">@hanhan.h4n</a></p><p>Film editors <a href="https://www.instagram.com/serzi.o/" target="_blank" rel="noreferrer">@serzi.o</a>, <a href="https://www.instagram.com/denyscoast/" target="_blank" rel="noreferrer">@denyscoast</a></p><p>Sound design <a href="https://www.instagram.com/baroqueangel_/" target="_blank" rel="noreferrer">@baroqueangel_</a></p><p>Set designer assistance <a href="https://www.instagram.com/danidibphoto/" target="_blank" rel="noreferrer">@danidibphoto</a>, <a href="https://www.instagram.com/patrickkferreira/" target="_blank" rel="noreferrer">@patrickkferreira</a>, <a href="https://www.instagram.com/bruno.alves8618/" target="_blank" rel="noreferrer">@bruno.alves8618</a></p></div>
          </div>
        </details>
      </section>

      <section className="motion-clean" id="motion" aria-label="Fashion films">
        <div className="section-heading"><p>Motion / Fashion films</p><span>01 — 08</span></div>
        <div className="motion-clean-grid">
          {motion.map(([code, image], index) => <a href={`https://www.instagram.com/reel/${code}/`} target="_blank" rel="noreferrer" className="motion-clean-card" key={code}><figure><img src={image} alt={`Fashion film ${index + 1}`} loading="lazy" /><span>Play film ↗</span></figure><p>{String(index + 1).padStart(2, '0')} / Motion</p></a>)}
        </div>
      </section>

      <section className="magazine" id="magazine" aria-label="Capas de revista">
        <div className="section-heading"><p>Magazine / Covers</p><span>01 — 10</span></div>
        <div className="magazine-grid">
          {covers.map((cover, index) => <button type="button" className="cover-button" onClick={() => setOpenCover(index)} aria-label={`Abrir editorial de ${cover.title}`} key={`${cover.title}-${index}`}><figure><img src={cover.image} alt={cover.alt} loading="lazy" /><figcaption><span>{String(index + 1).padStart(2, '0')}</span><h3>{cover.title}</h3><p>{cover.publication} · Ver editorial ↗</p></figcaption></figure></button>)}
        </div>
      </section>

      {openCover !== null && (
        <div className="cover-lightbox" role="dialog" aria-modal="true" aria-label={`Editorial de ${covers[openCover].title}`} onClick={() => setOpenCover(null)}>
          <button type="button" className="lightbox-close" onClick={() => setOpenCover(null)}>Fechar ×</button>
          <div className="lightbox-story" onClick={(event) => event.stopPropagation()}>
            <header><span>{covers[openCover].publication}</span><h2>{covers[openCover].title}</h2></header>
            <img className="lightbox-cover" src={covers[openCover].image} alt={covers[openCover].alt} />
            {covers[openCover].story.map((image, index) => <img src={image} alt={`${covers[openCover].title}, página editorial ${index + 1}`} key={image} />)}
          </div>
        </div>
      )}

      <section className="about" id="about">
        <figure><img src="/portfolio/thiago-about-editorial.jpg" alt="Thiago Biagi em retrato preto e branco" loading="lazy" /></figure>
        <div className="about-copy">
          <div className="about-heading-row"><p>Thiago Biagi / About</p><span>São Paulo</span></div>
          <h2>Thiago Biagi é stylist, editor de moda e consultor criativo, com trabalho voltado à construção de narrativas visuais que exploram identidade, memória e expressão através da moda.</h2>
          <div className="about-text">
            <p>Com base em São Paulo e atuação entre Brasil, Paris e Milão, desenvolve projetos editoriais, de imagem e consultoria criativa, conectando moda, cultura e comportamento.</p>
            <p>Seu trabalho combina pesquisa, repertório e direção de imagem na construção de uma linguagem visual contemporânea e autoral.</p>
          </div>
          <a className="text-link" href="https://vogue.globo.com/Banco-de-talentos/noticia/2017/06/banco-de-talentos-you-dont-have-mean-it.html" target="_blank" rel="noreferrer">Leia o perfil na Vogue ↗</a>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Bookings / Contact</p>
        <div className="contact-row">
          <a href="mailto:thiago.biagi@onyn.com.br">thiago.biagi@onyn.com.br ↗</a>
          <a href="https://www.instagram.com/thiagobiagi/" target="_blank" rel="noreferrer">@thiagobiagi ↗</a>
          <a href="https://www.tiktok.com/@thiagobiagi" target="_blank" rel="noreferrer">TikTok @thiagobiagi ↗</a>
          <p>Beltrame Management<br />São Paulo, Brasil</p>
        </div>
      </section>

      <footer><span>© {new Date().getFullYear()} Thiago Biagi</span><span>Fashion stylist</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
"use client";

import { useState } from 'react';
