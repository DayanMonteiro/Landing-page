import linksMock from "../../components/NavLinks/mock";
import mock from "./mock";
import { GridText } from "../../components/GridText";
import gridMock from "../../components/GridText/mock";

export default {
  title: "Templates/Base",
  // eslint-disable-next-line no-undef
  component: Base,
  args: {
    children: (
      <>
        <GridText {...gridMock} background />
        <GridText {...gridMock} />
        <GridText {...gridMock} background />
        <GridText {...gridMock} />
        <GridText {...gridMock} background />
      </>
    ),
    links: linksMock,
    logoData: {
      text: "Logo",
      link: "#",
    },
    footerHtml: "<p>Teste de footer</p>",
    ...mock,
  },
};
