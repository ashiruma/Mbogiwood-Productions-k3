type Job = {
  id: string;
  title: string;
  location?: string;
  type?: string;
  company?: string;
};

async function fetchJobs(): Promise<Job[]> {
  const base = process.env.DJANGO_API_URL;
  if (!base) throw new Error("DJANGO_API_URL is not configured.");
  const res = await fetch(`${base.replace(/\/$/, "")}/api/jobs/`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Failed to fetch jobs: ${res.status}`);
  return (await res.json()) as Job[];
}

export default async function JobsPage() {
  let jobs: Job[] = [];
  let error: string | null = null;

  try {
    jobs = await fetchJobs();
  } catch (err: any) {
    console.error("Error fetching jobs:", err);
    error = err.message || String(err);
  }

  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Jobs & Opportunities</h1>

        {error && <div className="mb-6 text-red-500">Could not load jobs from the API. {error}</div>}

        <ul className="space-y-4">
          {jobs.length === 0 && !error && <div className="text-gray-600">No job postings available.</div>}
          {jobs.map((job) => (
            <li key={job.id} className="p-4 rounded-md bg-white shadow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{job.title}</div>
                  <div className="text-sm text-gray-500">{job.company ?? ""} — {job.location ?? ""}</div>
                </div>
                <div className="text-sm text-[#4CAF50]">{job.type ?? "Apply"}</div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
