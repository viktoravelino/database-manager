import MonacoEditor, { OnMount } from "@monaco-editor/react";

interface EditorProps {
  onMount: OnMount;
  defaultValue?: string;
}

export const Editor = ({ onMount, defaultValue }: EditorProps) => {
  return (
    <>
      <MonacoEditor
        language="sql"
        // theme="vs-"
        onMount={onMount}
        defaultValue={defaultValue}
      />
    </>
  );
};
