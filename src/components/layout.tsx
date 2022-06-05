import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ReactNode } from "react";

export const Layout = ({ children }: Props) => {
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
