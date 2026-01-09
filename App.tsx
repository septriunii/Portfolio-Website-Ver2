import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-node-bg font-sans text-node-text overflow-hidden">
      {/* Navbar Fixed: Ensures it never moves regardless of scrolling */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 shadow-md bg-node-header">
        <Navbar />
      </div>

      {/* Main Content Wrapper: Adds padding-top (pt-16) so content starts below the fixed header */}
      <div className="h-full pt-16 w-full flex flex-col">
        
        {/* 
           Layout Logic:
           - Mobile: The outer 'div' (below) is the scroll container for the whole page (overflow-y-auto).
           - Desktop: The outer 'div' is hidden overflow. The Right Panel (main) scrolls independently.
        */}
        <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-y-auto md:overflow-hidden scroll-smooth">
          
          {/* Left Panel: Hero */}
          {/* Mobile: Part of the vertical scroll flow. Desktop: Static side panel. */}
          <aside className="w-full md:w-1/2 min-h-[calc(100vh-4rem)] md:h-full flex-none bg-node-bg relative md:overflow-hidden border-b md:border-b-0 md:border-r border-node-border flex flex-col justify-center z-10">
            <Hero />
          </aside>

          {/* Right Panel: Content */}
          {/* Desktop: This becomes the independent scroll container (md:overflow-y-auto). */}
          <main className="w-full md:w-1/2 h-auto md:h-full md:overflow-y-auto scroll-smooth bg-[#1f1f1f]">
            <FeatureGrid />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;