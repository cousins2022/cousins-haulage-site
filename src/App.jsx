import React from "react";
import { Phone, Mail, MapPin, Snowflake, Truck, Globe2, ArrowRight } from "lucide-react";

const pages = [
  "manchester","london","birmingham","bristol","leeds","liverpool","newcastle",
  "nottingham","sheffield","cardiff","glasgow","edinburgh","devon","cornwall"
];

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function SeoHead({ title, description }) {
  React.useEffect(() => {
    document.title = title;
    const ensureMeta = (name) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      return tag;
    };
    ensureMeta("description").setAttribute("content", description);
  }, [title, description]);

  return null;
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">
          <div className="brand-badge">
            <Snowflake size={20} />
          </div>
          <div>
            <div className="brand-name">Cousins Haulage Ltd</div>
            <div className="brand-tag">Refrigerated Transport</div>
          </div>
        </a>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="#service-areas">Service Areas</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="btn btn-gold btn-small" href="tel:07549870107">Call Now</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div>
          <h3>Contact Cousins Haulage Ltd</h3>
          <p>
            Refrigerated courier services, frozen transport, and temperature-controlled
            delivery across the UK and Europe.
          </p>
        </div>
        <div className="contact-list">
          <div><Phone size={18} /> <span>07549 870107</span></div>
          <div><Mail size={18} /> <span>cousinshaulage2022@gmail.com</span></div>
          <div><MapPin size={18} /> <span>Shropshire – UK &amp; Europe</span></div>
        </div>
      </div>
    </footer>
  );
}

function Layout({ children }) {
  return (
    <div className="page">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <Layout>
      <SeoHead
        title="Cousins Haulage Ltd | Refrigerated Courier UK & Frozen Transport"
        description="Cousins Haulage Ltd provides refrigerated courier services, frozen transport, and temperature-controlled delivery across the UK and Europe. Same day and next day delivery available nationwide."
      />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Based in Shropshire · Covering the UK and Europe</div>
            <h1>Refrigerated Courier UK | Frozen Transport | Cousins Haulage Ltd</h1>
            <p className="lead">
              Cousins Haulage Ltd provides refrigerated courier services, frozen transport,
              and temperature-controlled delivery across the UK and Europe. Same day and next
              day delivery available nationwide.
            </p>
            <div className="button-row">
              <a className="btn btn-gold" href="mailto:cousinshaulage2022@gmail.com">
                Request Quote <ArrowRight size={18} />
              </a>
              <a className="btn btn-outline" href="tel:07549870107">Call 07549 870107</a>
            </div>
            <div className="feature-grid">
              <div className="feature-card">Refrigerated and frozen transport</div>
              <div className="feature-card">Same day and next day delivery</div>
              <div className="feature-card">UK-wide and European coverage</div>
              <div className="feature-card">Straightforward, reliable service</div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="award-card">
              <div className="eyebrow">Award Recognition</div>
              <h2>Owner Driver of the Year 2024</h2>
              <p>
                Award-winning refrigerated transport with direct same day and next day delivery
                across Shropshire, the UK, and Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Services</div>
            <h2>Temperature-controlled transport done properly</h2>
            <p>
              We keep things simple. If you need refrigerated or frozen goods moved safely
              and on time, Cousins Haulage Ltd offers direct same day, next day, and
              scheduled delivery across the UK and Europe.
            </p>
          </div>

          <div className="card-grid three">
            <div className="card">
              <Snowflake className="icon-gold" size={28} />
              <h3>Refrigerated & Frozen Transport</h3>
              <p>Temperature-controlled transport for chilled, frozen, and sensitive goods.</p>
            </div>
            <div className="card">
              <Truck className="icon-gold" size={28} />
              <h3>Same Day & Next Day Delivery</h3>
              <p>Urgent direct runs and dependable next day service across the UK and Europe.</p>
            </div>
            <div className="card">
              <Globe2 className="icon-gold" size={28} />
              <h3>Nationwide Coverage</h3>
              <p>Based in Shropshire and delivering to Manchester, London, Wales, Scotland and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="service-areas">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Service Areas</div>
            <h2>Refrigerated courier coverage across the UK</h2>
            <p>
              These pages are built to help you rank in multiple locations across the country.
            </p>
          </div>

          <div className="card-grid three">
            {pages.map((p) => (
              <a key={p} href={`/${p}`} className="location-link">
                Refrigerated Courier {titleCase(p)}
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function CityPage({ city }) {
  const name = titleCase(city);
  const desc = `Cousins Haulage Ltd offers refrigerated courier services in ${name}. We provide same day refrigerated delivery, next day delivery, and frozen transport across ${name} and the wider UK.`;

  return (
    <Layout>
      <SeoHead
        title={`Refrigerated Courier ${name} | Frozen Transport ${name} | Cousins Haulage Ltd`}
        description={desc}
      />

      <section className="section">
        <div className="container narrow">
          <div className="eyebrow">Location Page</div>
          <h1>Refrigerated Courier {name} | Frozen Transport {name}</h1>

          <p className="lead">
            Cousins Haulage Ltd offers refrigerated courier services in {name}. We provide
            same day refrigerated delivery, next day delivery, and frozen transport across
            {name} and the wider UK.
          </p>

          <div className="content-block">
            <p>
              Our temperature-controlled courier service covers urgent and scheduled deliveries.
              We regularly transport refrigerated and frozen goods to and from {name},
              ensuring safe and reliable delivery every time.
            </p>
            <p>
              Based in Shropshire, we provide nationwide coverage including {name}. Whether
              you need a same day refrigerated courier or next day frozen transport,
              Cousins Haulage Ltd delivers with straightforward service and clear communication.
            </p>
          </div>

          <div className="card-grid two">
            <div className="card">
              <h3>Why choose us in {name}?</h3>
              <ul className="check-list">
                <li>Refrigerated and frozen transport</li>
                <li>Same day delivery available</li>
                <li>Next day UK &amp; Europe delivery</li>
                <li>Reliable temperature-controlled courier</li>
              </ul>
            </div>
            <div className="card">
              <h3>Get a quote</h3>
              <p>
                Call <strong>07549 870107</strong> or email
                {" "}
                <strong>cousinshaulage2022@gmail.com</strong> for refrigerated courier services in {name}.
              </p>
              <div className="button-row">
                <a className="btn btn-gold" href="tel:07549870107">Call Now</a>
                <a className="btn btn-outline" href="mailto:cousinshaulage2022@gmail.com">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default function App() {
  const path = typeof window !== "undefined"
    ? window.location.pathname.replace(/^\//, "").toLowerCase()
    : "";

  if (pages.includes(path)) {
    return <CityPage city={path} />;
  }

  return <HomePage />;
}
