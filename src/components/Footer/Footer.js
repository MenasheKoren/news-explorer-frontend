import { Link } from "react-router-dom";
import githubIcon from "../../images/github-icon.svg";
import facebookIcon from "../../images/facebook-icon.svg";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          &copy; {year} Supersite, Powered by News API
        </p>
        <nav className="footer__nav">
          <div className="footer__links">
            <Link to="/" className="link link__hover footer__nav-item">
              Home
            </Link>
            <a
              href="https://practicum.yandex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link link__hover footer__nav-item"
            >
              Practicum by Yandex
            </a>
          </div>
          <div className="footer__icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link link__hover footer__nav-item"
            >
              <img
                src={githubIcon}
                alt="Github Icon"
                className="footer__icon"
              />
            </a>
            <a
              href="https://practicum.yandex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link link__hover footer__nav-item"
            >
              <img
                src={facebookIcon}
                alt="Facebook Icon"
                className="footer__icon"
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
