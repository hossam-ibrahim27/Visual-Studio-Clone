import { useState } from "react";
import type { IFile } from "../Interfaces";
import RightIcon from "./SVG/RightArrow";
import FileIcon from "./SVG/FileIcon";
import DownArrow from "./SVG/DownArrow";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTree/fileTreeSlice";
import { fileTreeSelector } from "../app/store";
import { doesFileExit } from "../utils/functions";

interface IProps {
    fileTree: IFile;
}
//@ Recursion Component
const FileComponent = ({ fileTree }: IProps) => {
    const { isFolder, name, id, content } = fileTree;
    //@/*  ---------------------------- *** States *** ------------------------------ */
    const [isOpen, setIsOpen] = useState<boolean>(false);
    //* Open File In Bar
    const dispatch = useDispatch();
    const { openedFiles, clickedFile: { activeTab } } = useSelector(fileTreeSelector)
    //@/*  ---------------------------- *** Handlers *** ------------------------------ */
    const toggleIsOpen = () => (
        setIsOpen(prev => !prev)
    )
    const onClickFile = () => {
        const existed = doesFileExit(openedFiles, id);
        dispatch(setClickedFile({ fileName: name, fileContent: content, activeTab: id }));
        if (existed) return;
        dispatch(setOpenedFiles([fileTree, ...openedFiles,]));
    }
    //@/*  ---------------------------- *** JSX *** ------------------------------ */
    return (
        <div className="mb-1 pl-2 text-gray-400">
            <div className="py-1" style={{
                backgroundColor: id === activeTab ? "#20232e" : "transparent",
            }}>
                {isFolder ?
                    <div onClick={toggleIsOpen} className="flex items-center cursor-pointer space-x-1">
                        {
                            isOpen ? <DownArrow /> : <RightIcon />
                        }
                        <div className="flex items-center space-x-1">
                            <FileIcon isFolder={isFolder} isOpen={isOpen} filename={name} />
                            <div>{fileTree.name}</div>
                        </div>
                    </div>
                    :
                    <>
                        <div className="pl-3 flex items-center space-x-1 cursor-pointer"
                            onClick={onClickFile}>
                            <FileIcon isFolder={isFolder} isOpen={isOpen} filename={name} />
                            <div>{fileTree.name}</div>
                        </div>
                    </>
                }
            </div>
            {
                isOpen && fileTree.children && fileTree.children?.map((file, idx) => (
                    <FileComponent fileTree={file} key={idx} />
                ))
            }
        </div >
    );
}

export default FileComponent;
