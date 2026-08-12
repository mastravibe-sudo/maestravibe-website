// components/site/CustomersSection.tsx
'use client';

import { useMemo, useState } from 'react';
import { customerData } from '@/lib/site-data';

export default function CustomersSection() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () =>
      customerData.filter(
        c =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.email.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <section id="customers" className="bg-gray-50/50 py-12 antialiased md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-gray-200 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-wider text-[#8da47e] sm:text-3xl">CUSTOMER RECORDS</h2>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row md:justify-start">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search clients..."
              className="w-full rounded-md border border-gray-200 bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:border-[#8da47e] focus:ring-[#8da47e] sm:w-64"
            />
            {/* Same as the original — this button doesn't open a form yet. */}
            <button className="w-full rounded-lg bg-[#8da47e] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#7a8f6d] sm:w-auto">
              + ADD CLIENT
            </button>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="border-b border-gray-200 bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <tr>
                  <th className="px-6 py-4 text-[12px] text-[#8da47e]">Client Name</th>
                  <th className="px-6 py-4 text-[12px] text-[#8da47e]">Email Address</th>
                  <th className="px-6 py-4 text-[12px] text-[#8da47e]">Phone</th>
                  <th className="px-6 py-4 text-[12px] text-[#8da47e]">Last Order</th>
                  <th className="px-6 py-4 text-right text-[12px] text-[#8da47e]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                      No customers match your search.
                    </td>
                  </tr>
                ) : (
                  filtered.map(c => (
                    <tr key={c.email} className="group transition-colors hover:bg-gray-50/80">
                      <td className="px-6 py-4">
                        <div className="font-bold text-gray-900">{c.name}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{c.email}</td>
                      <td className="px-6 py-4 font-mono text-xs text-gray-500">{c.phone}</td>
                      <td className="px-6 py-4 text-gray-600">
                        {new Date(c.lastOrder).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-xs font-bold text-[#8da47e] hover:underline">VIEW PROFILE</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-center text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:text-left">
          <p>
            Showing {filtered.length} active client{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </section>
  );
}