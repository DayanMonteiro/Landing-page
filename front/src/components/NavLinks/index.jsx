import P from "prop-types";
import * as S from "./styles";
import { MenuLink } from "../MenuLink";

export const NavLinks = ({ links = [] }) => {
  return (
    <S.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </S.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    })
  ).isRequired,
};
