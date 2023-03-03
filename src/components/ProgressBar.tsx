interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const progressStyle = {
    width: `${progress}%`,
  };
  return (
    <div className={"h-3 rounded-xl w-full bg-green-600 mt-5"}>
      <div
        style={progressStyle}
        aria-valuenow={progress}
        role="progressbar"
        className={"h-3 rounded-xl w-full bg-white"}
      ></div>
    </div>
  );
}
