const base = (import.meta.env?.BASE_URL ?? '/').replace(/\/$/, '');

export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//') || !base || path === base || path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}

export function withoutBase(pathname: string): string {
  if (!base || (pathname !== base && !pathname.startsWith(`${base}/`))) return pathname;
  return pathname.slice(base.length) || '/';
}
