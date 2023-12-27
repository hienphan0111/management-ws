import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='../../../assets/images/logo.svg'
        alt='logo'
        width={80}
        height={80}
        className='mr-6'
      />
    </Link>
  );
};

export default Logo;
