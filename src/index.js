import React, { useEffect } from "react";
import Stackedit from "stackedit-js";

export const useStackEdit = (setValue, ctrOpts = {}) => {
  // Run on file change when component mounts or changes
  useEffect(() => {
    onFileChange();
  });
  
  const stackedit = new Stackedit(ctrOpts);

  function openStackedit(opts) {
    // Open the iframe
    stackedit.openFile(opts);
  }

  function onFileChange(cb) {
    // Listen to StackEdit events and apply the changes to the textarea.
    stackedit.on("fileChange", (file) => {
      // Change overall application value state
      setValue(file.content.text);

      if (cb) cb(file);
    });
    // stackedit.on("fileChange", cb);
  }

  function onClose(cb) {
    stackedit.on("close", cb);
  }

  return { openStackedit, onFileChange, onClose };
}

// export default useStackEdit;