import type { IFile } from "../Interfaces";
import FileIcon from "./SVG/FileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTree/fileTreeSlice";
import { useDispatch, useSelector } from "react-redux";
import { fileTreeSelector } from "../app/store";



const OpenedFilesTabs = ({ file }: { file: IFile }) => {
    const { name, content, id } = file;
    const { clickedFile: { activeTab }, openedFiles } = useSelector(fileTreeSelector)
    const dispatch = useDispatch();

    //@/*  ---------------------------- *** Handlers *** ------------------------------ */
    const onClickedHandlers = () => {
        console.log("Hossam");
        dispatch(setClickedFile({ fileName: name, fileContent: content, activeTab: id }));
    }
    const onRemove = (id: string) => {
        const filtered = openedFiles.filter(item => item.id !== id);
        const lastTab = filtered[filtered.length - 1];
        if (!lastTab) {
            dispatch(setOpenedFiles([]));
            dispatch(setClickedFile({ fileName: "", fileContent: "", activeTab: null }));
            return;
        }
        dispatch(setOpenedFiles(filtered));
        dispatch(setClickedFile({ fileName: lastTab.name, fileContent: lastTab.content, activeTab: lastTab.id }));
    }
    //@/*  ---------------------------- *** JSX *** ------------------------------ */
    return (
        <li key={file.id} className="border cursor-pointer flex items-center space-x-4 border-[#000] p-3 hover:bg-[#12141a]"
            onClick={onClickedHandlers} style={{
                borderTop: id === activeTab ? "1px solid #fff" : "1px solid transparent",
                color: id === activeTab ? "#fff" : "#99a1af",
                backgroundColor: id === activeTab ? "#12141a" : "#171921"
            }}>
            <div className="flex items-center space-x-1.5">
                <span className="w-5"><FileIcon isOpen isFolder={false} filename={file.name} /></span>
                <span>{file.name}</span>
            </div>
            <span onClick={(e) => { e.stopPropagation(); onRemove(file.id) }}>
                <CloseIcon variant={"size-4"} />
            </span>
            
        </li>
    );
}

export default OpenedFilesTabs;
