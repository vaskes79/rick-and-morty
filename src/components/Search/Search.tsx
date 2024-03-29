import { ChangeEvent, FC, useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_ALL_EPISODE, GET_CHARACTES_BY_FILTER_NAME } from "../../gql";
import { useDebounce } from "../../hooks";
import { useAppDispatch } from "../App";
import { TypeAppAction } from "../App/types";
import { GetCharcterRes, FilterVars } from "../App/types";
import { SearchInput } from "./SearchStyles";

export const Search: FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useAppDispatch();
  const debounceText = useDebounce<string>(inputText);
  useQuery(GET_ALL_EPISODE);

  const [loadGreeting, { loading, error, data }] = useLazyQuery<
    GetCharcterRes,
    FilterVars
  >(GET_CHARACTES_BY_FILTER_NAME, {
    variables: { name: debounceText },
  });

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
    if (error) {
      dispatch({
        type: TypeAppAction.error,
        error,
      });
    }
  }, [error, dispatch]);

  useEffect(() => {
    const characters = data?.characters.results;
    if (characters) {
      dispatch({ type: TypeAppAction.updateCharacters, characters });
    }
  }, [data, dispatch]);

  useEffect(() => {
    dispatch({ type: TypeAppAction.loading, loading });
  }, [loading, dispatch]);

  return (
    <SearchInput onChange={handleChange} placeholder="Input Name Character" />
  );
};
