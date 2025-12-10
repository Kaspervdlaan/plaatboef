'use client';

import { useState } from "react";
import Image from "next/image";
import GoogleMap from "./components/GoogleMap";

type Location = 'rotterdam' | 'utrecht';

interface LocationData {
  name: string;
  title: string;
  description: string;
  address: {
    name: string;
    street: string;
    city: string;
  };
  contact: {
    kvk: string;
    phone: string;
    phoneDisplay: string;
    email: string;
  };
  map: {
    address: string;
    lat: number;
    lng: number;
    zoom: number;
  };
  image: string;
  openingHours: {
    maandag: string;
    dinsdag: string;
    woensdag: string;
    donderdag: string;
    vrijdag: string;
    zaterdag: string;
    zondag: string;
  };
}

const locationData: Record<Location, LocationData> = {
  rotterdam: {
    name: 'Rotterdam',
    title: 'De Plaatboef in Rotterdam',
    description: '<strong>De eerste, de beste en de grootste</strong> tweedehands platenwinkel in Rotterdam. Al jaren dé plek voor liefhebbers van LP\'s, CD\'s en DVD\'s – om te ontdekken, verkopen en eindeloos te snuffelen tussen de bakken.',
    address: {
      name: 'Plaatboef Rotterdam',
      street: 'Nieuwe Binnenweg 81-A',
      city: '3014 GE Rotterdam'
    },
    contact: {
      kvk: '24.1293.030',
      phone: '+31104365873',
      phoneDisplay: '010 436 5873',
      email: 'info@plaatboef.nl'
    },
    map: {
      address: 'Nieuwe Binnenweg 81-A, 3014 GE Rotterdam, Netherlands',
      lat: 51.9208,
      lng: 4.4775,
      zoom: 15
    },
    image: '/rotterdam.jpg',
    openingHours: {
      maandag: '12:00 – 18:00',
      dinsdag: '10:00 – 18:00',
      woensdag: '10:00 – 18:00',
      donderdag: '10:00 – 18:00',
      vrijdag: '10:00 – 21:00',
      zaterdag: '10:00 – 18:00',
      zondag: '12:00 – 17:00'
    }
  },
  utrecht: {
    name: 'Utrecht',
    title: 'De Plaatboef in Utrecht',
    description: '<strong>De eerste, de beste en de grootste</strong> tweedehands platenwinkel in Utrecht. Al jaren dé plek voor liefhebbers van LP\'s, CD\'s en DVD\'s – om te ontdekken, verkopen en eindeloos te snuffelen tussen de bakken.',
    address: {
      name: 'Plaatboef Utrecht',
      street: 'Oudegracht 306',
      city: '3511 PK Utrecht'
    },
    contact: {
      kvk: '24.1293.030',
      phone: '+31302345678',
      phoneDisplay: '030 234 5678',
      email: 'info@plaatboef.nl'
    },
    map: {
      address: 'Oudegracht 306, 3511 PK Utrecht, Netherlands',
      lat: 52.0907,
      lng: 5.1214,
      zoom: 15
    },
    image: '/rotterdam.jpg', // You can replace this with a Utrecht image later
    openingHours: {
      maandag: '12:00 – 18:00',
      dinsdag: '10:00 – 18:00',
      woensdag: '10:00 – 18:00',
      donderdag: '10:00 – 18:00',
      vrijdag: '10:00 – 21:00',
      zaterdag: '10:00 – 18:00',
      zondag: '12:00 – 17:00'
    }
  }
};

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState<Location>('rotterdam');
  const currentData = locationData[selectedLocation];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page">
      <div className="page-inner shadow-lg" id="top">
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
            <button 
              className={`btn btn-location ${selectedLocation === 'rotterdam' ? 'active' : ''}`}
              onClick={() => setSelectedLocation('rotterdam')}
            >
              Rotterdam
            </button>
            <button 
              className={`btn btn-location ${selectedLocation === 'utrecht' ? 'active' : ''}`}
              onClick={() => setSelectedLocation('utrecht')}
            >
              Utrecht
            </button>
          </div>
        </header>

        <main>
          {/* LEFT COLUMN */}
          <section className="hero-text">
            <h1>{currentData.title}</h1>
            <div>
              <p className="hero-lead" dangerouslySetInnerHTML={{ __html: currentData.description }} />
            </div>

            <div className="store-info">
              <div className="store-address">
                <p><strong>{currentData.address.name}</strong></p>
                <p>{currentData.address.street}<br />
                  {currentData.address.city}</p>
              </div>
              <div className="store-contact">
                <div className="pill">KvK: {currentData.contact.kvk}</div>
                <div className="pill">
                  Tel: <a href={`tel:${currentData.contact.phone}`}>{currentData.contact.phoneDisplay}</a>
                </div>
                <div className="pill">
                  <a href={`mailto:${currentData.contact.email}`}>{currentData.contact.email}</a>
                </div>
              </div>
            </div>
          </section>

          <section className="hours-card" id="hours">
            <div className="hours-header">Openingstijden</div>
            <div className="hours-body">
              <div className="hours-row">
                <span className="hours-day">maandag</span>
                <span className="hours-time">{currentData.openingHours.maandag}</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">dinsdag</span>
                <span className="hours-time">{currentData.openingHours.dinsdag}</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">woensdag</span>
                <span className="hours-time">{currentData.openingHours.woensdag}</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">donderdag</span>
                <span className="hours-time">{currentData.openingHours.donderdag}</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">vrijdag</span>
                <span className="hours-time">{currentData.openingHours.vrijdag}</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">zaterdag</span>
                <span className="hours-time">{currentData.openingHours.zaterdag}</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">zondag</span>
                <span className="hours-time">{currentData.openingHours.zondag}</span>
              </div>
            </div>
          </section>

          <aside className="store-card" id="visit">
            <div className="store-tag">Sinds 19xx</div>
            
            <div className="store-photo">
              <Image
                src={currentData.image}
                alt={`Plaatboef winkel ${currentData.name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </aside>

          <div className="store-map">
            <GoogleMap
              address={currentData.map.address}
              lat={currentData.map.lat}
              lng={currentData.map.lng}
              zoom={currentData.map.zoom}
            />
          </div>
        </main>

        <footer>
          <span>© De Plaatboef, {currentData.name} – In- en verkoop LP's, CD's en DVD's</span>
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
