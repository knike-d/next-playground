// import "../../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Layout>
  );
};

export default MyApp;
