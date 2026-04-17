import { NextResponse, type NextRequest } from "next/server";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 120;
const BAN_MS = 5 * 60_000;

type Bucket = { count: number; resetAt: number; bannedUntil?: number };
const buckets = new Map<string, Bucket>();

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return (
    req.headers.get("x-real-ip") ??
    req.headers.get("cf-connecting-ip") ??
    "unknown"
  );
}

function isSuspiciousUserAgent(ua: string | null): boolean {
  if (!ua) return true;
  const lowered = ua.toLowerCase();
  const badTokens = [
    "sqlmap",
    "nikto",
    "acunetix",
    "nessus",
    "wpscan",
    "masscan",
    "nmap",
    "fimap",
    "metasploit",
  ];
  return badTokens.some((t) => lowered.includes(t));
}

export function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent");
  if (isSuspiciousUserAgent(ua)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const bucket = buckets.get(ip);

  if (bucket?.bannedUntil && bucket.bannedUntil > now) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": String(Math.ceil((bucket.bannedUntil - now) / 1000)),
      },
    });
  }

  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else {
    bucket.count += 1;
    if (bucket.count > MAX_REQUESTS) {
      bucket.bannedUntil = now + BAN_MS;
      return new NextResponse("Too Many Requests", {
        status: 429,
        headers: { "Retry-After": String(BAN_MS / 1000) },
      });
    }
  }

  if (buckets.size > 10_000) {
    for (const [key, b] of buckets) {
      if (b.resetAt < now && (!b.bannedUntil || b.bannedUntil < now)) {
        buckets.delete(key);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|icon\\.png|favicon\\.ico|logo/|mascota/|info/|sitemap\\.xml|robots\\.txt|portada_aranet|.*\\.(?:webp|png|jpg|jpeg|svg|gif|ico|pdf|txt|xml|woff2?|ttf)$).*)",
  ],
};
