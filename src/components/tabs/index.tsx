import { Plus } from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";

import { openNewTab, tabsStore } from "@/stores/tabsStore";

import { Tab } from "./tab";

export function Tabs() {
  const navigate = useNavigate();

  function handleNewTabClick() {
    const newTab = openNewTab({});
    navigate(`${newTab.type}/${newTab.id}`);
  }

  return (
    <div className="flex items-center gap-0.5 bg-tabs-bg pt-2">
      {tabsStore.value.map((tab) => {
        return (
          <Tab key={tab.id} label={tab.name} type={tab.type} id={tab.id} />
        );
      })}

      <Button
        size="icon"
        className="ml-2 rounded-full bg-zinc-200 hover:bg-zinc-300"
        onClick={handleNewTabClick}
      >
        <Plus className="h-3 w-3 text-zinc-900" />
      </Button>
    </div>
  );
}
