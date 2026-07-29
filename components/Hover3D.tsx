export default function Hover3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`hover-3d ${className}`}>
      {children}
      <div></div><div></div><div></div>
      <div></div>
      <div></div>
      <div></div><div></div><div></div>
    </div>
  );
}
