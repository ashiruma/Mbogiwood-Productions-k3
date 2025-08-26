import { djangoFetch } from "@/lib/django";

function renderKeyValue(obj: any) {
  if (obj == null) return <div className="text-gray-500">null</div>;
  if (typeof obj !== "object") {
    return <div className="text-sm text-[#3B2F2F]">{String(obj)}</div>;
  }
  return (
    <div className="space-y-1">
      {Object.entries(obj).map(([k, v]) => (
        <div key={k} className="flex items-start gap-2">
          <div className="w-36 text-sm text-gray-600">{k}</div>
          <div className="flex-1 text-sm text-[#3B2F2F]">{String(typeof v === "object" ? JSON.stringify(v) : v)}</div>
        </div>
      ))}
    </div>
  );
}

export default async function JobsPage() {
  let data: any = null;
  let error: string | null = null;

  try {
    data = await djangoFetch("/api/jobs/");
  } catch (err: any) {
    console.error("Error fetching jobs from Django:", err);
    error = err?.message || String(err);
  }

  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Jobs & Opportunities</h1>

        {error && <div className="mb-6 text-red-500">Could not load jobs from Django API. {error}</div>}

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Raw API response</h2>
          <div className="bg-gray-100 p-4 rounded border border-gray-200 overflow-auto">
            <pre className="whitespace-pre-wrap text-sm">{data ? JSON.stringify(data, null, 2) : "No data returned"}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Job listings</h2>
          {Array.isArray(data) ? (
            <ul className="space-y-4">
              {data.map((job: any) => (
                <li key={job.id ?? JSON.stringify(job)} className="p-4 rounded-md bg-white shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-semibold text-[#3B2F2F]">{job.title ?? job.position ?? "Untitled"}</div>
                      <div className="text-sm text-gray-500">{job.company ?? ""} — {job.location ?? ""}</div>
                      <div className="mt-2 text-sm text-gray-700">{renderKeyValue(job)}</div>
                    </div>
                    <div className="text-sm text-[#4CAF50]">{job.type ?? "Apply"}</div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-600">Response is not an array. See raw JSON above.</div>
          )}
        </section>
      </main>
    </div>
  );
}
