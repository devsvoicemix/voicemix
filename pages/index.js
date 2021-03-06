import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import gridOne from '../public/images/grid-one.png';
import gridTwo from '../public/images/grid-two.png';
import gridThree from '../public/images/grid-three.png';
import gridFour from '../public/images/grid-four.png';
import arrowWhite from '../public/icons/arrow-white.svg';
import arrowBlack from '../public/icons/arrow-black.svg';
import arrowPurple from '../public/icons/arrow-purple.svg';
import twitter from '../public/icons/twitter.svg';
import discord from '../public/icons/discord.svg';
import stepOne from '../public/assets/step-one.svg';
import stepTwo from '../public/assets/step-two.svg';
import stepThree from '../public/assets/step-three.svg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Voicemix</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navbar />
      <section className='h-screen relative flex items-end bg-gradient-hero'>
        <div className='max-w-[375px] lg:max-w-1140px lg:mx-auto flex flex-col w-full p-8 lg:p-[3.75rem] font-gobold-bold uppercase'>
          <h1 className='text-white text-[40px] leading-[58px] lg:d-title'>
            Let’s perpetuate the voices and <br /> messages that brought us here
          </h1>
          <h1 className='text-safety-orange text-[4.25rem] leading-[5.56rem] lg:d-title-hollow'>
            Together!
          </h1>
        </div>
        <video
          className='object-cover h-screen w-screen absolute top-0 z-[-1]'
          playsInline={true}
          muted
          width='720'
          height='1280'
          loop
          autoPlay={true}
        >
          <source src='/bg-video.mp4' type='video/mp4'></source>
        </video>
      </section>
      <section className='mt-[3rem]'>
        <div className='max-w-1140px mx-auto w-full p-8 lg:pt-[3.75rem] lg:px-[3.75rem] lg:flex lg:justify-between relative'>
          <div className='absolute top-0 mt-8 right-0 mr-8 lg:hidden animate-spin-slow'>
            <Image src={stepOne} alt='step one' width={75} height={75} />
          </div>
          <div className='absolute bottom-0 mb-8 left-[25rem] hidden lg:block animate-spin-slow'>
            <Image src={stepOne} alt='step one lg' width={125} height={125} />
          </div>
          <h2 className='text-safety-orange uppercase mb-5 lg:mb-0'>
            <span className='m-title-high lg:d-subtitle-hollow'>
              We are Raising
            </span>
            <br />
            <span className='m-title lg:d-subtitle'>Funds</span>
          </h2>
          <p className='flex-1  lg:max-w-[271px] lg:self-end lg:ml-10 lg:before:block lg:before:h-0.5 lg:before:w-[51px] lg:before:bg-silver lg:before:mb-2'>
            This NFTs are the first of a serie called “Originals”. All of them
            are going to be minted as way to foundraise the organization, to
            start building the next to step of this project.
          </p>
        </div>
        <div className='max-w-1140px mx-auto w-full px-8 lg:px-[3.75rem] lg:pt-[3rem] grid grid-cols-2 gap-[0.4375rem] lg:grid-cols-4'>
          <Image
            src={gridOne}
            alt='first message example'
            layout='responsive'
          />
          <Image
            src={gridTwo}
            alt='second message example'
            layout='responsive'
          />
          <Image
            src={gridThree}
            alt='third message example'
            layout='responsive'
          />
          <Image
            src={gridFour}
            alt='fourth message example'
            layout='responsive'
          />
        </div>
        <div className='flex flex-col lg:flex-col-reverse '>
          <div className='px-8 mx-auto mt-5 mb-8 max-w-1140px lg:px-[3.75rem] w-full flex lg:justify-end'>
            <Link href='/' passHref>
              <a className='cursor-pointer hover:bg-blue/90 transition-all duration-300 rounded bg-blue w-full lg:w-fit lg:px-5  text-center buttons text-white py-3 lg:py-4 flex gap-3 justify-center'>
                Buy an ‘original’
                <Image src={arrowWhite} width={7} height={11} />
              </a>
            </Link>
          </div>
          <div className='highlighted px-8 mx-auto max-w-1140px lg:px-[3.75rem] flex flex-col w-full lg:mt-5 lg:before:block lg:before:h-full lg:before:w-[1px] lg:before:bg-platinum '>
            <span className='mb-5 lg:mb-0 lg:pb-5 border-t border-platinum pt-5 block lg:border lg:rounded lg:px-4'>
              We have documentated all the creation process of these first
              “Originals” NFTs to be transparent with everyone.
              <span className='hidden lg:inline buttons cursor-pointer'>
                {' '}
                Read more <Image src={arrowBlack} width={7} height={11} />
              </span>
            </span>

            <button className='lg:hidden border-b border-platinum buttons pb-5 flex justify-end lg:justify-start items-center gap-2 w-full '>
              Read more <Image src={arrowBlack} width={7} height={11} />
            </button>
          </div>
        </div>
      </section>
      <section className='mt-[6.25rem]'>
        <div className='max-w-1140px mx-auto w-full p-8 lg:pt-[3.75rem] lg:px-[3.75rem] lg:flex lg:justify-between relative'>
          <div className='absolute top-0 mt-3 right-0 mr-8 lg:hidden animate-spin-slow'>
            <Image src={stepTwo} alt='step two' width={75} height={75} />
          </div>
          <div className='absolute top-0 mt-[3.75rem] left-[37rem] hidden lg:block animate-spin-slow'>
            <Image src={stepTwo} alt='step two lg' width={125} height={125} />
          </div>
          <h2 className='text-safety-orange uppercase mb-5 lg:mb-0'>
            <span className='m-title-high lg:d-subtitle-hollow'>Let’s</span>{' '}
            <br />
            <span className='m-title lg:d-subtitle'>Decentralize</span>
          </h2>
          <p className='flex-1 lg:max-w-[271px] lg:self-end lg:ml-10 lg:before:block lg:before:h-0.5 lg:before:w-[51px] lg:before:bg-silver lg:before:mb-2'>
            This NFTs are the first of a serie called “Originals”. All of them
            are going to be minted as way to foundraise the organization, to
            start building the next to step of this project.
            <Link href='/' passHref>
              <a className='cursor-pointer ml-auto mt-5 lg:mt-2 rounded border border-blue text-blue  w-fit px-4 py-3 text-center buttons flex gap-3 justify-center items-center'>
                Read more
                <Image src={arrowPurple} width={7} height={11} />
              </a>
            </Link>
          </p>
        </div>
      </section>
      <section className='mt-[6.25rem]'>
        <div className='max-w-1140px mx-auto w-full p-8 lg:pt-[3.75rem] lg:px-[3.75rem] lg:flex lg:justify-between relative'>
          <div className='absolute top-0 right-0 mr-8 lg:hidden animate-spin-slow'>
            <Image src={stepThree} alt='step three' width={75} height={75} />
          </div>
          <div className='absolute top-0 mt-[3.75rem] left-[34rem] hidden lg:block animate-spin-slow'>
            <Image
              src={stepThree}
              alt='step three lg'
              width={125}
              height={125}
            />
          </div>
          <h2 className='text-safety-orange uppercase mb-5 lg:mb-0'>
            <span className='m-title-high lg:d-subtitle-hollow'>go Mint</span>{' '}
            <br />
            <span className='m-title lg:d-subtitle'>yourself</span>
          </h2>
          <p className='flex-1 lg:max-w-[271px] lg:self-end lg:ml-10 lg:before:block lg:before:h-0.5 lg:before:w-[51px] lg:before:bg-silver lg:before:mb-2'>
            This NFTs are the first of a serie called “Originals”. All of them
            are going to be minted as way to foundraise the organization, to
            start building the next to step of this project.
            <Link href='/' passHref>
              <a className='cursor-pointer ml-auto mt-5 lg:mt-2 rounded border border-blue text-blue  w-fit px-4 py-3 text-center buttons flex gap-3 justify-center items-center'>
                Read more
                <Image src={arrowPurple} width={7} height={11} />
              </a>
            </Link>
          </p>
        </div>
      </section>
      <section className='my-[6.25rem]'>
        <div className='max-w-1140px mx-auto w-full pt-8 px-8 lg:pt-[3.75rem] lg:px-[3.75rem] lg:flex lg:justify-between lg:flex-row-reverse'>
          <h2 className='text-blue uppercase mb-5 lg:mb-0 text-right'>
            <span className='m-title-high lg:d-subtitle-hollow'>Join the</span>{' '}
            <br />
            <span className='m-title lg:d-subtitle'>community</span>
          </h2>
          <div className='grid grid-cols-2 gap-3 lg:items-end'>
            <Link href='https://twitter.com/voicemix' passHref>
              <a
                target='_blank'
                rel='noopener'
                className='px-4 py-5 border border-blue flex flex-col gap-3 rounded items-center lg:max-w-[149.5px] lg:h-fit'
              >
                <Image src={twitter} width={70} height={70} />
                <span className='text-blue text-center buttons'>
                  Follow us on Twitter!
                </span>
              </a>
            </Link>
            <Link href='https://discord.gg/2pgRCrWSkC' passHref>
              <a
                target='_blank'
                rel='noopener'
                className='px-4 py-5 border border-blue flex flex-col gap-3 rounded items-center lg:max-w-[149.5px] lg:h-fit'
              >
                <Image src={discord} width={70} height={70} />
                <span className='text-blue text-center buttons'>
                  Join the Discord community!
                </span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
