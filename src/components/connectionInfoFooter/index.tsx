import { Link2, Pencil, Power } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ConnectionInfo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="mt-auto flex items-center gap-2 bg-explorer-footer px-2 py-1 text-text font-semibold">
          <Link2 className="w-4 aspect-square" />
          <span className="text-xs">SQL</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem className="gap-2">
          <Power className="w-4 aspect-square" />
          Disconnect
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Pencil className="w-4 aspect-square" />
          Edit Connection
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

