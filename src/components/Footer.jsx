import Logo from "./Logo";
import "../assets/footer.scss";

export default function Footer() {
  return (
    <footer>
      <Logo inFooter={true} />

      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
