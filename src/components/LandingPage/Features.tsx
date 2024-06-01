import { FaRegFolderOpen } from "react-icons/fa6";
import { TiCloudStorage } from "react-icons/ti";
import { MdAssistantNavigation } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { FaShare } from "react-icons/fa";

export default function Features() {
  return (
    <div  id="features" className=" text-white m-auto ">
      <div  className="max-w-6xl text-center mt-20 m-auto">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Everything you need in one platform
        </h2>
        <p className="mt-4 text-lg">
          We have built the best in class tools to manage the .
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 space-y-4 bg-black bg-opacity-20 rounded-lg border-2 border-black border-opacity-20 hover:border-[#00AEFF] hover:rounded-xl transition-all">
            <FaRegFolderOpen size={30} />
            <h3 className="text-xl font-semibold">
              Workspace and Collection Management
            </h3>
            <p className="text-center text-sm">
              Create, organize workspaces, collections for efficient project and
              code management.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 space-y-4 bg-black bg-opacity-20 rounded-lg shadow-md  border-2 border-black border-opacity-20 hover:border-[#00AEFF] hover:rounded-xl transition-all">
            <TiCloudStorage size={30} />
            <h3 className="text-xl font-semibold text-white">
              Effortless Snippet Storage
            </h3>
            <p className="text-center text-sm text-white">
              Unlimited code snippets saved per collection for easy access.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-4 bg-black bg-opacity-20 rounded-lg  border-2 border-black border-opacity-20 hover:border-[#00AEFF] hover:rounded-xl transition-all">
            <MdAssistantNavigation size={30} />
            <h3 className="text-xl font-semibold">Intuitive Navigation</h3>
            <p className="text-center text-sm">
              Smooth transition between workspaces and collections for
              streamlined management.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 space-y-4 bg-black bg-opacity-20 rounded-lg  border-2 border-black border-opacity-20 hover:border-[#00AEFF] hover:rounded-xl transition-all">
            <FaSearch size={30} />
            <h3 className="text-xl font-semibold">
              Global Search Functionality
            </h3>
            <p className="text-center text-sm">
              Powerful search across all workspaces and collections for code
              retrieval.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center p-6 space-y-4 bg-black bg-opacity-20 rounded-lg  border-2 border-black border-opacity-20 hover:border-[#00AEFF] hover:rounded-xl transition-all">
            <CiShare2 size={30} />
            <h3 className="text-xl font-semibold">
              Collaborative Workspace Sharing
            </h3>
            <p className="text-center text-sm">
              Share workspaces with team members for seamless project
              collaboration.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center p-6 space-y-4 bg-black bg-opacity-20 rounded-lg  border-2 border-black border-opacity-20 hover:border-[#00AEFF] hover:rounded-xl transition-all">
            <FaShare size={30} />
            <h3 className="text-xl font-semibold">Flexible Sharing Options</h3>
            <p className="text-center text-sm">
              Share snippets via links or email for easy collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
