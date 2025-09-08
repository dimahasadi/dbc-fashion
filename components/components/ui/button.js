export function Button({ children, ...props }) {
  return (
    <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-all" {...props}>
      {children}
    </button>
  );
}
