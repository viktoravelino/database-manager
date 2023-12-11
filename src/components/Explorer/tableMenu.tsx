import * as Collapsible from "@radix-ui/react-collapsible";

import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";
import { ReactNode, useState } from "react";
import { ExplorerContextMenu } from "./explorerContextMenu";
import { openNewTab } from "@/stores/tabsStore";
import { useNavigate } from "react-router";

interface TableMenuProps {
  tableName: string;
  children: ReactNode;
  defaultOpen?: boolean;
  icon: LucideIcon;
}

export function TableMenu({
  tableName,
  children,
  defaultOpen = false,
  icon: Icon,
}: TableMenuProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const navigate = useNavigate();

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <ExplorerContextMenu tableName={tableName}>
        <div
          className="text-text hover:bg-explorer-menu-bg-hover flex w-full items-center gap-1 rounded border border-transparent transition-colors"
          onDoubleClick={(e) => {
            e.preventDefault();
            const newTab = openNewTab({ type: "data", name: tableName });
            navigate(`data/${newTab.id}`);
          }}
        >
          <Collapsible.Trigger className="opacity-50 hover:opacity-100">
            {isOpen ? (
              <ChevronDown className="text-current" size={15} />
            ) : (
              <ChevronRight className="text-current" size={15} />
            )}
          </Collapsible.Trigger>
          <span className="inline-flex w-full select-none items-center gap-2 py-1 text-xs hover:cursor-pointer">
            {Icon && <Icon className="text-theme-secondary h-3 w-3" />}
            {tableName}
          </span>
        </div>
      </ExplorerContextMenu>

      <Collapsible.Content className="mb-2 ml-2 border-l-[1px] border-text/20">
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
