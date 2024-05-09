import { ReactElement, createElement } from "react";
import { Gantt, Task /*, EventOption, StylingOption, ViewMode, DisplayOption*/ } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { ActionValue, ListValue, ListAttributeValue, DynamicValue, EditableValue } from "mendix";
import { TaskType, ViewMode } from "gantt-task-react/dist/types/public-types";

export interface GanttTaskProps {
  viewMode: ViewMode;
  isChecked: boolean;
  onClickAction?: ActionValue;
  onDoubleClickAction?: ActionValue;
  onSelectAction?: ActionValue;
  tasks_: ListValue;
  taskId: ListAttributeValue;
  taskName: ListAttributeValue;
  startDate: ListAttributeValue;
  endDate: ListAttributeValue;
  type: ListAttributeValue;
  progress: ListAttributeValue;
  isDisabled: ListAttributeValue;
  dependencies: ListAttributeValue;
  style_: ListAttributeValue;
  cwidth: DynamicValue<Big>;
  rheight: DynamicValue<Big>;
  defaultVM: EditableValue;
}

export function GanttTask({ 
    isChecked,
    viewMode,
    onClickAction, 
    onDoubleClickAction, 
    onSelectAction, 
    tasks_, 
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
    style_ }: GanttTaskProps): ReactElement {


  // let cwidth = 60;
  // if (viewMode === ViewMode.Hour) {
  //   cwidth = 150;
  // }
  // if (viewMode === ViewMode.Year) {
  //   cwidth = 310;
  // }
  // if (viewMode === ViewMode.Month) {
  //   cwidth = 390;
  // }
  // if (viewMode === ViewMode.Week) {
  //   cwidth = 260;
  // }

  const handleClick = (task: Task) => {

    if (onClickAction && onClickAction.canExecute && !onClickAction.isExecuting) {
      onClickAction.execute();
    }

    console.log("On Click event Id:" + task.id);
  };

  const handleDoubleClick = (task: Task) => {
    alert("On Double Click event Id:" + task.id);
    if (onDoubleClickAction && onDoubleClickAction.canExecute && !onDoubleClickAction.isExecuting) {
      onDoubleClickAction.execute();
    }
    console.log("On Double Click event Id:" + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
    if (onSelectAction && onSelectAction.canExecute && !onSelectAction.isExecuting) {
      onSelectAction.execute();
    }
  };

  let tasks__: Task[] = tasks_.items ? tasks_.items.map((item) => {
    console.log(style_);
    // console.log(dependencies);
    let dependenc_ = dependencies.get(item).displayValue;
    // debugger;
    return {
      id: taskId.get(item).displayValue,
      name: taskName.get(item).displayValue,
      start: new Date(startDate.get(item).displayValue),
      end: new Date(endDate.get(item).displayValue),
      type: type.get(item).value as TaskType,
      dependencies: dependenc_ && dependenc_ !== '' ? JSON.parse(dependenc_) : null,
      progress: Number(progress.get(item).displayValue),
      isDisabled: isDisabled.get(item).value as boolean,
      styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' }
    }
  }
  ) : [];

  return (tasks_.status === 'available' ? (
      <Gantt
        listCellWidth={isChecked ? "160px" : ""}
        viewMode={viewMode}
        tasks={tasks__}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onSelect={handleSelect}
        columnWidth={cwidth.value?.toNumber()}
        rowHeight={rheight.value?.toNumber()}
      />
  ) : (<div>Loading Gantt Chart...</div>));
}
