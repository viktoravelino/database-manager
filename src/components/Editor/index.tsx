import { tabsStore } from "@/stores/tabsStore";
import MonacoEditor, { OnMount } from "@monaco-editor/react";
import { useParams } from "react-router-dom";
import { SIDEBAR_WIDTH } from "@/components/Explorer";

interface EditorProps {
  onMount: OnMount;
  defaultValue?: string;
}

export const Editor = ({ onMount, defaultValue }: EditorProps) => {
  const { id } = useParams();

  function handleOnChange(value: string | undefined) {
    const tab = tabsStore.value.find((tab) => tab.id === Number(id));
    if (!tab) return;
    tab.content = value ?? "";
    tabsStore.value = [...tabsStore.value];
  }

  return (
    <>
      <MonacoEditor
        width={`calc(100dvw - ${SIDEBAR_WIDTH})`}
        language="sql"
        theme="vs-dark"
        value={defaultValue}
        onChange={handleOnChange}
        onMount={onMount}
      />
    </>
  );
};
