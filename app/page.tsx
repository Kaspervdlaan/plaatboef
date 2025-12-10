'use client';

import Image from "next/image";
import GoogleMap from "./components/GoogleMap";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page">
      <div className="page-inner" id="top">
        <header className="site-header">
          <div className="logo-wrap">
            <Image 
              src="/logo_plaatboef.gif" 
              alt="De Plaatboef" 
              width={650} 
              height={250}
              priority
            />
          </div>
          <div className="location-buttons">
            <button className="btn btn-location">Rotterdam</button>
            <button className="btn btn-location">Utrecht</button>
          </div>
        </header>

        <main>
          {/* LEFT COLUMN */}
          <section className="hero-text">
            {/* <div className="chips-row">
              <div className="chip chip--accent">Rotterdam</div>
              <div className="chip">Tweedehands platenwinkel</div>
            </div> */}
              <h1>De Plaatboef in Rotterdam</h1>
            <div>
              <p className="hero-lead">
                <strong>De eerste, de beste en de grootste</strong> tweedehands platenwinkel in Rotterdam.
                Al jaren dé plek voor liefhebbers van LP's, CD's en DVD's – om te ontdekken, verkopen en
                eindeloos te snuffelen tussen de bakken.
              </p>
            </div>

            <div className="store-info">
              <div className="store-address">
                <p><strong>Plaatboef Rotterdam</strong></p>
                <p>Nieuwe Binnenweg 81A<br />
                  3014 GE Rotterdam</p>
              </div>
              <div className="store-contact">
                <div className="pill">KvK: 24.1293.030</div>
                <div className="pill">
                  Tel: <a href="tel:+31104365873">010&nbsp;436&nbsp;5873</a>
                </div>
                <div className="pill">
                  <a href="mailto:info@plaatboef.nl">info@plaatboef.nl</a>
                </div>
              </div>
            </div>

            {/* Opening hours */}
            <section className="hours-card" id="hours">
              <div className="hours-header">Openingstijden</div>
              <div className="hours-body">
                <div className="hours-row">
                  <span className="hours-day">maandag</span>
                  <span className="hours-time">12:00 – 18:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">dinsdag</span>
                  <span className="hours-time">10:00 – 18:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">woensdag</span>
                  <span className="hours-time">10:00 – 18:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">donderdag</span>
                  <span className="hours-time">10:00 – 18:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">vrijdag</span>
                  <span className="hours-time">10:00 – 21:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">zaterdag</span>
                  <span className="hours-time">10:00 – 18:00</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">zondag</span>
                  <span className="hours-time">12:00 – 17:00</span>
                </div>
                <p className="hours-note">
                  Geen inkoop op zaterdag – of alleen op afspraak.
                </p>
              </div>
            </section>
          </section>

          {/* RIGHT COLUMN */}
          <aside className="store-card" id="visit">
            <div className="store-tag">Sinds 19xx</div>
            
            <div className="store-photo">
              <Image
                src="/rotterdam.jpg"
                alt="Plaatboef winkel"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <GoogleMap
                address="Nieuwe Binnenweg 81A, 3014 GE Rotterdam, Netherlands"
                lat={51.9208}
                lng={4.4775}
                zoom={15}
              />
            </div>
          </aside>
        </main>

        <footer>
          <span>© De Plaatboef, Rotterdam – In- en verkoop LP's, CD's en DVD's</span>
          <div className="footer-right">
            <button className="scroll-top" onClick={scrollToTop}>
              Top
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
