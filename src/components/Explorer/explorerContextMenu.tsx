import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

interface ExplorerContextMenuProps {
  children: React.ReactNode;
}

export function ExplorerContextMenu({ children }: ExplorerContextMenuProps) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem>View Data</ContextMenuItem>
        <ContextMenuItem>View Structure</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Copy Name</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>SQL: Create</ContextMenuItem>
        <ContextMenuItem>Drop</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
