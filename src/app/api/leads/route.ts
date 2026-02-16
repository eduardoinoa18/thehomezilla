import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { address, name, phone, email, propertyType, motivation } =
      await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"TheHomeZilla Website" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `🔥 NEW LEAD: ${address}`,
      text: `
NEW PROPERTY LEAD

Property Address: ${address}

Contact Information:
Name: ${name}
Phone: ${phone}
Email: ${email}

Property Details:
Type: ${propertyType || "Not specified"}

Seller Motivation:
${motivation || "Not provided"}

---
Submitted from TheHomeZilla.com
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #114B5F; border-bottom: 3px solid #F28F3B; padding-bottom: 10px;">
            🔥 NEW PROPERTY LEAD
          </h2>
          
          <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #114B5F; margin-top: 0;">Property Address</h3>
            <p style="font-size: 18px; font-weight: bold; color: #333;">${address}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #114B5F;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #114B5F;">Property Details</h3>
            <p><strong>Type:</strong> ${propertyType || "Not specified"}</p>
          </div>

          ${
            motivation
              ? `
          <div style="background: #FFF3CD; padding: 15px; border-left: 4px solid #F28F3B; margin: 20px 0;">
            <h3 style="color: #114B5F; margin-top: 0;">Seller Motivation</h3>
            <p style="margin: 0;">${motivation}</p>
          </div>
          `
              : ""
          }

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            Submitted from TheHomeZilla.com
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
