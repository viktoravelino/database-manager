import { DatabaseSelect } from "@/components/DatabaseSelect";
import { Explorer } from "@/components/Explorer";
import { ConnectionInfo } from "@/components/connectionInfoFooter";
import { Tabs } from "@/components/tabs";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    // check if there is a connectionInfo in sessionStorage
    const connectionInfo = sessionStorage.getItem("connectionInfo");
    if (!connectionInfo) navigate("/connect");

    // TODO: test connection, if not successful, navigate to connect
  }, [navigate]);

  return (
    <div className={`grid grid-cols-[200px_1fr] min-h-screen`}>
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
