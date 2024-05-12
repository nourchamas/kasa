import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../assets/header.scss";

export default function Header({ selectedLink }) {
  return (
    <header className="wrap">
      <Logo inFooter={false} />
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={selectedLink === "accueil" ? "selected" : ""}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/a-propos"
              className={selectedLink === "a-propos" ? "selected" : ""}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
