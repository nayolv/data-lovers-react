import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Welcome from "./Welcome";

test("Renders content", () => {
    const component = render(<Welcome />);
    component.getByAltText("totoro-logo")
})