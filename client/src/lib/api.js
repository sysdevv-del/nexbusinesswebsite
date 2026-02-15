const API_BASE = "/api";

export async function fetchCategories() {
  const res = await fetch(`${API_BASE}/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function fetchApps(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${API_BASE}/apps${query ? `?${query}` : ""}`);
  if (!res.ok) throw new Error("Failed to fetch apps");
  return res.json();
}

export async function fetchApp(slug) {
  const res = await fetch(`${API_BASE}/apps/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch app");
  return res.json();
}
