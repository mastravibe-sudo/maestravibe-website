// components/site/ProductInventory.tsx
'use client';

import { useMemo, useState } from 'react';
import { dummyProducts, type InventoryProduct, type InventoryCategory } from '@/lib/site-data';
import { PlusIco, SearchIco, GridIco, ListIco } from './icons';

type SortBy = 'name' | 'price' | 'quantity';
type FilterBy = 'all' | InventoryCategory;

function statusStyles(status: InventoryProduct['status']) {
  if (status === 'In Stock') return 'bg-green-100 text-green-700';
  if (status === 'Low Stock') return 'bg-amber-100 text-amber-700';
  return 'bg-red-100 text-red-700';
}

export default function ProductInventory() {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('name');
  const [filterBy, setFilterBy] = useState<FilterBy>('all');
  const [layout, setLayout] = useState<'table' | 'grid'>('table');

  const filtered = useMemo(() => {
    return dummyProducts
      .filter(
        p =>
          p.name.toLowerCase().includes(search.toLowerCase()) &&
          (filterBy === 'all' || p.category === filterBy)
      )
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return sortBy === 'price' ? a.price - b.price : a.quantity - b.quantity;
      });
  }, [search, sortBy, filterBy]);

  return (
    <section id="products" className="bg-gray-50 px-5 py-20">
      <div className="mx-auto max-w-6xl px-1">
        <div className="mb-8 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <h2 className="text-2xl font-semibold tracking-widest text-[#8da47e] md:text-4xl">
            PRODUCT INVENTORY
          </h2>
          {/* NOTE: same as the original static site — this button doesn't open
              a form yet. Wire it up to your Add Product flow when ready. */}
          <button className="flex items-center gap-2 rounded-md bg-[#8da47e] px-6 py-3 font-bold text-white shadow-md transition-all hover:opacity-90">
            <PlusIco /> Add New Product
          </button>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 rounded-xl border border-gray-100 bg-white p-4 md:justify-between">
          <div className="relative min-w-[280px] flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIco />
            </span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search blueprint or product..."
              className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-12 pr-4 text-sm outline-none transition-all focus:border-[#8da47e]"
            />
          </div>

          <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortBy)}
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="quantity">Sort by Stock</option>
            </select>

            <select
              value={filterBy}
              onChange={e => setFilterBy(e.target.value as FilterBy)}
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none"
            >
              <option value="all">All Categories</option>
              <option value="Design">Design</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
            </select>

            <button
              onClick={() => setLayout(l => (l === 'table' ? 'grid' : 'table'))}
              title={layout === 'table' ? 'Switch to grid view' : 'Switch to table view'}
              className="rounded-lg bg-gray-900 p-2.5 text-white transition-colors hover:bg-[#8da47e]"
            >
              {layout === 'table' ? <GridIco /> : <ListIco />}
            </button>
          </div>
        </div>

        {layout === 'table' ? (
          <div className="overflow-hidden overflow-x-auto rounded-xl border border-gray-100 bg-white">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="px-6 py-4 text-xl font-bold uppercase tracking-widest text-[#8da47e]">Product</th>
                  <th className="px-6 py-4 text-xl font-bold uppercase tracking-widest text-[#8da47e]">Category</th>
                  <th className="px-6 py-4 text-xl font-bold uppercase tracking-widest text-[#8da47e]">Stock</th>
                  <th className="px-6 py-4 text-xl font-bold uppercase tracking-widest text-[#8da47e]">Price</th>
                  <th className="px-6 py-4 text-right text-xl font-bold uppercase tracking-widest text-[#8da47e]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                      No products match your search.
                    </td>
                  </tr>
                ) : (
                  filtered.map(p => (
                    <tr key={p.id} className="transition-colors hover:bg-gray-50">
                      <td className="flex items-center gap-3 px-6 py-4">
                        <img src={p.image} alt={p.name} className="h-10 w-10 rounded object-cover shadow-sm" />
                        <span className="font-medium text-gray-800">{p.name}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{p.category}</td>
                      <td className="px-6 py-4">
                        <span className={`rounded px-2 py-1 text-[10px] font-bold uppercase tracking-tighter ${statusStyles(p.status)}`}>
                          {p.status} ({p.quantity})
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold">${p.price.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="mr-3 text-sm font-medium text-[#8da47e] hover:underline">Edit</button>
                        <button className="text-sm text-red-400 transition-colors hover:text-red-600">Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.length === 0 ? (
              <div className="col-span-full rounded-xl border-2 border-dashed border-gray-200 py-16 text-center text-gray-400">
                No products match your search.
              </div>
            ) : (
              filtered.map(p => (
                <div key={p.id} className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <img src={p.image} alt={p.name} className="h-40 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="mb-2 font-bold text-gray-900">{p.name}</h3>
                    <div className="mb-4 text-xs uppercase text-gray-400">{p.category}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-[#8da47e]">${p.price.toFixed(2)}</span>
                      <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${statusStyles(p.status)}`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}