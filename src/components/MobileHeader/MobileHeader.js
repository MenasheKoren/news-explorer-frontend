export function MobileHeader({ location, mobile, onOpenDropdownClick }) {
  return (
    <>
      {mobile && (
        <button
          className="nav__dropdown-button button"
          onClick={onOpenDropdownClick}
        >
          <svg
            className="dropdown__svg"
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={
                location.pathname === "/saved-news"
                  ? {
                      fill: "black",
                    }
                  : {
                      fill: "white",
                    }
              }
              d="M4 8h16v2H4zM4 14h16v2H4z"
            />
          </svg>
        </button>
      )}
    </>
  );
}
