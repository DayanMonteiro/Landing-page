import { mapMenu } from "./map-menu";
import { mapSections } from "./map-sections";

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text = "",
      slug = "",
      title = "",
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml: footer_text,
      slug: slug,
      title: title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};

// const { inspect } = require("util");
// const dados = require("./dados.json");
// console.log(inspect(mapData(dados), null, null, true));
