import { Explorer } from "./components/Explorer";
import { DatabaseSelect } from "./components/DatabaseSelect";
import { Tabs } from "./components/tabs";
import { ConnectionInfo } from "./components/connectionInfo";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function App() {
  return (
    <div className="grid grid-cols-[200px_1fr] min-h-screen">
      <aside className="flex flex-col bg-zinc-700">
        <div className="px-1 flex-1">
          <DatabaseSelect />

          <Explorer />
        </div>

        <ConnectionInfo />
      </aside>

      <main className="bg-zinc-500 grid grid-rows-[30px_1fr]">
        <Tabs />

        {/* <div className="">content</div> */}
        <PanelGroup direction="vertical">
          <Panel
            className="bg-slate-100 flex items-center justify-center text-center p-2"
            // defaultSize={defaultLayout[0]}
            // minSize={20}
          >
            Left panel
          </Panel>
          <PanelResizeHandle className="w-full h-1 bg-slate-300" >
          </PanelResizeHandle>
          <Panel
            className="bg-slate-100 flex items-center justify-center text-center p-2"
            // defaultSize={defaultLayout[1]}
            // minSize={20}
          >
            Right panel
          </Panel>
        </PanelGroup>
      </main>
    </div>
  );
}

export default App;
