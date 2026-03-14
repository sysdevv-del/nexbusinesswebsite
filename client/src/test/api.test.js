import { describe, it, expect, vi, afterEach } from "vitest";
import { fetchCategories, fetchApps, fetchApp, fetchBlogPosts, fetchBlogPost } from "@/lib/api";

// Mock global fetch
const mockFetch = vi.fn();
globalThis.fetch = mockFetch;

describe("API Client", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("fetchCategories", () => {
    it("fetches and returns categories array", async () => {
      const mockData = [{ id: 1, name: "Sales", slug: "sales" }];
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      });

      const result = await fetchCategories();
      expect(result).toEqual(mockData);
      expect(mockFetch).toHaveBeenCalledWith("/api/categories");
    });

    it("throws on non-OK response", async () => {
      mockFetch.mockResolvedValueOnce({ ok: false, status: 500 });
      await expect(fetchCategories()).rejects.toThrow("Failed to fetch categories");
    });
  });

  describe("fetchApps", () => {
    it("fetches all apps without params", async () => {
      const mockData = [{ id: 1, name: "NexCRM", slug: "nexcrm" }];
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      });

      const result = await fetchApps();
      expect(result).toEqual(mockData);
      expect(mockFetch).toHaveBeenCalledWith("/api/apps");
    });

    it("constructs query string from params", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve([]),
      });

      await fetchApps({ category: "sales", featured: "true" });
      expect(mockFetch).toHaveBeenCalledWith("/api/apps?category=sales&featured=true");
    });

    it("throws on non-OK response", async () => {
      mockFetch.mockResolvedValueOnce({ ok: false, status: 500 });
      await expect(fetchApps()).rejects.toThrow("Failed to fetch apps");
    });
  });

  describe("fetchApp", () => {
    it("fetches a single app by slug", async () => {
      const mockData = { app: { id: 1, slug: "nexcrm" }, related: [] };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      });

      const result = await fetchApp("nexcrm");
      expect(result).toEqual(mockData);
      expect(mockFetch).toHaveBeenCalledWith("/api/apps/nexcrm");
    });

    it("throws on 404", async () => {
      mockFetch.mockResolvedValueOnce({ ok: false, status: 404 });
      await expect(fetchApp("nonexistent")).rejects.toThrow("Failed to fetch app");
    });
  });

  describe("fetchBlogPosts", () => {
    it("fetches published blog posts", async () => {
      const mockData = [{ id: 1, title: "Test Post", slug: "test-post" }];
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      });

      const result = await fetchBlogPosts();
      expect(result).toEqual(mockData);
      expect(mockFetch).toHaveBeenCalledWith("/api/blog");
    });

    it("passes category filter", async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve([]),
      });

      await fetchBlogPosts({ category: "CRM" });
      expect(mockFetch).toHaveBeenCalledWith("/api/blog?category=CRM");
    });
  });

  describe("fetchBlogPost", () => {
    it("fetches a single blog post by slug", async () => {
      const mockData = { id: 1, title: "Test Post", slug: "test-post" };
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      });

      const result = await fetchBlogPost("test-post");
      expect(result).toEqual(mockData);
      expect(mockFetch).toHaveBeenCalledWith("/api/blog/test-post");
    });
  });
});
