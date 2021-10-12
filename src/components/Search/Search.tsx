import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDebounce } from "../../hooks";
import { SearchInput } from "./SearchStyles";

export const Search: FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const debounceText = useDebounce<string>(inputText);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setInputText(value);
  };

  useEffect(() => {
    if (debounceText.length > 2) {
      console.log("fetch data", debounceText);
    }
  }, [debounceText]);

  return (
    <SearchInput onChange={handleChange} placeholder="Input Name Character" />
  );
};
