import MonacoEditor, { OnChange } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useRef } from "react";

interface EditorProps {
  onChange: OnChange;
  value: string;
}

export function Editor({ onChange, value }: EditorProps) {
  const ref = useRef<editor.IStandaloneCodeEditor | null>(null);

  return (
    <>
      <MonacoEditor
        language="sql"
        // theme="vs-"
        value={value}
        onChange={onChange}
        onMount={(editor) => {
          ref.current = editor;
        }}
      />
    </>
  );
}
