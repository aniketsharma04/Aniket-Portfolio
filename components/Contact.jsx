"use client";
import { useState } from "react";
import { personal } from "@/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 3000);
  };

  return (
    <section id="contact" className="sec">
      <div className="stag">Get in touch</div>
      <h2 className="sh">Let&apos;s work together</h2>
      <p style={{ fontSize: "14px", color: "var(--t2)", maxWidth: "500px", marginBottom: "50px" }}>
        I&apos;m open to internship and full-time opportunities. Tell me about your project and I&apos;ll get back within 48 hours.
      </p>

      <div className="ct-grid">
        <div>
          <div className="ct-det">
            <div className="ct-icon">📍</div>
            <div><div className="ct-lbl">Location</div><div className="ct-val">{personal.location} · Open to Remote</div></div>
          </div>
          <div className="ct-det">
            <div className="ct-icon">✉️</div>
            <div><div className="ct-lbl">Email</div><div className="ct-val"><a href={`mailto:${personal.email}`}>{personal.email}</a></div></div>
          </div>
          <div className="ct-det">
            <div className="ct-icon">📞</div>
            <div><div className="ct-lbl">Phone</div><div className="ct-val"><a href={`tel:${personal.phone}`}>{personal.phone}</a></div></div>
          </div>
          <div className="ct-det">
            <div className="ct-icon">💼</div>
            <div><div className="ct-lbl">Availability</div><div className="ct-val">Open for full-time &amp; internships</div></div>
          </div>
          <div className="ct-avail">Open for opportunities · responds within 24 hrs</div>
        </div>

        <form onSubmit={handleSubmit}>
          <p className="fn">Contact form: all messages go directly to Aniket.</p>
          <div className="fr">
            <div className="fg">
              <label>Name</label>
              <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="fg">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
          </div>
          <div className="fg">
            <label>Message</label>
            <textarea rows={5} placeholder="Tell me about your project or opportunity..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </div>
          <div className="fsr">
            <button type="submit" className="btn-f" style={{ fontSize: "13px", padding: "10px 20px", opacity: sent ? 0.7 : 1 }}>
              {sent ? "✓ Sent!" : "Send message"}
            </button>
            <button type="button" className="btn-g" style={{ fontSize: "13px", padding: "10px 20px" }} onClick={() => setForm({ name: "", email: "", message: "" })}>
              Reset form
            </button>
          </div>
          <p style={{ fontSize: "11px", color: "var(--t3)", marginTop: "12px" }}>
            By sending this message you agree to be contacted. Prefer email?{" "}
            <a href={`mailto:${personal.email}`} style={{ color: "var(--t2)", textDecoration: "underline" }}>{personal.email}</a>
          </p>
        </form>
      </div>
    </section>
  );
}
