import type { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
    defaultLayout?: number[] | undefined;
    leftPanel: ReactNode;
    rightPanel: ReactNode;
    showLeftPanel: boolean
}

const ResizePanel = ({ defaultLayout = [20, 80], leftPanel, rightPanel, showLeftPanel }: IProps) => {
    const onLayout = (sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
    };
    return (
        <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId={"conditione"}>
            {
                showLeftPanel && (
                    <>
                        <Panel defaultSize={defaultLayout[0]}>{leftPanel}</Panel>
                        <PanelResizeHandle className="hover:bg-[#000000] w-px" />
                    </>
                )
            }
            <Panel defaultSize={defaultLayout[0]}>{rightPanel}</Panel>
            <PanelResizeHandle />
        </PanelGroup>
    );
}

export default ResizePanel;
