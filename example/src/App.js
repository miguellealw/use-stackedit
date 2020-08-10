import React, { useState } from "react";
import { useStackEdit } from "use-stackedit";

const App = () => {
  const [value, setValue] = useState("");
  const { openStackedit, onFileChange } = useStackEdit(setValue);
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);

          // If textarea is edited run the file change event on stackedit
          onFileChange();
        }}
      ></textarea>

      <button
        onClick={() => {
          openStackedit({
            content: {
              // Markdown content.
              text: value,
            },
          });
        }}
      >
        Open Editor
      </button>
    </div>
  );
};
export default App;
