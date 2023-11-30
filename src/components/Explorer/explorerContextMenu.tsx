import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { OpenNewTabProps, openNewTab } from "@/stores/tabsStore";
import { useNavigate } from "react-router-dom";

interface ExplorerContextMenuProps {
  children: React.ReactNode;
  tableName: string;
}

export function ExplorerContextMenu({
  children,
  tableName,
}: ExplorerContextMenuProps) {
  const navigate = useNavigate();

  function handleNewTabClick({ type, name }: OpenNewTabProps) {
    const newTab = openNewTab({ type, name });
    navigate(`${newTab.type}/${newTab.id}`);
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem
          onClick={() => handleNewTabClick({ type: "data", name: tableName })}
        >
          View Data
        </ContextMenuItem>
        <ContextMenuItem
          onClick={() =>
            handleNewTabClick({ type: "structure", name: tableName })
          }
        >
          View Structure
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Copy Name</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>SQL: Create</ContextMenuItem>
        <ContextMenuItem>Drop</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
