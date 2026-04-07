import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="sec">
      <p className="stag" style={{ display:"block", marginBottom:"6px", fontSize:"11px", letterSpacing:"1px", textTransform:"uppercase", color:"var(--t3)" }}>Career Path</p>
      <h2 className="sh">Experience &amp; Education</h2>
      <p className="sd">A look at my professional roles and academic background that have shaped my journey as a developer.</p>

      <div className="tl">
        {experience.map((item, i) => (
          <div key={i} className={`tl-item tl-${item.side}`}>
            {item.side === "left" ? (
              <>
                <div className="tl-card">
                  <div className="tl-date-badge">📅 {item.date}</div>
                  <div className="ei-role">{item.role}</div>
                  <div className="ei-co">{item.company}</div>
                  <p className="ei-desc">{item.description}</p>
                  <div className="ei-tags">{item.tags.map((t) => <span key={t} className="etag">{t}</span>)}</div>
                  {item.liveLink && (
                    <a href={item.liveLink} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"5px", fontSize:"12px", fontWeight:"500", color:"var(--green)", marginTop:"12px" }}>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" style={{ width:"13px", height:"13px" }}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      View live dashboard →
                    </a>
                  )}
                </div>
                <div className="tl-dot-col"><div className="tl-dot">{item.emoji}</div></div>
                <div className="tl-empty" />
              </>
            ) : (
              <>
                <div className="tl-empty" />
                <div className="tl-dot-col"><div className="tl-dot">{item.emoji}</div></div>
                <div className="tl-card">
                  <div className="tl-date-badge">📅 {item.date}</div>
                  <div className="ei-role">{item.role}</div>
                  <div className="ei-co">{item.company}</div>
                  <p className="ei-desc">{item.description}</p>
                  <div className="ei-tags">{item.tags.map((t) => <span key={t} className="etag">{t}</span>)}</div>
                  {item.liveLink && (
                    <a href={item.liveLink} target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:"5px", fontSize:"12px", fontWeight:"500", color:"var(--green)", marginTop:"12px" }}>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" style={{ width:"13px", height:"13px" }}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      View live dashboard →
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
