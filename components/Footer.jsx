import { personal } from "@/data";
import { Reveal } from "@/components/ui/reveal";

const socials = [
  { label: "GitHub", href: personal.links.github },
  { label: "LinkedIn", href: personal.links.linkedin },
  { label: "CodeChef", href: personal.links.codechef },
  { label: "GeeksForGeeks", href: personal.links.gfg },
];

export default function Footer() {
  return (
    <footer className="ft">
      <Reveal className="ft-cta">
        <p className="stag">Open to new roles</p>
        <h2 className="ft-big">
          Have a problem worth solving?
          <br />
          <a href={`mailto:${personal.email}`} className="ft-mail">
            {personal.email}
          </a>
        </h2>
      </Reveal>
      <div className="ft-btm">
        <span>
          © {new Date().getFullYear()} {personal.name} · {personal.location}
        </span>
        <ul className="ft-soc-links">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
