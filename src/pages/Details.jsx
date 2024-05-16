import { Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data/data.json";
import Tag from "../components/Tag";
import "../assets/details.scss";
import Rating from "../components/Rating";
import ExpandableRow from "../components/ExpandableRow";
import { useState } from "react";

function Carousel({ data }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="carousel">
      <span className="prev">
        <button
          onClick={() =>
            setIndex((c) => {
              if (c - 1 < 0) return data.pictures.length-1;
              return c - 1;
            })
          }
        >
          <img src="/arrow-icon.svg" alt="" width="30" height="30" />
        </button>
      </span>
      <span className="next">
        <button
          onClick={() =>
            setIndex((c) => {
             
              if(c<data.pictures.length - 1) return c + 1;
              return 0;
            })
          }
        >
          <img src="/arrow-icon.svg" alt="" width="30" height="30" />
        </button>
      </span>
      <img className="cover" src={data.pictures[index]} alt={data.title} />

      <span className="index">
        {index + 1} / {data.pictures.length}
      </span>
    </div>
  );
}

export default function Details() {
  const params = useParams();
  const details = data.filter((item) => item.id === params.id);

  if (details.length === 0) return <Navigate to="/dd/dd/d" replace />;

  return (
    <>
      <Header />
      <main className="wrap">
        <Carousel data={details[0]} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBlock: "1.5rem",
          }}
        >
          <div className="details">
            <h1>{details[0].title}</h1>
            <div className="location">{details[0].location}</div>
          </div>

          <div className="host">
            <span>{details[0].host.name}</span>
            <img
              className="avatar"
              src={details[0].host.picture}
              alt={details[0].host.name}
            />
          </div>
        </div>

        <div className="tags-and-rating">
          <div className="tags">
            {details[0].tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>

          <div className="rating">
            <Rating rating={details[0].rating} />

            <div className="responsive-host">
              <span>{details[0].host.name}</span>
              <img
                className="avatar"
                src={details[0].host.picture}
                alt={details[0].host.name}
              />
            </div>
          </div>
        </div>

        <div className="more-info">
          <ExpandableRow title="Description">
            <p>{details[0].description}</p>
          </ExpandableRow>

          <ExpandableRow title="Équipements">
            <ul style={{ listStyle: "none" }}>
              {details[0].equipments.map((eq, idx) => (
                <li key={idx}>{eq}</li>
              ))}
            </ul>
          </ExpandableRow>
        </div>
      </main>
      <Footer />
    </>
  );
}
