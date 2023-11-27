import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RotateCw, Plus } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-3">
      <aside>
        <div className="border flex items-center px-1 py-1 h-6 rounded">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="database" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">db 1</SelectItem>
              <SelectItem value="dark">db 2</SelectItem>
              <SelectItem value="system">db 3</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="ghost" size="icon" className="aspect-square">
            <RotateCw className="h-3 w-h-3 opacity-50" />
          </Button>
          <Button variant="ghost" size="icon">
            <Plus className="h-3 w-3 opacity-50" />
          </Button>
        </div>
      </aside>
      <main>content</main>
    </div>
  );
}

export default App;
