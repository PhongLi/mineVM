'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import clsx from 'clsx';

import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx('sticky top-0 z-20 transition duration-100 ease-in-out', {
        'bg-background/70 backdrop-blur-md': isScrolled,
        'bg-transparent': !isScrolled,
      })}
    >
      <div className="container mx-auto px-2 py-4 md:px-6 md:py-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Logo />
            <Link href="/" className="button button--outline whitespace-nowrap">
              Buy $MINE
            </Link>
          </div>

          <Navigation />

          <div className="relative z-50 lg:hidden">
            <Hamburger
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
              color="#E91E63"
              size={24}
              duration={0.3}
            />
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary-500"></div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </header>
  );
}

export default Header;
