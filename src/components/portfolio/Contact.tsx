import { type FormEvent, useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setStatus({ msg: "Please fill in all fields.", ok: false });
      return;
    }

    const mailto =
      `mailto:nkunzecaleb@gmail.com?subject=` +
      encodeURIComponent(`Portfolio enquiry from ${name}`) +
      `&body=` +
      encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    setStatus({ msg: "Opening your email client...", ok: true });
    window.location.href = mailto;
    setTimeout(() => form.reset(), 600);
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="section-tag reveal" style={{ justifyContent: "center" }}>
          <span className="num">05</span>
          <span className="label">Contact</span>
        </div>
        <h2 className="contact-heading reveal">
          Let&apos;s <span className="grad">work together.</span>
        </h2>
        <p className="contact-sub reveal">
          Available for freelance, remote roles, and collaborations.
        </p>
        <div className="contact-btns reveal">
          <a href="mailto:nkunzecaleb@gmail.com" className="btn btn--solid">
            ✉ Email me
          </a>
          <a
            href="https://linkedin.com/in/nkunzecaleb"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--violet"
          >
            in LinkedIn
          </a>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                required
                placeholder="Your name"
              />
            </div>
            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="cf-msg">Message</label>
            <textarea
              id="cf-msg"
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="btn btn--solid"
            style={{ justifySelf: "start" }}
          >
            Send Message →
          </button>
          {status && (
            <p
              className="form-status"
              role="status"
              aria-live="polite"
              style={{ color: status.ok ? "var(--accent)" : "var(--accent-2)" }}
            >
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
