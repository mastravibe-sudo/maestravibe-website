// components/site/ContactSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

const MAX_FILES = 5;
const MAX_TOTAL_MB = 15; // Gmail allows ~25 MB per email (attachments grow ~33% when encoded)
const MAX_TOTAL_BYTES = MAX_TOTAL_MB * 1024 * 1024;
const ALLOWED_EXT = ['jpg', 'jpeg', 'png', 'webp', 'pdf', 'doc', 'docx', 'dwg'];
const CONTACT_EMAIL = 'maestraarch@gmail.com';

const fieldClass =
  'mt-2 block w-full rounded-lg border border-gray-300 bg-white px-3.5 py-3 text-base text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-[#d4af37] focus:outline-none focus:ring-4 focus:ring-[#d4af37]/25';

const labelClass = 'block text-sm font-medium text-gray-800';

const formatSize = (bytes: number) =>
  bytes < 1024 * 1024
    ? `${Math.max(1, Math.round(bytes / 1024))} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

export default function ContactSection() {
  const successRef = useRef<HTMLDivElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState('');
  const [dragging, setDragging] = useState(false);

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);

  // Move focus to the confirmation so screen-reader and keyboard users notice it
  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  const addFiles = (picked: File[]) => {
    if (picked.length === 0) return;

    const next = [...files];
    for (const f of picked) {
      if (!next.some((x) => x.name === f.name && x.size === f.size)) next.push(f);
    }

    if (next.length > MAX_FILES) {
      setFileError(`You can attach up to ${MAX_FILES} files.`);
      return;
    }

    for (const f of next) {
      const ext = f.name.split('.').pop()?.toLowerCase() ?? '';
      if (!ALLOWED_EXT.includes(ext)) {
        setFileError(`"${f.name}" can't be attached. Use ${ALLOWED_EXT.join(', ')}.`);
        return;
      }
    }

    if (next.reduce((sum, f) => sum + f.size, 0) > MAX_TOTAL_BYTES) {
      setFileError(`Files are too large. Keep the total under ${MAX_TOTAL_MB} MB.`);
      return;
    }

    setFileError('');
    setFiles(next);
  };

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = Array.from(e.target.files ?? []);
    e.target.value = ''; // lets the same file be picked again later
    addFiles(picked);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setFileError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setErrorMsg('');

    const src = new FormData(e.currentTarget);
    const fd = new FormData();
    fd.append('firstName', String(src.get('first-name') ?? ''));
    fd.append('lastName', String(src.get('last-name') ?? ''));
    fd.append('company', String(src.get('company') ?? ''));
    fd.append('email', String(src.get('email') ?? ''));
    fd.append('message', String(src.get('message') ?? ''));
    files.forEach((f) => fd.append('files', f));

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: fd });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          res.status === 413
            ? `Your files are too large to upload here. Try fewer or smaller files, or email them to ${CONTACT_EMAIL}.`
            : res.status === 400 && data?.error
              ? data.error
              : `Your message wasn't sent. Check your connection and try again, or email ${CONTACT_EMAIL} directly.`
        );
        return;
      }

      setFiles([]);
      setFileError('');
      setSent(true);
    } catch {
      setErrorMsg(
        `Your message wasn't sent. Check your connection and try again, or email ${CONTACT_EMAIL} directly.`
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 lg:grid lg:grid-cols-5">
        {/* ---------- Left: brand panel ---------- */}
        <div className="flex flex-col gap-10 bg-[#05070d] p-8 text-white sm:p-10 lg:col-span-2 lg:justify-between lg:p-12">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Tell us about your project
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-gray-300">
              Share a few details and any reference images you have. We&apos;ll reply to the email
              address you provide.
            </p>

            <h3 className="mt-10 text-sm font-semibold text-white">Helpful to include</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-300">
              {[
                'The type of project and where it is',
                'Approximate size, budget and timeline',
                'Photos, sketches or plans you like',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-[#d4af37]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-sm text-gray-400">Prefer to write directly?</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-1 inline-block rounded text-base font-medium text-[#d4af37] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4af37]/40"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* ---------- Right: form / confirmation ---------- */}
        <div className="p-6 sm:p-10 lg:col-span-3 lg:p-12">
          {sent ? (
            <div
              ref={successRef}
              tabIndex={-1}
              role="status"
              className="flex h-full min-h-[22rem] flex-col items-start justify-center focus:outline-none"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37]/15">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-[#8a6a12]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-gray-900">Message sent</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-gray-600">
                Thank you for contacting Maestra Arch. We&apos;ll reply to the email address you entered.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4af37]/40"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className={labelClass}>
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className={labelClass}>
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    required
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="company" className={labelClass}>
                    Company <span className="font-normal text-gray-500">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>
                    Your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="e.g. A two-storey family house, around 200 m², modern design with 3D visuals."
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                {/* ---------- File upload ---------- */}
                <div className="sm:col-span-2">
                  <span className={labelClass}>
                    Reference files <span className="font-normal text-gray-500">(optional)</span>
                  </span>

                  <input
                    id="files"
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png,.webp,.pdf,.doc,.docx,.dwg"
                    onChange={handleFilesChange}
                    aria-describedby="files-hint"
                    className="peer sr-only"
                  />
                  <label
                    htmlFor="files"
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragging(true);
                    }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragging(false);
                      addFiles(Array.from(e.dataTransfer.files));
                    }}
                    className={`mt-2 flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed px-4 py-7 text-center transition-colors peer-focus-visible:ring-4 peer-focus-visible:ring-[#d4af37]/40 ${
                      dragging
                        ? 'border-[#d4af37] bg-[#d4af37]/10'
                        : 'border-gray-300 hover:border-[#d4af37] hover:bg-gray-50'
                    }`}
                  >
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className="h-7 w-7 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5" />
                      <path d="M4 15v3a2 2 0 002 2h12a2 2 0 002-2v-3" />
                    </svg>
                    <span className="mt-3 text-sm font-semibold text-[#8a6a12]">
                      Choose files or drop them here
                    </span>
                    <span id="files-hint" className="mt-1 text-xs text-gray-500">
                      Images, PDF, DOC or DWG. Up to {MAX_FILES} files, {MAX_TOTAL_MB} MB in total.
                    </span>
                  </label>

                  {fileError && (
                    <p role="alert" className="mt-2 text-sm text-red-700">
                      {fileError}
                    </p>
                  )}

                  {files.length > 0 && (
                    <div className="mt-3">
                      <ul className="space-y-2">
                        {files.map((f, i) => (
                          <li
                            key={`${f.name}-${f.size}`}
                            className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2.5 ring-1 ring-inset ring-gray-200"
                          >
                            <svg
                              aria-hidden
                              viewBox="0 0 24 24"
                              className="h-5 w-5 shrink-0 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
                              <path d="M14 3v5h5" />
                            </svg>
                            <span className="min-w-0 flex-1 truncate text-sm text-gray-800">{f.name}</span>
                            <span className="shrink-0 text-xs text-gray-500">{formatSize(f.size)}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              aria-label={`Remove ${f.name}`}
                              className="shrink-0 rounded p-1 text-gray-400 transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                            >
                              <svg
                                aria-hidden
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                              >
                                <path d="M6 6l12 12M18 6L6 18" />
                              </svg>
                            </button>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 text-xs text-gray-500">
                        {formatSize(totalBytes)} of {MAX_TOTAL_MB} MB used
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800"
                >
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#d4af37] px-6 py-3.5 text-base font-semibold text-[#05070d] shadow-sm transition-colors hover:bg-[#e3c158] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4af37]/40 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending && (
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-5 w-5 animate-spin motion-reduce:animate-none"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                    <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                )}
                {sending ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}