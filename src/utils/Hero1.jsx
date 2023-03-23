import React from "react";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className=' h-screen m-auto relative top-0 '>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-center justify-center gap-5 z-5`}
      >
        <div className=''>
          <div className='flex flex-row items-center justify-center text-center'>
            <p className={`${styles.heroSubText} font-extralight font-poppins mt-2 text-white-100`}>
              "Shaping the Future "
              <br className='sm:block hidden' />
              of Climate Solutions
              <br className='sm:block hidden' />
              and Innovations in
              <br className='sm:block hidden' />
              Africa
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
