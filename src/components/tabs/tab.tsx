import { Code, PencilLine, Table, X } from "lucide-react";
import { useMatch, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import type { TabType } from "@/@types/Tab";

import { Button } from "@/components/ui/button";
import { closeTab, tabsStore } from "@/stores/tabsStore";
import { cn } from "@/lib/utils";

interface TabsProps {
  id: number;
  active?: boolean;
  label: string;
  type: TabType;
}

const iconMapper = {
  query: <Code className="w-3 aspect-square text-pink-600" />,
  data: <Table className="w-3 aspect-square text-yellow-600" />,
  structure: <PencilLine className="w-3 aspect-square text-green-700" />,
};

export function Tab({ label, type, id }: TabsProps) {
  const isLinkActive = !!useMatch(`${type}/${id}`);
  const navigate = useNavigate();

  const Icon = iconMapper[type];

  function handleDeleteTab() {
    if (!isLinkActive) return closeTab(id);

    const currentTabIndex = tabsStore.value.findIndex((tab) => tab.id === id);
    const nextTab = tabsStore.value[currentTabIndex + 1];
    const newSelectedTab = nextTab ?? tabsStore.value[currentTabIndex - 1];

    navigate(
      newSelectedTab ? `${newSelectedTab.type}/${newSelectedTab.id}` : "/"
    );
    closeTab(id);
  }

  return (
    <div
      data-active={isLinkActive}
      className={cn(
        "flex items-center bg-zinc-300 pl-2 pr-1 py-1 rounded-t-md group data-[active=true]:bg-zinc-400 "
        // { "bg-zinc-400": active, "bg-zinc-300": !active }
      )}
    >
      <NavLink
        // {/* <button */}
        end
        to={`${type}/${id}`}
        className="flex items-center gap-1 pr-1 data-[active]:bg-transparent"
        onAuxClick={(e) => {
          e.preventDefault();
          handleDeleteTab();
        }}
      >
        {Icon}
        <span className="text-xs text-zinc-800 whitespace-nowrap">{label}</span>
        {/* </button> */}
      </NavLink>
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-transparent text-zinc-800"
        onClick={handleDeleteTab}
      >
        <X
          className={cn(
            "w-3 h-3 invisible group-hover:visible hover:text-zinc-700 group-data-[active=true]:visible"
            // {
            //   visible: active,
            // }
          )}
        />
      </Button>
    </div>
  );
}
