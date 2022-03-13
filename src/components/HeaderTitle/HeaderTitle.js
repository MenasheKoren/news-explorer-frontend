export function HeaderTitle({ dropdownMenuOpen, mobile }) {
  return (
    <h2
      className="header__title"
      style={
        dropdownMenuOpen && mobile ? { color: "white", position: "fixed" } : {}
      }
    >
      NewsExplorer
    </h2>
  );
}
