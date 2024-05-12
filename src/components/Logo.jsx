import { Link } from "react-router-dom";
import "../assets/logo.scss";

export default function Logo({ inFooter }) {
  if (inFooter)
    return (
      <Link to="#">
        <img src="/logo-footer.svg" alt="Kasa Logo" />
      </Link>
    );

  return (
    <Link to="/">
      <img src="/logo-desktop.svg" className="logo-desktop" alt="Kasa Logo" />
      <img src="/logo-mobile.svg" className="logo-mobile" alt="Kasa Logo" />
    </Link>
  );
}
