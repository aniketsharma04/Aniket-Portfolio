"use client";
import { useState } from "react";
import { personal } from "@/data";
import Spotlight from "@/components/ui/spotlight";
import { Reveal } from "@/components/ui/reveal";

const EMPTY = { name: "", email: "", message: "", company: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  // idle → sending → sent | error
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok)
        throw new Error(data.error || "Couldn't send your message right now.");
      setStatus("sent");
      setForm(EMPTY);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <section id="contact" className="sec">
      <Reveal>
        <div className="stag">Get in touch</div>
        <h2 className="sh">Let&apos;s work together</h2>
        <p className="sd">
          I&apos;m open to internship and full-time opportunities. Tell me about
          your project and I&apos;ll get back within 48 hours.
        </p>
      </Reveal>

      <div className="ct-grid">
        <div>
          <div className="ct-det">
            <div className="ct-icon">📍</div>
            <div>
              <div className="ct-lbl">Location</div>
              <div className="ct-val">{personal.location} · Open to Remote</div>
            </div>
          </div>
          <div className="ct-det">
            <div className="ct-icon">✉️</div>
            <div>
              <div className="ct-lbl">Email</div>
              <div className="ct-val">
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
            </div>
          </div>
          <div className="ct-det">
            <div className="ct-icon">📞</div>
            <div>
              <div className="ct-lbl">Phone</div>
              <div className="ct-val">
                <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              </div>
            </div>
          </div>
          <div className="ct-det">
            <div className="ct-icon">💼</div>
            <div>
              <div className="ct-lbl">Availability</div>
              <div className="ct-val">Open for full-time &amp; internships</div>
            </div>
          </div>
          <div className="ct-avail">
            Open for opportunities · responds within 24 hrs
          </div>
        </div>

        <Spotlight
          as="form"
          className="ct-form"
          onSubmit={handleSubmit}
          ring={false}
          size={520}
        >
          <p className="fn">
            Contact form: all messages go directly to Aniket.
          </p>
          <div className="fr">
            <div className="fg">
              <label>Name</label>
              <input
                type="text"
                required
                maxLength={100}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="fg">
              <label>Email</label>
              <input
                type="email"
                required
                maxLength={200}
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>
          <div className="fg">
            <label>Message</label>
            <textarea
              rows={5}
              required
              maxLength={5000}
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          {/* Spam trap: hidden from people, filled in by bots */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hp"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
          <div className="fsr">
            <button
              type="submit"
              className="btn-f"
              disabled={status === "sending"}
              style={{
                fontSize: "13px",
                padding: "10px 20px",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "✓ Sent! I'll be in touch"
                  : "Send message"}
            </button>
            <button
              type="button"
              className="btn-g"
              style={{ fontSize: "13px", padding: "10px 20px" }}
              onClick={() => {
                setForm(EMPTY);
                setStatus("idle");
              }}
            >
              Reset form
            </button>
          </div>
          {status === "error" && (
            <p
              role="alert"
              style={{
                fontSize: "12.5px",
                color: "#f87171",
                marginTop: "12px",
              }}
            >
              {error} Please email me directly at{" "}
              <a
                href={`mailto:${personal.email}`}
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                {personal.email}
              </a>
              .
            </p>
          )}
          <p
            style={{ fontSize: "11px", color: "var(--t3)", marginTop: "12px" }}
          >
            By sending this message you agree to be contacted. Prefer email?{" "}
            <a
              href={`mailto:${personal.email}`}
              style={{ color: "var(--t2)", textDecoration: "underline" }}
            >
              {personal.email}
            </a>
          </p>
        </Spotlight>
      </div>
    </section>
  );
}
