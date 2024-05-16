export const Tooltip = ({ children, message }) => {
    return (
      <div className="flex w-52 group relative">
        {children}
        <span className="absolute mt-12 rounded bg-red-700 p-2 text-xs text-white font-Nunito scale-0 group-hover:scale-100">
          {message}
        </span>
      </div>
    );
  };