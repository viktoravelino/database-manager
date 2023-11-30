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
        <Collapsible.Trigger
          className="flex items-center gap-2 py-1 w-full border border-transparent hover:bg-zinc-600 transition-colors"
          onDoubleClick={(e) => {
            e.preventDefault();
            const newTab = openNewTab({ type: "data", name: tableName });
            navigate(`data/${newTab.id}`);
          }}
        >
          {isOpen ? (
            <ChevronDown className="text-zinc-800" size={15} />
          ) : (
            <ChevronRight className="text-zinc-800" size={15} />
          )}
          <span className="text-xs font-semibold inline-flex items-center gap-1">
            {Icon && <Icon className="h-3 w-3" />}
            {tableName}
          </span>
        </Collapsible.Trigger>
      </ExplorerContextMenu>

      <Collapsible.Content className="ml-2 border-l-[1px] border-zinc-300 mb-2">
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
