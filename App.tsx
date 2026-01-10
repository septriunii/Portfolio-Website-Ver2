import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-node-bg font-sans text-node-text overflow-hidden selection:bg-node-primary selection:text-white">
      {/* Navbar Fixed */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 shadow-lg bg-node-header/95 backdrop-blur-sm border-b border-node-border">
        <Navbar />
      </div>

      {/* Main Content Wrapper */}
      <div className="h-full pt-16 w-full flex flex-col">
        
        {/* 
           Layout Logic:
           - Mobile/Tablet (up to 1023px): Vertical scroll flow.
           - Desktop (1024px+): Split screen layout.
        */}
        <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-y-auto lg:overflow-hidden scroll-smooth">
          
          {/* Left Panel: Hero */}
          <aside className="w-full lg:w-1/2 min-h-[calc(100vh-4rem)] lg:h-full flex-none bg-node-bg relative lg:overflow-hidden border-b lg:border-b-0 lg:border-r border-node-border flex flex-col justify-center z-10">
            <Hero />
          </aside>

          {/* Right Panel: Content - Backgrounds now span full width */}
          <main className="w-full lg:w-1/2 h-auto lg:h-full lg:overflow-y-auto scroll-smooth bg-[#1a1a1a]">
            <div className="w-full">
              <FeatureGrid />
              <Footer />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;