
export const generateEmailTemplate = ({
    name,
    email,
    message,
    source = 'Contact Form'
}: {
    name: string;
    email: string;
    message?: string;
    source?: string;
}) => {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #374151; margin: 0; padding: 0; background-color: #f3f4f6; }
    .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .header { padding: 24px 32px; border-bottom: 1px solid #e5e7eb; background-color: #ffffff; }
    .header h1 { margin: 0; font-size: 20px; color: #111827; font-weight: 600; }
    .content { padding: 32px; }
    .field { margin-bottom: 24px; }
    .label { font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; font-weight: 600; margin-bottom: 4px; }
    .value { font-size: 16px; color: #111827; }
    .message-box { background-color: #f9fafb; padding: 20px; border-radius: 6px; border: 1px solid #e5e7eb; color: #374151; white-space: pre-wrap; }
    .footer { padding: 24px; text-align: center; font-size: 13px; color: #9ca3af; background-color: #f9fafb; border-top: 1px solid #e5e7eb; }
    @media (max-width: 600px) {
      .container { margin: 0; border-radius: 0; box-shadow: none; }
      .header, .content, .footer { padding: 20px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Lead: ${source}</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
      </div>
      ${message ? `
      <div class="field">
        <div class="label">Message</div>
        <div class="value message-box">${message}</div>
      </div>
      ` : ''}
    </div>
    <div class="footer">
      Sent from Portfolio Website
    </div>
  </div>
</body>
</html>
  `;
};
