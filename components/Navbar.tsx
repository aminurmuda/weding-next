import Icon from "@mdi/react";

function Navbar({ menus, currentPage, setCurrentPage }) {
  const isActive = (page) => {
    return page === currentPage;
  };

  const NavbarItem = ({ navbarItem }) => {
    return (
      <div
        className={`navbar-item ${
          isActive(navbarItem.value) ? "is-active" : ""
        }`}
        onClick={() => {
          goToPage(navbarItem.value);
        }}
      >
        <div>
          <Icon
            path={navbarItem.icon}
            className={`${isActive(navbarItem.value) ? "scale-up" : ""}`}
            size={1}
          />
          <p className="menu-label">{navbarItem.label}</p>
        </div>
      </div>
    );
  };

  const goToPage = (index) => {
    setCurrentPage(index);
    const currentPage = document.querySelector(`#page-${index}`);
    currentPage.scrollIntoView({
      behavior: "smooth",
    });
    currentPage.scrollTop = 0;
  };

  return (
    <div className="navbar-container">
      <div className="float">
        <div className="scroll-bar">
          <div className="navbar">
            {menus.map((item) => {
              return <NavbarItem key={item.value} navbarItem={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
