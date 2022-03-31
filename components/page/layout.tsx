import React from 'react';
import Footer from './footer/footer';
import Navbar from './navbar/navbar';

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
