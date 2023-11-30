import { Editor } from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { openNewTab, tabsStore } from "@/stores/tabsStore";
import { useEffect, useRef, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useParams } from "react-router-dom";
import { editor } from "monaco-editor";

export function QueryPage() {
  const { id } = useParams();

  const [height, setHeight] = useState(0);
  const [textSelected, setTextSelected] = useState("");
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    // setEditorContent(`${id}`);
    const tab = tabsStore.value.find((tab) => tab.id === Number(id));
    if (!tab) {
      openNewTab({
        id: Number(id),
        type: "query",
      });
    }
  }, [id]);

  function onMountEditor(editor: editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
    editor.onDidChangeCursorSelection((e) => {
      setTextSelected(editor.getModel()?.getValueInRange(e.selection!) ?? "");
    });
  }

  return (
    <PanelGroup direction="vertical">
      <Panel
        className="bg-slate-100 flex flex-col"
        onResize={(e) => {
          setHeight(e.sizePixels);
        }}
      >
        <div
          style={{
            height: height - 50,
          }}
        >
          <Editor
            onMount={onMountEditor}
            defaultValue="select hello from world;"
          />
        </div>
        <div className="flex items-center justify-end flex-1 px-3">
          <Button
            size="sm"
            onClick={() =>
              console.log(
                textSelected ? textSelected : editorRef.current?.getValue()
              )
            }
          >
            {textSelected ? "Run Selection" : "Run"}
          </Button>
        </div>
      </Panel>
      <PanelResizeHandle className="w-full h-1 bg-slate-300"></PanelResizeHandle>
      <Panel className="bg-slate-100 flex items-center justify-center text-center p-2">
        results
      </Panel>
    </PanelGroup>
  );
}
