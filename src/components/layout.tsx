import Header from "./header";
import Footer from "./footer";
import { ReactNode } from "react";

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
