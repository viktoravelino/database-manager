import { Explorer } from "./components/Explorer";
import { DatabaseSelect } from "./components/DatabaseSelect";
import { Tabs } from "./components/tabs";

function App() {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-2 px-3 pt-4 min-h-screen">
      <aside>
        <DatabaseSelect />

        <Explorer />
      </aside>

      <main className="border-zinc-400 px-2 pt-1 flex flex-col">
        <Tabs />

        <div className="border-l-[1px] border-zinc-400 flex-1">content</div>
      </main>
    </div>
  );
}

export default App;
