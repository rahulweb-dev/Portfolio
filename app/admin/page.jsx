'use client';

import { useEffect, useState } from 'react';

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      setLeads(data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteLead = async (id) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    try {
      const res = await fetch(`/api/contact?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setLeads(leads.filter((lead) => lead._id !== id));
      } else {
        alert('Failed to delete');
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-12">
        <h1 className="text-3xl font-bold mb-6 text-center">All Leads</h1>

        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : leads.length === 0 ? (
          <p className="text-center text-gray-600">No leads found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border text-sm text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border">ID</th>
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">Phone</th>
                  <th className="py-2 px-4 border">Message</th>
                  <th className="py-2 px-4 border">Date</th>
                  <th className="py-2 px-4 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead._id} className="hover:bg-gray-100 border-b">
                    <td className="py-2 px-4 border">{lead._id.slice(-6)}</td>
                    <td className="py-2 px-4 border">{lead.name}</td>
                    <td className="py-2 px-4 border">{lead.email}</td>
                    <td className="py-2 px-4 border">{lead.number}</td>
                    <td className="py-2 px-4 border">{lead.message}</td>
                    <td className="py-2 px-4 border">
                      {new Date(lead.createdAt || lead._id?.toString().substring(0, 8)).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border text-red-600 font-semibold cursor-pointer" onClick={() => deleteLead(lead._id)}>
                      Delete
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
