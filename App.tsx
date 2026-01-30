import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Gallery from './components/Gallery';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans antialiased bg-wei-light-gray text-gray-900 selection:bg-wei-light-gold selection:text-wei-dark-blue">
      <main>
        <Hero />
        <Steps />
        <Gallery />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Analytics />

      <CookieConsent
        location="bottom"
        buttonText="Aceitar Cookies"
        declineButtonText="Recusar"
        enableDeclineButton
        onAccept={() => {
          console.log('Cookies aceitos');
        }}
        onDecline={() => {
          console.log('Cookies recusados');
        }}
        style={{
          background: "#0C2B4D",
          padding: "20px",
          alignItems: "center"
        }}
        buttonStyle={{
          background: "#E3C972",
          color: "#0C2B4D",
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "4px",
          padding: "10px 24px"
        }}
        declineButtonStyle={{
          background: "transparent",
          color: "#C6D5FE",
          fontSize: "14px",
          border: "1px solid #C6D5FE",
          borderRadius: "4px",
          padding: "10px 24px"
        }}
        expires={365}
      >
        <span style={{ fontSize: '14px' }}>
          Este site utiliza cookies e tecnologias de rastreamento para melhorar sua experiência de navegação,
          personalizar conteúdo e anúncios, e analisar nosso tráfego.
          Ao continuar navegando, você concorda com nossa{' '}
          <a href="/politica-de-privacidade" style={{ color: '#E3C972', textDecoration: 'underline' }}>
            Política de Privacidade
          </a>.
        </span>
      </CookieConsent>
    </div>
  );
}

export default App;