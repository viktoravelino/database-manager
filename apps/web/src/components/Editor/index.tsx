import { tabsStore } from "@/stores/tabsStore";
import MonacoEditor, { OnMount } from "@monaco-editor/react";
import { useParams } from "react-router-dom";

interface EditorProps {
  onMount: OnMount;
  defaultValue?: string;
}

export const Editor = ({
  onMount,
  defaultValue = "\n\n\n\n\n\n\n\n\n",
}: EditorProps) => {
  const { id } = useParams();

  function handleOnChange(value: string | undefined) {
    tabsStore.value = tabsStore.value.map((tab) => {
      if (tab.id === Number(id))
        return {
          ...tab,
          content: value ?? "",
        };

      return tab;
    });
  }

  return (
    <MonacoEditor
      width={`calc(100dvw - 200px)`}
      language="sql"
      theme="myTheme"
      className="bg-transparent"
      defaultValue={defaultValue}
      options={{
        contextmenu: false,
        lineNumbersMinChars: 3,
        lineNumbers(lineNumber) {
          return `<span class="text-[10px] text-zinc-700"> ${lineNumber} </span>`;
        },
        lineDecorationsWidth: 0,

        minimap: {
          enabled: false,
        },
        overviewRulerLanes: 0,
      }}
      beforeMount={(monaco) => {
        monaco.editor.defineTheme("myTheme", {
          base: "vs-dark",
          inherit: true,
          rules: [],
          colors: {
            "editor.background": "#0f0f0f",
          },
        });
      }}
      onChange={handleOnChange}
      onMount={onMount}
    />
  );
};
