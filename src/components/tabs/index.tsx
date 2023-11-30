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
    <div className="flex gap-0.5">
      {tabsStore.value.map((tab) => {
        return (
          <Tab key={tab.id} label={tab.name} type={tab.type} id={tab.id} />
        );
      })}

      <Button
        size="icon"
        className="self-center ml-2 rounded-full bg-zinc-200 hover:bg-zinc-300"
        onClick={handleNewTabClick}
      >
        <Plus className="w-3 h-3 text-zinc-900" />
      </Button>
    </div>
  );
}
