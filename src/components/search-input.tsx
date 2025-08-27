"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

type SearchInputProps = {
  placeholder: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return <Input placeholder={placeholder} onChange={handleChange} />;
};

export { SearchInput };
