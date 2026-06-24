export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <div className="fbrand">
            Caleb Nkunze<span style={{ color: "var(--accent)" }}>.</span>
          </div>
          <div className="fmeta">© {year} — Built by Caleb in Uganda 🇺🇬</div>
        </div>
        <div className="footer-links">
          <a
            href="https://linkedin.com/in/nkunzecaleb"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Cank256"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗ Cank256
          </a>
        </div>
      </div>
    </footer>
  );
}
