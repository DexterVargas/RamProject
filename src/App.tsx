import { useState, useEffect } from 'react'
import Loader from './common/Loader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Platforms from './components/Platforms';
import Solutions from './pages/Solutions';
import Cta from './components/CTA';





function App() {

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader/>
  ) : (
    <>
    
      <Navbar/>
      <Home/>
      <Platforms/>
      <Solutions/>
      <Cta/>
    </>
  )
}

export default App
