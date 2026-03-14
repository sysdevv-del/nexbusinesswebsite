const API_BASE = "/api";

// --- App Endpoints ---

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

// --- Auth ---

export async function adminLogin(password) {
  const res = await fetch(`${API_BASE}/auth/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Invalid credentials");
  }
  return res.json();
}

// --- Blog (Public) ---

export async function fetchBlogPosts(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${API_BASE}/blog${query ? `?${query}` : ""}`);
  if (!res.ok) throw new Error("Failed to fetch blog posts");
  return res.json();
}

export async function fetchBlogPost(slug) {
  const res = await fetch(`${API_BASE}/blog/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch blog post");
  return res.json();
}

// --- Blog (Admin) ---

function authHeaders() {
  const token = localStorage.getItem("admin_token");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function fetchAllBlogPosts() {
  const res = await fetch(`${API_BASE}/blog/admin/all`, { headers: authHeaders() });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function createBlogPost(data) {
  const res = await fetch(`${API_BASE}/blog`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create post");
  return res.json();
}

export async function updateBlogPost(id, data) {
  const res = await fetch(`${API_BASE}/blog/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update post");
  return res.json();
}

export async function deleteBlogPost(id) {
  const res = await fetch(`${API_BASE}/blog/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to delete post");
  return res.json();
}

// --- Contact ---

export async function submitContactForm(data) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Failed to send message");
  }
  return res.json();
}
