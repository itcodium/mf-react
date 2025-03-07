import { render, screen } from "@testing-library/react";
import { act } from "react"; // Importa act desde react
import Root from "./root.component"; // Asegúrate de que la ruta sea correcta

describe("Root component", () => {
  it("should render the component with the correct name", async () => {
    await act(async () => {
      render(<Root name="Testapp" />);
    });

    // Verifica que el texto "Testapp is mounted!" se encuentra en el documento
    expect(screen.getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });

  it("should display different names when props change", async () => {
    await act(async () => {
      render(<Root name="NewApp" />);
    });

    // Verifica que el componente renderiza con un nombre diferente
    expect(screen.getByText(/NewApp is mounted!/i)).toBeInTheDocument();
  });
});
