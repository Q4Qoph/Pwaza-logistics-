import nodemailer from 'nodemailer';

// Create transporter for Zoho
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

// Verify connection
transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to take our messages');
  }
});

export const sendQuoteEmail = async (formData) => {
  const {
    fullName,
    email,
    phone,
    company,
    service,
    origin,
    destination,
    cargoType,
    weight,
    dimensions,
    timeline,
    requirements
  } = formData;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0a1a44, #1e3a8a); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Quote Request</h1>
        <p style="color: #f97316; margin: 5px 0;">Pweza Logistics</p>
      </div>
      
      <div style="padding: 30px; background: #f8f9fa;">
        <h2 style="color: #0a1a44; margin-bottom: 20px;">Contact Information</h2>
        <table style="width: 100%; margin-bottom: 30px;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${fullName}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${email}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${phone || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${company || 'Not provided'}</td></tr>
        </table>

        <h2 style="color: #0a1a44; margin-bottom: 20px;">Service Requirements</h2>
        <table style="width: 100%; margin-bottom: 30px;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Service:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${service}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Timeline:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${timeline || 'Not specified'}</td></tr>
        </table>

        <h2 style="color: #0a1a44; margin-bottom: 20px;">Shipment Details</h2>
        <table style="width: 100%; margin-bottom: 30px;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Origin:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${origin || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Destination:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${destination || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Cargo Type:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${cargoType || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Weight:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${weight || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Dimensions:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${dimensions || 'Not specified'}</td></tr>
        </table>

        ${requirements ? `
        <h2 style="color: #0a1a44; margin-bottom: 20px;">Additional Requirements</h2>
        <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316;">
          <p style="margin: 0; line-height: 1.6;">${requirements}</p>
        </div>
        ` : ''}
      </div>
      
      <div style="background: #0a1a44; padding: 20px; text-align: center;">
        <p style="color: white; margin: 0;">Pweza Logistics - Smart Logistics. Seamless Connections.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Pweza Logistics Quote System" <${process.env.ZOHO_EMAIL}>`,
    to: [
      process.env.CONTACT_EMAIL,
      process.env.ALTERNATE_CONTACT_EMAIL_1,
      process.env.ALTERNATE_CONTACT_EMAIL_2
    ].filter(Boolean).join(','),
    subject: `New Quote Request from ${fullName} - ${service}`,
    html: htmlContent,
    replyTo: email
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending quote email:', error);
    throw new Error('Failed to send quote request');
  }
};

export const sendContactEmail = async (formData) => {
  const { name, email, phone, company, subject, message } = formData;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #0a1a44, #1e3a8a); padding: 30px; text-align: center;">
        <h1 style="color: white; margin: 0;">New Contact Message</h1>
        <p style="color: #f97316; margin: 5px 0;">Pweza Logistics</p>
      </div>
      
      <div style="padding: 30px; background: #f8f9fa;">
        <h2 style="color: #0a1a44; margin-bottom: 20px;">Contact Information</h2>
        <table style="width: 100%; margin-bottom: 30px;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${name}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${email}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${phone || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${company || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;"><strong>Subject:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${subject}</td></tr>
        </table>

        <h2 style="color: #0a1a44; margin-bottom: 20px;">Message</h2>
        <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316;">
          <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
      
      <div style="background: #0a1a44; padding: 20px; text-align: center;">
        <p style="color: white; margin: 0;">Pweza Logistics - Smart Logistics. Seamless Connections.</p>
      </div>
    </div>
  `;

  const mailOptions = {
    from: `"Pweza Logistics Contact Form" <${process.env.ZOHO_EMAIL}>`,
    to: [
      process.env.CONTACT_EMAIL,
      process.env.ALTERNATE_CONTACT_EMAIL_1,
      process.env.ALTERNATE_CONTACT_EMAIL_2
    ].filter(Boolean).join(','),
    subject: `Contact Form: ${subject} - from ${name}`,
    html: htmlContent,
    replyTo: email
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw new Error('Failed to send contact message');
  }
};