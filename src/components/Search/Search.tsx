import { useLazyQuery } from "@apollo/client";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { GET_CHARACTES_BY_FILTER_NAME } from "../../gql";
import { useDebounce } from "../../hooks";
import { GetCharcterRes } from "../App";
import { SearchInput } from "./SearchStyles";

interface FilterVars {
  name: string;
}

export const Search: FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const debounceText = useDebounce<string>(inputText);

  const [loadGreeting, { data }] = useLazyQuery<GetCharcterRes, FilterVars>(
    GET_CHARACTES_BY_FILTER_NAME,
    {
      variables: { name: debounceText },
    }
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setInputText(value);
  };

  useEffect(() => {
    if (debounceText.length > 2) {
      loadGreeting();
    }
  }, [debounceText, loadGreeting]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <SearchInput onChange={handleChange} placeholder="Input Name Character" />
  );
};
