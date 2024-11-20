import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/Blog.css";
const Blog = () => {
  return (
    <div>
      <Navigation />
      <main>
        <div className="main-section">
          <p className="text-line"></p>
          <p className="quote">
            Împreună reconstruim speranțe și aducem lumina în viețile celor care
            au <br />
            nevoie de ajutor, prin puterea solidarității și a generozității.
          </p>
          <p className="text-line"></p>
        </div>

        <div id="card-container" className="card-container">
          {[
            {
              title: "Reconstrucția unei case după inundații",
              subtitle: "Cazul lui Vasile",
              image: "pictures/Picture1 1.png",
              description:
                "La vârsta de 73 de ani, Vasile a trecut printr-un moment cumplit...",
              date: "18.06.2024",
              backText:
                "Inundațiile masive care au lovit comunitatea i-au distrus complet casa în care locuia de o viață. Rămas singur și cu resurse financiare foarte limitate, reconstrucția casei era, pentru Vasile, un vis imposibil de realizat.",
            },
            {
              title: "Reconstrucția unei case după incendii",
              subtitle: "Cazul lui Maria",
              image: "pictures/Picture2 2.png",
              description:
                "La vârsta de 62 de ani, Maria a trecut printr-un moment dificil...",
              date: "10.05.2024",
              backText:
                "Familia Popescu, formată din patru membri (Ion, Maria și cei doi copii, Andrei și Ana), locuia într-un apartament modest dintr-un cartier popular al orașului. Totul a luat o întorsătură dramatică într-o noapte de iarnă, când un scurtcircuit a provocat un incendiu devastator.",
            },
            {
              title: "Ajutor pentru o familie defavorizată",
              subtitle: "Cazul familiei Popescu",
              image: "pictures/Picture4 2.png",
              description:
                "Familia Popescu are nevoie urgentă de ajutor pentru o nouă casă...",
              date: "01.07.2024",
              backText:
                "Detalii complete despre cazul familiei Popescu și cum îi poți ajuta vor apărea aici.",
            },
            {
              title: "Educație pentru copii fără acces",
              subtitle: "Cazul lui Andrei",
              image: "pictures/Picture5 2.png",
              description:
                "Andrei visează să meargă la școală, dar are nevoie de sprijinul nostru...",
              date: "15.08.2024",
              backText:
                "Cu doi copii mici, de 3 și 5 ani, Maria își găsise stabilitatea lucrând ca vânzătoare la un magazin din orașul ei. A început să acuze dureri persistente la spate, iar după mai multe investigații medicale, a fost diagnosticată cu o problemă de coloană care îi cerea o perioadă lungă de recuperare și o intervenție chirurgicală.",
            },
            {
              title: "Povestea lui Ion",
              subtitle: "Refacerea după o boală",
              image: "pictures/Picture3 1.png",
              description:
                "Mihai este un bărbat de 50 de ani dintr-un mic oraș din România, cunoscut pentru dedicarea sa la locul de muncă și pentru familia sa iubitoare.",
              date: "10.02.2024",
              backText:
                "Mihai lucra ca mecanic auto, având un venit stabil care asigura traiul familiei. Însă a suferit un accident de muncă provocându-și o fractură complexă la picior.",
            },
            {
              title: "Descoperă cum poți ajuta:",
              subtitle: "tipuri de donații acceptate",
              image: "pictures/Picture7 2.png",
              description:
                "În platforma noastră, înțelegem că sprijinul vine sub multe forme și că fiecare contribuție poate face o diferență în viața celor aflați în nevoie.",
              date: "",
              backText:
                "Iată câteva dintre tipurile de donații pe care le acceptăm și cum fiecare tip poate schimba o viață:",
            },
          ].map((card, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-subtitle">{card.subtitle}</p>
                  <img
                    src={card.image}
                    alt="Card Image"
                    className="card-image"
                  />
                  <p className="card-description">{card.description}</p>
                  <p className="card-date">{card.date}</p>
                </div>
                <div className="flip-card-back">
                  <p className="card-back-text">{card.backText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sections">
  <div className="section-odd">
    <div className="text-content">
      <h1 className="title-odd">
        Cazul lui Vasile: Reconstrucția unei <br /> case după inundații
      </h1>
      <p className="text-odd">
        La vârsta de 73 de ani, Vasile a trecut printr-un moment cumplit:
        inundațiile masive care au lovit comunitatea i-au distrus complet casa
        în care locuia de o viață. Rămas singur și cu resurse financiare foarte
        limitate, reconstrucția casei era, pentru Vasile, un vis imposibil de
        realizat. După ani întregi petrecuți în acel loc, fără alte alternative,
        Vasile se vedea nevoit să ceară ajutorul comunității.
      </p>
    </div>
    <img className="image-odd" src="pictures/img1blog.jpeg" alt="img1" />
  </div>
  <div className="columns-section">
  <div className="section-columns">
    <div className="column">
      <h2 className="title">Impactul donațiilor</h2>
      <p className="text">
        Înduioșează de situația lui, comunitatea și donatorii noștri s-au
        mobilizat imediat pentru a-l ajuta. S-au strâns fonduri pentru
        achiziționarea materialelor necesare construcției, inclusiv ciment,
        cărămizi, lemn și plăci de acoperiș, iar un magazin de materiale de
        construcție, partener de încredere, a oferit o parte din produse la un
        preț redus. În plus, o echipă de voluntari, formată din tineri din sat
        și oameni din organizațiile partenere, a început să ajute la ridicarea
        casei lui Vasile.
        <br />
        În fiecare săptămână, echipa de voluntari a lucrat cot la cot pentru a
        construi noua locuință pentru bătrân. Aceștia au săpat fundația, au
        ridicat pereții și au instalat acoperișul, luptând să finalizeze
        construcția înainte de venirea iernii. De asemenea, o companie locală
        de instalații electrice a donat timp și resurse pentru a asigura
        energia electrică necesară în noua casă.
      </p>
    </div>
    <div className="column">
      <h2 className="title">Rezultatul</h2>
      <p className="text">
        După câteva luni de muncă intensă și de solidaritate incredibilă,
        Vasile s-a putut muta în noua lui casă. Momentul în care și-a văzut
        locuința completă a fost plin de emoție: nu credea că va reuși să aibă
        un acoperiș sigur deasupra capului din nou, și totul părea un miracol.
        Noua casă a fost construită mai sus decât cea precedentă, ferită de
        pericolul inundațiilor, iar acoperișul și pereții au fost consolidate,
        protejându-l pe Vasile de intemperiile ce ar putea urma.
        <br />
        Astăzi, Vasile este recunoscător nu doar pentru casa sa, dar și pentru
        sprijinul și dragostea primite din partea întregii comunități. Povestea
        lui Vasile este un exemplu de putere comunitară și de generozitate,
        arătând că împreună putem să aducem lumină și speranță în viețile celor
        aflați în nevoie.
      </p>
    </div>
  </div>
</div>
<div className="section-even">
    <div className="text-content-even">
      <h1 className="title-even">
      Povestea familiei Radu - O nouă casă, O nouă speranță <br /> 
      </h1>
      <p className="text-even">
      Familia Radu, formată din Alex, Irina și cei doi copii, Ilinca și Matei, locuia într-un mic sat din România.  Alex, un bărbat de 45 de ani, era fermier, cunoscut în comunitate pentru pasiunea și grija sa față de pământul pe care lucra. Însă, după ce casa lor a fost grav afectată de o alunecare de teren cauzată de ploi abundente, familia s-a trezit fără locuință și fără resurse pentru reconstrucție. 
      Alunecarea de teren a distrus pereții casei, acoperișul, și a avariat structura de rezistență. În fața unei situații disperate și fără economii pentru o construcție nouă, Alex și Irina au realizat că au nevoie de ajutor pentru a-și reconstrui viața. 
      </p>
    </div>
    <img className="image-even" src="pictures/Picture2 2.png" alt="img2" />
  </div>
  <div className="columns-section2">
  <div className="section-columns2">
    <div className="column">
      <h2 className="title">Impactul donațiilor</h2>
      <p className="text">
      După incident, familia a fost cazată temporar într-o locuință oferită printr-o campanie
      Aici, au primit mâncare și îmbrăcăminte, dar situația era extrem de dificilă. În momentul în care vestea tragediei a ajuns la noi în comunitate, oamenii s-au mobilizat rapid. Au început să strângă haine, jucării pentru copii, alimente neperisabile și produse de igienă care mai apoi le-au fost transferate familiei. 
      </p>
    </div>
    <div className="column">
      <h2 className="title">Rezultatul final</h2>
      <p className="text">
      După câteva luni de muncă asiduă și sprijin din partea comunității, familia Popescu s-a adaptat la nouă viață. În semn de recunoștință, familia a început să se implice activ în evenimentele comunității, ajutând la organizarea de campanii de strângere de fonduri pentru alte familii în nevoie. Ion și Maria au devenit voluntari în adăpostul local, oferind sprijin celor care treceau prin situații similare. 
      Această poveste a Familiei Popescu ilustrează nu doar dificultățile prin care au trecut, ci și puterea comunității de a se uni în momente de criză. Prin sprijinul oferit, familia nu doar că și-a reconstruit viața, dar a devenit un exemplu de determinare și generozitate pentru toți cei din jur. 
      </p>
    </div>
    <div className="column-final">
      <h2 className="title">Procesul de reconstrucție  </h2>
      <p className="text">
      După câteva săptămâni, cu ajutorul donațiilor bănești din comunitatea noastră, familia Popescu a reușit să strângă suficienți  bani pentru a închiria un nou apartament. De asemenea, au primit donații de mobilier de bază, cum ar fi paturi, o masă și scaune. 
Ion a început să caute un nou loc de muncă, reușind să obțină un post similar cu cel pe care îl avea anterior, iar Maria a început să participe la cursuri de formare profesională pentru a-și îmbunătăți abilitățile. 
    </p>
    </div>
  </div>
</div>
<div className="section-odd">
    <div className="text-content">
      <h1 className="title-odd">
      Povestea familiei Radu - O nouă casă, O nouă speranță 
      </h1>
      <p className="text-odd">
      Familia Radu, formată din Alex, Irina și cei doi copii, Ilinca și Matei, locuia într-un mic sat din România.  Alex, un bărbat de 45 de ani, era fermier, cunoscut în comunitate pentru pasiunea și grija sa față de pământul pe care lucra. Însă, după ce casa lor a fost grav afectată de o alunecare de teren cauzată de ploi abundente, familia s-a trezit fără locuință și fără resurse pentru reconstrucție. 
Alunecarea de teren a distrus pereții casei, acoperișul, și a avariat structura de rezistență. În fața unei situații disperate și fără economii pentru o construcție nouă, Alex și Irina au realizat că au nevoie de ajutor pentru a-și reconstrui viața.  
      </p>
    </div>
    <img className="image-odd" src="pictures/Picture4 2.png" alt="img1" />
  </div>
  <div className="columns-section2" >
  <div className="section-columns2">
    <div className="column">
      <h2 className="title">Impactul donațiilor</h2>
      <p className="text">
      Când Alex a aflat despre aplicația noastră, a decis să apeleze la sprijinul comunității. Oamenii au răspuns cu promptitudine, mobilizându-se pentru a-i ajuta. 
      </p>
    </div>
    <div className="column">
      <h2 className="title">Rezultatul final</h2>
      <p className="text">
      După câteva luni de muncă și sprijin necondiționat din partea comunității, familia Radu s-a mutat în noua lor casă. Alex și Irina au fost copleșiți de recunoștință, simțind că acest vis devenit realitate nu ar fi fost posibil fără ajutorul comunității. 
Încurajați de solidaritatea și sprijinul primit, Alex și Irina au decis să contribuie în continuare la rândul lor în comunitate, ajutând la alte campanii și proiecte. Ei împărtășesc acum povestea lor cu alții, dorind să inspire prin propriul exemplu pe cei care trec prin momente dificile. 
Povestea familiei Radu nu este doar despre reconstrucția unei case, ci și despre puterea comunității de a transforma vieți. Această experiență le-a schimbat viața, dar a și consolidat relațiile cu cei din jur, demonstrând că prin solidaritate și ajutor reciproc putem construi nu doar locuințe, ci și speranță și încredere în viitor. 
      </p>
    </div>
    <div className="column">
      <h2 className="title">Strângerea de fonduri:</h2>
      <p className="text">
      Am fost lansată o campanie de strângere de fonduri pentru a aduna sumele necesare reconstrucției. Comunitatea a fost extraordinar de generoasă, donând bani, materiale de construcție și chiar timp pentru a-i ajuta pe Alex și familia lui. Donațiile au permis achiziționarea materialelor de care aveau nevoie: blocuri de BCA, grinzi, ciment și învelitori pentru acoperiș. Mulți dintre cei din comunitate au venit să dea o mână de ajutor pe șantier, muncind cot la cot cu familia. Pe lângă sprijinul în muncă și materiale, familia Radu a primit ajutoare financiare pentru a-și acoperi cheltuielile zilnice, inclusiv pentru hrană și utilități.
      </p>
    </div>
    <div className="column">
      <h2 className="title">Procesul de construcție:</h2>
      <p className="text">
      Pe parcursul lunilor de reconstrucție, Alex și Irina au fost implicați activ în fiecare etapă. Alex, deși fermier, a învățat să ajute la lucrările de construcție alături de voluntari, devenind chiar mai priceput în mânuirea uneltelor de șantier, iar Irina s-a ocupat de organizarea meselor. 
      Ilinca și Matei, cei doi copii ai lor, au ajutat cu mici sarcini, precum aducerea de apă sau organizarea sculelor, bucurându-se de procesul în sine și învățând despre puterea solidarității. 
      </p>
    </div>
  </div>
  <div className="section-even">
    <div className="text-content">
      <h1 className="title-odd">
      Maria – Sprijin pentru o mamă singură 
      </h1>
      <p className="text-odd">
        Maria este o tânără mamă singură care, la doar 29 de ani, a fost nevoită să înfrunte o situație critică. Cu doi copii mici, de 3 și 5 ani, Maria își găsise stabilitatea lucrând ca vânzătoare la un magazin din orașul ei. A început să acuze dureri persistente la spate, iar după mai multe investigații medicale, a fost diagnosticată cu o problemă de coloană care îi cerea o perioadă lungă de recuperare și o intervenție chirurgicală. Pierzându-și locul de muncă, Maria s-a văzut brusc într-o situație disperată: fără un venit stabil și cu doi copii de întreținut, s-a confruntat cu realitatea dureroasă că risca să piardă și locuința. 
      </p>
    </div>
    <img className="image-odd" src="pictures/Picture5 2.png" alt="img4" />
  </div>
  <div className="columns-section" id="section-maria">
  <div className="section-columns">
    <div className="column">
      <h2 className="title">Rezultatul </h2>
      <p className="text">
      După câteva luni de sprijin continuu, Maria a reușit să își îmbunătățească starea de sănătate și chiar să revină la lucru cu un program mai redus, sprijinind astfel, din nou, familia. Donațiile au fost vitale pentru ca ea să își păstreze locuința și să evite o destabilizare majoră în viața copiilor. Maria nu doar că a reușit să depășească o perioadă extrem de dificilă, dar, datorită ajutorului comunității, a reușit să facă acest lucru cu demnitate și fără teama de a-și pierde casa. 
      Astăzi, Maria este una dintre susținătoarele noastre cele mai active. Inspirată de ajutorul primit, a început să ofere sprijin altor mame aflate în dificultate, implicându-se în distribuirea de alimente. Povestea Mariei demonstrează că solidaritatea poate schimba radical viețile oamenilor și le poate reda speranța într-un viitor mai bun. 
      </p>
    </div>
    <div className="column">
      <h2 className="title">Impactul donațiilor </h2>
      <p className="text">
      Când Maria a apelat la platforma noastră, comunitatea s-a mobilizat rapid. Au fost strânse fonduri pentru ajutoare alimentare lunare, asigurând mâncare suficientă pentru familia ei. În plus, au fost donate produse de igienă personală și de curățenie, necesare pentru sănătatea și bunăstarea copiilor. Din donațiile primite s-a reușit acoperirea unei părți importante a chiriei, ceea ce a permis familiei să evite evacuarea. 

      </p>
    </div>
  </div>
</div>
</div>

<div className="section-odd">
    <div className="text-content">
      <h1 className="title-odd">
        Cazul lui Vasile: Reconstrucția unei <br /> case după inundații
      </h1>
      <p className="text-odd">
        La vârsta de 73 de ani, Vasile a trecut printr-un moment cumplit:
        inundațiile masive care au lovit comunitatea i-au distrus complet casa
        în care locuia de o viață. Rămas singur și cu resurse financiare foarte
        limitate, reconstrucția casei era, pentru Vasile, un vis imposibil de
        realizat. După ani întregi petrecuți în acel loc, fără alte alternative,
        Vasile se vedea nevoit să ceară ajutorul comunității.
      </p>
    </div>
    <img className="image-odd" src="pictures/Picture3 1.png" alt="img1" />
  </div>
  <div className="columns-section2">
  <div className="section-columns2">
    <div className="column">
      <h2 className="title">Impactul donațiilor</h2>
      <p className="text">
      În momentul în care Mihai a realizat gravitatea situației, a început să caute soluții. A aflat despre aplicația noastră și a solicitat ajutor. 
Medicamente și tratament:  
De asemenea, fundația a acoperit costurile medicamentelor necesare pentru recuperarea lui Mihai, care erau costisitoare și esențiale pentru tratamentul său. Fără ajutorul lor, ar fi fost imposibil să își permită toate acestea din economiile reduse. 
      </p>
    </div>
    <div className="column">
      <h2 className="title">Ajutoare financiare:  </h2>
      <p className="text">
      În plus, Mihai a primit ajutoare financiare de la membrii comunității pentru a-și plăti facturile și pentru a acoperi cheltuielile de bază, cum ar fi chiria. Aceasta a fost o ușurare imensă pentru familia lui, care altfel ar fi fost expusă riscului de a fi evacuată din locuință. 
Procesul de recuperare: 
Pe parcursul anului de recuperare, Mihai a lucrat din greu pentru a-și recăpăta mobilitatea. A urmat ședințe de fizioterapie, iar soția sa, Elena, a fost un sprijin constant, încurajându-l și ajutându-l.. Chiar și în momentele cele mai dificile, Mihai a fost determinat să se vindece și să revină la muncă pentru a-și susține familia. 

      </p>
    </div>
    <div className="column">
      <h2 className="title">Rezultatul final: :  </h2>
      <p className="text">
      După un an de eforturi susținute și recuperare, Mihai a reușit să se întoarcă la muncă. A găsit un loc de muncă la o fabrică locală de piese auto. Munca lui era acum mai puțin solicitantă fizic, iar Mihai a fost recunoscător pentru ocazia de a contribui din nou la bunăstarea familiei sale. 
Astfel, inspirația primită din ajutorul pe care l-a avut l-a determinat pe Mihai să devină activ în comunitate, participând la campanii de strângere de fonduri și la distribuirea de alimente. Mihai a început să împărtășească povestea lui cu alții, inspirându-i pe cei care se află în situații dificile, împărtășindu-ne povestea lui, iar noi, publicând-o mai departe. 
Povestea lui Mihai nu este doar despre lupta cu boala și dificultățile financiare, ci și despre puterea comunității de a oferi ajutor și despre determinarea de a se ridica din nou, devenind un exemplu pentru alții.  

      </p>
    </div>
  </div>
</div>
<div className="section-even">
    <div className="text-content-even">
      <h1 className="title-even">
      Descoperă cum poți ajuta: tipuri de donații acceptate și cum fiecare contează <br /> 
      </h1>
      <p className="text-even">
      În platforma noastră, înțelegem că sprijinul vine sub multe forme și că fiecare contribuție  poate face o diferență în viața celor aflați în nevoie. Iată câteva dintre tipurile de donații pe care le acceptăm și cum fiecare tip poate schimba o viață:
    </p>
    </div>
    <img className="image-even" src="pictures/Picture2 2.png" alt="img2" />
  </div>
  <div className="columns-section2">
  <div className="section-columns2">
    <div className="column">
      <h2 className="title">Donații financiare </h2>
      <p className="text">
      Contribuțiile în bani sunt esențiale pentru susținerea proiectelor noastre de ajutor rapid. De la ajutor în cazuri de urgență, la asigurarea unui sprijin constant, fiecare sumă se folosește pentru a aduce speranță. 
    </p>
    </div>
    <div className="column">
      <h2 className="title">Donații de alimente și produse de igienă</h2>
      <p className="text">
      Produsele de bază sunt vitale pentru persoanele aflate în situații critice. Donațiile de alimente, produse de igienă și alte articole necesare vieții de zi cu zi reprezintă o modalitate concretă de a susține familiile în nevoie. 
      </p>
    </div>
    <div className="column">
      <h2 className="title">Donații de bunuri și echipamente</h2>
      <p className="text">
      Oferim și posibilitatea de a dona haine, mobilă, aparatură electrocasnică, rechizite pentru copii și multe altele. Astfel, ne asigurăm că ajutorul tău ajunge exact acolo unde este nevoie.
    </p>
    <div className="column">
      <h2 className="title">Servicii voluntare</h2>
      <p className="text">
      Timpul și efortul oferit de voluntari sunt la fel de valoroase. Fie că vorbim de suport logistic, transport sau distribuirea bunurilor, voluntariatul este cheia succesului proiectelor noastre. 
Având în vedere faptul ca primăriile reprezintă un intermediar de nădejde pentru noi, acestea vor verifica și aproba cererile înregistrate pe site-ul nostru.
Așadar, alătură-te celor care fac deja o diferență – fie prin donații financiare, servicii oferite sau timp și resurse. Fiecare gest contează și se adună pentru a transforma vieți. 
    </p>
    </div>
  </div>
  </div>
</div>
</div>





      </main>
      <Footer />
    </div>
  );
};

export default Blog;
