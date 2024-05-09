import { createElement, useState } from "react";
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";
// import "../ui/ViewSwitcher.css"

type ViewSwitcherProps = {
    isChecked: boolean;
    onViewListChange: (isChecked: boolean) => void;
    onViewModeChange: (viewMode: ViewMode) => void;
};

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ 
    onViewModeChange, 
    onViewListChange, 
    isChecked }) => {
    const [isShowOptions, setIsShowOptions] = useState<boolean>(true);
    return (
        <div className="viewContainer">
            {!isShowOptions ? (
                <div className="btnWrapper">
                    <button className="btn mx-button" onClick={() => setIsShowOptions(true)}>
                        ▶
                    </button>
                </div>
            ) : (
                <div className="btnWrapper">
                    <button className="btn mx-button" onClick={() => setIsShowOptions(false)}>
                        ◀
                    </button>
                    <button
                        className="btn mx-button view-list-btn"
                        defaultChecked={isChecked}
                        onClick={() => onViewListChange(!isChecked)}
                    >
                        {isChecked ? "Hide List" : "View List"}
                    </button>
                    <button className="btn mx-button" onClick={() => onViewModeChange(ViewMode.Hour)}>
                        Hours
                    </button>
                    <button className="btn mx-button" onClick={() => onViewModeChange(ViewMode.QuarterDay)}>
                        Quarter of Day
                    </button>
                    <button className="btn mx-button" onClick={() => onViewModeChange(ViewMode.HalfDay)}>
                        Half of Day
                    </button>
                    <button className="btn mx-button" onClick={() => onViewModeChange(ViewMode.Day)}>
                        Day
                    </button>
                    <button className="btn mx-button" onClick={() => onViewModeChange(ViewMode.Week)}>
                        Week
                    </button>
                    <button className="btn mx-button" onClick={() => onViewModeChange(ViewMode.Month)}>
                        Month
                    </button>
                    <button className="btn mx-button" onClick={() => onViewModeChange(ViewMode.QuarterYear)}>
                        Quarter
                    </button>
                    <button className="btn mx-button" onClick={() => onViewModeChange(ViewMode.Year)}>
                        Year
                    </button>
                </div>
            )}
        </div>
    );
};
