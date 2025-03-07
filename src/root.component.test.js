import { render } from "@testing-library/react";
import Root from "./root.component";
jest.mock("./button");
describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
