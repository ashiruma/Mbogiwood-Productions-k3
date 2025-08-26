// Server helper to fetch from your Django backend.
// Usage: const data = await djangoFetch('/api/films/');
export async function djangoFetch(path: string, opts?: RequestInit) {
  const base = process.env.DJANGO_API_URL;
  if (!base) {
    throw new Error("DJANGO_API_URL is not configured in the environment.");
  }

  // Ensure path begins with a single slash
  const p = path.startsWith("/") ? path : `/${path}`;
  const url = `${base.replace(/\/$/, "")}${p}`;

  const headers: Record<string, string> = {
    "Accept": "application/json",
  };

  // Optional token (keep server-only - do NOT use NEXT_PUBLIC_)
  const token = process.env.DJANGO_API_TOKEN;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method: opts?.method ?? "GET",
    headers: { ...headers, ...(opts?.headers as Record<string,string> ?? {}) },
    body: opts?.body,
    // You can tune revalidation as appropriate
    next: { revalidate: 60 },
  });

  const contentType = res.headers.get("content-type") || "";
  let data: any;
  if (contentType.includes("application/json")) {
    data = await res.json();
  } else {
    // If backend returns text/html or other, preserve raw text
    data = await res.text();
  }

  if (!res.ok) {
    const err: any = new Error(`Django fetch failed: ${res.status} ${res.statusText}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data;
}
