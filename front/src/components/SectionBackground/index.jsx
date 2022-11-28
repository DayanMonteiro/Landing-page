import P from "prop-types";
import { SectionContainer } from "../SectionContainer";
import * as S from "./styles";

export const SectionBackground = ({
  children,
  background = false,
  sectionId = "",
}) => {
  return (
    <S.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </S.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string,
};
