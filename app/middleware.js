import { NextResponse } from 'next/server';

export function middleware(req) {
  const isLoggedIn = req.cookies.get('admin-auth')?.value === 'true';
  const { pathname } = req.nextUrl;

  // Protect all /admin pages except /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  // Redirect to dashboard if already logged in and trying to access login page
  if (pathname === '/admin/login' && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
