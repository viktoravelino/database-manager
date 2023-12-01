import { Plus, Table, ChevronsUpDown, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableMenu } from "./tableMenu";
import { TableColumnMenu } from "./tableColumnMenu";

export function Explorer() {
  return (
    <div>
      {/* Explorer header */}
      <div className="flex items-center mb-1">
        <strong className="text-xs text-zinc-800">TABLES</strong>
        <div className="ml-1 rounded-full text-[8px] bg-slate-300 font-bold text-zinc-500 px-1.5 py-0.5 flex justify-center items-center leading-tight">
          1
        </div>
        <Button className="ml-auto" variant="ghost" size="icon">
          <ChevronsUpDown className="h-3 w-3 text-zinc-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <RotateCw className="h-3 w-3 text-zinc-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <Plus className="h-4 w-4 text-zinc-600" />
        </Button>
      </div>
      {/* Explorer header end */}

      {/* Explorer content */}
      <nav>
        <TableMenu tableName="test_table_1" icon={Table}>
          <TableColumnMenu label="id" sublabel="int unsigned"></TableColumnMenu>
          <TableColumnMenu
            label="created_at"
            sublabel="timestamp"
          ></TableColumnMenu>
        </TableMenu>

        <TableMenu tableName="test_table_2" icon={Table}>
          <TableColumnMenu label="id" sublabel="int unsigned"></TableColumnMenu>
          <TableColumnMenu
            label="created_at"
            sublabel="timestamp"
          ></TableColumnMenu>
        </TableMenu>
      </nav>
    </div>
  );
}
