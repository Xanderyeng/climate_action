import React from "react";
import { styles } from "../styles";
import { left, right, trapeziums } from "../assets";

const Hero = () => {
  return (
    <section className='relative w-full h-auto m-auto'>
      {/* <div
        className={`flex flex-col items-center justify-center h-auto gap-10 pt-[20vh]`}
      >
      </div> */}

      {/* NEW DIV  -- NEEDS SOME WORK */}

      <div className='relative max-w-7xl mx-auto inset-0 top-[120px] flex flex-row items-center justify-center mt-16 p-16'>
        <div className='relative w-[35%] h-[25vw] z-[0] '>
          <div className=' absolute bottom-0 left-0'>
            <img src={left} className='w-[45px] ' />
          </div>
          <div className='absolute top-0 right-0'>
            <img src={right} className='w-[52px] ' />
          </div>

          <div className='absolute top-20 left-5 flex flex-col items-center justify-center text-center '>
            <p
              className={`${styles.heroSubText} font-extralight font-poppins mt-2 text-white-100`}
            >
              "&nbsp;Shaping the Future
              <br className='sm:block hidden' />
              of Climate Solutions
              <br className='sm:block hidden' />
              and Innovations in
              <br className='sm:block hidden' />
              Africa&nbsp;"
            </p>
          </div>
        </div>
      </div>

      <div className='relative w-full flex flex-col items-center justify-center mt-16 p-16'>
        {/* <div className=' absolute bottom-0 left-0'>
            <img src={left} className='w-[45px] ' />
          </div>
          <div className='absolute top-0 right-0'>
            <img src={right} className='w-[52px] ' />
          </div> */}

        <div className='flex flex-col items-center justify-center text-center p-8'>
          <p className={`text-[32px] font-semibold font-poppins text-primary`}>
            "&nbsp;Forging a Path"
            <br className='sm:block hidden' />
            to a New
            <br className='sm:block hidden' />
            Paradigm&nbsp;"
          </p>
        </div>
      </div>

      <div className='relative w-full flex flex-col items-center justify-center mt-16 py-8'>
        <img src={trapeziums} className='w-[5%] ' />
      </div>
      <div className='relative w-full flex flex-row items-center justify-center py-4 '>
        <span className='max-w-2xl mx-auto px-32 text-center font-normal text-[20px]'>
        &quot;&nbsp;Welcome to the first-ever Climate
          <br className='sm:block hidden' />
          Action Summit! This global gathering is
          <br className='sm:block hidden' />
          dedicated to rallying the world to take
          <br className='sm:block hidden' />
          urgent action on the climate crisis. Our
          <br className='sm:block hidden' />
          focus is on the opportunities that Africa
          <br className='sm:block hidden' />
          presents for achieving global net zero.
          <br className='sm:block hidden' />
          Join us in shaping a sustainable future<br className='sm:block hidden' />
          for all.&nbsp;&quot;
        </span>
      </div>
      {/* "Welcome to the first-ever Climate Action Summit! This global gathering is dedicated to rallying the world to take urgent action on the climate crisis. Our focus is on the opportunities that Africa presents for achieving global net zero. Join us in shaping a sustainable future for all." */}

      {/* TEXT CARD */}

      {/* <div className='relative p-[3.2rem]'>
          <div className=' absolute bottom-0 left-0'>
            <img src={left} className='w-[45px] ' />
          </div>
          <div className='absolute top-0 right-0'>
            <img src={right} className='w-[52px] ' />
          </div>

          <div className='flex flex-col items-center justify-center text-center '>
            <p
              className={`${styles.heroSubText} font-extralight font-poppins mt-2 text-white-100`}
            >
              "&nbsp;Shaping the Future
              <br className='sm:block hidden' />
              of Climate Solutions
              <br className='sm:block hidden' />
              and Innovations in
              <br className='sm:block hidden' />
              Africa&nbsp;"
            </p>
          </div>
        </div> */}

      {/* TEXT CARD */}

      {/* <div className='relative p-[3.2rem]'>
          <div className=' absolute bottom-0 left-0'>
            <img src={left} className='w-[45px] ' />
          </div>
          <div className='absolute top-0 right-0'>
            <img src={right} className='w-[52px] ' />
          </div>

          <div className='flex flex-col items-center justify-center text-center '>
            <p
              className={`${styles.heroSubText} font-extralight font-poppins mt-2 text-white-100`}
            >
              "&nbsp;Shaping the Future
              <br className='sm:block hidden' />
              of Climate Solutions
              <br className='sm:block hidden' />
              and Innovations in
              <br className='sm:block hidden' />
              Africa&nbsp;"
            </p>
          </div>
        </div> */}
    </section>
  );
};

export default Hero;
