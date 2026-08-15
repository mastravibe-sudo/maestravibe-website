// components/site/ProjectMedia.tsx
// Renders the "3D Renders" and "2D Technical Drawings" sections on a
// project detail page, and provides a zoomable/pannable lightbox when
// any image is clicked — scroll or pinch to zoom, drag to pan, arrow
// keys or on-screen buttons to move between images, Escape to close.
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

type LightboxItem = { src: string; label: string; type?: 'image' | 'pdf'; thumb?: string };

export default function ProjectMedia({
  gallery,
  drawings,
  title,
}: {
  gallery: string[];
  drawings: { label: string; src: string; type?: 'image' | 'pdf'; thumb?: string }[];
  title: string;
}) {
  const galleryItems: LightboxItem[] = gallery.map((src, i) => ({
    src,
    label: `${title} — 3D render ${i + 1}`,
  }));
  const drawingItems: LightboxItem[] = drawings.map(d => ({ src: d.src, label: d.label, type: d.type, thumb: d.thumb }));

  const [activeList, setActiveList] = useState<LightboxItem[] | null>(null);
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ dragging: boolean; startX: number; startY: number; offX: number; offY: number }>({
    dragging: false,
    startX: 0,
    startY: 0,
    offX: 0,
    offY: 0,
  });
  const pinchRef = useRef<{ dist: number; scale: number } | null>(null);

  const resetZoom = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const open = (list: LightboxItem[], i: number) => {
    setActiveList(list);
    setIndex(i);
    resetZoom();
  };

  const close = () => setActiveList(null);

  const go = useCallback(
    (delta: number) => {
      if (!activeList) return;
      setIndex(prev => (prev + delta + activeList.length) % activeList.length);
      resetZoom();
    },
    [activeList]
  );

  // Keyboard controls
  useEffect(() => {
    if (!activeList) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeList, go]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setScale(prev => Math.min(5, Math.max(1, prev - e.deltaY * 0.0015 * prev)));
  };

  const onDoubleClick = () => {
    setScale(prev => (prev > 1 ? 1 : 2.5));
    setOffset({ x: 0, y: 0 });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    dragRef.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      offX: offset.x,
      offY: offset.y,
    };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    setOffset({ x: dragRef.current.offX + dx, y: dragRef.current.offY + dy });
  };
  const onMouseUp = () => {
    dragRef.current.dragging = false;
  };

  // Basic touch support: one-finger pan when zoomed, two-finger pinch to zoom
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const [a, b] = [e.touches[0], e.touches[1]];
      const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      pinchRef.current = { dist, scale };
    } else if (e.touches.length === 1 && scale > 1) {
      dragRef.current = {
        dragging: true,
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        offX: offset.x,
        offY: offset.y,
      };
    }
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchRef.current) {
      const [a, b] = [e.touches[0], e.touches[1]];
      const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      const ratio = dist / pinchRef.current.dist;
      setScale(Math.min(5, Math.max(1, pinchRef.current.scale * ratio)));
    } else if (e.touches.length === 1 && dragRef.current.dragging) {
      const dx = e.touches[0].clientX - dragRef.current.startX;
      const dy = e.touches[0].clientY - dragRef.current.startY;
      setOffset({ x: dragRef.current.offX + dx, y: dragRef.current.offY + dy });
    }
  };
  const onTouchEnd = () => {
    dragRef.current.dragging = false;
    pinchRef.current = null;
  };

  return (
    <>
      {/* 3D Renders */}
      {galleryItems.length > 0 && (
        <section className="bg-white px-6 pt-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
                Visualization
              </span>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">3D Renders</h2>
              <p className="mt-2 max-w-xl text-sm text-gray-600">Click any image to zoom in.</p>
            </Reveal>
            <div className="mt-10 space-y-8 pb-20">
              {galleryItems.map((item, i) => (
                <Reveal key={item.src} delay={i * 100}>
                  <button
                    onClick={() => open(galleryItems, i)}
                    className="block w-full cursor-zoom-in"
                    aria-label={`Open ${item.label}`}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="h-[420px] w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-[1.01] lg:h-[600px]"
                    />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2D Technical Drawings */}
      {drawingItems.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8942e]">
                Documentation
              </span>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">2D Technical Drawings</h2>
              <p className="mt-2 max-w-xl text-sm text-gray-600">
                Sample sheets from the CAD documentation package. Click any drawing to zoom in.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {drawingItems.map((item, i) => (
                <Reveal key={item.src} delay={i * 100}>
                  <button
                    onClick={() => open(drawingItems, i)}
                    className="gold-glow-hover group block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition"
                  >
                    <div className="border-b border-gray-100 bg-white p-2">
                      <img
                        src={item.thumb ?? item.src}
                        alt={item.label}
                        className="h-72 w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="flex items-center justify-between px-5 py-4">
                      <span className="text-sm font-semibold text-gray-900">{item.label}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#b8942e]">
                        Zoom ↗
                      </span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {activeList && (
        <div
          className="fixed inset-0 z-[2000] flex flex-col bg-black/95"
          onClick={e => {
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 text-white sm:px-6">
            <span className="text-sm font-medium">
              {activeList[index].label}
              <span className="ml-2 text-gray-400">
                {index + 1} / {activeList.length}
              </span>
            </span>
            <div className="flex items-center gap-3">
              {activeList[index].type !== 'pdf' && (
                <>
                  <button
                    onClick={() => setScale(s => Math.max(1, s - 0.5))}
                    className="rounded-full border border-white/20 px-3 py-1 text-sm hover:bg-white/10"
                    aria-label="Zoom out"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-xs text-gray-300">{Math.round(scale * 100)}%</span>
                  <button
                    onClick={() => setScale(s => Math.min(5, s + 0.5))}
                    className="rounded-full border border-white/20 px-3 py-1 text-sm hover:bg-white/10"
                    aria-label="Zoom in"
                  >
                    +
                  </button>
                </>
              )}
              <button
                onClick={close}
                className="ml-2 rounded-full border border-white/20 px-3 py-1 text-sm hover:bg-white/10"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Image stage */}
          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden"
            onWheel={activeList[index].type === 'pdf' ? undefined : onWheel}
            onMouseDown={activeList[index].type === 'pdf' ? undefined : onMouseDown}
            onMouseMove={activeList[index].type === 'pdf' ? undefined : onMouseMove}
            onMouseUp={activeList[index].type === 'pdf' ? undefined : onMouseUp}
            onMouseLeave={activeList[index].type === 'pdf' ? undefined : onMouseUp}
            onDoubleClick={activeList[index].type === 'pdf' ? undefined : onDoubleClick}
            onTouchStart={activeList[index].type === 'pdf' ? undefined : onTouchStart}
            onTouchMove={activeList[index].type === 'pdf' ? undefined : onTouchMove}
            onTouchEnd={activeList[index].type === 'pdf' ? undefined : onTouchEnd}
          >
            {activeList[index].type === 'pdf' ? (
              // Native browser PDF viewer — vector-based, stays crisp at
              // any zoom level using the browser's own zoom controls.
              <iframe
                src={activeList[index].src}
                title={activeList[index].label}
                className="h-full w-full bg-white"
              />
            ) : (
              <img
                src={activeList[index].src}
                alt={activeList[index].label}
                draggable={false}
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                  cursor: scale > 1 ? 'grab' : 'zoom-in',
                }}
                className="max-h-full max-w-full select-none object-contain transition-transform duration-100"
              />
            )}

            {/* Prev / Next */}
            {activeList.length > 1 && (
              <>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white hover:bg-black/60"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    go(1);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white hover:bg-black/60"
                  aria-label="Next image"
                >
                  →
                </button>
              </>
            )}
          </div>

          <p className="px-6 pb-4 text-center text-xs text-gray-500">
            {activeList[index].type === 'pdf'
              ? 'Use your browser\u2019s PDF zoom controls for a crisp, high-resolution view.'
              : 'Scroll or pinch to zoom · Drag to pan · Double-click to reset'}
          </p>
        </div>
      )}
    </>
  );
}