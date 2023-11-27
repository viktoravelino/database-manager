import { Explorer } from "./components/Explorer";
import { DatabaseSelect } from "./components/DatabaseSelect";

function App() {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-3">
      <aside>
        <DatabaseSelect />

        <Explorer />
      </aside>

      <main>content</main>
    </div>
  );
}

export default App;
