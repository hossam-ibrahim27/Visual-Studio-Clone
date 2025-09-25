import { useDispatch, useSelector } from "react-redux";
import { fileTreeSelector } from "../app/store";
import OpenedFilesTabs from "./OpenedFilesTabs";
import { useState } from "react";
import DropMenu from "../UI/DropMenu";
import { setTabIdToRemove } from "../app/features/fileTree/fileTreeSlice";

const OpenedFiles = () => {
    const { openedFiles, clickedFile } = useSelector(fileTreeSelector);
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [positionMenu, setPositionMenu] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
    const dispatch = useDispatch()
    return (
        <>
            <nav className="bg-[#171921] border-b border-[#12141a] overflow-auto"
                onContextMenu={(e) => {
                    e.preventDefault();
                    setPositionMenu({ x: e.clientX, y: e.clientY });
                    setShowMenu(true);
                    dispatch(setTabIdToRemove(clickedFile.activeTab))
                }}
            >
                <ul className="flex items-center">
                    {
                        openedFiles.map((file) => (
                            <OpenedFilesTabs key={file.id} file={file} />
                        ))
                    }
                </ul>
                {showMenu && <DropMenu position={positionMenu} setShowMenu={setShowMenu} />}
            </nav>
        </>
    );
}

export default OpenedFiles;
