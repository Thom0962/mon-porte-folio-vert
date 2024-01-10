import './globals.css'

import { ReactNode } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" title={"Mon porte folio: Sontag Thomas"}>
    <head>
        <meta
            name="description"
            content="Mary's simple recipe for maple bacon donuts
           makes a sticky, sweet treat with just a hint
           of salt that you'll keep coming back for."></meta>

    </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>

  );
};

export default Layout;
