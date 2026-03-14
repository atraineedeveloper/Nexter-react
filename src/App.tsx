import { useState } from 'react';
import styles from './App.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Realtors from './components/Realtors/Realtors';
import Features from './components/Features/Features';
import StoryPictures from './components/Story/StoryPictures';
import StoryContent from './components/Story/StoryContent';
import Homes from './components/Homes/Homes';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import NavMenu from './components/NavMenu/NavMenu';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar isOpen={isNavOpen} onToggle={() => setIsNavOpen((prev) => !prev)} />
      <NavMenu isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
