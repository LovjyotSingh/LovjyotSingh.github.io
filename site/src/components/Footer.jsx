export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} Lovjyot Singh</span>
        <span>Delhi NCR</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
