import { useEffect, useState } from "react";
import "../styles/Differences.css";

function Differences() {
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);
  const [percentage4, setPercentage4] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (percentage1 < 65) {
        setPercentage1((prev) => prev + 1);
      }
    }, 30);

    const interval2 = setInterval(() => {
      if (percentage2 < 20) {
        setPercentage2((prev) => prev + 1);
      }
    }, 30);

    const interval3 = setInterval(() => {
      if (percentage3 < 10) {
        setPercentage3((prev) => prev + 1);
      }
    }, 30);

    const interval4 = setInterval(() => {
      if (percentage4 < 5) {
        setPercentage4((prev) => prev + 1);
      }
    }, 30);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [percentage1, percentage2, percentage3, percentage4]);

  return (
    <div className="differences container">
      <h2>Ce diferențe au făcut donațiile tale?</h2>
      <p>
        Donațiile tuturor au contribuit semnificativ la sprijinirea
        comunităților afectate de dezastre naturale. Iată cum au fost utilizate
        fondurile:
      </p>
      <div className="differences-stats">
        <div className="stat mx-lg-2">
          <div className="percentage1">{percentage1}%</div>
          <p>sprijin pentru comunitățile afectate de inundații și cutremure</p>
        </div>
        <div className="stat mx-lg-2">
          <div className="percentage2">{percentage2}%</div>
          <p>truse, medicamente, echipamente</p>
        </div>
        <div className="stat mx-lg-2">
          <div className="percentage3">{percentage3}%</div>
          <p>adăposturi și infrastructură</p>
        </div>
        <div className="stat mx-lg-2">
          <div className="percentage4">{percentage4}%</div>
          <p>asistență psihologică pentru victime</p>
        </div>
      </div>
      <p>
        Fiecare procent contează! Prin donațiile voastre, Hands on Hope a putut
        să răspundă prompt și eficient nevoilor urgente din teren, oferind nu
        doar ajutor material, ci și sprijin emoțional comunităților afectate.
      </p>
    </div>
  );
}

export default Differences;
