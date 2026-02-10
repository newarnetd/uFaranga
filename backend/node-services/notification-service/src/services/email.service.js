const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs').promises;
const path = require('path');
const logger = require('../utils/logger');

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  async sendEmail({ to, subject, template, data }) {
    try {
      const templatePath = path.join(__dirname, '../templates', `${template}.html`);
      const templateContent = await fs.readFile(templatePath, 'utf8');
      const compiledTemplate = handlebars.compile(templateContent);
      const html = compiledTemplate(data);

      const mailOptions = {
        from: process.env.FROM_EMAIL,
        to,
        subject,
        html
      };

      const result = await this.transporter.sendMail(mailOptions);
      logger.info(`Email sent successfully to ${to}`, { messageId: result.messageId });
      return result;
    } catch (error) {
      logger.error('Failed to send email:', error);
      throw error;
    }
  }

  async sendTransactionNotification(to, transactionData) {
    return this.sendEmail({
      to,
      subject: 'Transaction Notification - uFaranga',
      template: 'transaction-notification',
      data: transactionData
    });
  }

  async sendWelcomeEmail(to, userData) {
    return this.sendEmail({
      to,
      subject: 'Welcome to uFaranga!',
      template: 'welcome',
      data: userData
    });
  }
}

module.exports = new EmailService();