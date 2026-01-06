// ==================== BACKEND SERVER FOR KUSHAL GURUNG PORTFOLIO ====================
// File: server.js
// This is a Node.js/Express backend to handle form submissions

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// ==================== MIDDLEWARE ====================
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from your frontend
app.use(express.static(path.join(__dirname, 'public')));

// ==================== EMAIL CONFIGURATION ====================
// Configure nodemailer with your email service
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use: gmail, outlook, yahoo, etc.
    auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your email
        pass: process.env.EMAIL_PASS || 'your-app-password' // Replace with your app password
    }
});

// Verify email configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('Email configuration error:', error);
    } else {
        console.log('✅ Email server is ready to send messages');
    }
});

// ==================== DATABASE CONFIGURATION (Optional) ====================
// If you want to store form submissions in a database, add your database config here
// Example with MongoDB:
/*
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kushal-portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Contact Form Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    interest: String,
    submittedAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Volunteer Form Schema
const volunteerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    interest: String,
    submittedAt: { type: Date, default: Date.now }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);
*/

// ==================== SIMPLE FILE-BASED STORAGE ====================
// Store form submissions in JSON files (for simple deployment)
const SUBMISSIONS_DIR = path.join(__dirname, 'submissions');

// Create submissions directory if it doesn't exist
if (!fs.existsSync(SUBMISSIONS_DIR)) {
    fs.mkdirSync(SUBMISSIONS_DIR);
}

function saveSubmission(type, data) {
    const filename = path.join(SUBMISSIONS_DIR, `${type}_${Date.now()}.json`);
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`✅ Saved ${type} submission to ${filename}`);
}

// ==================== API ROUTES ====================

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// ==================== CONTACT FORM SUBMISSION ====================
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, interest } = req.body;

        // Validation
        if (!name || !email || !phone || !interest) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email address'
            });
        }

        // Save to file/database
        const submissionData = {
            name,
            email,
            phone,
            interest,
            type: 'contact',
            submittedAt: new Date().toISOString(),
            ipAddress: req.ip
        };

        saveSubmission('contact', submissionData);

        // Optional: Save to database
        /*
        const contact = new Contact(submissionData);
        await contact.save();
        */

        // Send email notification to you
        const mailOptionsToAdmin = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: 'contact@kushalgurung.com', // Your email where you want to receive notifications
            subject: `New Contact Form Submission - ${interest}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Interest:</strong> ${interest}</p>
                <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
                <hr>
                <p>This is an automated message from your portfolio website.</p>
            `
        };

        // Send confirmation email to user
        const mailOptionsToUser = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: email,
            subject: 'Thank you for contacting Kushal Gurung',
            html: `
                <h2>Thank you for reaching out!</h2>
                <p>Dear ${name},</p>
                <p>Thank you for your interest in <strong>${interest}</strong>.</p>
                <p>We have received your message and will get back to you within 24-48 hours.</p>
                <br>
                <p>Best regards,</p>
                <p><strong>Kushal Gurung Team</strong></p>
                <hr>
                <p style="font-size: 12px; color: #666;">
                    This is an automated message. Please do not reply to this email.
                </p>
            `
        };

        // Send emails
        await transporter.sendMail(mailOptionsToAdmin);
        await transporter.sendMail(mailOptionsToUser);

        console.log('✅ Contact form emails sent successfully');

        res.json({
            success: true,
            message: 'Thank you! We will contact you soon.'
        });

    } catch (error) {
        console.error('❌ Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again later.'
        });
    }
});

// ==================== VOLUNTEER FORM SUBMISSION ====================
app.post('/api/volunteer', async (req, res) => {
    try {
        const { name, email, phone, interest } = req.body;

        // Validation
        if (!name || !email || !phone || !interest) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email address'
            });
        }

        // Save to file/database
        const submissionData = {
            name,
            email,
            phone,
            interest,
            type: 'volunteer',
            submittedAt: new Date().toISOString(),
            ipAddress: req.ip
        };

        saveSubmission('volunteer', submissionData);

        // Optional: Save to database
        /*
        const volunteer = new Volunteer(submissionData);
        await volunteer.save();
        */

        // Send email notification to you
        const mailOptionsToAdmin = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: 'contact@kushalgurung.com',
            subject: `New Volunteer Form Submission - ${interest}`,
            html: `
                <h2>New Volunteer Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Interest:</strong> ${interest}</p>
                <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
                <hr>
                <p>This is an automated message from your portfolio website.</p>
            `
        };

        // Send confirmation email to user
        const mailOptionsToUser = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: email,
            subject: 'Welcome to Kushal Gurung\'s Movement!',
            html: `
                <h2>Welcome aboard!</h2>
                <p>Dear ${name},</p>
                <p>Thank you for joining our movement! We're excited to have you as part of our team.</p>
                <p>Your interest in <strong>${interest}</strong> has been noted.</p>
                <p>Our team will contact you shortly with next steps and how you can get involved.</p>
                <br>
                <p>Together, we can make a difference!</p>
                <br>
                <p>Best regards,</p>
                <p><strong>Kushal Gurung Team</strong></p>
                <hr>
                <p style="font-size: 12px; color: #666;">
                    This is an automated message. Please do not reply to this email.
                </p>
            `
        };

        // Send emails
        await transporter.sendMail(mailOptionsToAdmin);
        await transporter.sendMail(mailOptionsToUser);

        console.log('✅ Volunteer form emails sent successfully');

        res.json({
            success: true,
            message: 'Thank you for joining! We will contact you soon.'
        });

    } catch (error) {
        console.error('❌ Volunteer form error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again later.'
        });
    }
});

// ==================== NEWSLETTER SUBSCRIPTION ====================
app.post('/api/newsletter', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email address'
            });
        }

        // Save subscription
        const subscriptionData = {
            email,
            subscribedAt: new Date().toISOString(),
            ipAddress: req.ip
        };

        saveSubmission('newsletter', subscriptionData);

        // Send confirmation email
        const mailOptions = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: email,
            subject: 'Newsletter Subscription Confirmed',
            html: `
                <h2>Thank you for subscribing!</h2>
                <p>You've successfully subscribed to Kushal Gurung's newsletter.</p>
                <p>You'll receive updates about:</p>
                <ul>
                    <li>Latest initiatives and programs</li>
                    <li>Community events</li>
                    <li>Policy updates</li>
                    <li>Success stories</li>
                </ul>
                <br>
                <p>Stay informed and engaged!</p>
                <p><strong>Kushal Gurung Team</strong></p>
            `
        };

        await transporter.sendMail(mailOptions);

        res.json({
            success: true,
            message: 'Successfully subscribed to newsletter!'
        });

    } catch (error) {
        console.error('❌ Newsletter error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again later.'
        });
    }
});

// ==================== ADMIN PANEL - VIEW SUBMISSIONS ====================
app.get('/api/admin/submissions', (req, res) => {
    try {
        // Add authentication here in production!
        const files = fs.readdirSync(SUBMISSIONS_DIR);
        const submissions = files.map(file => {
            const data = fs.readFileSync(path.join(SUBMISSIONS_DIR, file), 'utf8');
            return JSON.parse(data);
        });

        res.json({
            success: true,
            count: submissions.length,
            submissions: submissions
        });
    } catch (error) {
        console.error('❌ Error fetching submissions:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching submissions'
        });
    }
});

// ==================== ERROR HANDLING ====================
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found'
    });
});

app.use((err, req, res, next) => {
    console.error('❌ Server error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// ==================== START SERVER ====================
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════════════╗
    ║   Kushal Gurung Portfolio Server Running      ║
    ║                                                ║
    ║   🌐 Server: http://localhost:${PORT}         ║
    ║   📧 Email: Configured                         ║
    ║   💾 Storage: File-based                       ║
    ║                                                ║
    ║   Endpoints:                                   ║
    ║   POST /api/contact                           ║
    ║   POST /api/volunteer                         ║
    ║   POST /api/newsletter                        ║
    ║   GET  /api/admin/submissions                 ║
    ╚════════════════════════════════════════════════╝
    `);
});