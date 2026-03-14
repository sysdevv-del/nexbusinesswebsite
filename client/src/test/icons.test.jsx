import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { DynamicIcon } from "@/lib/icons";

describe("DynamicIcon", () => {
  it("renders a known icon by name", () => {
    const { container } = render(<DynamicIcon name="Target" size={20} />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("renders a fallback div for unknown icon names", () => {
    const { container } = render(<DynamicIcon name="NonExistentIcon" />);
    const svg = container.querySelector("svg");
    expect(svg).not.toBeInTheDocument();
    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
  });

  it("passes props through to the icon component", () => {
    const { container } = render(<DynamicIcon name="Search" size={32} data-testid="icon" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
});
