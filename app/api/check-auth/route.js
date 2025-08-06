import { NextResponse } from 'next/server';

export async function GET(req) {
  const isLoggedIn = req.cookies.get('admin-auth')?.value === 'true';
  if (!isLoggedIn) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ status: 'ok' });
}
