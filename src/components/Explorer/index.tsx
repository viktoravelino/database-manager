import { Plus, Table } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableMenu } from "./tableMenu";
import { TableColumnMenu } from "./tableColumnMenu";

export function Explorer() {
  return (
    <div>
      {/* Explorer header */}
      <div className="flex items-center">
        <strong className="text-sm text-zinc-800">TABLES</strong>
        <div className="ml-1 rounded-full text-[8px] bg-slate-300 font-bold text-zinc-500 px-1.5 py-0.5 flex justify-center items-center leading-tight">
          1
        </div>
        <Button className="ml-auto" variant="ghost" size="icon">
          <Plus className="h-3 w-3 text-zinc-600" />
        </Button>
      </div>
      {/* Explorer header end */}

      {/* Explorer content */}
      <nav>
        <TableMenu title="test_table" icon={Table}>
          <TableColumnMenu label="id" subLabel="int unsigned"></TableColumnMenu>
          <TableColumnMenu
            label="created_at"
            subLabel="timestamp"
          ></TableColumnMenu>
          {/* <TableColumnMenu>created_at</TableColumnMenu> */}
        </TableMenu>

        {/* <Separator /> */}

        <TableMenu title="test_table" icon={Table}>
          <TableColumnMenu label="id" subLabel="int unsigned"></TableColumnMenu>
          <TableColumnMenu
            label="created_at"
            subLabel="timestamp"
          ></TableColumnMenu>
          {/* <TableColumnMenu>created_at</TableColumnMenu> */}
        </TableMenu>
      </nav>
    </div>
  );
}
