import { useSelector } from "react-redux";
import OpenedFiles from "./OpenedFiles";
import SyntaxHighlight from "./SyntaxHighlight";
import { fileTreeSelector } from "../app/store";

const Preview = () => {
    const { clickedFile: { fileContent } } = useSelector(fileTreeSelector);
    console.log(<SyntaxHighlight content={fileContent} />);
    return (
        <div className="h-screen">
            <div className="bg-[#12141a] overflow-hidden">
                <OpenedFiles />
            </div>
            <div className="pl-4 pt-2 bg-[#12141a] h-full">
                <SyntaxHighlight content={fileContent} />
            </div>
        </div>
    );
}

export default Preview;
