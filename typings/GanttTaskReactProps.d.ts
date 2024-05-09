/**
 * This file was generated from GanttTaskReact.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface GanttTaskReactContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    tasks: ListValue;
    taskId: ListAttributeValue<string>;
    taskName: ListAttributeValue<string>;
    startDate: ListAttributeValue<Date>;
    endDate: ListAttributeValue<Date>;
    type: ListAttributeValue<string>;
    progress: ListAttributeValue<Big>;
    isDisabled: ListAttributeValue<boolean>;
    dependencies: ListAttributeValue<string>;
    style_: ListAttributeValue<string>;
    onClickAction?: ActionValue;
    onDoubleClickAction?: ActionValue;
    onSelectAction?: ActionValue;
    defaultVM: EditableValue<string>;
    cwidth: DynamicValue<Big>;
    rheight: DynamicValue<Big>;
}

export interface GanttTaskReactPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    tasks: {} | { caption: string } | { type: string } | null;
    taskId: string;
    taskName: string;
    startDate: string;
    endDate: string;
    type: string;
    progress: string;
    isDisabled: string;
    dependencies: string;
    style_: string;
    onClickAction: {} | null;
    onDoubleClickAction: {} | null;
    onSelectAction: {} | null;
    defaultVM: string;
    cwidth: string;
    rheight: string;
}
