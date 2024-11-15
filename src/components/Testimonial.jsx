import "../styles/Testimonial.css";
import p1 from "../images/comm1.png";
import p2 from "../images/Com-2.png";
import p3 from "../images/Com-3.png";
import p4 from "../images/Com-4.png";

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-text">
        <h2>Ce spun persoanele implicate în proiectele noastre?</h2>
        <h2>Voluntari | Persoane ajutate</h2>
      </div>
      <div className="testimonial-images">
        <div className="left-image">
          <img src={p1}></img>
        </div>
        <div className="right-image">
          <img src={p2}></img>
        </div>
        <div className="left-image">
          <img src={p3}></img>
        </div>
        <div className="right-image">
          <img src={p4}></img>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
