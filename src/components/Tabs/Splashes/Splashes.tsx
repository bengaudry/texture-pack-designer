import {
  getSplashesFile,
  setSplashesFile,
} from "@/components/Tabs/Splashes/index";
import { useEffect, useState } from "react";

export function Splashes(props: { projectPath: string }) {
  const [splashes, setSplashes] = useState<string[]>(
    getSplashesFile(props.projectPath)
  );

  const [inputValue, setInputValue] = useState<string>("");

  function handleInputChange() {
    let newSplashes: string[] = [];
    splashes.map((credit) => {
      newSplashes.push(credit);
    });
    newSplashes.push(inputValue);
    setSplashes(newSplashes);
  }

  useEffect(() => {
    setSplashesFile(props.projectPath, splashes);
  });

  return (
    <div className="splashes-panel">
      <h1 className="panel-title">Splashes</h1>
      <ul className="splashes-list">
        <button
          className="cta"
          onClick={() => {
            setSplashes([]);
          }}
        >
          Clear all
        </button>
        {splashes.map((credit) => (
          <li className="splashes-element">
            <input className="splashes-element-name" value={credit} />
            <button
              className="splashes-element-delete-btn"
              onClick={() => {
                setSplashes(splashes.filter((item: string) => item !== credit));
              }}
            >
              <img src="/delete-icon.png" alt="x" />
            </button>
          </li>
        ))}
      </ul>
      <div className="splashes-right-panel">
        <div className="add-splash-panel">
          <p className="panel-title">Add a new splash</p>
          <main>
            <input
              type="text"
              value={inputValue}
              className="new-splash-input"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button
              type="submit"
              className="cta new-splash-btn"
              onClick={() => {
                handleInputChange();
                setInputValue("");
              }}
            >
              Add
            </button>
          </main>
        </div>

        <div className="splash-preview">
          <p className="panel-title">Preview</p>
          <main>
            <img src="/gui-screenshot.png" alt="" className="gui-screenshot" />
            <span className="splash-preview-text">{inputValue}</span>
          </main>
        </div>
      </div>
    </div>
  );
}
