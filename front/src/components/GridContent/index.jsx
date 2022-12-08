import P from "prop-types";
import { Heading } from "../Heading";
import { SectionBackground } from "../SectionBackground";
import { TextComponent } from "../TextComponent";
import * as S from "./styles";

export const GridContent = ({
  title,
  html,
  background = false,
  sectionId = "",
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <S.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <S.Html>
          <TextComponent>{html}</TextComponent>
        </S.Html>
      </S.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
