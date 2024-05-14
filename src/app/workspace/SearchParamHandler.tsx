"use client";
import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { baseURL } from "@/config";
import { IoIosArrowForward } from "react-icons/io";
import { SearchIcon } from "lucide-react";
interface SearchParam {
  closeGlobalSearch: () => void
}
const SearchParamsHandler = ({closeGlobalSearch}: SearchParam) => {
  const [inpText, setInpText] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const globalSearch = async () => {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios
        .get(`${baseURL}/v1/api/snippet/global?text=${inpText}`, { headers })
        .then((response) => {
          setSearchData(response.data);
        });
    };
    inpText ? globalSearch() : setSearchData([]);
  }, [inpText]);

  const updateURL = (snippet: any) => {
    const currentUrl = new URL(window.location.href);
    const searchParams = new URLSearchParams(currentUrl.search);

    searchParams.set("workspace", snippet.workspace_id);
    searchParams.set("collection", snippet.category_id);
    searchParams.set("snippet", snippet._id);

    const newUrl = `${currentUrl.origin}${currentUrl.pathname}?${searchParams.toString()}`;

    window.history.replaceState({}, "", newUrl);
    closeGlobalSearch()
  };

  return (
    <div >
      <div className="flex items-center relative">
        <div className="border-2 ml-6 px-2 border-gray-400 h-10 flex items-center rounded-l">
          <SearchIcon />
        </div>
        <input
          value={inpText}
          onChange={(e) => setInpText(e.target.value)}
          type="text"
          className="w-full h-10 mt-4 bg-gray-800 text-white px-4 border-2 border-gray-400 hover:shadow-outline focus:outline-none border-l-0 rounded-r mb-4 font-mono"
          placeholder="Find by Tag, Description, title..."
        />
      </div>

      {inpText && (
        <div className="w-[95%] m-auto mt-4 max-h-[40vh] overflow-auto">
          {searchData &&
            searchData.map((snippet: any, index: any) => (
              <div
                key={index}
                onClick={() => updateURL(snippet)}
                className="shadow-2xl mr-2 flex flex-col gap-2 rounded-xl mb-6 cursor-pointer border-2 border-zinc-950 hover:border-2 hover:border-slate-500 p-2"
              >
                <p className="flex">
                  {" "}
                  <IoIosArrowForward className="mt-1 mr-1" />
                  workspace <IoIosArrowForward className="mt-1 mr-1" />
                  collection <IoIosArrowForward className="mt-1 mr-1" />
                  {snippet.title}{" "}
                </p>
                <div className="flex">
                  <div>
                    <p className="text-2xl font-semibold"> {snippet.title} </p>
                    <p> {snippet.description} </p>
                  </div>
                </div>
                <div className="flex">
                  {snippet.tags.map((tag: any, index: any) => (
                    <p
                      key={index}
                      className="bg-black mr-2 p-1 pl-2 pr-2 rounded-xl"
                    >
                      {" "}
                      {tag}{" "}
                    </p>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchParamsHandler;
