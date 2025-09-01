"use client";

import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";
import { searchParser } from "@/features/ticket/search-params";
import { useQueryState } from "nuqs";

type SearchInputProps = {
  placeholder: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
  const [search, setSearch] = useQueryState("search", searchParser);

  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    250
  );

  return (
    <Input
      defaultValue={search}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export { SearchInput };
