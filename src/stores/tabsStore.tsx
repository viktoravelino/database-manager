import { TabType } from "@/@types/Tab";
import { effect, signal } from "@preact/signals-react";

interface TabsStoreProps {
  type: TabType;
  name: string;
  id: number | string;
}

function getTabs() {
  const localStorageTabs = localStorage.getItem("tabs");
  if (!localStorageTabs) return [];
  return JSON.parse(localStorageTabs);
}

export const tabsStore = signal<TabsStoreProps[]>(getTabs());

effect(() => {
  localStorage.setItem("tabs", JSON.stringify(tabsStore.value));
});

export function closeTab(id: number | string) {
  tabsStore.value = tabsStore.value.filter((tab) => tab.id !== id);
}

export interface OpenNewTabProps {
  type?: TabType;
  name?: string;
  id?: number | string;
}

export function openNewTab({ name, id, type = "query" }: OpenNewTabProps) {
  const internalId = name
    ? `${name}-${findNextId()}`
    : id
    ? id
    : checkNextNumber(type);

  const newTab = {
    id: internalId,
    type,
    name: name ?? `${type} #${internalId}`,
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
  let nextNumber = 1;
  while (!found) {
    const name = `${type} #${nextNumber}`;
    const tab = tabs.find((tab) => tab.name === name);

    if (!tab) {
      found = true;
      return nextNumber;
    }
    nextNumber++;
  }

  return nextNumber;
}
