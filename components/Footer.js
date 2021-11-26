import logo from '../public/assets/voicemix-footer.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-black-vmx'>
      <div className='max-w-1140px mx-auto w-full items-start flex flex-col p-8 lg:p-[3.75rem]'>
        <div className='w-full flex flex-col items-start lg:flex-row lg:justify-between'>
          <Image src={logo} alt='Voicemix' height={36} width={198} />
          <div className='lg:flex lg:gap-10'>
            <div className='flex flex-col uppercase mt-8 lg:mt-0'>
              <span className='text-white font-gobold-high text-[1.75rem] leading-[2.125rem]'>
                Join the community!
              </span>
              <a
                href='https://twitter.com/voicemix'
                target='_blank'
                rel='noopener'
                className='font-gobold-bold text-[1.75rem] leading-[2.125rem] text-safety-orange'
              >
                TWITTER
              </a>
              <a
                href='https://discord.gg/2pgRCrWSkC'
                target='_blank'
                rel='noopener'
                className='font-gobold-bold text-[1.75rem] leading-[2.125rem] text-safety-orange'
              >
                DISCORD
              </a>
            </div>
            <div className='flex flex-col uppercase mt-8 lg:mt-0'>
              <span className='text-white font-gobold-high text-[1.75rem] leading-[2.125rem]'>
                read more!
              </span>
              <a
                href='https://twitter.com/voicemix'
                target='_blank'
                rel='noopener'
                className='font-gobold-bold text-[1.75rem] leading-[2.125rem] text-safety-orange'
              >
                whitepaper
              </a>
            </div>
          </div>
        </div>
        <div className='text-[#A9ADB6] mt-8 w-full'>
          <span className='pt-2 border-t border-t-[#6B7280] block w-full lg:text-right lg:pr-5'>
            ©2021 Voicemix, Inc. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
