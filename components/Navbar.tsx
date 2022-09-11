import Icon from "@mdi/react";
interface Menu {
  label: string;
  value: string;
  icon: any;
  content: any;
}
interface NavbarProps {
  menus: Menu[];
  currentPage: string;
  setCurrentPage(value: string): void;
}
interface NavbarItemProps {
  navbarItem: Menu;
}
function Navbar(props: NavbarProps) {
  const { menus, currentPage, setCurrentPage } = props;
  const isActive = (page: string) => {
    return page === currentPage;
  };

  const NavbarItem = (props: NavbarItemProps) => {
    const { navbarItem } = props;
    return (
      <div
        id={"navbar-item-" + navbarItem.value}
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

  const goToPage = (index: string) => {
    setCurrentPage(index);
    const currentPage = document.querySelector(`#page-${index}`);
    if (currentPage) {
      currentPage.scrollIntoView({
        behavior: "smooth",
      });
      currentPage.scrollTop = 0;
    }
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
