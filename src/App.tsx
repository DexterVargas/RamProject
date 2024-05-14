import { useState, useEffect } from 'react'
import Loader from './common/Loader';
import Navbar from './components/Navbar';




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

      

    </>
  )
}

export default App
