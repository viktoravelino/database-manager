import { Editor } from "@/components/Editor";
import { Button } from "@/components/ui/button";
import { openNewTab, tabsStore } from "@/stores/tabsStore";
import { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useParams } from "react-router-dom";

export function QueryPage() {
  const { id } = useParams();

  const [height, setHeight] = useState(0);
  const [editorContent, setEditorContent] = useState(`${id}`);

  useEffect(() => {
    setEditorContent(`${id}`);
    const tab = tabsStore.value.find((tab) => tab.id === Number(id));
    if (!tab) {
      openNewTab({
        id: Number(id),
        type: "query",
      });
    }
  }, [id]);

  function handleEditorChange(value: string | undefined) {
    setEditorContent(value || "");
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
          <Editor onChange={handleEditorChange} value={editorContent} />
        </div>
        <div className="flex items-center justify-end flex-1 px-3">
          <Button size="sm" onClick={() => console.log(editorContent)}>
            Run/Run Selection
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
