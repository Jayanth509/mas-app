export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="app-shell">{children}</div>
    </div>
  );
}
