import { extensionIcons } from "../../Constants";
import IconImage from "../../UI/IconImage";
import DefaultFileIcon from "./DefaultFileIcon";

interface IProps {
    filename: string;
    isFolder: boolean;
    isOpen: boolean;
}

const FileIcon = ({ filename, isOpen, isFolder }: IProps) => {
    const extension = filename.split(".").pop();

    if (extension && Object.prototype.hasOwnProperty.call(extensionIcons, extension)) {
        const iconPath = isFolder ? isOpen ?
            `/public/icons/${extensionIcons[extension]}-open.svg`
            : `/public/icons/${extensionIcons[extension]}.svg`
            : `/public/icons/${extensionIcons[extension]}.svg`
        return <IconImage src={iconPath} variant={"w-5 h-5"} />
    }
    if (isFolder && isOpen) return <IconImage src={"/public/icons/folder-default-open.svg"} variant={"w-5 h-5"} />
    if (isFolder && !isOpen) return <IconImage src={"/public/icons/folder-default.svg"} variant={"w-5 h-5"} />
    return <DefaultFileIcon />;
}

export default FileIcon;

