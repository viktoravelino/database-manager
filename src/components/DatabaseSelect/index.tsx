import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RotateCw, Plus } from "lucide-react";
import { Button } from "../ui/button";

export function DatabaseSelect() {
  return (
    <div className="border flex items-center px-1 py-1 h-6 rounded">
      <Select defaultValue="db-1">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="database" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="db-1">db 1</SelectItem>
          <SelectItem value="db-2">db 2</SelectItem>
          <SelectItem value="db-3">db 3</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="ghost" size="icon" className="aspect-square">
        <RotateCw className="h-3 w-h-3 opacity-50" />
      </Button>
      <Button variant="ghost" size="icon">
        <Plus className="h-3 w-3 opacity-50" />
      </Button>
    </div>
  );
}
