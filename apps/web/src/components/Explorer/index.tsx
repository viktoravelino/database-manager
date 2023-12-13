import { Plus, Table, ChevronsUpDown, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableMenu } from "./tableMenu";
import { TableColumnMenu } from "./tableColumnMenu";

export function Explorer() {
  return (
    <div>
      {/* Explorer header */}
      <div className="text-sidebar-heading mb-1 flex items-center">
        <strong className="text-xs font-semibold">TABLES</strong>
        <div className="bg-badge-bg text-text ml-1 flex items-center justify-center rounded-full px-1.5 py-0.5 text-[9px] font-bold leading-tight">
          2
        </div>
        <Button
          className="text-text ml-auto"
          variant="ghost"
          size="icon"
        >
          <ChevronsUpDown className="h-3 w-3" />
        </Button>
        <Button className="text-text" variant="ghost" size="icon">
          <RotateCw className="h-3 w-3" />
        </Button>
        <Button className="text-text" variant="ghost" size="icon">
          <Plus className="h-4 w-4" />
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
