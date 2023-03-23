import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, Participate, Partner, About } from "./components/Index";

const App = () => {
  return (
    <BrowserRouter>
      <div className=''>
        <div className='bg-no-repeat bg-backdrop bg-100%'>
          <div className='w-full h-auto relative z-1 '>
            <Navbar />
            <Hero />
          </div>
        </div>
        <Participate />
        <Partner />      
        
      </div>
    </BrowserRouter>
  );
};

export default App;
