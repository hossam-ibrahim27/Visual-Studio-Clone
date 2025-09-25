import type { IFile } from "../Interfaces";
import { v4 as uuid } from 'uuid';

export const FileTree: IFile = {
    name: "Visual Studio Code Clone",
    id: uuid(),
    isFolder: true,
    children: [
        {
            name: "node_modules",
            id: uuid(),
            isFolder: true,
            children: [{
                name: ".vite", id: uuid(), isFolder: true, children: [
                    {
                        name: "react.js", id: uuid(), isFolder: false, content: `import {
  require_react
} from "./chunk-PSQR3SVX.js";
import "./chunk-5WRI5ZAA.js";
export default require_react();`,
                    },
                    {
                        name: "package.json", id: uuid(), isFolder: false, content: `{
  "type": "module"
}
`,
                    },
                    {
                        name: "react.map.js", id: uuid(), isFolder: false, content: `{
  "version": 3,
  "sources": [],
  "sourcesContent": [],
  "mappings": "",
  "names": []
}
`,
                    },]
            }]
        },
        {
            name: "public",
            id: uuid(),
            isFolder: true,
            children: [
                {
                    name: "vite.svg", id: uuid(), isFolder: false, content: `<IconImage src="/public/vite.svg" variant="bg-transparent w-64 h-64" />`
                }
            ]
        },
        {
            name: "src",
            id: uuid(),
            isFolder: true,
            children: [
                {
                    name: "UI", id: uuid(), isFolder: true,
                    children: [
                        {
                            name: "Button.tsx", id: uuid(), isFolder: false, content: `import { memo, type ButtonHTMLAttributes, type ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: "submit" | "reset" | "button";
    variant: string;
    buttonWidth: "w-full" | "w-fit";
}
const Button = ({ children, variant, type, buttonWidth, ...reset }: IProps) => {
    return (
        <>
            <button type={type} {...reset} className={"{variant} cursor-pointer {buttonWidth} rounded text-white py-2 font-medium"}>
                {children}
            </button>
        </>
    );
};

export default memo(Button)` },
                        {
                            name: "Input.tsx", id: uuid(), isFolder: false, content: `import { type InputHTMLAttributes, memo } from "react";

const Input = ({ ...reset }: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <>
            <input {...reset} className="border border-slate-200 outline-none
             focus:border-slate-600 focus:ring-1 shadow-md p-2 text-md rounded-md" />
        </>
    );
};

export default memo(Input);` },
                    ]
                },
                {
                    name: "Component", isFolder: true, id: uuid(), children: [
                        {
                            name: "Error.tsx", id: uuid(), isFolder: false, content: `import { memo } from "react";

interface IProps {
    msg: string;
}

const Error = ({ msg }: IProps) => {
    return (
        <>
            <div className="text-rose-600">{msg}</div>
        </>
    );
};

export default memo(Error);`}, {
                            name: "Preview.tsx", id: uuid(), isFolder: false, content: `import { useSelector } from "react-redux";
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
`
                        }
                    ]
                }
            ]
        },
        {
            name: "index.html", id: uuid(), isFolder: false, content: `<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vscode.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Visual Studio Clone</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>

</html>
                    `,
        },
        {
            name: "package.json", isFolder: false, id: uuid(), content: `{
  "name": "visual-studio-clone",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@heroicons/react": "^2.2.0",
    "@reduxjs/toolkit": "^2.9.0",
    "@tailwindcss/vite": "^4.1.13",
    "@types/react-syntax-highlighter": "^15.5.13",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-redux": "^9.2.0",
    "react-resizable-panels": "^3.0.6",
    "react-syntax-highlighter": "^15.6.6",
    "tailwindcss": "^4.1.13",
    "uuid": "^13.0.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.13",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.3",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.4.0",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.44.0",
    "vite": "^7.1.7"
  }
}

`
        }, {
            name: ".gitignore", isFolder: false, id: uuid(), content: `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`
        }
    ]
}
