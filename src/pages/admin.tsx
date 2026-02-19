import React, { useEffect, useState } from "react";

const JSONBIN_BIN_ID = "6996c893ae596e708f369484"; 
const JSONBIN_SECRET_KEY = "$2a$10$yti1izYQ7PKY9IhwxrQiuuIk8TZDdxM6nzYFnduMOvJtKIdyRhBB.";

interface Submission {
  id: number;
  wallet: string;
  method: string;
  value: string;
  timestamp: string;
}

const AdminPage: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<number | null>(null); // track which record is being deleted

  // Fetch submissions from JSONBin
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
          headers: {
            "X-Master-Key": JSONBIN_SECRET_KEY,
          },
        });
        const data = await res.json();
        setSubmissions(data.record.submissions || []);
      } catch (err) {
        console.error("Error fetching JSONBin:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  // Delete a submission
  const handleDelete = async (id: number) => {
    const confirmed = window.confirm("Are you sure you want to delete this submission?");
    if (!confirmed) return;

    setDeletingId(id);

    try {
      const updatedSubmissions = submissions.filter((s) => s.id !== id);

      // PUT the updated array back to JSONBin
      await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": JSONBIN_SECRET_KEY,
        },
        body: JSON.stringify({ submissions: updatedSubmissions }),
      });

      // Update state locally
      setSubmissions(updatedSubmissions);
    } catch (err) {
      console.error("Error deleting submission:", err);
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) return <p>Loading submissions...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {submissions.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Wallet</th>
              <th className="border p-2">Method</th>
              <th className="border p-2">Value</th>
              <th className="border p-2">Timestamp</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s.id} className="text-center">
                <td className="border p-2">{s.id}</td>
                <td className="border p-2">{s.wallet}</td>
                <td className="border p-2">{s.method}</td>
                <td className="border p-2">{s.value}</td>
                <td className="border p-2">{s.timestamp}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(s.id)}
                    disabled={deletingId === s.id}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50"
                  >
                    {deletingId === s.id ? "Deleting..." : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPage;
