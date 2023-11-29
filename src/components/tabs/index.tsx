import { Table, X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface TabsProps {
  active?: boolean;
  label: string;
}

function Tab({ label, active = false }: TabsProps) {
  return (
    <div
      className={cn(
        "flex items-center bg-zinc-400 pl-2 pr-1 py-1 rounded-t-md group",
        { "bg-zinc-400": active, "bg-zinc-300": !active }
      )}
    >
      <button
        className="flex items-center gap-1 pr-1"
        onClick={() => console.log("Go to tab")}
      >
        <Table className="w-3 aspect-square text-zinc-800" />
        <span className="text-xs text-zinc-800 whitespace-nowrap">{label}</span>
      </button>
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-transparent text-zinc-800"
        onClick={() => console.log("close tab")}
      >
        <X
          className={cn(
            "w-3 h-3 invisible group-hover:visible hover:text-zinc-700",
            {
              visible: active,
            }
          )}
        />
      </Button>
    </div>
  );
}

export function Tabs() {
  return (
    <div className="flex gap-0.5">
      <Tab label="test_table 1" active />
      <Tab label="test_table 2" />
      <Tab label="test_table 3" />
    </div>
  );
}
