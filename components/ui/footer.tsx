import { FC } from 'react';
import { P } from './typography';

export const Footer: FC = () => {
  return (
    <footer className="border-t py-6 text-center text-sm bg-navbar text-white">
      <P>&copy; {new Date().getFullYear()} Abya&apos;s SaaS - All rights reserved.</P>
    </footer>
  );
};
