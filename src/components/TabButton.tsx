import React from "react";

type TabButtonProps = {
  onSelect: () => void;
  isSelected: boolean;
  children: string;
};

const TabButton: React.FC<TabButtonProps> = (props) => {
  return (
    <li>
      <button
        className={props.isSelected ? "active" : undefined}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
  );
};

export default TabButton;
