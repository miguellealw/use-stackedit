# use-stackedit

[StackEdit](https://benweet.github.io/stackedit.js/) hook for react. Provides `onFileChange`, `openStackedit`, and `onClose` events.

- `useStackEdit(setValue, opts = {})`
- `onFileChange(file => {})` - event fired when user types in StackEdit editor.
  * Automatically updates the textarea value state
- `openStackedit({})` - event to open editor
- `onClose()` - event to forcefully close editor

[![NPM](https://img.shields.io/npm/v/use-stackedit.svg)](https://www.npmjs.com/package/use-stackedit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-stackedit
```

## Usage
[CodeSandbox Example](https://codesandbox.io/s/practical-leaf-0vosz?file=/src/App.js)
```jsx
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
```



## License

MIT © [miguellealw](https://github.com/miguellealw)
