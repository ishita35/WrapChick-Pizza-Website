class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
        /* Navbar Styles */
       
        
.navbar {
    background-color: rgba(255, 255, 31, 1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 8%; /* Add padding for spacing */
    font-weight: bolder;
    position: fixed;
    top: 0;
    left: 0;
    height: 97px;
    width: 100%;
    z-index: 1000;
    margin-left: 0px;
    border-bottom: 1px solid transparent; /* Initially transparent */
    transition: border-bottom-color 0.3s ease; /* Smooth transition */
}

.navbar-nav {
    margin-left: -80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
}

.navbar-nav .nav-item {
    margin: 0px; /* Add margin between nav items */
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar-nav .nav-item .nav-link, .navbar-nav .nav-item a {
    color: black; /* Font color black */
    font-size: 15px;
    text-decoration: none; /* Remove underline */
    font-weight: bold; /* Make the font bold */
    padding: 8px 10px; /* Add padding for better spacing */
}

.navbar-nav .nav-item .nav-link:hover, .navbar-nav .nav-item a:hover {
    color: red; /* Font color red on hover */
}

/* Specific Franchise Enquiry Button Styles */
.franchise-enquiry {
    color: black; /* Red text color */
    padding: 12px 30px; /* Adjusted padding for better button size */
    font-size: 1.2rem;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    position: fixed;
    overflow: hidden;
    transition: color 0.3s, transform 0.3s;
    z-index: 1001;
}

.franchise-enquiry::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px; /* Height of the underline */
    background-color: #ff0000; /* Red color for underline */
    transform: scaleX(0); /* Initially no width */
    transform-origin: left;
    transition: transform 0.3s;
    z-index: -1;
}

.franchise-enquiry:hover::before {
    transform: scaleX(1); /* Expand underline on hover */
}

.franchise-enquiry:hover {
    color: red; /* White text color on hover */
    text-decoration: none; /* Remove underline on hover */
}

.phone-number {
    display: block;
    font-size: 1.1rem;
    color: black;
    margin-top: 2px;
    white-space: nowrap;
}

.phone-number:hover {
    color: red; /* Color change on hover */
}

/* Ensure navbar brand logo has appropriate styles */
.navbar-brand2 img {
    height: 90px;
}
.navbar-brand1 {
    display: none;
}

.fixed-enquiry {
    position: fixed;
    right: 0px;
    top: 5px;
}

/* Additional media query to ensure consistency for screens larger than 1400px */
@media (min-width: 991px) and (max-width: 1100px){
    .navbar {
        padding: 10px 8%; /* Adjust padding for larger screens if necessary */
    }

    .navbar-nav .nav-item {
        margin: 0px; /* Keep margin between nav items */
    }

    .fixed-enquiry {
        right: 0px;
    }
}
@media (min-width: 1200px) and (max-width: 1400px) {
    .navbar {
        padding: 10px 5%; /* Adjust padding to fit the screen size */
        height: 97px;
    }

    .navbar-nav {
        margin-left: -50px; /* Adjust margin for better alignment */
    }

    .navbar-nav .nav-item {
        margin: 18px; /* Keep margin between nav items */
    }

    .navbar-nav .nav-item .nav-link, .navbar-nav .nav-item a {
        font-size: 15px; /* Ensure font size is consistent */
        padding: 8px 10px; /* Maintain padding for spacing */
    }
}
@media (min-width: 1400px) and (max-width: 1700px) {
    .navbar {
        padding: 10px 5%; /* Adjust padding to fit the screen size */
        height: 97px;
    }

    .navbar-nav {
        margin-left: -50px; /* Adjust margin for better alignment */
    }

    .navbar-nav .nav-item {
        margin: 27px; /* Keep margin between nav items */
    }

    .navbar-nav .nav-item .nav-link, .navbar-nav .nav-item a {
        font-size: 15px; /* Ensure font size is consistent */
        padding: 8px 10px; /* Maintain padding for spacing */
    }
}

/* Styles for mobile phones  */
@media (min-width: 350px) and (max-width: 600px) {
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px; /* Reduced height of the navbar */
        padding: 0 20px; /* Adjusted padding for mobile */
        background-color: rgba(255, 255, 31, 1); /* Yellow background */
        z-index: 1000;
    }

    .navbar-nav {
        display: flex;
        flex-direction: column; /* Arrange nav items in column */
        align-items: center; /* Center nav items */
        background-color: rgba(255, 255, 31, 1); /* Yellow background */
        width: 100%; /* Full width for mobile */
        margin-top: 10px; /* Margin for spacing */
        margin-left: 0px;
        margin-right: 10px;
    }

    .nav-item {
        text-decoration: none;
        color: #333; /* Black color */
        text-align: center; /* Center text */
    }
    .navbar-nav .nav-item .nav-link, .navbar-nav .nav-item a {
    color: black; /* Font color black */
    text-decoration: none; /* Remove underline */
    font-weight: bold; /* Make the font bold */
    padding: 0px; /* Add padding for better spacing */
}

    .navbar-brand1 {
        order: -1; /* Move brand to the left */
        display: block;
        margin-left: -20px; /* Adjust margin for brand */
    }

    .navbar-brand2 {
        order: -1; /* Move brand to the left */
        display: none;
    }

    .navbar-toggler {
        background-color: rgba(255, 255, 31, 1); /* Yellow background */
        position: fixed; /* Fix position */
        top: 20px; /* Adjust vertical position as needed */
        right: 10px; /* Align toggler to the right */
        padding: 10px; /* Adjust padding */
        z-index: 1000; /* Ensure it appears above other elements */
        cursor: pointer; /* Change cursor to pointer for usability */
    }

    .franchise-enquiry {
        display: none; /* Hide franchise enquiry for mobile */
    }
    .fixed-enquiry{
        display: block;
        position: sticky;
        z-index: 1000;
    }
    .franchise-enquiry {
            color: black; /* Red text color */
            padding: 12px 30px; /* Adjusted padding for better button size */
            font-size: 16px;
            font-family: sans-serif;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            position: fixed;
            overflow: hidden;
            transition: color 0.3s, transform 0.3s;
            right: 60px;
            
        }
        .franchise-enquiry::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 3px; /* Height of the underline */
            background-color: #ff0000; /* Red color for underline */
            transform: scaleX(0); /* Initially no width */
            transform-origin: left;
            transition: transform 0.3s;
            z-index: -1;
        }
        
        .franchise-enquiry:hover::before {
            transform: scaleX(1); /* Expand underline on hover */
        }
        
        .franchise-enquiry:hover {
            color: red; /* White text color on hover */
            text-decoration: none; /* Remove underline on hover */
        }
        
        .phone-number {
            display: block;
            font-size: 1.1rem;
            color: black;
            white-space: nowrap;
        }
        
        .phone-number:hover {
            color: red; /* Color change on hover */
        }
}

        

/* Styles for mobile phones  */
@media (min-width: 350px) and (max-width: 600px) {
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px; /* Reduced height of the navbar */
        padding: 0 20px; /* Adjusted padding for mobile */
        background-color: rgba(255, 255, 31, 1); /* Yellow background */
        z-index: 1000;
    }

    .navbar-nav {
        display: flex;
        flex-direction: column; /* Arrange nav items in column */
        align-items: center; /* Center nav items */
        background-color: rgba(255, 255, 31, 1); /* Yellow background */
        width: 100%; /* Full width for mobile */
        margin-top: 10px; /* Margin for spacing */
        margin-left: 0px;
        margin-right: 10px;
    }

    .nav-item {
        text-decoration: none;
        color: #333; /* Black color */
        text-align: center; /* Center text */
    }
    .navbar-nav .nav-item .nav-link, .navbar-nav .nav-item a {
    color: black; /* Font color black */
    text-decoration: none; /* Remove underline */
    font-weight: bold; /* Make the font bold */
    padding: 0px; /* Add padding for better spacing */
}

    .navbar-brand1 {
        order: -1; /* Move brand to the left */
        display: block;
        margin-left: -20px; /* Adjust margin for brand */
    }

    .navbar-brand2 {
        order: -1; /* Move brand to the left */
        display: none;
    }

    .navbar-toggler {
        background-color: rgba(255, 255, 31, 1); /* Yellow background */
        position: fixed; /* Fix position */
        top: 20px; /* Adjust vertical position as needed */
        right: 10px; /* Align toggler to the right */
        padding: 10px; /* Adjust padding */
        z-index: 1000; /* Ensure it appears above other elements */
        cursor: pointer; /* Change cursor to pointer for usability */
    }

    .franchise-enquiry {
        display: none; /* Hide franchise enquiry for mobile */
    }
    .fixed-enquiry{
        display: block;
        position: fixed;
        z-index: 1000;
    }
    .franchise-enquiry {
            color: black; /* Red text color */
            padding: 12px 30px; /* Adjusted padding for better button size */
            font-size: 16px;
            font-family: sans-serif;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            position: fixed;
            overflow: hidden;
            transition: color 0.3s, transform 0.3s;
            right: 60px;
            
        }
        .franchise-enquiry::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 3px; /* Height of the underline */
            background-color: #ff0000; /* Red color for underline */
            transform: scaleX(0); /* Initially no width */
            transform-origin: left;
            transition: transform 0.3s;
            z-index: -1;
        }
        
        .franchise-enquiry:hover::before {
            transform: scaleX(1); /* Expand underline on hover */
        }
        
        .franchise-enquiry:hover {
            color: red; /* White text color on hover */
            text-decoration: none; /* Remove underline on hover */
        }
        
        .phone-number {
            display: block;
            font-size: 1.1rem;
            color: black;
            white-space: nowrap;
        }
        
        .phone-number:hover {
            color: red; /* Color change on hover */
        }
}
            
            
        </style>
        <header>
        <nav class="navbar navbar-expand-lg navbar-light navbar-static-top" style="background-color: rgba(255, 255, 31, 1);">
        <a class="navbar-brand1" href="index.html">
            <img src="./images/WRAPCHICK.png" alt="WrapChick Logo" class="d-inline-block align-top" height="80">
        </a>
        <a class="franchise-enquiry fixed-enquiry" aria-current="page" href="https://wa.me/919508238384" target="_blank">FRANCHISE ENQUIRY
            <span class="phone-number">+91-9508238384</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="index.html">HOME</a>
                </li>
                <li class="nav-item">
                    <a href="about.html">ABOUT US</a>
                </li>
                <li class="nav-item">
                    <a href="gallery.html">GALLERY</a>
                </li>
                <li class="nav-item">
                    <a href="menu.html">MENU</a>
                </li>
                <li class="nav-item">
                    <a href="blog.html">BLOGS</a>
                </li>
                <a class="navbar-brand2" href="index.html">
                    <img src="./images/WRAPCHICK.png" alt="WrapChick Logo" class="d-inline-block align-top" height="80">
                </a>
                <li class="nav-item">
                    <a href="franchise.html">FRANCHISE ENQUIRY</a>
                </li>
                
                <li class="nav-item">
                    <a href="Storelocator.html">STORE LOCATOR</a>
                </li>
            </ul>
        </div>
    </nav>
    </header>`;
    }       
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>

        /* Footer Styles */
        .footer {
            background-color: #333;
            color: #ffcc00;
            padding-top: 50px;
            font-size: 16px;
            font-family: sans-serif;
        }
        
        .footer .contact-info {
            color: #fff;
        }
        
        .footer .contact-info a {
            color: #fff;
            text-decoration: none;
        }
        
        
        .footer ul {
            list-style-type: none;
            padding: 0;
            margin-right: 20px;
        }
        
        .footer ul li {
            margin-right: 10px;
        }
        
        .footer ul li i {
            margin-right: 10px;
        }
        
        .footer .quick-links a {
            text-decoration: none;
            color: #fff;
        }
        
        .footer .social-links a {
            display: inline-block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin-right: 10px;
            margin-bottom: 20px;
            background-color: #fff;
            color: #333;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .footer .social-links a:hover {
            background-color: #333;
            color: #fff;
        }
        
        /* Styles for mobile phones  */
        @media (min-width: 350px) and (max-width: 500px) {
            .footer {
                background-color: #333;
                color: #ffcc00;
                padding: 20px 10px; /* Adjusted padding for mobile screens */
                font-size: 16px; /* Decreased font size for smaller screens */
                font-family: sans-serif;
                text-align: left; /* Center align text */
            }
        
            .footer .contact-info {
                color: #fff;
            }
        
            .footer .contact-info a {
                color: #fff;
                text-decoration: none;
            }
        
            .footer ul {
                list-style-type: none;
                padding: 0;
                margin: 10px 0; /* Adjusted margin for better spacing */
            }
        
            .footer ul li {
                margin-bottom: 5px; /* Adjusted bottom margin for list items */
            }
        
            .footer ul li i {
                margin-right: 5px; /* Adjusted margin for list item icons */
            }
        
            .footer .quick-links a {
                text-decoration: none;
                color: #fff;
            }
        
            .footer .social-links {
                margin-top: 20px;
                margin-bottom: 10px;
                 /* Added margin to separate social links */
            }
        
            .footer .social-links a {
                display: inline-block;
                width: 30px; /* Decreased width of social icons */
                height: 30px; /* Decreased height of social icons */
                line-height: 30px; /* Center align text vertically */
                text-align: center;
                margin: 3 5px; /* Adjusted margin for social icons */
                background-color: #fff;
                color: #333;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
        
            .footer .social-links a:hover {
                background-color: #333;
                color: #fff;
            }
        }
        
        
        </style>
        <!-- Footer section begins-->
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h5 class="text-uppercase">Contact Us</h5>
                        <ul class="contact-info">
                            <i class="fas fa-map-marker-alt"></i> Khata 40,Khesra 81,Sadar Road,Forbesganj, Bihar 854318<br>
                            <a href="https://wa.me/919508238384" target="_blank"><i class="fas fa-phone"></i> +91-9508238384 </a><br>
                            
                            <a href="mailto:enquirywrapchickpizza@gmail.com"><i class="fas fa-envelope"></i> enquirywrapchickpizza@gmail.com </a>
                        </ul>
                    </div>
                    
                    <div class="col">
                        <h5 class="text-uppercase">Quick Links</h5>
                        <ul class="quick-links">
                        <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="menu.html">Menu</a></li>
                            <li><a href="blog.html">Blogs</a></li>
                            <li><a href="franchise.html">Franchise Enquiry</a></li>
                            <li><a href="Storelocator.html">Store Locator</a></li>
                        </ul>
                    </div>
                    
                    <div class="col">
                        <h5 class="text-uppercase">Follow Us</h5>
                        <div class="social-links">
                            <a href="https://www.facebook.com/wrapchickpizzaofficial?mibextid=LQQJ4d"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/wrapchickpizza?igsh=bXF2MWR1c3RuaTVs"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/company/wrapchickpizza/"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="text-center p-3">
                &copy; 2024 WrapChick Pizza. All rights reserved.
            </div>
        </footer>`;
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
