const projects = [
  { number: '01', title: 'Wagner Moura', subtitle: 'GQ Brasil · Bob Wolfenson · Dior', image: '/portfolio/wagner-gq.jpg', alt: 'Wagner Moura para GQ Brasil', href: 'https://www.instagram.com/thiagobiagi/p/DRevkVQjt6l/', note: 'Golden Globe winner · Oscar nominee' },
  { number: '02', title: 'Kaká', subtitle: 'GQ Brasil · Franco Amendola', image: '/portfolio/kaka-gq.jpg', alt: 'Kaká para GQ Brasil', href: 'https://www.instagram.com/thiagobiagi/p/DYFSITtDuPU/', note: 'Cover story' },
  { number: '03', title: 'Chay Suede', subtitle: 'Celebrity styling · Prada · Hermès', image: '/portfolio/chay-suede.jpg', alt: 'Chay Suede com styling de Thiago Biagi', href: 'https://www.instagram.com/thiagobiagi/p/Db_cJNJlq5u/', note: 'Styling' },
  { number: '04', title: 'João Guilherme', subtitle: 'Prime Video · Brioni · Cartier', image: '/portfolio/joao-guilherme.jpg', alt: 'João Guilherme com styling de Thiago Biagi', href: 'https://www.instagram.com/thiagobiagi/p/DbboPrpls1V/', note: 'Celebrity styling' },
  { number: '05', title: 'Editorial', subtitle: 'Fashion stories · Archive', image: '/portfolio/e391254f4b6ce102.jpg', alt: 'Editorial com Marcela Fetter', href: 'https://www.thiagobiagi.com/galeria-1', note: 'Selected archive' },
  { number: '06', title: 'Magazine', subtitle: 'Print & digital · Archive', image: '/portfolio/d9309bc460f95a72.jpg', alt: 'Editorial para Victor Magazine Men', href: 'https://www.thiagobiagi.com/magazine', note: 'Selected archive' },
];

const galleryImages = [
  ['/portfolio/kaka-gq.jpg', 'Kaká para GQ Brasil'], ['/portfolio/chay-suede.jpg', 'Chay Suede em editorial'],
  ['/portfolio/joao-guilherme.jpg', 'João Guilherme em editorial'], ['/portfolio/wagner-gq.jpg', 'Wagner Moura para GQ Brasil'],
  ['/portfolio/1f3c396b1d80843a.jpg', 'Editorial de moda'], ['/portfolio/011a9b1f61d3e823.jpg', 'Editorial selecionado'],
  ['/portfolio/1462be1feeff08a9.jpg', 'Editorial selecionado'], ['/portfolio/516f438bf75f3e34.jpg', 'Editorial selecionado'],
  ['/portfolio/96f56d8e6bf3cd13.jpg', 'Editorial selecionado'], ['/portfolio/9efc17a7fad74256.jpg', 'Editorial selecionado'],
  ['/portfolio/a649776885d16b65.jpg', 'Editorial selecionado'], ['/portfolio/b43569d002582df1.jpg', 'Editorial selecionado'],
  ['/portfolio/e391254f4b6ce102.jpg', 'Fashion story'], ['/portfolio/d9309bc460f95a72.jpg', 'Magazine story'],
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
        <div className="hero-copy">
          <p className="kicker">Fashion Editor · Creative Consultant · Brazil</p>
          <h1><span>Thiago Biagi</span></h1>
        </div>
        <figure className="hero-image">
          <div className="hero-slide"><img className="slide-backdrop" src="/portfolio/kaka-gq.jpg" alt="" aria-hidden="true" /><img className="slide-subject" src="/portfolio/kaka-gq.jpg" alt="Kaká para GQ Brasil" /><span>Kaká / GQ Brasil</span></div>
          <div className="hero-slide"><img className="slide-backdrop" src="/portfolio/chay-suede.jpg" alt="" aria-hidden="true" /><img className="slide-subject" src="/portfolio/chay-suede.jpg" alt="Chay Suede com styling de Thiago Biagi" /><span>Chay Suede / Styling</span></div>
          <div className="hero-slide"><img className="slide-backdrop" src="/portfolio/joao-guilherme.jpg" alt="" aria-hidden="true" /><img className="slide-subject" src="/portfolio/joao-guilherme.jpg" alt="João Guilherme com styling de Thiago Biagi" /><span>João Guilherme / Prime Video</span></div>
          <div className="hero-slide"><img className="slide-backdrop" src="/portfolio/1f3c396b1d80843a.jpg" alt="" aria-hidden="true" /><img className="slide-subject" src="/portfolio/1f3c396b1d80843a.jpg" alt="Izabel Goulart em editorial de moda" /><span>Editorial / Archive</span></div>
        </figure>
      </section>

      <section className="intro" aria-label="Apresentação">
        <p className="eyebrow">Creative direction / Styling</p>
        <h2>Fashion as attitude.<br /><em>Image as narrative.</em></h2>
      </section>

      <section className="image-wall" aria-label="Galeria editorial">
        {galleryImages.map(([src, alt], index) => <figure key={src} className={`wall-image wall-image-${index + 1}`}><img src={src} alt={alt} loading={index < 4 ? 'eager' : 'lazy'} /></figure>)}
      </section>

      <section className="work" id="work">
        <div className="section-heading"><p>Selected work</p><span>01 — 06</span></div>
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
