
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
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #fafafa; margin: 0; padding: 0; background-color: #0a0a0c; -webkit-font-smoothing: antialiased; }
    .wrapper { padding: 40px 20px; text-align: center; }
    .container { max-width: 560px; margin: 0 auto; background-color: #0f0f12; border-radius: 12px; overflow: hidden; border: 1px solid #222226; text-align: left; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5); }
    .header { padding: 32px; border-bottom: 1px solid #222226; background: linear-gradient(to right, #0f0f12, #1a1a24); text-align: center; }
    .header h1 { margin: 0; font-size: 22px; color: #fafafa; font-weight: 600; letter-spacing: -0.02em; }
    .header p { margin: 8px 0 0 0; color: #a6a6a6; font-size: 14px; }
    .content { padding: 32px; }
    .field { margin-bottom: 24px; }
    .field:last-child { margin-bottom: 0; }
    .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #a6a6a6; font-weight: 600; margin-bottom: 8px; }
    .value { font-size: 15px; color: #fafafa; background-color: #15151a; padding: 14px 16px; border-radius: 8px; border: 1px solid #222226; word-break: break-word; }
    .value a { color: #3399ff; text-decoration: none; }
    .value a:hover { text-decoration: underline; }
    .message-box { min-height: 100px; white-space: pre-wrap; line-height: 1.6; }
    .footer { padding: 24px 32px; text-align: center; font-size: 12px; color: #a6a6a6; border-top: 1px solid #222226; background-color: #0a0a0c; }
    @media (max-width: 600px) {
      .wrapper { padding: 20px 10px; }
      .container { border-radius: 8px; }
      .header, .content { padding: 24px 20px; }
      .footer { padding: 20px; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h1>New Contact Received</h1>
        <p>Source: ${source}</p>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">Name</div>
          <div class="value">${name}</div>
        </div>
        <div class="field">
          <div class="label">Email</div>
          <div class="value"><a href="mailto:${email}">${email}</a></div>
        </div>
        ${message ? `
        <div class="field">
          <div class="label">Message</div>
          <div class="value message-box">${message}</div>
        </div>
        ` : ''}
      </div>
      <div class="footer">
        Message sent securely from your Portfolio Website
      </div>
    </div>
  </div>
</body>
</html>
  `;
};
