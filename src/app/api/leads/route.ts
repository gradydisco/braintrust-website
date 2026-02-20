import { NextRequest, NextResponse } from 'next/server';

/**
 * Lead Capture API Route
 *
 * Handles lead submissions from:
 * - Book a Demo form
 * - Contact forms
 * - Newsletter signups
 *
 * Integration TODOs:
 * 1. Salesforce: POST lead to Salesforce Web-to-Lead or REST API
 * 2. Slack: Send notification to #sales or #leads channel via Webhook
 * 3. Booking System: Trigger automated booking link via Calendly/Chili Piper
 *
 * Environment Variables Required:
 * - SALESFORCE_ORG_ID: Salesforce Organization ID
 * - SALESFORCE_WEB_TO_LEAD_URL: Salesforce Web-to-Lead endpoint
 * - SLACK_WEBHOOK_URL: Slack incoming webhook for notifications
 * - BOOKING_SYSTEM_API_KEY: API key for automated booking system
 * - LEAD_NOTIFICATION_EMAIL: Email for backup lead notifications
 */

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { firstName, lastName, email, company, jobTitle, companySize, message, type } = body;

        // Validate required fields
        if (!email || !firstName) {
            return NextResponse.json(
                { error: 'Missing required fields: email, firstName' },
                { status: 400 }
            );
        }

        // ===========================
        // TODO: Salesforce Integration
        // ===========================
        // const salesforcePayload = {
        //   oid: process.env.SALESFORCE_ORG_ID,
        //   first_name: firstName,
        //   last_name: lastName,
        //   email: email,
        //   company: company,
        //   title: jobTitle,
        //   '00N...': companySize, // Custom field ID
        //   description: message,
        //   lead_source: 'Website',
        //   '00N...': type, // Custom field for lead type
        // };
        //
        // await fetch(process.env.SALESFORCE_WEB_TO_LEAD_URL!, {
        //   method: 'POST',
        //   body: new URLSearchParams(salesforcePayload),
        // });

        // ===========================
        // TODO: Slack Notification
        // ===========================
        // const slackPayload = {
        //   text: `🚀 New Lead: ${firstName} ${lastName}\n*Email:* ${email}\n*Company:* ${company}\n*Type:* ${type}\n*Size:* ${companySize}`,
        // };
        //
        // await fetch(process.env.SLACK_WEBHOOK_URL!, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(slackPayload),
        // });

        // ===========================
        // TODO: Booking System
        // ===========================
        // if (type === 'demo_request') {
        //   await fetch('https://api.calendly.com/...', {
        //     method: 'POST',
        //     headers: {
        //       'Authorization': `Bearer ${process.env.BOOKING_SYSTEM_API_KEY}`,
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email, name: `${firstName} ${lastName}` }),
        //   });
        // }

        // Log for development
        console.log('Lead received:', { firstName, lastName, email, company, jobTitle, companySize, type });

        return NextResponse.json(
            { success: true, message: 'Lead captured successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Lead capture error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
