import { tabsStore } from "@/stores/tabsStore";
import MonacoEditor, { OnMount } from "@monaco-editor/react";
import { useParams } from "react-router-dom";

interface EditorProps {
  onMount: OnMount;
  defaultValue?: string;
}

export const Editor = ({ onMount, defaultValue }: EditorProps) => {
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
    <>
      <MonacoEditor
        width={`calc(100dvw - 200px)`}
        language="sql"
        theme="vs-dark"
        defaultValue={defaultValue}
        // value={defaultValue}
        onChange={handleOnChange}
        onMount={onMount}
      />
    </>
  );
};
