import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";

// Test component that exposes LanguageContext values
function TestConsumer() {
  const { lang, t, setLang } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="heroTitle">{t("heroTitle")}</span>
      <span data-testid="notFoundTitle">{t("notFoundTitle")}</span>
      <button data-testid="switchLang" onClick={() => setLang(lang === "EN" ? "ID" : "EN")}>
        Toggle
      </button>
    </div>
  );
}

describe("LanguageContext", () => {
  it("defaults to English", () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );

    expect(screen.getByTestId("lang").textContent).toBe("EN");
  });

  it("returns translated text for known keys", () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );

    const title = screen.getByTestId("heroTitle").textContent;
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
  });

  it("switches language to Indonesian", () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );

    fireEvent.click(screen.getByTestId("switchLang"));
    expect(screen.getByTestId("lang").textContent).toBe("ID");
  });

  it("returns key name when translation is missing", () => {
    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    );

    // t() should return the key itself if not found
    const TestMissing = () => {
      const { t } = useLanguage();
      return <span data-testid="missing">{t("thisKeyDoesNotExist")}</span>;
    };

    const { rerender } = render(
      <LanguageProvider>
        <TestMissing />
      </LanguageProvider>
    );

    expect(screen.getByTestId("missing").textContent).toBe("thisKeyDoesNotExist");
  });
});
