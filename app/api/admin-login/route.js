import { NextResponse } from 'next/server';

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === 'admin' && password === 'admin123') {
    const response = NextResponse.json({ success: true });
    response.cookies.set('admin-auth', 'true', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60, // 1 hour
    });
    return response;
  }

  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
