const projects = [
  { number: '01', title: 'Wagner Moura', subtitle: 'GQ Brasil · Bob Wolfenson · Dior', image: '/portfolio/wagner-gq.jpg', alt: 'Wagner Moura para GQ Brasil', href: 'https://www.instagram.com/thiagobiagi/p/DRevkVQjt6l/', note: 'Golden Globe winner · Oscar nominee' },
  { number: '02', title: 'Kaká', subtitle: 'GQ Brasil · Franco Amendola', image: '/portfolio/kaka-gq.jpg', alt: 'Kaká para GQ Brasil', href: 'https://www.instagram.com/thiagobiagi/p/DYFSITtDuPU/', note: 'Cover story' },
  { number: '03', title: 'Chay Suede', subtitle: 'Celebrity styling · Prada · Hermès', image: '/portfolio/chay-suede.jpg', alt: 'Chay Suede com styling de Thiago Biagi', href: 'https://www.instagram.com/thiagobiagi/p/Db_cJNJlq5u/', note: 'Styling' },
  { number: '04', title: 'João Guilherme', subtitle: 'Prime Video · Brioni · Cartier', image: '/portfolio/joao-guilherme.jpg', alt: 'João Guilherme com styling de Thiago Biagi', href: 'https://www.instagram.com/thiagobiagi/p/DbboPrpls1V/', note: 'Celebrity styling' },
  { number: '05', title: 'Editorial', subtitle: 'Fashion stories · Archive', image: '/portfolio/e391254f4b6ce102.jpg', alt: 'Editorial com Marcela Fetter', href: 'https://www.thiagobiagi.com/galeria-1', note: 'Selected archive' },
  { number: '06', title: 'Magazine', subtitle: 'Print & digital · Archive', image: '/portfolio/d9309bc460f95a72.jpg', alt: 'Editorial para Victor Magazine Men', href: 'https://www.thiagobiagi.com/magazine', note: 'Selected archive' },
];

const reels = [
  { id: 'Db0nUrmuKC-', title: 'Chay Suede', subtitle: 'Brioni · Cartier' },
  { id: 'DbOUSBKu6LA', title: 'Marcello & Pedro Novaes', subtitle: 'Democrata · BTS' },
  { id: 'DaNiK5JIWu_', title: 'P.Andrade — Sagrado', subtitle: 'SS27 · Paris Fashion Week' },
  { id: 'DZn3Tv6glDK', title: 'Numero Netherlands', subtitle: 'Fashion film' },
  { id: 'DYPPqFGuKx3', title: 'Kaká', subtitle: 'GQ Brasil · Cover story' },
  { id: 'DXzx-KjxwrN', title: 'Pedro Novaes', subtitle: 'Bazaar Brasil · Cover story' },
  { id: 'DRicB_WDh5I', title: 'Wagner Moura', subtitle: 'GQ Brasil · MOTY 2025' },
  { id: 'DNY97QMOqxg', title: 'Jhona Burjack', subtitle: 'Fucking Young · Behind the scenes' },
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
          <h1><span>Thiago</span><span>Biagi</span></h1>
          <div className="hero-note"><span>Fashion</span><span>Culture</span><span>Image</span></div>
        </div>
        <figure className="hero-image">
          <div className="hero-slide"><img className="slide-backdrop" src="/portfolio/kaka-gq.jpg" alt="" aria-hidden="true" /><img className="slide-subject" src="/portfolio/kaka-gq.jpg" alt="Kaká para GQ Brasil" /><span>Kaká / GQ Brasil</span></div>
          <div className="hero-slide"><img className="slide-backdrop" src="/portfolio/chay-suede.jpg" alt="" aria-hidden="true" /><img className="slide-subject" src="/portfolio/chay-suede.jpg" alt="Chay Suede com styling de Thiago Biagi" /><span>Chay Suede / Styling</span></div>
          <div className="hero-slide"><img className="slide-backdrop" src="/portfolio/joao-guilherme.jpg" alt="" aria-hidden="true" /><img className="slide-subject" src="/portfolio/joao-guilherme.jpg" alt="João Guilherme com styling de Thiago Biagi" /><span>João Guilherme / Prime Video</span></div>
          <div className="hero-slide"><img className="slide-backdrop" src="/portfolio/1f3c396b1d80843a.jpg" alt="" aria-hidden="true" /><img className="slide-subject" src="/portfolio/1f3c396b1d80843a.jpg" alt="Izabel Goulart em editorial de moda" /><span>Editorial / Archive</span></div>
        </figure>
        <a className="scroll" href="#work">Explore ↓</a>
      </section>

      <section className="intro" aria-label="Apresentação">
        <p className="eyebrow">Creative direction / Styling</p>
        <h2>Fashion as attitude.<br /><em>Image as narrative.</em></h2>
      </section>

      <section className="motion" aria-label="Fashion film">
        <div className="section-heading"><p>Motion / Fashion films</p><span>01 — 08</span></div>
        <div className="motion-copy">
          <p className="eyebrow">Selected moving image</p>
          <h2>Style<br /><em>in motion.</em></h2>
          <p>Uma seleção de bastidores, campanhas e editoriais em movimento, apresentada diretamente dos posts originais.</p>
        </div>
        <div className="reel-grid">
          {reels.map((reel, index) => (
            <article className="reel-card" key={reel.id}>
              <div className="reel-frame">
                <iframe src={`https://www.instagram.com/reel/${reel.id}/embed/`} title={`${reel.title} — ${reel.subtitle}`} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
              </div>
              <div className="reel-meta"><span>0{index + 1}</span><div><h3>{reel.title}</h3><p>{reel.subtitle}</p><a href={`https://www.instagram.com/reel/${reel.id}/`} target="_blank" rel="noreferrer">Instagram ↗</a></div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading"><p>Selected work</p><span>01 — 06</span></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image"><img src={project.image} alt={project.alt} loading="lazy" /></div>
              <div className="project-meta">
                <span>{project.number}</span>
                <div><h3><a href={project.href} target="_blank" rel="noreferrer">{project.title} ↗</a></h3><p>{project.subtitle}</p><span className="project-note">{project.note}</span></div>
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
