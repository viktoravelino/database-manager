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
    <div className={`grid min-h-screen grid-cols-[200px_1fr]`}>
      <aside className="bg-sidebar-bg flex flex-col">
        <div className="flex-1 px-2 pt-3">
          <DatabaseSelect />

          <Explorer />
        </div>

        <ConnectionInfo />
      </aside>

      <main className="grid grid-rows-[40px_1fr] bg-main-bg">
        <Tabs />

        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
