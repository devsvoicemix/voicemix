import { useState, useEffect } from 'react';
import logo from '../public/assets/voicemix.svg';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  // Watch if scroll Down or Up
  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop && currentPosition > 180) {
        // downscroll code
        setScrolling(false);
        setOpenMenu(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollTop]);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav
      className={`${
        !scrolling && 'translate-y-[-139px]'
      } absolute top-0 z-40  w-full transition-transform ease-in-out duration-300 delay-500`}
    >
      {/* Change absolute for fixed when background is ready  */}
      <div className='flex mx-auto max-w-1140px justify-between items-center p-8  lg:p-[3.75rem] '>
        {/* <Link href='/'> */}
        <Image src={logo} height={19} width={120} />
        {/* </Link> */}
        <div className='relative'>
          <button
            className='flex flex-col justify-between h-[12px] w-[18px]'
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div className='h-0.5 bg-white w-full'></div>
            <div className='h-0.5 bg-white w-full'></div>
            <div className='h-0.5 bg-white w-full'></div>
          </button>
          {/* {openMenu && (
          <div className="flex flex-col gap-4 absolute top-4 -right-8 bg-white text-dark-gray px-8 pb-8 pt-6 text-right">
            <Link to="/about" activeClassName="font-semibold">
              About
            </Link>
            <Link to="/blog" activeClassName="font-semibold">
              Blog
            </Link>
            <Link to="/projects" activeClassName="font-semibold">
              Projects
            </Link>
            <Link to="/contact" activeClassName="font-semibold">
              Contact
            </Link>
          </div>
        )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
