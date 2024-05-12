import "../assets/rating.scss";

export default function Rating({ rating }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, index) => {
        const star = index + 1;
        return (
          <img
            key={star}
            src={star <= rating ? "/star-active.svg" : "/star-inactive.svg"}
            alt=""
            width="30"
            height="30"
          />
        );
      })}
    </div>
  );
}
