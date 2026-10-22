"use client";
import { useState } from "react";
import { personal } from "@/data";

// Web3Forms emails every submission to the inbox this key was created for (free plan).
// The key is meant to be public: it can only send to that inbox. Get one at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "ced92535-e5bc-4fbd-b0df-c2861d50fbb5";

export default function Contact() {
  const empty = { name: "", email: "", message: "", website: "" };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setError("Please fill in every field.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      // Honeypot filled in means a bot: pretend it worked and send nothing
      if (!form.website) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          signal: AbortSignal.timeout(20000),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `New message from ${form.name} via your portfolio`,
            from_name: "Portfolio Contact",
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.success) {
          console.error("Contact form:", data.message || res.status);
          throw new Error("Couldn't send right now. Please email me directly.");
        }
      }
      setStatus("sent");
      setForm(empty);
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setError(
        err.name === "TimeoutError"
          ? "This is taking too long. Please email me directly."
          : err.message || "Something went wrong.",
      );
    }
  };

  return (
    <section id="contact" className="sec">
      <div className="stag">Get in touch</div>
      <h2 className="sh">Let&apos;s work together</h2>
      <p
        style={{
          fontSize: "14px",
          color: "var(--t2)",
          maxWidth: "500px",
          marginBottom: "50px",
        }}
      >
        I&apos;m open to internship and full-time opportunities. Tell me about
        your project and I&apos;ll get back within 48 hours.
      </p>

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

        <form onSubmit={handleSubmit}>
          <p className="fn">
            Contact form: all messages go directly to Aniket.
          </p>
          <div className="fr">
            <div className="fg">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="fg">
              <label>Email</label>
              <input
                type="email"
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
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          {/* Honeypot for spam bots, hidden from people and screen readers */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
              opacity: 0,
            }}
          />
          <div className="fsr">
            <button
              type="submit"
              className="btn-f"
              disabled={status === "sending"}
              style={{
                fontSize: "13px",
                padding: "10px 20px",
                opacity: status === "sending" || status === "sent" ? 0.7 : 1,
              }}
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "✓ Sent!"
                  : "Send message"}
            </button>
            <button
              type="button"
              className="btn-g"
              style={{ fontSize: "13px", padding: "10px 20px" }}
              onClick={() => {
                setForm(empty);
                setStatus("idle");
                setError("");
              }}
            >
              Reset form
            </button>
          </div>
          <p
            role="status"
            aria-live="polite"
            style={{
              fontSize: "12.5px",
              marginTop: "12px",
              color: status === "error" ? "#f87171" : "var(--green)",
              minHeight: "1em",
            }}
          >
            {status === "sent" &&
              "Thanks! Your message is on its way. I'll get back to you soon."}
            {status === "error" && error}
          </p>
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
        </form>
      </div>
    </section>
  );
}
