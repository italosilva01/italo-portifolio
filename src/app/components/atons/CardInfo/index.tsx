import Image from 'next/image';
import React from 'react';

interface CardInfoProps {
  title: string;
  position: string;
  icon: string;
  alt?: string;
}

export const CardInfo = ({
  title,
  position,
  icon,
  alt = '',
}: CardInfoProps) => {
  return (
    <div className="border  border-purple-dull rounded-lg w-60 h-52 flex flex-col items-center justify-center ">
      <Image src={icon} alt={alt} />
      <p>{title}</p>
      <h2 className="text-xl text-white font-bold ">{position}</h2>
    </div>
  );
};
