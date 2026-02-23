'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isCms = pathname?.startsWith('/cms');
  const isDashboard = pathname?.startsWith('/dashboard');

  if (isCms || isDashboard) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
