import Head from "next/head";
import Navbar from "components/Nav/Navbar";
import ButtomNavbarMobile from "components/Nav/NavbarMobile";
import Footer from "components/Footer/Footer";

const Layout = ({
  title = "Cocheras Eléctricas En Torreón | Reparación De Cocheras | Mantenimiento De Cocheras",
  description = "Para nosotros la honestidad lo es todo, por eso todos nuestros servicios de cocheras eléctricas tienen una garantía anti-fallas mínima de 6 meses FIRMADA.",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/pages/assets/icons/cart.svg" />
      </Head>
      <Navbar />
      <ButtomNavbarMobile />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
