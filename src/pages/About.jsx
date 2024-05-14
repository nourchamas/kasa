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
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>
          </ExpandableRow>
          <ExpandableRow title="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </ExpandableRow>
          <ExpandableRow title="Service">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
            </p>
          </ExpandableRow>
          <ExpandableRow title="Sécurité">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </ExpandableRow>
        </div>
      </main>
      <Footer />
    </>
  );
}
