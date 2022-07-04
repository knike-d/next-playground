import { Tab, TabItem } from "@/components/molecules/Tab";
import { NextPage } from "next";
import Head from "next/head";

const UiSamples: NextPage = () => {
  return (
    <>
      <Head>
        <title>UI Samples Page</title>
      </Head>
      <Tab defaultKey="tab1">
        <TabItem tabKey="tab1" title="タブ1">
          タブ1コンテンツ
        </TabItem>
        <TabItem tabKey="tab2" title="タブ2">
          タブ2コンテンツ
        </TabItem>
      </Tab>
    </>
  );
};

export default UiSamples;
