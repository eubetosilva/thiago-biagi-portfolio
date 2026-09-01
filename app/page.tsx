const projects = [
  { number: '01', title: 'Chay Suede', subtitle: 'Celebrity styling · Prada · Hermès', image: '/portfolio/chay-suede.jpg', alt: 'Chay Suede com styling de Thiago Biagi', note: 'Styling' },
  { number: '02', title: 'João Guilherme', subtitle: 'Prime Video · Brioni · Cartier', image: '/portfolio/joao-guilherme.jpg', alt: 'João Guilherme com styling de Thiago Biagi', note: 'Celebrity styling' },
  { number: '03', title: 'Wagner Moura', subtitle: 'GQ Brasil · Dior', image: '/portfolio/instagram-full/wagner-moura.jpg', alt: 'Wagner Moura para GQ Brasil', note: 'Cover story' },
  { number: '04', title: 'Kaká', subtitle: 'GQ Brasil · Fashion editorial', image: '/portfolio/instagram-full/kaka.jpg', alt: 'Kaká para GQ Brasil', note: 'Celebrity styling' },
  { number: '05', title: 'Rodrigo Santoro', subtitle: 'Red carpet · Evening tailoring', image: '/portfolio/instagram-full/rodrigo-santoro.jpg', alt: 'Rodrigo Santoro em styling de gala', note: 'Celebrity styling' },
  { number: '06', title: 'Agnes Nunes', subtitle: 'Music · Fashion portrait', image: '/portfolio/instagram-full/agnes-nunes.jpg', alt: 'Agnes Nunes em editorial musical', note: 'Image' },
  { number: '07', title: 'João Vicente', subtitle: 'Dries Van Noten · Omega', image: '/portfolio/instagram/joao-vicente-gala.jpg', alt: 'João Vicente de Castro em styling de gala', note: 'Celebrity styling' },
  { number: '08', title: 'Arthur Paek', subtitle: "L'Officiel Hommes Brasil", image: '/portfolio/instagram-full/arthur-paek-editorial.jpg', alt: 'Arthur Paek em editorial de alfaiataria', note: 'Celebrity styling' },
];

const galleryImages = [
  ['/portfolio/instagram-full/dalj.jpg', 'Editorial masculino contemporâneo'],
  ['/portfolio/instagram-full/borsoi.jpg', 'Editorial masculino para Dior'],
  ['/portfolio/instagram-full/julio-reis.jpg', 'Retrato em linguagem Polaroid'],
  ['/portfolio/instagram-full/fucking-young.jpg', 'Editorial para Fucking Young'],
  ['/portfolio/instagram-full/numero.jpg', 'Editorial para Numéro Netherlands'],
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
  ['/portfolio/instagram-full/armor-editorial.jpg', 'Editorial masculino com armadura'],
];

const motion = [
  ['Db0nUrmuKC-', '/portfolio/motion/01.jpg'], ['DbOUSBKu6LA', '/portfolio/motion/02.jpg'],
  ['DaNiK5JIWu_', '/portfolio/motion/03.jpg'], ['DZn3Tv6glDK', '/portfolio/motion/04.jpg'],
  ['DYPPqFGuKx3', '/portfolio/motion/05.jpg'], ['DXzx-KjxwrN', '/portfolio/motion/06.jpg'],
  ['DRicB_WDh5I', '/portfolio/motion/07.jpg'], ['DNY97QMOqxg', '/portfolio/motion/08.jpg'],
];

const covers = [
  { title: 'Wagner Moura', publication: 'GQ Brasil · MOTY', image: '/portfolio/wagner-gq.jpg', alt: 'Capa da GQ Brasil com Wagner Moura' },
  { title: 'Kaká', publication: 'GQ Brasil · Cover story', image: '/portfolio/kaka-gq.jpg', alt: 'Capa da GQ Brasil com Kaká' },
  { title: 'Kaká', publication: 'GQ Brasil · Fashion issue', image: '/portfolio/instagram-full/kaka.jpg', alt: 'Kaká em editorial para GQ Brasil' },
  { title: 'Harper’s Bazaar Men', publication: 'Dior · Fashion story', image: '/portfolio/instagram-full/bazaar.jpg', alt: 'Editorial para Harper’s Bazaar Men' },
  { title: 'Arthur Paek', publication: "L’Officiel Hommes Brasil", image: '/portfolio/instagram-full/arthur-paek.jpg', alt: 'Arthur Paek para L’Officiel Hommes Brasil' },
  { title: 'Numéro Netherlands', publication: 'International editorial', image: '/portfolio/instagram-full/numero.jpg', alt: 'Editorial para Numéro Netherlands' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top">THIAGO BIAGI</a>
        <nav aria-label="Navegação principal">
          <a href="#work">Portfolio</a><a href="#about">Thiago Biagi</a><a href="#contact">Contact</a>
        </nav>
        <a className="instagram" href="https://www.instagram.com/thiagobiagi/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </header>

      <section className="hero" id="top">
        <div className="cover-photo cover-collage" aria-label="Seleção de trabalhos de Thiago Biagi">
          <figure><img src="/portfolio/instagram-full/wagner-moura.jpg" alt="Wagner Moura para GQ Brasil" /><figcaption>Wagner Moura / GQ</figcaption></figure>
          <figure><img src="/portfolio/instagram-full/arthur-paek-editorial.jpg" alt="Arthur Paek em editorial de alfaiataria" /><figcaption>Arthur Paek / L’Officiel</figcaption></figure>
          <figure><img src="/portfolio/instagram-full/agnes-nunes.jpg" alt="Agnes Nunes em editorial musical" /><figcaption>Agnes Nunes / Music</figcaption></figure>
          <figure><img src="/portfolio/instagram-full/armor-editorial.jpg" alt="Editorial masculino com armadura" /><figcaption>Fashion story / Editorial</figcaption></figure>
        </div>
        <div className="cover-story">
          <div className="issue-line"><span>Portfolio No. 01</span><span>São Paulo · 2026</span></div>
          <div className="cover-title"><p>Fashion editor<br />&amp; creative consultant</p><h1>Thiago<br /><em>Biagi</em></h1></div>
          <div className="cover-footer">
            <div><span>Inside</span><p>Celebrity styling<br />Editorial stories<br />Magazine covers</p></div>
            <figure><img src="/portfolio/instagram/borsoi-dior.jpg" alt="Editorial masculino com styling de Thiago Biagi" /><figcaption>Dior / Styling</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="image-wall" aria-label="Galeria editorial">
        {galleryImages.map(([src, alt], index) => <figure key={src} className={`wall-image wall-image-${index + 1}`}><img src={src} alt={alt} loading={index < 4 ? 'eager' : 'lazy'} /></figure>)}
      </section>

      <section className="work" id="work">
        <div className="section-heading"><p>Celebrity portfolio</p><span>01 — 08</span></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image"><img src={project.image} alt={project.alt} loading="lazy" /></div>
              <div className="project-meta">
                <span>{project.number}</span>
                <div><h3>{project.title}</h3><p>{project.subtitle}</p><span className="project-note">{project.note}</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="motion-clean" aria-label="Fashion films">
        <div className="section-heading"><p>Motion / Fashion films</p><span>01 — 08</span></div>
        <div className="motion-clean-grid">
          {motion.map(([code, image], index) => <a href={`https://www.instagram.com/reel/${code}/`} target="_blank" rel="noreferrer" className="motion-clean-card" key={code}><figure><img src={image} alt={`Fashion film ${index + 1}`} loading="lazy" /><span>Play film ↗</span></figure><p>{String(index + 1).padStart(2, '0')} / Motion</p></a>)}
        </div>
      </section>

      <section className="magazine" aria-label="Capas de revista">
        <div className="section-heading"><p>Magazine / Covers</p><span>01 — 06</span></div>
        <div className="magazine-grid">
          {covers.map((cover, index) => <figure key={`${cover.title}-${index}`}><img src={cover.image} alt={cover.alt} loading="lazy" /><figcaption><span>{String(index + 1).padStart(2, '0')}</span><h3>{cover.title}</h3><p>{cover.publication}</p></figcaption></figure>)}
        </div>
      </section>

      <section className="about" id="about">
        <figure><img src="/portfolio/thiago-portrait-2026.jpg" alt="Thiago Biagi em retrato recente" loading="lazy" /></figure>
        <div className="about-copy">
          <p className="eyebrow">Thiago Biagi / About</p>
          <h2>Fashion editor e creative consultant brasileiro, formado em jornalismo e fascinado pela liberdade criativa das décadas de 70 e 80.</h2>
          <div className="about-text">
            <p>Sua trajetória foi construída ao lado de importantes editores de moda do Brasil, entre eles Renata Correa, Pedro Sales e Flavia Lafer.</p>
            <p>Em seu trabalho, Thiago combina diferentes momentos, estampas, texturas e cores — atravessando referências masculinas e femininas sem limitar a imagem por gênero.</p>
          </div>
          <a className="text-link" href="https://vogue.globo.com/Banco-de-talentos/noticia/2017/06/banco-de-talentos-you-dont-have-mean-it.html" target="_blank" rel="noreferrer">Leia o perfil na Vogue ↗</a>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Bookings / Contact</p>
        <h2>Let’s make<br /><em>an image.</em></h2>
        <div className="contact-row">
          <a href="mailto:thiago.biagi@onyn.com.br">thiago.biagi@onyn.com.br ↗</a>
          <a href="https://www.instagram.com/thiagobiagi/" target="_blank" rel="noreferrer">@thiagobiagi ↗</a>
          <p>Beltrame Management<br />São Paulo, Brasil</p>
        </div>
      </section>

      <footer><span>© {new Date().getFullYear()} Thiago Biagi</span><span>Fashion stylist</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
