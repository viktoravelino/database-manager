import * as Collapsible from "@radix-ui/react-collapsible";

import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";
import { ReactNode, useState } from "react";
import { ExplorerContextMenu } from "./explorerContextMenu";

interface TableMenuProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  icon: LucideIcon;
}

export function TableMenu({
  title,
  children,
  defaultOpen = false,
  icon: Icon,
}: TableMenuProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <ExplorerContextMenu>
        <Collapsible.Trigger className="flex items-center gap-2 py-1 w-full border border-transparent">
          {isOpen ? (
            <ChevronDown className="text-zinc-800" size={15} />
          ) : (
            <ChevronRight className="text-zinc-800" size={15} />
          )}
          <span className="text-xs font-semibold inline-flex items-center gap-1">
            {Icon && <Icon className="h-3 w-3" />}
            {title}
          </span>
        </Collapsible.Trigger>
      </ExplorerContextMenu>

      <Collapsible.Content className="ml-2 border-l-[1px] border-zinc-300 mb-2">
        {children}
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
