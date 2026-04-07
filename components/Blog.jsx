import { blogs } from "@/data";

export default function Blog() {
  return (
    <section id="blog" className="sec">
      <p className="blog-lbl">From the Blog</p>
      <h2 className="sh">Latest Articles</h2>
      <p className="sd">Sharing my insights, tutorials, and experiments from building modern web applications.</p>
      <div className="blog-grid">
        {blogs.map((b) => (
          <div key={b.title} className="bc">
            <div className="bc-thumb">
              <div className="bc-img" style={{ background: `linear-gradient(135deg, ${b.bgFrom}, ${b.bgTo})` }}>
                {b.emoji}
              </div>
            </div>
            <div className="bc-body">
              <div className="bc-meta">
                <span className="bc-date">{b.date}</span>
                <span className="bc-cat">{b.category}</span>
              </div>
              <div className="bc-title">{b.title}</div>
              <p className="bc-snip">{b.snippet}</p>
              <span className="bc-read">Read Article →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
