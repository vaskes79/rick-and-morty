import { ChangeEvent, FC, useEffect, useState } from "react";
import { SearchInput } from "./SearchStyles";

export const Search: FC = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setInputText(value);
  };

  useEffect(() => {
    if (inputText.length > 2) {
      console.log(inputText);
    }
  }, [inputText]);

  return (
    <SearchInput onChange={handleChange} placeholder="Input Name Character" />
  );
};
