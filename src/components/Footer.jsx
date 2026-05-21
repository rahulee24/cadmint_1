export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">CAD<span>mint</span></span>
          <span className="footer-divider-dot"></span>
          <span className="footer-parent">A product of <a href="https://hardjunc.dev" target="_blank" rel="noopener noreferrer">hardjunc.dev</a></span>
        </div>
        <div className="footer-right">
          &copy; {new Date().getFullYear()} HardJunc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
