import { ReactElement, createElement, useState } from "react";
import { GanttTask } from "./components/GanttTask";
import { ViewSwitcher } from "./components/ViewSwitcher";
import { GanttTaskReactContainerProps } from "../typings/GanttTaskReactProps";
import { ViewMode } from "gantt-task-react";

import "./ui/GanttTaskReact.css";

export function GanttTaskReact({ 
        onClickAction, 
        onDoubleClickAction, 
        onSelectAction, 
        tasks, 
        taskId, 
        taskName, 
        startDate, 
        endDate, 
        type, 
        progress, 
        isDisabled, 
        dependencies,
        cwidth,
        rheight,
        style_,
        defaultVM }: GanttTaskReactContainerProps): ReactElement {


    const [view, setView] = useState<ViewMode>(ViewMode[defaultVM.displayValue as keyof typeof ViewMode]);
    const [isChecked, setIsChecked] = useState<boolean>(true);

    return (<div>
        <ViewSwitcher
            onViewListChange={setIsChecked}
            onViewModeChange={(viewMode: ViewMode) => setView(viewMode)}
            isChecked={isChecked}
        />
        <GanttTask
            isChecked={isChecked}
            viewMode={view}
            onClickAction={onClickAction}
            onDoubleClickAction={onDoubleClickAction}
            onSelectAction={onSelectAction}
            tasks_={tasks}
            taskId={taskId}
            taskName={taskName}
            startDate={startDate}
            endDate={endDate}
            type={type}
            progress={progress}
            isDisabled={isDisabled}
            dependencies={dependencies}
            cwidth={cwidth}
            rheight={rheight}
            style_={style_}
            defaultVM={defaultVM}
        />
    </div>);
}
