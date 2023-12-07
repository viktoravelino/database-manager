import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { MySqlConnectionForm } from "@/components/connectionForm/mySqlConnectionForm";
import { useNavigate } from "react-router-dom";

const connectionTypes = [
  {
    name: "MySQL",
    value: "mysql",
    form: MySqlConnectionForm,
  },
];

export function Connect() {
  const navigate = useNavigate();
  const [connectionTypeValue, setConnectionTypeValue] = useState<string | null>(
    null
  );

  useEffect(() => {
    // check if there is a connectionInfo in sessionStorage
    const connectionInfo = sessionStorage.getItem("connectionInfo");
    if (connectionInfo) navigate("/");
  }, [navigate]);

  const Form = connectionTypes.find(
    (connectionType) => connectionType.value === connectionTypeValue
  )?.form as React.FC;

  return (
    <div className="h-screen">
      <aside></aside>
      <main className="flex justify-center items-center h-full">
        <div className="bg-zinc-300 p-4 rounded-xl">
          {/* <div className="text-center"> */}
          <h1 className="text-xl font-bold">Connect to a database</h1>
          {/* </div> */}

          <div className="mt-4 flex flex-col gap-2">
            <Select name="test" onValueChange={setConnectionTypeValue}>
              <Label>Connection type</Label>
              <SelectTrigger
                className="w-full px-2 py-1 rounded"
                placeholder="Select a connection type..."
              >
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                {connectionTypes.map((connectionType) => (
                  <SelectItem
                    key={connectionType.value}
                    value={connectionType.value}
                  >
                    {connectionType.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {!!connectionTypeValue && <Form />}
            {/* <div className="flex justify-center"> */}
            {/* <button className="btn btn-primary"></button> */}
            {/* </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
