import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data/data.json";

export default function Home() {
  return (
    <>
      <Header selectedLink="accueil" />
      <main className="wrap">
        <div className="home-banner">
          <p>Chez vous, partout et ailleurs</p>
        </div>

        <div className="cards-grid">
          {data.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
