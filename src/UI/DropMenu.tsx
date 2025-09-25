import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTree/fileTreeSlice";
import { fileTreeSelector } from "../app/store";

interface IProps {
    position: { x: number, y: number };
    setShowMenu: (value: boolean) => void;
}
const DropMenu = ({ position, setShowMenu }: IProps) => {
    const dispatch = useDispatch()
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handelClickOutside = (evt: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(evt?.target as Node)) {
                setShowMenu(false);
            }
        }
        window.addEventListener("click", handelClickOutside);
        return () => {
            window.removeEventListener("click", handelClickOutside)
        }
    }, [setShowMenu]);

    const { openedFiles, clickedFile } = useSelector(fileTreeSelector);
    //@/*  ---------------------------- *** Handlers *** ------------------------------ */
    const onCloseAll = () => {
        dispatch(setOpenedFiles([]));
        setShowMenu(false);
    }
    const onCloseOther = () => {
        const filtered = openedFiles.filter((item) => item.id === clickedFile.activeTab)
        const lastTab = filtered[filtered.length - 1];
        dispatch(setOpenedFiles(filtered));
        dispatch(setClickedFile({ fileName: lastTab.name, fileContent: lastTab.content, activeTab: lastTab.id }));
        setShowMenu(false);
    }
    const onCloseFile = () => {
        const filtered = openedFiles.filter((item) => item.id !== clickedFile.activeTab)
        const lastTab = filtered[filtered.length - 1];
        dispatch(setOpenedFiles(filtered));
        dispatch(setClickedFile({ fileName: lastTab.name, fileContent: lastTab.content, activeTab: lastTab.id }));
        setShowMenu(false);
    }
    //@/*  ---------------------------- *** JSX *** ------------------------------ */
    return (
        <div ref={menuRef}>
            <ul className="bg-[#171921] text-gray-50 w-fit px-7 py-3 rounded-md flex flex-col space-y-2 cursor-pointer"
                style={{
                    position: "absolute", top: position.y, left: position.x
                }}
            >
                <li onClick={onCloseFile}>Close</li>
                <li onClick={onCloseOther}>Close Others</li>
                <li onClick={onCloseAll}>Close All</li>
            </ul>
        </div>
    );
}

export default DropMenu;
