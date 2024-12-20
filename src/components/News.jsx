import news1 from "../images/news1-hoh.png";
import news2 from "../images/news2-hoh.png";
import news3 from "../images/mamasingura.jpg";
import "../styles/News.css";
import { Link } from "react-router-dom";

function News() {
  return (
    <section className="news-container">
      <h2 className="title-news">Ultimele știri</h2>
      <div className="news-cards">
        <div className="news-item">
          <img src={news1} alt="News 1" className="news-image" />
          <div className="news-content">
            <p className="news-category">Articol</p>
            <h5>Cazul lui Vasile: Reconstrucția unei case după inundații</h5>
            <p>
              La vârsta de 73 de ani, Vasile a trecut printr-un moment
              cumplit...
            </p>
            <p className="see-more">
              <Link to="/Blog#cazVasile">Vezi mai mult</Link>
            </p>
          </div>
        </div>
        <div className="news-item">
          <img src={news2} alt="News 2" className="news-image" />
          <div className="news-content">
            <p className="news-category">Articol</p>
            <h5>Povestea familiei Radu - O nouă casă, O nouă speranță</h5>
            <p>
              Familia Radu, formată din Alex, Irina și cei doi copii, Ilinca și
              Matei, locuia într-un mic sat din România...
            </p>
            <p className="see-more">
              <Link to="/Blog#cazRadu">Vezi mai mult</Link>
            </p>
          </div>
        </div>
        <div className="news-item">
          <img src={news3} alt="News 3" className="news-image" />
          <div className="news-content">
            <p className="news-category">Articol</p>
            <h5>Povestea Mariei: </h5>
            <p>
              Cu doi copii mici, de 3 și 5 ani, Maria își găsise stabilitatea
              lucrând ca vânzătoare la un magazin din orașul ei...
            </p>
            <p className="see-more">
              <Link to="/Blog#cazMaria">Vezi mai mult</Link>
            </p>
          </div>
        </div>
      </div>
      <Link to="/Blog#up" className="see-more">
        Vezi mai multe
      </Link>
    </section>
  );
}

export default News;
