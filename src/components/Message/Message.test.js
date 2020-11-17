import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Message from "./Message";

import { MESSAGES } from "../../utils/mocks";

test("renders a single message", () => {
  const [{ content, author }] = MESSAGES;
  render(<Message content={content} author={author} />);
  expect(screen.getByText(content)).toBeInTheDocument();
  expect(screen.getByText(author)).toBeInTheDocument();
});
