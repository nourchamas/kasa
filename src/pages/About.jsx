import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/about.scss";
import ExpandableRow from "../components/ExpandableRow";

export default function About() {
  return (
    <>
      <Header selectedLink="a-propos" />
      <main className="wrap">
        <div className="about-banner" />

        <div className="rows">
          <ExpandableRow title="Fiabilité">
            <p>
              Toutes les annonces sont vérifiées, les propriétaires sont
              sélectionnés et les photos sont certifiées.
            </p>
          </ExpandableRow>
          <ExpandableRow title="Respect">
            <p>
              Toutes les annonces sont vérifiées, les propriétaires sont
              sélectionnés et les photos sont certifiées.
            </p>
          </ExpandableRow>
          <ExpandableRow title="Service">
            <p>
              Toutes les annonces sont vérifiées, les propriétaires sont
              sélectionnés et les photos sont certifiées.
            </p>
          </ExpandableRow>
          <ExpandableRow title="Sécurité">
            <p>
              Toutes les annonces sont vérifiées, les propriétaires sont
              sélectionnés et les photos sont certifiées.
            </p>
          </ExpandableRow>
        </div>
      </main>
      <Footer />
    </>
  );
}
