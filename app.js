const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the homepage
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routes to serve other pages
app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get("/gallery", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'gallery.html'));
});

app.get("/menu", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

app.get("/blog", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

app.get("/franchise", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'franchise.html'));
});

app.get("/storelocator", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'Storelocator.html'));
});

// Handling POST request for sending email
app.post("/send-message", function (req, res) {
    const comm = req.body.message;
    const na = req.body.nameofperson;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'enquirywrapchickpizza@gmail.com',
            pass: 'kyzw btya xdtt pdjq'
        }
    });

    var mailOptions = {
        from: 'enquirywrapchickpizza@gmail.com', // Sender address
        to: req.body.email, // Recipient's email address
        subject: 'Wrapchick Pizza Pan-India Franchise Opportunity Details', // Subject line
        html: `
        Dear Sir/Madam,<br><br>

        Thank you for your inquiry regarding the Wrapchick Pizza franchise opportunity. We are excited to provide you with a comprehensive overview of our franchise package.<br><br>

        <b>About Wrapchick Pizza</b><br>
        Wrapchick Pizza is a renowned fast-food chain offering a diverse menu that includes:<br>
        - 🍕 Pizza<br>
        - 🍔 Burgers<br>
        - 🌯 Wraps<br>
        - 🧇 Waffles<br>
        - 🍹 Coolers and Shakes<br>
        - 🍗 Crispy Chicken<br><br>

        <b>Franchise Package Summary:</b><br><br>

        <b>Kitchen Equipments:</b><br>
        - Commercial Pizza Oven<br>
        - Deep Freezer (320L)<br>
        - Refrigerator (190L)<br>
        - Commercial Fryer (6L)<br>
        - Commercial Griller<br>
        - Commercial Waffle Machine<br>
        - Commercial Blender<br><br>

        <b>Startup Franchise Kit:</b><br>
        - Rs 50,000/- Worth Raw Material*<br>
        - Wrapchick Pizza Aprons (2)<br>
        - Wrapchick Pizza Caps (2)<br>
        - Wrapchick Pizza Brand Tees (2)<br>
        - Wrapchick Pizza Pizza Box Samples<br>
        - Wrapchick Pizza Recipes<br>
        - FSSAI License by the Company<br>
        - Swiggy & Zomato Integration<br>
        - Wrapchick Pizza Link Page Web<br>
        - Franchise License for 3 Years<br>
        - Staff Hiring Support<br>
        - Menu Variety & Customization<br>
        - Staff & Cook Training<br>
        - Day-to-Day Cafe Planner<br>
        - Cafe Management Software<br>
        - Online Digital Marketing<br>
        - Local Marketing Plan<br>
        - Franchise Support for 10 Years<br><br>

        <b>Package Price:</b> Rs. 2,89,999 + Taxes<br><br>

        For a detailed proposal including price breakdown and images of the equipment and startup kit, please click here: <a href="https://drive.google.com/file/d/1dTj22ULTMbOKiHSqLTPbGGAGYgAIXgJv/view">[Proposal Details with Price & Images]</a><br><br>

        <b>Contact Details for Further Information:</b><br>
        <b>📞</b> +91-9508238384<br>
        <b>✉️</b> <a href="mailto:enquirywrapchickpizza@gmail.com">enquirywrapchickpizza@gmail.com</a><br>
        <b>🌐</b> <a href="http://www.wrapchickpizza.com">www.wrapchickpizza.com</a><br><br>

        We are committed to providing full support to ensure the success of your Wrapchick Pizza franchise venture. Please feel free to reach out with any questions or to discuss next steps.<br><br>

        Looking forward to the possibility of partnering with you.<br><br>

        Warm regards,<br>
        Mayur Prakash<br>
        Founder & CEO<br>
        Wrapchick Pizza<br>
        <b>Phone:</b> +91-9508238384<br>
        <b>Email:</b> <a href="mailto:enquirywrapchickpizza@gmail.com">enquirywrapchickpizza@gmail.com</a><br>
    `,
    attachments: [
        {
            filename: 'FRANCHISE INVITED.jpg',
            path: "D:/Projects/Wrapchikpizza-website/Frontend/public/images/FRANCHISE INVITED.jpg"
        }
    ]
    
};
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send('Error sending email');
        } else {
            res.send(`
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        color: #666;
                        font-size: 18px;
                    }
                    a {
                        color: #ff4500;
                        text-decoration: none;
                        font-weight: bold;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                    .back-home {
                        display: inline-block;
                        margin-top: 20px;
                        padding: 10px 20px;
                        background-color: #ff4500;
                        color: #fff;
                        border-radius: 5px;
                        text-decoration: none;
                    }
                    .back-home:hover {
                        background-color: #e03e00;
                    }
                </style>
                <h1>Thank you for submitting your enquiry!</h1>
                <p>For more info contact us at:</p>
                <p>📞<a href="https://wa.me/919508238384" target="_blank">+91-9508238384</a></p>
                <p>✉️<a href="mailto:enquirywrapchickpizza@gmail.com">enquirywrapchickpizza@gmail.com</a></p>
                <a href="/" class="back-home">Back to Home</a>
            `);
            console.log("Email sent: " + info.response);
        }
    });
});

// Start the server
app.listen(3000, function () {
    console.log("Server started on port 3000");
});
