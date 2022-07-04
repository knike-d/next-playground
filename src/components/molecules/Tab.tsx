import { createContext, PropsWithChildren, useCallback, useContext, useLayoutEffect, useMemo, useState } from "react";

type TabState = {
  activeKey: string;
  addItem: (title: string, key: string) => void;
};

const TabContext = createContext<TabState>({
  activeKey: "",
  addItem: () => {},
});

type TabProps = {
  defaultKey: string;
};

type TabValue = {
  title: string;
  key: string;
};

export const Tab = ({ defaultKey, children }: PropsWithChildren<TabProps>) => {
  const [activeKey, setActiveKey] = useState(defaultKey);
  const [tabs, setTabs] = useState<TabValue[]>([]);
  const addTab = useCallback((title: string, key: string) => {
    setTabs((tabs) => {
      const additionalTab = tabs.some((el) => el.key === key) ? [] : [{ title, key }];
      return [...tabs, ...additionalTab];
    });
  }, []);

  const tabManager = useMemo<TabState>(
    () => ({
      activeKey,
      addItem: addTab,
    }),
    [activeKey, tabs],
  );

  return (
    <TabContext.Provider value={tabManager}>
      <div className="mx-10">
        <div className="mb-5 flex justify-around">
          {tabs.map(({ title, key }) => (
            <div
              key={key}
              className={`w-full cursor-pointer border-b-2 border-gray-100 py-1 text-center ${
                activeKey === key ? "border-gray-500" : ""
              }`}
              onClick={() => setActiveKey(key)}
            >
              {title}
            </div>
          ))}
        </div>
        <div className="mx-1">{children}</div>
      </div>
    </TabContext.Provider>
  );
};

type TabItemProps = {
  tabKey: string;
  title: string;
};

export const TabItem = ({ title, tabKey, children }: PropsWithChildren<TabItemProps>) => {
  const { activeKey, addItem } = useContext(TabContext);

  useLayoutEffect(() => {
    addItem(title, tabKey);
  }, []);

  return tabKey === activeKey ? <div>{children}</div> : null;
};
