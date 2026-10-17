import { testimonials } from "@/data";
import Spotlight from "@/components/ui/spotlight";
import { Reveal } from "@/components/ui/reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="sec">
      <Reveal>
        <div className="stag">What people say</div>
        <h2 className="sh">Recommendations</h2>
        <p className="sd">
          Kind words from colleagues and peers I&apos;ve had the pleasure of
          working with.
        </p>
      </Reveal>
      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 2) * 0.08}>
            <Spotlight className="tc">
              <div className="tc-hdr">
                <div className="tc-av">{t.initials}</div>
                <div>
                  <div className="tc-n">{t.name}</div>
                  <div className="tc-r">{t.role}</div>
                </div>
              </div>
              <p className="tc-txt">{t.text}</p>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
