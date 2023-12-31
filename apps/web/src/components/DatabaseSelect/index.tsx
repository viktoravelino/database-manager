import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RotateCw, Plus } from "lucide-react";

export function DatabaseSelect() {
  return (
    <div className="bg-select-bg text-text hover:brightness-125 mb-4 flex items-center rounded transition-all focus-visible:outline-none">
      <Select defaultValue="db-1">
        <SelectTrigger className="bg-transparent">
          <SelectValue placeholder="database" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="db-1">db 1</SelectItem>
          <SelectItem value="db-2">db 2</SelectItem>
          <SelectItem value="db-3">db 3</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="ghost" size="icon" className="text-current">
        <RotateCw className="w-h-3 h-3" />
      </Button>
      <Button variant="ghost" size="icon" className="text-current">
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  );
}
