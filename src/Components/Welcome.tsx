import IconImage from "../UI/IconImage";
import imag from "../assets/icons/vscode.svg"

const Welcome = () => {
    return (
        <div className="bg-[#12141a] flex items-center justify-center w-full h-screen">
            <IconImage src={imag} variant="bg-transparent w-64 h-64" />
        </div>
    );
}

export default Welcome;
