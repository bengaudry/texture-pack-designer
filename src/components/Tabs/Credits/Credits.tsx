import {
  getCreditsFile,
  setCreditsFile,
} from "@/components/Tabs/Credits/index";
import { useEffect, useState } from "react";

export function Credits(props: { projectPath: string }) {
  const [credits, setCredits] = useState<string[]>(
    getCreditsFile(props.projectPath)
  );

  const [inputValue, setInputValue] = useState<string>("");

  function handleInputChange() {
    let newCredits: string[] = [];
    credits.map((credit) => {
      newCredits.push(credit);
    });
    newCredits.push(inputValue);
    setCredits(newCredits);
  }

  useEffect(() => {
    setCreditsFile(props.projectPath, credits);
  });

  return (
    <div>
      <h1>Credits</h1>
      <ul className="credits-list">
        {credits.map((credit) => (
          <li className="credits-element">
            <span className="credits-element-name">{credit}</span>
            <button
              className="credits-element-delete-btn"
              onClick={() => {
                setCredits(credits.filter((item: string) => item !== credit));
              }}
            >
              <img src="/delete-icon.png" alt="x" />
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          handleInputChange();
          setInputValue("");
        }}
      >
        Add
      </button>
    </div>
  );
}
