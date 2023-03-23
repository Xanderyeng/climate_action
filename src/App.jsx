import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, Participate, Partner, About } from "./components/Index";
import { styles } from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <div className='z-0 '>
        <div className='bg-no-repeat bg-backdrop bg-100% bg-backdrop'>
          <div className='w-full relative z-1 '>
            <Navbar />
            <Hero />
          </div>

          {/* HERO DIVS */}
        </div>
        <Participate />
        <Partner />
        {/* climate change */}
        <About />
        <About />
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
