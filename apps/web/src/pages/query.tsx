import { useEffect, useMemo, useRef, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useParams } from "react-router-dom";
import { editor } from "monaco-editor";

import { Editor } from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { Tab, openNewTab, tabsStore } from "@/stores/tabsStore";

function useOpenTabIfNotExists(
  tab: Tab | undefined,
  id: string | number | undefined,
) {
  useEffect(() => {
    if (tab) return;

    openNewTab({
      id: Number(id),
      type: "query",
    });
  }, [tab, id]);
}

export function QueryPage() {
  const { id } = useParams<{ id: string }>();

  const tab = useMemo(() => {
    return tabsStore.value.find((tab) => tab.id === Number(id));
  }, [id]);

  // TODO: Protect if there is no id
  useOpenTabIfNotExists(tab, id);

  const [height, setHeight] = useState(0);
  const [textSelected, setTextSelected] = useState("");

  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  function onMountEditor(editor: editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
    editor.onDidChangeCursorSelection((e) => {
      setTextSelected(editor.getModel()?.getValueInRange(e.selection!) ?? "");
    });
  }

  return (
    <PanelGroup direction="vertical">
      <Panel
        className="flex flex-col bg-transparent pt-2 text-text"
        onResize={(e) => {
          setHeight(e.sizePixels);
        }}
      >
        <div
          style={{
            height: height - 50,
          }}
        >
          <Editor key={tab?.id} onMount={onMountEditor} />
        </div>
        <div className="flex flex-1 items-center justify-end px-3">
          <Button
            size="sm"
            onClick={() =>
              console.log(
                textSelected ? textSelected : editorRef.current?.getValue(),
              )
            }
          >
            {textSelected ? "Run Selection" : "Run"}
          </Button>
        </div>
      </Panel>
      <PanelResizeHandle className="h-1 w-full bg-zinc-800"></PanelResizeHandle>
      <Panel className="flex flex-col bg-transparent text-text">results</Panel>
    </PanelGroup>
  );
}
