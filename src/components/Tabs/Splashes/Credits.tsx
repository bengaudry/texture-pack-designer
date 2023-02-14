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
      <div>
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
      </div>
    </div>
  );
}
