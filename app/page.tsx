const projects = [
  { number: '01', title: 'Chay Suede', subtitle: 'Celebrity styling · Prada · Hermès', image: '/portfolio/chay-suede.jpg', alt: 'Chay Suede com styling de Thiago Biagi', note: 'Styling' },
  { number: '02', title: 'João Guilherme', subtitle: 'Prime Video · Brioni · Cartier', image: '/portfolio/joao-guilherme.jpg', alt: 'João Guilherme com styling de Thiago Biagi', note: 'Celebrity styling' },
];

const galleryImages = [
  ['/portfolio/instagram/borsoi-dior.jpg', 'Editorial masculino com styling de Thiago Biagi'],
  ['/portfolio/instagram/dior-hotel.jpg', 'Bastidores de produção Dior em Paris'],
  ['/portfolio/instagram/numero-editorial.jpg', 'Editorial de moda para Numéro Netherlands'],
  ['/portfolio/instagram/joao-vicente-gala.jpg', 'João Vicente de Castro em styling de gala'],
  ['/portfolio/instagram/fucking-young-editorial.jpg', 'Editorial masculino para Fucking Young'],
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
          <p className="kicker">Fashion Editor · Creative Consultant · São Paulo</p>
          <h1><span>Thiago Biagi</span></h1>
          <a href="#work" className="hero-link">View selected work ↓</a>
        </div>
        <figure className="hero-image">
          <div className="hero-panel hero-panel-left"><img src="/portfolio/instagram/numero-editorial.jpg" alt="Editorial de moda para Numéro Netherlands" /><span>Numéro Netherlands / Editorial</span></div>
          <div className="hero-panel hero-panel-right"><img src="/portfolio/instagram/borsoi-dior.jpg" alt="Editorial masculino com styling de Thiago Biagi" /><span>Dior / Styling</span></div>
        </figure>
      </section>

      <section className="image-wall" aria-label="Galeria editorial">
        {galleryImages.map(([src, alt], index) => <figure key={src} className={`wall-image wall-image-${index + 1}`}><img src={src} alt={alt} loading={index < 4 ? 'eager' : 'lazy'} /></figure>)}
      </section>

      <section className="work" id="work">
        <div className="section-heading"><p>Selected work</p><span>01 — 02</span></div>
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

      <section className="magazine" aria-label="Capas de revista">
        <div className="section-heading"><p>Magazine / Covers</p><span>01 — 02</span></div>
        <div className="magazine-grid">
          <figure><img src="/portfolio/wagner-gq.jpg" alt="Capa da GQ Brasil com Wagner Moura" loading="lazy" /><figcaption><span>01</span><h3>Wagner Moura</h3><p>GQ Brasil · MOTY</p></figcaption></figure>
          <figure><img src="/portfolio/kaka-gq.jpg" alt="Capa da GQ Brasil com Kaká" loading="lazy" /><figcaption><span>02</span><h3>Kaká</h3><p>GQ Brasil · Cover story</p></figcaption></figure>
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
