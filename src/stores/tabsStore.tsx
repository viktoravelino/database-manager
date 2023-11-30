import { TabType } from "@/@types/Tab";
import { signal } from "@preact/signals-react";

interface TabsStoreProps {
  type: TabType;
  name: string;
  id: number | string;
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

export function closeTab(id: number | string) {
  tabsStore.value = tabsStore.value.filter((tab) => tab.id !== id);
}

export interface OpenNewTabProps {
  type?: TabType;
  name?: string;
}

export function openNewTab({ name, type = "query" }: OpenNewTabProps) {
  const id = name ? `${name}-${findNextId()}` : checkNextNumber(type);
  const newTab = {
    id,
    type,
    name: name ?? `${type} #${id}`,
  } as const;

  tabsStore.value = [...tabsStore.value, newTab];

  return newTab;
}

function findNextId() {
  const tabs = tabsStore.value.filter((tab) => tab.type !== "query");
  const ids = tabs.map((tab) => tab.id.toString().split("-")[1]);

  let found = false;
  let nextNumber = 1;
  while (!found) {
    if (!ids.includes(nextNumber.toString())) {
      found = true;
      return nextNumber;
    }
    nextNumber++;
  }
}

function checkNextNumber(type: TabType = "query") {
  const tabs = tabsStore.value.filter((tab) => tab.type === type);
  let found = false;
  console.log(tabs.length);
  // find next min number based on name
  let nextNumber = 1;
  while (!found) {
    const name = `${type} #${nextNumber}`;
    const tab = tabs.find((tab) => tab.name === name);

    if (!tab) {
      found = true;
      return nextNumber;
    }
    nextNumber++;
    // found = true;
  }

  return nextNumber;
}
