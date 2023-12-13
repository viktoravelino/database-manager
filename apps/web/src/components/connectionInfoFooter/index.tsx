import { Link2, Pencil, Power } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { tabsStore } from "@/stores/tabsStore";

export function ConnectionInfo() {
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="mt-auto flex items-center gap-2 bg-explorer-footer px-2 py-1 font-semibold text-text">
          <Link2 className="aspect-square w-4" />
          <span className="text-xs">SQL</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            sessionStorage.clear();
            tabsStore.value = [];
            navigate("/connect");
          }}
          className="gap-2"
        >
          <Power className="aspect-square w-4" />
          Disconnect
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Pencil className="aspect-square w-4" />
          Edit Connection
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
