import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ConnectionModeEnum = z.enum(["host-port"]);

const formSchema = z.object({
  connectionType: z.string(),
  connectionMode: ConnectionModeEnum,
  connectionHost: z.string({
    required_error: "Host is required",
  }),
  connectionPort: z.string(),
  connectionUser: z.string(),
  connectionPassword: z.string(),
  connectionDefaultDatabase: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;
type ConnectionModeEnum = z.infer<typeof ConnectionModeEnum>;

function formatEnumForLabel(value: string) {
  return value
    .split("-")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function MySqlConnectionForm() {
  const navigate = useNavigate();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      connectionType: "mysql",
      connectionMode: ConnectionModeEnum.enum["host-port"],
      connectionDefaultDatabase: "",
      connectionPort: "3306",
    },
  });

  function onSubmit(data: FormSchema) {
    sessionStorage.setItem("connectionInfo", JSON.stringify(data));
    navigate("/");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="connectionMode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Connection Mode</FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full rounded px-2 py-1">
                    <SelectValue placeholder="Select a connection type..." />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {ConnectionModeEnum.options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {formatEnumForLabel(option)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="connectionHost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Host</FormLabel>

                <FormControl>
                  <Input
                    placeholder="localhost"
                    className="h-fit rounded px-2 py-1 text-[10px]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="connectionPort"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Port</FormLabel>

                <FormControl>
                  <Input
                    type="number"
                    placeholder="3306"
                    className="h-fit rounded px-2 py-1 text-[10px]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="connectionUser"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User</FormLabel>

                <FormControl>
                  <Input
                    className="h-fit rounded px-2 py-1 text-[10px]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="connectionPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>

                <FormControl>
                  <Input
                    type="password"
                    className="h-fit rounded px-2 py-1 text-[10px]"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="connectionDefaultDatabase"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Default Database</FormLabel>

              <FormControl>
                <Input
                  className="h-fit rounded px-2 py-1 text-[10px]"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-4 flex gap-2">
          <Button onClick={() => {}} type="button" fullWidth variant="outline">
            Test Connection
          </Button>
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
