// app/api/contact/route.js
import { sendContactEmail } from '@/lib/emailService';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email
    const result = await sendContactEmail(formData);
    
    return NextResponse.json({
      success: true,
      message: 'Contact message sent successfully',
      messageId: result.messageId
    });
    
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send contact message. Please try again later.' },
      { status: 500 }
    );
  }
}