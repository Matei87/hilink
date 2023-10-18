'use client';
import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import { INAV_LINKS } from '@/types';
import Button from '../shared/Button';

const Navbar: FC = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav
      className='flexBetween max-container padding-container
    relative z-30 py-5'
    >
      <Link href='/'>
        <Image src='hilink-logo.svg' alt='logo' width={74} height={29} />
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map(({ href, key, label }: INAV_LINKS) => (
          <Link
            href={href}
            key={key}
            className='regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:text-orange-50'
          >
            {label}
          </Link>
        ))}
      </ul>
      <div className='lg:flexCenter hidden'>
        <Button
          type='button'
          title='Login'
          icon='user.svg'
          variant='btn_dark_green'
        />
      </div>
      <button
        className='rounded-full bg-secondary-500 p-2 lg:hidden'
        onClick={() => setIsMenuToggled(!isMenuToggled)}
      >
        <Image
          src='menu.svg'
          alt='menu'
          width={32}
          height={32}
          className='inline-block cursor-pointer lg:hidden'
        />
      </button>

      {isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl bg-orange-50 lg:hidden'>
          <div className='flex justify-end p-7'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Image
                src='close.svg'
                alt='close'
                width={32}
                height={32}
                className='inline-block cursor-pointer'
              />
            </button>
          </div>
          <ul className='ml-[33%] flex flex-col gap-10 text-2xl'>
            {NAV_LINKS.map(({ href, key, label }: INAV_LINKS) => (
              <Link
                href={href}
                key={key}
                className='regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:text-black'
              >
                {label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
