import { SampleForm } from "@/components/molecules/searchForm";
import { Tab, TabItem } from "@/components/molecules/Tab";
import { NextPage } from "next";
import Head from "next/head";

const UiSamples: NextPage = () => {
  return (
    <>
      <Head>
        <title>UI Samples Page</title>
      </Head>
      <div className="mx-10">
        <Tab defaultKey="tab1">
          <TabItem tabKey="tab1" title="タブ1">
            タブ1コンテンツ
          </TabItem>
          <TabItem tabKey="tab2" title="タブ2">
            タブ2コンテンツ
          </TabItem>
        </Tab>

        <div className="mt-20">
          <SampleForm></SampleForm>
        </div>
      </div>
    </>
  );
};

export default UiSamples;
