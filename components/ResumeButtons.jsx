import { personal } from "@/data";

// One button per role-specific resume (Data Scientist, Software Engineer),
// grouped so the pair wraps onto a new line together rather than splitting
export default function ResumeButtons({ className = "btn-g", style }) {
  const resumes = personal.resumes.filter((r) => r.href);
  if (!resumes.length) return null;
  return (
    <div className="resume-btns">
      {resumes.map((r) => (
        <a
          key={r.label}
          href={r.href}
          target="_blank"
          rel="noreferrer"
          className={className}
          style={style}
          title={r.title}
        >
          {r.label} ↗
        </a>
      ))}
    </div>
  );
}
