import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Sidebar />
      </main>
    </>
  );
};
export default App;
