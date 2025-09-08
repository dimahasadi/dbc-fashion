export function Card({ children, ...props }) {
  return (
    <div className="border rounded-xl overflow-hidden bg-white" {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
