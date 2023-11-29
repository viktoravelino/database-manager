import { TabType } from "@/@types/Tab";
import { signal } from "@preact/signals-react";

interface TabsContextProps {
  type: TabType;
  name: string;
  id: number;
}

export const tabsContext = signal<TabsContextProps[]>([
  //   {
  //     id: 1,
  //     type: "query",
  //     name: "Query #1",
  //   },
  //   {
  //     id: 2,
  //     type: "query",
  //     name: "Query #2",
  //   },
  //   {
  //     id: 3,
  //     type: "data",
  //     name: "data #1",
  //   },
  //   {
  //     id: 4,
  //     type: "structure",
  //     name: "structure #1",
  //   },
]);

export function closeTab(id: number) {
  tabsContext.value = tabsContext.value.filter((tab) => tab.id !== id);
}

// TODO: add tab function
export function openNewTab() {
  const id = Math.random() * 100;
  const newTab = {
    id,
    type: "query",
    name: `Query #${id}`,
  } as const;

  tabsContext.value = [...tabsContext.value, newTab];

  return newTab;
}
