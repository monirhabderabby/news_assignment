"use client";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";

const SearchBar = () => {
  const router = useRouter();
  let debounceTimeout: any;
  const onSearch = (value: string) => {
    router.push(`/news?search=${value}`);
  };

  const handleInputChange = (inputValue: string) => {
    // Clear the previous timeout to start a new one
    clearTimeout(debounceTimeout);

    // Set a new timeout for 500 milliseconds
    debounceTimeout = setTimeout(() => {
      onSearch(inputValue);
    }, 500);
  };
  return (
    <Input
      onChange={(e) => handleInputChange(e.target.value)}
      placeholder="search news"
      className="lg:w-[350px]"
    />
  );
};

export default SearchBar;
