import { portfolio } from './data/portfolio';
import { useReveal } from './hooks/useReveal';
import ErrorBoundary from './components/layout/ErrorBoundary';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Tools from './components/sections/Tools';
import Runs from './components/sections/Runs';
import Memory from './components/sections/Memory';

export default function App() {
  useReveal();

  return (
    <ErrorBoundary>
      <Nav brand={portfolio.brand} />
      <main id="main">
        <Hero {...portfolio.hero} />
        <Tools data={portfolio.tools} />
        <Runs data={portfolio.runs} />
        <Memory data={portfolio.memory} />
      </main>
      <Footer data={portfolio.footer} />
    </ErrorBoundary>
  );
}
