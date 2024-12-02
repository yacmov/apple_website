import Navbar from './components/NavBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
