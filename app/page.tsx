const projects = [
  { number: '01', title: 'Celebrity', subtitle: 'Red carpet, press & appearances', tone: 'warm' },
  { number: '02', title: 'Editorial', subtitle: 'Fashion stories & publications', tone: 'dark' },
  { number: '03', title: 'Campaigns', subtitle: 'Brand image & advertising', tone: 'stone' },
  { number: '04', title: 'Motion', subtitle: 'Film, music & videography', tone: 'paper' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Thiago Biagi — início">THIAGO BIAGI</a>
        <nav aria-label="Navegação principal">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <div className="language" aria-label="Idiomas propostos"><span>PT</span><span aria-hidden="true">/</span><span>EN</span></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span>Fashion Stylist · Fashion Editor · Creative Consultant</span><span>Brazil ↔ Europe</span></div>
        <h1><span>Thiago</span><span className="hero-indent">Biagi</span></h1>
        <div className="hero-foot">
          <p>Style as narrative.<br />Image as presence.</p>
          <a href="#work" aria-label="Ver trabalhos selecionados">Selected work <span>↓</span></a>
        </div>
      </section>

      <section className="manifesto" aria-label="Direção criativa">
        <p>Styling across</p><p>fashion, culture <em>&amp;</em> image.</p>
      </section>

      <section className="work" id="work">
        <div className="section-heading"><p>Selected work</p><span>(2026)</span></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.number}>
              <div className="image-placeholder" aria-label="Espaço reservado para fotografia autorizada">
                <span>IMAGE PENDING<br />AUTHORIZATION + CREDIT</span>
              </div>
              <div className="project-meta">
                <span>{project.number}</span>
                <div><h2>{project.title}</h2><p>{project.subtitle}</p></div>
                <span className="arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">About / Sobre</p>
        <div>
          <h2>Thiago Biagi is a Brazilian fashion stylist, fashion editor and creative consultant working between Brazil and Europe.</h2>
          <p className="pending-copy">Represented by Beltrame Management. Texto biográfico completo, cidades de atuação, publicações e clientes serão inseridos somente após validação com Thiago.</p>
        </div>
        <span className="about-mark" aria-hidden="true">TB</span>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Bookings / Contact</p>
        <h2>Let’s create<br />something <em>distinct.</em></h2>
        <div className="contact-row">
          <a href="mailto:thiago.biagi@onyn.com.br">thiago.biagi@onyn.com.br ↗<br /><span>Professional enquiries</span></a>
          <a href="https://www.instagram.com/thiagobiagi/" target="_blank" rel="noreferrer">Instagram @thiagobiagi ↗</a>
          <p>Represented by<br /><span>@beltrame_mgmt</span></p>
        </div>
      </section>

      <footer><span>© Thiago Biagi</span><span>Portfolio concept — approval required</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
