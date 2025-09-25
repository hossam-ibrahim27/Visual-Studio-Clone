import { useSelector } from "react-redux";
import FileComponent from "./Components/FileComponent";
import Preview from "./Components/Preview";
import ResizePanel from "./Components/SVG/ResizePanel";
import { FileTree } from "./data/FileTree";
import { fileTreeSelector } from "./app/store";
import Welcome from "./Components/Welcome";

const App = () => {
  const { openedFiles } = useSelector(fileTreeSelector);
  return (
    <main>
      <div className="flex h-screen">
        <ResizePanel defaultLayout={[80, 20]} showLeftPanel
          leftPanel={
            <div className="bg-[#171921] pt-5 h-screen">
              <FileComponent fileTree={FileTree} />
            </div>
          }
          rightPanel={openedFiles.length ? <Preview /> : <Welcome />}
        />
      </div>
    </main>
  )
}

export default App;