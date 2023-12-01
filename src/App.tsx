import { Explorer, SIDEBAR_WIDTH } from "@/components/Explorer";
import { DatabaseSelect } from "@/components/DatabaseSelect";
import { Tabs } from "@/components/tabs";
import { ConnectionInfo } from "@/components/connectionInfo";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={`grid grid-cols-[${SIDEBAR_WIDTH}_1fr] min-h-screen`}>
      <aside className="flex flex-col bg-zinc-700">
        <div className="px-1 flex-1">
          <DatabaseSelect />

          <Explorer />
        </div>

        <ConnectionInfo />
      </aside>

      <main className="bg-zinc-500 grid grid-rows-[30px_1fr]">
        <Tabs />

        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
