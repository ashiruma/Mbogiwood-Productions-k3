import Link from "next/link";
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

export default async function FilmsPage() {
  let data: any = null;
  let error: string | null = null;

  try {
    data = await djangoFetch("/api/films/");
  } catch (err: any) {
    console.error("Error fetching films from Django:", err);
    error = err?.message || String(err);
  }

  return (
    <div className="min-h-screen bg-white text-[#3B2F2F]">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Films</h1>

        {error && <div className="mb-6 text-red-500">Could not load films from Django API. {error}</div>}

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Raw API response</h2>
          <div className="bg-gray-100 p-4 rounded border border-gray-200 overflow-auto">
            <pre className="whitespace-pre-wrap text-sm">{data ? JSON.stringify(data, null, 2) : "No data returned"}</pre>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Items</h2>
          {Array.isArray(data) ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((item: any) => {
                const id = item?.id ?? item?.pk ?? null;
                const title = item?.title ?? item?.name ?? `Item ${id ?? ""}`;
                const price = item?.price ?? item?.amount ?? null;
                return (
                  <div key={id ?? JSON.stringify(item)} className="bg-white rounded-md shadow p-4">
                    <div className="mb-2">
                      <div className="font-semibold text-lg text-[#3B2F2F]">{title}</div>
                      {price != null && <div className="text-sm text-[#4CAF50] mb-2">KES {price}</div>}
                    </div>

                    <div className="mb-3 text-sm text-gray-700">
                      {renderKeyValue(item)}
                    </div>

                    <div className="flex items-center gap-2">
                      {id ? (
                        <>
                          <Link href={`/movies/${id}`} className="text-[#4CAF50]">View</Link>
                          <Link href={`/purchase/${id}?amount=${price ?? 150}&title=${encodeURIComponent(String(title))}`} className="ml-auto bg-[#4CAF50] text-white px-3 py-1 rounded">
                            Buy
                          </Link>
                        </>
                      ) : (
                        <div className="text-sm text-gray-500">No id available for routing</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-gray-600">Response is not an array. See raw JSON above.</div>
          )}
        </section>
      </main>
    </div>
  );
}