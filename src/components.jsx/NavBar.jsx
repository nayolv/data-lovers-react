import logo from "../images/logo.png";
import {
  IconLogo,
  IconLogoMobile,
  Menu,
  MenuItem,
  MenuItemLink,
  NavbarContainer,
  NavbarWrapper,
} from "./NavBar.elements";
import SearchInput from "./SearchInput";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({
  changeClick,
  click,
  search,
  handleChange,
  sortAlphabeticDataAsc,
  sortAlphabeticDataDesc,
  sortNumericDataAsc,
  sortNumericDataDesc,
}) => {
  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogo>
            <img src={logo} alt="totoro" id="totoro" />
            <span>Ghibli project</span>
          </IconLogo>
          <IconLogoMobile onClick={changeClick}>
            {click ? <FaTimes /> : <FaBars />}
          </IconLogoMobile>
          <Menu click={click}>
            <SearchInput
              id="search-input"
              search={search}
              handleChange={handleChange}
            />
            <MenuItem
              onClick={() => {
                sortAlphabeticDataAsc();
              }}
            >
              <MenuItemLink>TITLE A-Z</MenuItemLink>
            </MenuItem>
            <MenuItem
              onClick={() => {
                sortAlphabeticDataDesc();
              }}
            >
              <MenuItemLink>TITLE Z-A</MenuItemLink>
            </MenuItem>
            <MenuItem
              data-my-value={"score"}
              onClick={(e) => {
                sortNumericDataAsc(e.currentTarget.dataset.myValue);
              }}
            >
              <MenuItemLink>HIGH SCORE</MenuItemLink>
            </MenuItem>
            <MenuItem
              data-my-value={"scoreDesc"}
              onClick={(e) => {
                sortNumericDataDesc(e.currentTarget.dataset.myValue);
              }}
            >
              <MenuItemLink>LOW SCORE</MenuItemLink>
            </MenuItem>
            <MenuItem
              data-my-value={"release"}
              onClick={(e) => {
                sortNumericDataAsc(e.currentTarget.dataset.myValue);
              }}
            >
              <MenuItemLink>RECENT RELEASE</MenuItemLink>
            </MenuItem>
            <MenuItem
              data-my-value={"releaseDesc"}
              onClick={(e) => {
                sortNumericDataDesc(e.currentTarget.dataset.myValue);
              }}
            >
              <MenuItemLink>OLD RELEASE</MenuItemLink>
            </MenuItem>
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};

export default NavBar;