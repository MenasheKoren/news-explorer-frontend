export function HeaderTitle(props) {
  return (
    <h2
      className="header__title"
      style={props.dropdownMenuOpen && props.mobile ? { color: "white" } : {}}
    >
      NewsExplorer
    </h2>
  );
}
