import React from "react";
import {
  Editor,
  EditorChangeEvent,
  EditorMountEvent,
  EditorTools,
  ProseMirror,
} from "@progress/kendo-react-editor";
import { renderPlaceholder, styles as plStyles } from "./placeholder";
const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
} = EditorTools;

interface HtmlEditorProps {
  name: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  formik?: any; // TODO: FIX THIS!
  onChange?: (value: string) => void;
  // className?: string
}

const HtmlEditor = ({
  name,
  formik,
  defaultValue,
  placeholder = "",
  onChange,
}: HtmlEditorProps) => {
  return (
    <Editor
      tools={[
        [Bold, Italic, Underline, Strikethrough],
        [OrderedList, UnorderedList],
        [Undo, Redo],
      ]}
      onMount={(event: EditorMountEvent) => {
        if (placeholder !== "") {
          const { state } = event.viewProps;
          const plugins = [...state.plugins, renderPlaceholder(placeholder)];

          const editorDocument = event.dom.ownerDocument;
          const styleElement =
            editorDocument && editorDocument.querySelector("style");
          if (styleElement) {
            styleElement.appendChild(editorDocument.createTextNode(plStyles));
          }

          return new ProseMirror.EditorView(
            { mount: event.dom },
            {
              ...event.viewProps,
              state: ProseMirror.EditorState.create({
                doc: state.doc,
                plugins,
              }),
            }
          );
        }
      }}
      contentStyle={{
        height: 80,
        fontFamily: "sans-serif",
      }}
      value={`${defaultValue || formik?.values[name] || ""}`}
      onChange={(event: EditorChangeEvent) => {
        formik?.setFieldValue(`${name}`, event.html);
        onChange && onChange(event.html);
      }}
      defaultEditMode="div"
    />
  );
};

export default HtmlEditor;
