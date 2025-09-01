"use client";

import { sortOptions, sortParser } from "@/features/ticket/search-params";
import { useQueryStates } from "nuqs";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  sortKey: string;
  sortValue: string;
  label: string;
};

type SortSelectProps = {
  options: Option[];
};

const SortSelect = ({ options }: SortSelectProps) => {
  const [sort, setSort] = useQueryStates(sortParser, sortOptions);

  const handleSort = (sortKey: string) => {
    const sortValue = options.find(
      (option) => option.sortKey === sortKey
    )?.sortValue;
    setSort({ sortKey, sortValue });
  };

  return (
    <Select onValueChange={handleSort} defaultValue={sort.sortKey}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort by</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.sortKey} value={option.sortKey}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { SortSelect };
