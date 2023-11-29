import { TabType } from "@/@types/Tab";
import { signal } from "@preact/signals-react";

interface TabsStoreProps {
  type: TabType;
  name: string;
  id: number;
}

export const tabsStore = signal<TabsStoreProps[]>([
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
  tabsStore.value = tabsStore.value.filter((tab) => tab.id !== id);
}

export function openNewTab(type: TabType = "query") {
  const id = Math.random() * 100;
  const newTab = {
    id,
    type,
    name: `${type} #${id}`,
  } as const;

  tabsStore.value = [...tabsStore.value, newTab];

  return newTab;
}
