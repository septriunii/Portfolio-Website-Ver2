import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full bg-node-bg font-sans text-node-text overflow-hidden">
      {/* Navbar stays at the top, fixed in flex layout */}
      <div className="flex-none z-50 shadow-md">
        <Navbar />
      </div>

      {/* Main Content Area - Split Panel Logic */}
      {/* 
         Mobile: This container becomes the scrollable area (overflow-y-auto).
         Desktop: This container is hidden overflow, and the right panel (main) scrolls independently.
      */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-y-auto md:overflow-hidden scroll-smooth">
        
        {/* Left Panel: Home/Hero Section */}
        {/* 
            Mobile: min-h-[calc(100vh-4rem)] ensures it takes up full viewing height below nav. 
            Desktop: Fixed height (h-full) and width.
        */}
        <aside className="w-full md:w-1/2 min-h-[calc(100vh-4rem)] md:h-full bg-node-bg relative md:overflow-hidden border-b md:border-b-0 md:border-r border-node-border flex flex-col justify-center z-10 flex-none">
          <Hero />
        </aside>

        {/* Right Panel: Content Section */}
        {/* 
            Mobile: h-auto (content flows naturally in the parent scroll container).
            Desktop: h-full, overflow-y-auto (scrolls independently).
        */}
        <main className="w-full md:w-1/2 h-auto md:h-full bg-[#1f1f1f] md:overflow-y-auto scroll-smooth">
          <FeatureGrid />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;