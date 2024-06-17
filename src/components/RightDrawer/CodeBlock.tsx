"use client";
import React, { useState, useEffect, Suspense } from "react";
import "prismjs";
import "prismjs/themes/prism-twilight.css";
import { LuCopyPlus } from "react-icons/lu";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javascript";
import { MdEdit } from "react-icons/md";
import { TbPencilCancel } from "react-icons/tb";
import { CiShare2 } from "react-icons/ci";
import ShareSnippet from "./ShareSnippet";
import axios from "axios";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Input } from "./Input";
import { baseURL } from "@/config";
import {addSnippetBody} from "@/inputValidation"


interface props {
  isEditable: boolean;
  setIsEditable: any;
  shared: string;
  setIsOpen: any;
}
function CodeBlock({ isEditable, setIsEditable, shared, setIsOpen }: props) {
  const [showBox, setShowBox] = useState(false);
  const [codeData, setCodeData] = useState<any>({});
  const searchParams = useSearchParams();
  const snippet = searchParams.get("snippet")
    ? searchParams.get("snippet")
    : "";
  const collection = searchParams.get("collection")
    ? searchParams.get("collection")
    : "";
  const workspace = searchParams.get("workspace")
    ? searchParams.get("workspace")
    : "";
  const edit = searchParams.get("edit")
    ? searchParams.get("edit") 
    : "";
  const add = searchParams.get("add")
    ? searchParams.get("add")
    : ""
    useEffect(() => {
      const fetchCode = async() => {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        await axios
          .get(`${baseURL}/v1/api/snippet?snippet_id=` + `${snippet}`, {
            headers,
          })
          .then((response) => {
            console.log(response.data);
            setCodeData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      snippet && fetchCode();
      window.Prism.highlightAll();
    }, [snippet]);

  const toggleEditable = () => {
    const codeElement = document.getElementById("editable-code");
    if (codeElement) {
      codeElement.contentEditable = isEditable ? "false" : "true";
    }
    const edit = searchParams.get("edit") ? searchParams.get("edit") : ""
    if(!edit){
      const nextSearchParams = new URLSearchParams(searchParams.toString());
      nextSearchParams.append("edit", "true")
      router.push(`${pathname}?${nextSearchParams.toString()}`)
      setIsEditable(true)
    }
    if(edit){
      const nextSearchParams = new URLSearchParams(searchParams.toString());
      nextSearchParams.delete("edit")
      router.push(`${pathname}?${nextSearchParams.toString()}`)
      setIsEditable(false)
    }
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        toast.success("Code copied to clipboard");
      })
      .catch((error) => {
        console.error("Unable to copy code to clipboard", error);
      });
  };

  const toggleBox = () => {
    setShowBox(true);
  };

  const flag = Array.isArray(codeData) ? true : false;
  const cleanCode = flag === true && codeData[0].code.trim().replace(/`/g, "");
  const colors = [
    "bg-purple-700",
    "bg-indigo-700",
    "bg-teal-700",
    "bg-lime-700",
    "bg-fuchsia-700",
  ];
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [data, setData] = React.useState({
    title: "",
    description: "",
    code: "",
    tags: [],
    category_id: "",
  });

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter"  && tagInput) {
      e.preventDefault();
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const description:string = data.description
  const title:string = data.title
  const code:string = data.code
  const router = useRouter()
  const pathname = usePathname()
  const handleCreateSnippet = async () => {
    const validationResult = addSnippetBody.safeParse({tags, description, title, code})
    if(validationResult.success){
      try{
        const body = {
          title: data.title,
          description: data.description,
          code: data.code,
          tags: tags,
          category_id: `${collection}`,
          workspace_id: `${workspace}`,
        };
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        {
          collection &&
            (await axios.post(`${baseURL}/v1/api/snippet`, body, { headers }).then((res: any) => {
                console.log(res.data.data);
                const id = res.data.data._id
                const nextSearchParams = new URLSearchParams(searchParams.toString());
                nextSearchParams.append("snippet", id);
                setIsOpen(false)
                router.push(`${pathname}?${nextSearchParams.toString()}`);
              }).catch((error) => {
                console.log(error);
              })
            );
        }
      }catch(error){
        console.log('API call failed')
      }
    }else{
      alert('Invalid Inputs')
    }
    
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target && e.target.value) {
      const selectedLanguage = e.target.value
      setSelectedLanguage(selectedLanguage);
      setTags([selectedLanguage]);
    }
  };
  
  const languages = ["Python", "JavaScript", "Java", "TypeScript", "C++", "React", "Node", "Svelte", "Django", "Solidity", "Solana", "Rust", "Kotlin", "Flutter"];
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const handleClick = () => {};
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="outline-none overflow-auto">
      <div className=''>
        <h2 className="text-3xl text-white p-2 font-bold overflow-y-auto">
          {snippet && flag === true ? (
            codeData[0].title
          ) : (
            <Input
              className="outline-none"
              value={data.title}
              placeholder="Title..."
              onKeyDown={handleClick}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, title: e.target.value });
              }}
            />
          )}
        </h2>
        <h2 className="text-lg text-white p-2 font-semibold mb-2 ">
          {snippet && flag === true ? (
            codeData[0].description
          ) : (
            <Input
              onKeyDown={handleClick}
              className="outline-none"
              value={data.description}
              placeholder="Description..."
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, description: e.target.value });
              }}
            />
          )}
        </h2>
        {!snippet && (
          <div className="bg-zinc-900 p-2">
            <select
              className="bg-zinc-900 shadow-zinc-950 shadow-md text-white p-2"
              value={selectedLanguage}
              onChange={(e) => handleSelect(e)}
            >
              <option value="" disabled>
                Select...
              </option>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>{" "}
          </div>
        )}
        <div className="">
          {snippet && flag === true ? (
            codeData[0].tags.map((tag: any, index: any) => (
              <div key={index} className="inline-flex">
                <Badge
                  variant="default"
                  className="px-2 py-1 rounded-xl bg-purple-700 hover:bg-purple-500 mx-1 mb-2"
                >
                  {tag}
                </Badge>
              </div>
            ))
          ) : (
            <div className="transform translate-x-3">
              {" "}
              <Input
                value={tagInput}
                onKeyDown={handleAddTag}
                className="w-[95%] mb-4  outline-none"
                placeholder="Tags..."
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTagInput(e.target.value);
                }}
              />{" "}
              {tags.length > 0 &&
                tags?.map((tag, index) => {
                  return (
                    <Badge
                      key={index}
                      variant="default"
                      className="px-2 py-1 rounded-xl bg-purple-700 hover:bg-purple-500 mx-1 mb-2"
                    >
                      {tag}
                    </Badge>
                  );
                })}
            </div>
          )}

            <div className="">
              {shared != "true" && snippet && (
                <div className="relative mt-12 mr-2">
                  <button
                    onClick={toggleEditable}
                    className="group absolute -top-10 right-6 text-zinc-100 bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2 mx-2"
                  >
                    {isEditable ? <MdEdit /> : <TbPencilCancel />}
                    
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-2 text-xs text-zinc-100 bg-zinc-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">EDIT</div>  
                  </button>
                  
                  <button 
                    className="group absolute -top-10 right-0 text-zinc-100 font-bold bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2" 
                    onClick={() => copyToClipboard(codeData[0].code)}
                  >
                    <LuCopyPlus />
                    
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-2 text-xs text-zinc-100 bg-zinc-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">COPY</div>
                  </button>
                                  
                  <button
                    className="group absolute -top-10 right-16 text-zinc-100 font-bold bg-zinc-900 hover:bg-zinc-700 border border-zinc-100 duration-300 rounded-sm p-2"
                    onClick={toggleBox}
                  >
                    <CiShare2 />

                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max p-2 text-xs text-zinc-100 bg-zinc-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">SHARE</div>
                  </button>
                </div>
              )}

            {showBox && snippet && <ShareSnippet snippet_id = {snippet} onClose={() => setShowBox(false)} />}
            <div className="min-h-[50vh] min-w-[40vw] w-[47vw] h-[42vh] overflow-y-auto fixed py-2 rounded-b-md border-zinc-900 bg-zinc-900">
              {snippet ? (
                <pre className="p-4 outline-none">
                  <code
                    id="editable-code"
                    className={`language-javascript ${isEditable ? "text-black" : "text-white"} outline-none`}
                    contentEditable={isEditable}
                  >
                    {cleanCode}
                  </code>
                </pre>
              ) : (
                <div>
                  <pre className="p-2 mt-6 min-h-[35vh] min-w-[40vw] w-[47vw] h-[47vh]">
                    <code
                      id="editable-code"
                      className={`language-${selectedLanguage} ${isEditable ? "text-black" : "text-white"}  outline-none`}
                      contentEditable={isEditable}
                    >
                      <textarea
                        className="bg-zinc-900 h-[95%] w-full text-white border-none outline-none"
                        value={data.code}
                        onChange={(
                          e: React.ChangeEvent<HTMLTextAreaElement>
                        ) => {
                          setData({ ...data, code: e.target.value });
                        }}
                      />
                    </code>
                  </pre>
                  <button
                    className="text-white bg-black px-3 py-1 rounded-xl hover:bg-zinc-900 duration-300 mt-2"
                    onClick={() => handleCreateSnippet()}
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Suspense>
  );
}
export default CodeBlock;
