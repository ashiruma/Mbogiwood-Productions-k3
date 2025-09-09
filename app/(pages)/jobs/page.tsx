import JobCard from "@/components/JobCard";
import apiClient from "@/lib/api";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  job_type: string;
  slug: string;
};

async function getJobs(): Promise<Job[]> {
  try {
    const response = await apiClient.get("/api/jobs/"); // 🔑 Django requires trailing slash
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return [];
  }
}

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <main className="container mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Career Opportunities
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join our team and help us empower African narratives.
        </p>
      </div>
      {jobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">
            There are no open positions at the moment. Please check back soon.
          </p>
        </div>
      )}
    </main>
  );
}
