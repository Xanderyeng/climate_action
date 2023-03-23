import React from "react";
import { styles } from "../styles";
import { left, right, trapeziums, the_president } from "../assets";

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

      <div
        className={`${styles.paddingX} relative w-full flex flex-row items-center justify-center py-4`}
      >
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
          Join us in shaping a sustainable future
          <br className='sm:block hidden' />
          for all.&nbsp;&quot;
        </span>
      </div>

      <div
        className={` ${styles.paddingX} relative w-full flex flex-row items-center justify-center`}
      >
        <span className='text-center'>
          {/* H.E. William Ruto, 
the President of the Republic of Kenya, & Chair of the Committee of African Heads of State & Government
on Climate Change  */}
          <p className='text-[28px] font-normal'>H.E. William Ruto&#44;</p>
          <p>
            the President of the Republic of Kenya&#44; &amp; Chair of the
            <br className='sm:block hidden' />
            Committee of African Heads of State &amp; Government
            <br className='sm:block hidden' />
            <p className='pt-4'>on Climate Change</p>
          </p>
        </span>
        <img src={the_president} alt='President' className='w-[25vw]' />
      </div>
    </section>
  );
};

export default Hero;
