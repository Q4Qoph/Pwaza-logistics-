import { sendQuoteEmail } from '@/lib/emailService';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    const { fullName, email, service } = formData;
    
    if (!fullName || !email || !service) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, email, and service are required' },
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
    const result = await sendQuoteEmail(formData);
    
    return NextResponse.json({
      success: true,
      message: 'Quote request sent successfully',
      messageId: result.messageId
    });
    
  } catch (error) {
    console.error('Quote API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request. Please try again later.' },
      { status: 500 }
    );
  }
}
