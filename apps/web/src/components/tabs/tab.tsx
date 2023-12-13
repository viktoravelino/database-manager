import { Code, PencilLine, Table, X } from "lucide-react";
import { useMatch, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

import type { TabType } from "@/@types/Tab";

import { Button } from "@/components/ui/button";
import { closeTab, tabsStore } from "@/stores/tabsStore";

interface TabsProps {
  id: number | string;
  active?: boolean;
  label: string;
  type: TabType;
}

const iconMapper = {
  query: <Code className="aspect-square w-3 text-pink-600" />,
  data: <Table className="aspect-square w-3 text-theme-primary" />,
  structure: <PencilLine className="aspect-square w-3 text-green-700" />,
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
      newSelectedTab ? `${newSelectedTab.type}/${newSelectedTab.id}` : "/",
    );
    closeTab(id);
  }

  return (
    <div
      data-active={isLinkActive}
      className="bg-tab-bg data-[active=true]:bg-active-tab-bg text-text group flex items-center rounded-t-md py-1 pl-2 pr-1 font-light data-[active=true]:text-white "
    >
      <NavLink
        end
        to={`${type}/${id}`}
        className="flex items-center gap-2 pr-1"
        onAuxClick={(e) => {
          e.preventDefault();
          handleDeleteTab();
        }}
      >
        {Icon}
        <span className="whitespace-nowrap text-xs">{label}</span>
      </NavLink>
      <Button
        variant="ghost"
        size="icon"
        className="bg-transparent"
        onClick={handleDeleteTab}
      >
        <X
          strokeWidth={3}
          className="invisible h-3 w-3 group-hover:visible group-data-[active=true]:visible hover:stroke-[4px] hover:text-zinc-100"
        />
      </Button>
    </div>
  );
}
