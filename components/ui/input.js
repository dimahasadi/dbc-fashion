export function Input({ ...props }) {
  return (
    <input
      className="border border-neutral-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-full"
      {...props}
    />
  );
}
