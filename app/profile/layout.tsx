'use client';

import { ReactNode, useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { Button } from '~/components/ui/button';
import { Footer } from '~/components/ui/footer';
import { Navbar } from '~/components/ui/navbar';
import { navigationGuest } from '../navigation';

export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <main className="min-h-screen px-0">
      <Navbar navigation={navigationGuest} />
      {visible && (
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-10 right-10 p-2 rounded-full"
        >
          <FaChevronUp size={28} color="white" />
        </Button>
      )}
      {children}
      <Footer />
    </main>
  );
}
