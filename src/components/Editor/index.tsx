import MonacoEditor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useRef } from "react";

export function Editor() {
  const code = "console.log('Monaco Editor!');";
  const ref = useRef<editor.IStandaloneCodeEditor | null>(null);

  return (
    <>
      <MonacoEditor
        height="100px"
        language="sql"
        // theme="vs-"
        value={code}
        onMount={(editor) => {
          ref.current = editor;
        }}
      />

      <button
        onClick={() => {
          console.log(ref.current?.getValue());
        }}
      >
        button
      </button>
    </>
  );
}
