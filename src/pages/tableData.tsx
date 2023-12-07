import {
  Column,
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowUpDown, ArrowUpIcon, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "react-router-dom";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const payments: Payment[] = [
  //   {
  //     id: "728ed52f",
  //     amount: 100,
  //     status: "pending",
  //     email: "m@example.com",
  //   },
  //   {
  //     id: "489e1d42",
  //     amount: 125,
  //     status: "processing",
  //     email: "example@gmail.com",
  //   },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>No Sort</div>;
  }
  return (
    <div className={cn(className)}>
      <Button
        variant="ghost"
        size="sm"
        className="-ml-3 h-8 data-[state=open]:bg-accent"
        onClick={() => column.toggleSorting()}
      >
        <span>{title}</span>
        {column.getIsSorted() === "desc" ? (
          <ArrowDownIcon className="ml-2 h-4 w-4" />
        ) : column.getIsSorted() === "asc" ? (
          <ArrowUpIcon className="ml-2 h-4 w-4" />
        ) : (
          <ArrowUpDown className="ml-2 h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

// TODO: needs to be created dynamically from the data
const columns: ColumnDef<unknown>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
];

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              <TableHead key="empty"></TableHead>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, i) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                <TableCell>{i + 1}</TableCell>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length + 1}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export function Page() {
  const { id } = useParams();

  const [test, setTest] = useState<{
    [key: string]: {
      [key: string]: string;
    };
  }>({});

  if (!id) return null;

  function handleChange(fieldName: string, fieldValue: string) {
    setTest((prev) => ({
      ...prev,
      [id!]: {
        [fieldName]: fieldValue,
      },
    }));
  }

  return (
    <div>
      <div className="flex items-center gap-1 h-10 py-2 px-2 bg-red-400">
        <Select defaultValue="id">
          <SelectTrigger className="w-[25%]">
            <SelectValue placeholder="Select a connection type..." />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="id">id</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="equals">
          <SelectTrigger className="w-[25%]">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="equals">equals</SelectItem>
            <SelectItem value="does-not-equal">does not equal</SelectItem>
            <SelectItem value="like">like</SelectItem>
            <SelectItem value="less-than">less than</SelectItem>
            <SelectItem value="less-than-or-equal">
              less than or equal
            </SelectItem>
            <SelectItem value="greater-than">greater than</SelectItem>
            <SelectItem value="greater-than-or-equal">
              greater than or equal
            </SelectItem>
            <SelectItem value="in">in</SelectItem>
          </SelectContent>
        </Select>
        <Input
          value={test[id]?.input ?? ""}
          onChange={(e) => handleChange("input", e.target.value)}
          className="w-full"
        />

        <Button size="icon" className="rounded-full aspect-square h-full w-9">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <DataTable columns={columns} data={payments} />
    </div>
  );
}
