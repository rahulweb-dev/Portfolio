// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { ConnectDB } from '../../../lib/config/db';
import Contact from '../../../lib/models/contactModel';

// POST - Create a new contact
export async function POST(req) {
  await ConnectDB();
  try {
    const { name, email, number, message } = await req.json();
    if (!name || !email || !number || !message) {
      return NextResponse.json({ error: 'All fields required' });
    }

    const newEntry = await Contact.create({ name, number, email, message });
    return NextResponse.json({ success: true, data: newEntry });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Error saving contact' }, { status: 500 });
  }
}

// GET - Fetch all contacts
export async function GET() {
  await ConnectDB();
  const contact = await Contact.find().lean();
  return NextResponse.json(contact);
}

// DELETE - Delete a contact by ID
export async function DELETE(req) {
  await ConnectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ success: false, message: 'ID is required' }, { status: 400 });
  }

  try {
    await Contact.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Deleted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Deletion failed' }, { status: 500 });
  }
}
