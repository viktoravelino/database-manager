import { TabType } from "@/@types/Tab";
import { effect, signal } from "@preact/signals-react";

const storage = localStorage;

interface TabsStoreProps {
  type: TabType;
  name: string;
  id: number | string;
  content?: string;
}

function getTabs() {
  const localStorageTabs = storage.getItem("tabs");
  if (!localStorageTabs) return [];
  return JSON.parse(localStorageTabs);
}

export const tabsStore = signal<TabsStoreProps[]>(getTabs());

effect(() => {
  storage.setItem("tabs", JSON.stringify(tabsStore.value));
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
  const internalId = generateInternalId(name, id, type);

  const newTab = {
    id: internalId,
    type,
    name: name || `${type} #${internalId}`,
  } as const;

  tabsStore.value = [...tabsStore.value, newTab];

  return newTab;
}

function generateInternalId(
  name: string | undefined,
  id: number | string | undefined,
  type: TabType
): number | string {
  return name ? `${name}-${findNextId()}` : id || checkNextNumber(type);
}

function findNextId() {
  const tabs = tabsStore.value.filter((tab) => tab.type !== "query");
  const ids = tabs.map((tab) => parseInt(tab.id.toString().split("-")[1]));

  let nextNumber = 1;
  while (ids.includes(nextNumber)) {
    nextNumber++;
  }
  return nextNumber;
}

function checkNextNumber(type: TabType = "query"): number {
  const tabs = tabsStore.value.filter((tab) => tab.type === type);

  for (let nextNumber = 1; ; nextNumber++) {
    const name = `${type} #${nextNumber}`;

    if (!tabs.some((tab) => tab.name === name)) {
      return nextNumber;
    }
  }
}
