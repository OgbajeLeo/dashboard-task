import React from "react";

interface ProgressBarProps {
  progress: number; // Percentage value for the progress
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // Calculate the width of the progress bar based on the percentage
  const progressWidth = (progress / 100) * 191; // 191px is the full width of the progress bar

  return (
    <div className="w-[191px] h-4 relative">
      {/* Background of the progress bar */}
      <div className="w-[191px] h-1 left-0 top-[6px] absolute">
        <div className="w-[191px] h-1 left-0 top-0 absolute bg-[#4a4a4a] rounded-[100px]" />
        {/* Filled portion of the progress bar */}
        <div
          className="h-1 absolute bg-[#a7fc00] rounded-[100px]"
          style={{ width: `${progressWidth}px` }}
        />
      </div>

      {/* Circle indicator */}
      <div
        className="w-4 h-4 absolute"
        style={{ left: `${progressWidth - 4}px` }} // Position the circle based on progress
      >
        <div className="w-4 h-4 absolute bg-white rounded-full" />
        <div className="w-2 h-2 absolute left-[4px] top-[4px] bg-[#181818] rounded-full" />
      </div>
    </div>
  );
};

export default ProgressBar;
