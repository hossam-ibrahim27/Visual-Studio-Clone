import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
    content: string | undefined;
}
const SyntaxHighlight = ({ content }: IProps) => {
    return (
        <SyntaxHighlighter language="javascript" style={dracula}
            customStyle={{
                backgroundColor: "transparent", width: "100%", maxHeight: "100vh", overflowX: "auto", margin: 0, padding: 0
            }}
            showLineNumbers
        >
            {String(content)}
        </SyntaxHighlighter>
    );
}

export default SyntaxHighlight;
