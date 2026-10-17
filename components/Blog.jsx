import { blogs } from "@/data";
import Spotlight from "@/components/ui/spotlight";
import { Reveal } from "@/components/ui/reveal";

export default function Blog() {
  return (
    <section id="blog" className="sec">
      <Reveal>
        <p className="stag">From the Blog</p>
        <h2 className="sh">Latest Articles</h2>
        <p className="sd">
          Sharing my insights, tutorials, and experiments from building modern
          web applications.
        </p>
      </Reveal>
      <div className="blog-grid">
        {blogs.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08}>
            <Spotlight className="bc">
              <div className="bc-thumb">
                <div
                  className="bc-img"
                  style={{
                    background: `linear-gradient(135deg, ${b.bgFrom}, ${b.bgTo})`,
                  }}
                >
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
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
