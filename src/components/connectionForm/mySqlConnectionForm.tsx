import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      connectionType: "mysql",
      connectionMode: ConnectionModeEnum.enum["host-port"],
    },
  });

  function onSubmit(data: FormSchema) {
    console.log(data);
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
                  <SelectTrigger className="w-full px-2 py-1 rounded">
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
                    className="px-2 py-1 h-fit rounded text-[10px]"
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

                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="3306"
                      className="px-2 py-1 h-fit rounded text-[10px]"
                      {...field}
                    />
                  </FormControl>
                </Select>

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
                    className="px-2 py-1 h-fit rounded text-[10px]"
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
                    className="px-2 py-1 h-fit rounded text-[10px]"
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

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <Input
                    className="px-2 py-1 h-fit rounded text-[10px]"
                    {...field}
                  />
                </FormControl>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
