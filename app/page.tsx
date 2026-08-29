const projects = [
  { number: '01', title: 'Editorial', subtitle: 'Fashion stories', image: '/portfolio/e391254f4b6ce102.jpg', alt: 'Editorial com Marcela Fetter' },
  { number: '02', title: 'Celebrities', subtitle: 'Portraits & appearances', image: '/portfolio/9efc17a7fad74256.jpg', alt: 'Xênia França em produção para o Latin Grammy' },
  { number: '03', title: 'Magazine', subtitle: 'Print & digital', image: '/portfolio/d9309bc460f95a72.jpg', alt: 'Editorial para Victor Magazine Men' },
  { number: '04', title: 'Gallery', subtitle: 'Selected styling', image: '/portfolio/1f3c396b1d80843a.jpg', alt: 'Izabel Goulart em editorial de moda' },
  { number: '05', title: 'Diego Miguel', subtitle: 'Fashion editorial', image: '/portfolio/a649776885d16b65.jpg', alt: 'Diego Miguel em editorial de moda' },
  { number: '06', title: 'Archive', subtitle: 'Thiago Biagi style', image: '/portfolio/011a9b1f61d3e823.jpg', alt: 'Trabalho selecionado de styling de Thiago Biagi' },
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
          <p className="kicker">Stylist · São Paulo</p>
          <h1><span>Thiago</span><span>Biagi</span></h1>
          <div className="hero-note"><span>Fashion</span><span>Culture</span><span>Image</span></div>
        </div>
        <figure className="hero-image">
          <img src="/portfolio/e391254f4b6ce102.jpg" alt="Editorial de moda com styling de Thiago Biagi" />
          <figcaption>Selected work / Portfolio</figcaption>
        </figure>
        <a className="scroll" href="#work">Explore ↓</a>
      </section>

      <section className="intro" aria-label="Apresentação">
        <p className="eyebrow">Creative direction / Styling</p>
        <h2>Fashion as attitude.<br /><em>Image as narrative.</em></h2>
      </section>

      <section className="work" id="work">
        <div className="section-heading"><p>Selected work</p><span>01 — 06</span></div>
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

      <section className="about" id="about">
        <figure><img src="/portfolio/thiago-about.avif" alt="Thiago Biagi" loading="lazy" /></figure>
        <div className="about-copy">
          <p className="eyebrow">Thiago Biagi / About</p>
          <h2>Stylist brasileiro, formado em jornalismo e fascinado pela liberdade criativa das décadas de 70 e 80.</h2>
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
          <a href="mailto:thiago.biagi1@gmail.com">thiago.biagi1@gmail.com ↗</a>
          <a href="https://www.instagram.com/thiagobiagi/" target="_blank" rel="noreferrer">@thiagobiagi ↗</a>
          <p>São Paulo, Brasil</p>
        </div>
      </section>

      <footer><span>© {new Date().getFullYear()} Thiago Biagi</span><span>Fashion stylist</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
