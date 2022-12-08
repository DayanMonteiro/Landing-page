import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Footer } from ".";

describe("<Footer />", () => {
  it("should render", () => {
    const { container } = renderTheme(<Footer footerHtml={"<h1>Olá</h1>"} />);
    expect(screen.getByRole("heading", { name: "Olá" })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <footer
          class="sc-dkrFOg kpCufr"
        >
          <div
            class="sc-gswNZR cnlyNP"
          >
            <p
              class="sc-bcXHqe cfnKmM"
            >
              <h1>
                Olá
              </h1>
            </p>
          </div>
        </footer>
      </div>
    `);
  });
});
