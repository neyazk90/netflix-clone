import { useState } from "react"
import { explorer } from "../../utils/constants";
import Folder from "./Folder";


const FolderExplore: React.FC<any> = () => {

  const [explorerData, setExplorerData] = useState(explorer);

  return (
    <>
      <div className="pt-32">
        <Folder explorer={explorerData} />
        </div>
    </>
  )
}

export default FolderExplore