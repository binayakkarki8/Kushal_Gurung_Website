// ==================== CONFIGURATION ====================
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api' 
    : '/api';

// ==================== VIDEO DATA ====================
const videosData = [
    {
        id: 1,
        thumbnail: './images/videos/video1.jpg',
        title: 'Climate Crisis, Clean Energy and Sustainable Solutios for the Future',
        titleNe: 'जलवायु संकट, स्वच्छ ऊर्जा र दिगो समाधानको भविष्य',
        videoUrl: 'https://www.youtube.com/embed/VsNG_unNpdc?si=vnbz4FvFse89IAPP'
    },
    {
        id: 2,
        thumbnail: './images/videos/video2.jpg',
        title: 'Kushal Gururng | Explains How Loadshedding Ended',
        titleNe: 'कुशल गुरुङ | लोडसेडिङ कसरी अन्त्य भयो भन्ने व्याख्या',
        videoUrl: 'https://www.youtube.com/embed/wCKIa_rklJw?si=TE6cgsv3Hrr9VtpG'
    },
    {
        id: 3,
        thumbnail: './images/videos/video3.jpg',
        title: 'Kushal Gurung | On War for Water',
        titleNe: 'कुशल गुरुङ | पानीका लागि संघर्षबारे',
        videoUrl: 'https://www.youtube.com/embed/sUxSu0hPK4w?si=NUAu34-vY1f1Q3Q2'
    },
    {
        id: 4,
        thumbnail: './images/videos/video4.jpg',
        title: 'Legal Barriers to Alternative Energy Development and Lack of Government Interest',
        titleNe: 'वैकल्पिक उर्जा विकासमा ऐन बाधक, सरकारलाई छैन चासो',
        videoUrl: 'https://www.youtube.com/embed/crnoUkxb_H8?si=DnLStMLQTH5fpxgM'
    },
    {
        id: 5,
        thumbnail: './images/videos/video5.jpg',
        title: 'Honourable Prime Minister, Isn’t Electricity Generated from Wind?',
        titleNe: 'प्रधानमन्त्रीज्यू, हावाबाट बिजुली निकाल्ने भनेको हैन ?',
        videoUrl: 'https://www.youtube.com/embed/fK-dC78mv5g?si=FHHpcEFbUMzD307Z'
    },
    {
        id: 6,
        thumbnail: './images/videos/video6.jpg',
        title: 'Role of Renewable Energy',
        titleNe: 'नवीकरणीय ऊर्जाको भूमिका',
        videoUrl: 'https://www.youtube.com/embed/sS0YcKCjTCQ?si=xjhYxoyUx_xu-L4F'
    },
    {
        id: 7,
        thumbnail: './images/videos/video7.jpg',
        title: 'Kushal Gururng | Energy Focus',
        titleNe: 'कुशल गुरुङ | ऊर्जामा केन्द्रित',
        videoUrl: 'https://www.youtube.com/embed/3KxKvDBwDXc?si=k-ABFsvCpWG_pDo0'
    },
    {
        id: 8,
        thumbnail: './images/videos/video8.jpg',
        title: 'Kushal Gurung | What Obstacles they are Facing',
        titleNe: 'कुशल गुरुङ | सामना गरिरहेका चुनौतीहरू',
        videoUrl: 'https://www.youtube.com/embed/SF6wGqqTDN4?si=WatHyhzuICSIO1zG'
    },
    {
        id: 9,
        thumbnail: './images/videos/video9.jpg',
        title: 'Kushal Gurung | Use and Prospects of Renewable Energy',
        titleNe: 'कुशल गुरुङ | नवीकरणीय ऊर्जाको प्रयोग र सम्भावना',
        videoUrl: 'https://www.youtube.com/embed/DZN2XGIj-nI?si=WTPCef8zJHZ9vXdC'
    },
    {
        id: 10,
        thumbnail: './images/videos/video10.jpg',
        title: 'Harnessing Wind Energy from Muagdi and Mustang',
        titleNe: 'म्याग्दी र मुस्ताङबाट हावाको ऊर्जा उपयोग',
        videoUrl: 'https://www.youtube.com/embed/lBYSYFpDhwY?si=IPJenDvdQDCvywxG'
    },
    {
        id: 11,
        thumbnail: './images/videos/video11.jpg',
        title: 'Clean Energy Leadership and the future of Renewable Power in Nepal',
        titleNe: 'नेपालमा स्वच्छ ऊर्जा नेतृत्व र नवीकरणीय ऊर्जाको भविष्य',
        videoUrl: 'https://www.youtube.com/embed/DpCCcCyJ64w?si=cZ2COEjOtGVC3omB'
    },
    {
        id: 12,
        thumbnail: './images/videos/video12.jpg',
        title: 'Kushal Gurung | Why Nepal’s Participation in COP-29? What Were the Achievements?',
        titleNe: 'कुशल गुरुङ | कोप-२९ मा नेपालको सहभागिता किन ? उपलब्धी के ?',
        videoUrl: 'https://www.youtube.com/embed/zDJwRyHTYDg?si=sWGvlhx6N4n27UoE'
    },
    {
        id: 13,
        thumbnail: './images/videos/video13.jpg',
        title: 'RE for Agriculture',
        titleNe: 'कृषि क्षेत्रमा नवीकरणीय ऊर्जा',
        videoUrl: 'https://www.youtube.com/embed/-Lg1EdQ_8YY?si=NsoxXqsDnm4Y5Dca'
    },
    {
        id: 14,
        thumbnail: './images/videos/video14.jpg',
        title: 'Alternative Fertilizer Options for Nepal',
        titleNe: 'नेपालका लागि वैकल्पिक मल विकल्पहरू',
        videoUrl: 'https://www.youtube.com/embed/QsZt6fnYCK0?si=YPg1naZXmUcckKgR'
    },
    {
        id: 15,
        thumbnail: './images/videos/video15.jpg',
        title: 'Asia 21: Give and Take Session',
        titleNe: 'एशिया २१ : लेनदेन सत्र',
        videoUrl: 'https://www.youtube.com/embed/naacbfqHpFU?si=3e7nmfmWHw_KjX3X'
    },
    {
        id: 16,
        thumbnail: './images/videos/video16.jpg',
        title: 'How Wind Power in Nepal contributes to transform lives through sustainable solutions.',
        titleNe: 'नेपालमा हावाबाट उत्पादित बिजुलीले दिगो समाधानमार्फत जीवन रूपान्तरणमा कसरी योगदान पुर्‍याउँछ।',
        videoUrl: 'https://www.youtube.com/embed/ZrEy8R050Jo?si=-yyDR-RMD3ELq0w-'
    },
    {
        id: 17,
        thumbnail: './images/videos/video17.jpg',
        title: 'Kushal Gurung | JAL SAROKAR | 28th December, 2015',
        titleNe: 'कुशल गुरुङ | जल सरोकार | २०१५ डिसेम्बर २८',
        videoUrl: 'https://www.youtube.com/embed/cS1UU_MMWOM?si=7aekW3VlfqABN6_A'
    },
    // {
    //     id: 18,
    //     thumbnail: './images/videos/video12.jpg',
    //     title: 'Award Ceremony Speech - Excellence in Service',
    //     titleNe: 'पुरस्कार समारोह भाषण - सेवामा उत्कृष्टता',
    //     videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    // },
    // {
    //     id: 19,
    //     thumbnail: './images/videos/video12.jpg',
    //     title: 'Award Ceremony Speech - Excellence in Service',
    //     titleNe: 'पुरस्कार समारोह भाषण - सेवामा उत्कृष्टता',
    //     videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    // },
    // {
    //     id: 20,
    //     thumbnail: './images/videos/video12.jpg',
    //     title: 'Award Ceremony Speech - Excellence in Service',
    //     titleNe: 'पुरस्कार समारोह भाषण - सेवामा उत्कृष्टता',
    //     videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    // },
];

// ==================== LANGUAGE SWITCHER ====================
const langButtons = document.querySelectorAll('.lang-btn');
let currentLang = 'ne';

function translatePage(lang) {
    currentLang = lang;
    
    // Translate all text elements
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(element => {
        const translation = element.getAttribute(`data-${lang}`);
        if (translation) {
            // Check if it's a button or has inner HTML structure
            if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                // For buttons/links, check if they have icon + text structure
                const icon = element.querySelector('i');
                if (icon) {
                    const iconHTML = icon.outerHTML;
                    element.innerHTML = iconHTML + ' <span>' + translation + '</span>';
                } else {
                    element.textContent = translation;
                }
            } else {
                element.textContent = translation;
            }
        }
    });

    // Translate select options
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        const selectedValue = select.value; // Remember selected value
        const options = select.querySelectorAll('option');
        options.forEach(option => {
            const translation = option.getAttribute(`data-${lang}`);
            if (translation) {
                option.textContent = translation;
            }
        });
        select.value = selectedValue; // Restore selected value
    });
    
    // Update language buttons
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Re-render videos with translated titles
    if (document.getElementById('videoGrid')) {
        renderVideos(currentPage);
    }
    
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'ne';
    translatePage(savedLang);
});

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        translatePage(lang);
    });
});

// ==================== NAVIGATION ====================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== ACTIVE NAVIGATION LINK ====================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== HERO BACKGROUND SLIDER ====================
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function changeSlide() {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
if (heroSlides.length > 0) {
    setInterval(changeSlide, 5000);
}

// ==================== STATS COUNTER ANIMATION ====================
const statsSection = document.querySelector('.stats-section');
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;

function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target.toLocaleString();
            }
        };
        
        updateCounter();
    });
}

const observerOptions = { threshold: 0.5 };

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            animateStats();
            statsAnimated = true;
        }
    });
}, observerOptions);

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ==================== VIDEO PAGINATION ====================
const videosPerPage = 6;
let currentPage = 1;
const totalPages = Math.ceil(videosData.length / videosPerPage);

function renderVideos(page) {
    const videoGrid = document.getElementById('videoGrid');
    if (!videoGrid) return;
    
    const startIndex = (page - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    const videosToShow = videosData.slice(startIndex, endIndex);
    
    videoGrid.innerHTML = '';
    
    videosToShow.forEach(video => {
        const title = currentLang === 'ne' ? video.titleNe : video.title;
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${title}" loading="lazy">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="video-info">
                <h3>${title}</h3>
            </div>
        `;
        
        videoItem.addEventListener('click', () => {
            openVideoModal(video);
        });
        
        videoGrid.appendChild(videoItem);
    });
    
    updatePagination();
}

function updatePagination() {
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const pageNumbers = document.getElementById('pageNumbers');
    
    if (!prevBtn || !nextBtn || !pageNumbers) return;
    
    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    // Update button text based on language
    const prevText = currentLang === 'ne' ? 'अघिल्लो' : 'Previous';
    const nextText = currentLang === 'ne' ? 'अर्को' : 'Next';
    
    const prevSpan = prevBtn.querySelector('span');
    const nextSpan = nextBtn.querySelector('span');
    if (prevSpan) prevSpan.textContent = prevText;
    if (nextSpan) nextSpan.textContent = nextText;
    
    // Render page numbers
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('div');
        pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderVideos(currentPage);
            // Scroll to videos section
            const videosSection = document.getElementById('videos');
            if (videosSection) {
                videosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
        pageNumbers.appendChild(pageBtn);
    }
}

// Pagination button event listeners
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');

if (prevPageBtn) {
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderVideos(currentPage);
            const videosSection = document.getElementById('videos');
            if (videosSection) {
                videosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

if (nextPageBtn) {
    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderVideos(currentPage);
            const videosSection = document.getElementById('videos');
            if (videosSection) {
                videosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

// Initial video render
window.addEventListener('DOMContentLoaded', () => {
    renderVideos(currentPage);
});

// ==================== VIDEO MODAL ====================
function openVideoModal(video) {
    const title = currentLang === 'ne' ? video.titleNe : video.title;
    const videoModal = document.createElement('div');
    videoModal.className = 'video-modal';
    videoModal.innerHTML = `
        <div class="video-modal-content">
            <span class="close-video-modal">&times;</span>
            <h3>${title}</h3>
            <div class="video-player-container">
                <iframe 
                    src="${video.videoUrl}?autoplay=1" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    `;
    
    document.body.appendChild(videoModal);
    document.body.style.overflow = 'hidden';
    
    // Close video modal
    const closeBtn = videoModal.querySelector('.close-video-modal');
    closeBtn.addEventListener('click', () => {
        videoModal.remove();
        document.body.style.overflow = 'auto';
    });
    
    // Close on clicking outside
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.remove();
            document.body.style.overflow = 'auto';
        }
    });
}

// ==================== VOLUNTEER MODAL ====================
const modal = document.getElementById('volunteerModal');
const joinMovementBtn = document.getElementById('joinMovementBtn');
const closeModalBtn = document.querySelector('.close-modal');
const volunteerForm = document.getElementById('volunteer-form');

if (joinMovementBtn) {
    joinMovementBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        if (modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// ==================== FORM SUBMISSION HELPER ====================
async function submitForm(url, formData, messageElement) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            showMessage(messageElement, data.message, 'success');
            return true;
        } else {
            showMessage(messageElement, data.message, 'error');
            return false;
        }
    } catch (error) {
        console.error('Form submission error:', error);
        const errorMsg = currentLang === 'ne' 
            ? 'त्रुटि भयो। कृपया पछि फेरि प्रयास गर्नुहोस्।'
            : 'An error occurred. Please try again later.';
        showMessage(messageElement, errorMsg, 'error');
        return false;
    }
}

function showMessage(element, message, type) {
    if (!element) return;
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
    
    setTimeout(() => {
        element.style.display = 'none';
    }, 5000);
}

// ==================== VOLUNTEER FORM SUBMISSION ====================
if (volunteerForm) {
    volunteerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('v-name').value,
            email: document.getElementById('v-email').value,
            phone: document.getElementById('v-phone').value,
            interest: document.getElementById('v-interest').value
        };
        
        const messageElement = document.getElementById('volunteer-form-message');
        const submitButton = volunteerForm.querySelector('button[type="submit"]');
        
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Submitting...</span>';
        }
        
        const success = await submitForm(`${API_URL}/volunteer`, formData, messageElement);
        
        if (submitButton) {
            submitButton.disabled = false;
            const btnText = currentLang === 'ne' ? 'पेश गर्नुहोस्' : 'Submit';
            submitButton.innerHTML = `<i class="fas fa-check"></i> <span>${btnText}</span>`;
        }
        
        if (success) {
            volunteerForm.reset();
            setTimeout(() => {
                if (modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = 'auto';
                }
            }, 2000);
        }
    });
}

// ==================== CONTACT FORM SUBMISSION ====================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            interest: document.getElementById('interest').value
        };
        
        const messageElement = document.getElementById('form-message');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Submitting...</span>';
        }
        
        const success = await submitForm(`${API_URL}/contact`, formData, messageElement);
        
        if (submitButton) {
            submitButton.disabled = false;
            const btnText = currentLang === 'ne' ? 'पेश गर्नुहोस्' : 'Submit';
            submitButton.innerHTML = `<i class="fas fa-paper-plane"></i> <span>${btnText}</span>`;
        }
        
        if (success) {
            contactForm.reset();
        }
    });
}

// ==================== NEWSLETTER FORM ====================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        const submitButton = newsletterForm.querySelector('button');
        
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        }
        
        try {
            const response = await fetch(`${API_URL}/newsletter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();
            
            const message = data.success 
                ? (currentLang === 'ne' ? 'सदस्यता सफल भयो!' : 'Successfully subscribed!')
                : (currentLang === 'ne' ? 'त्रुटि भयो!' : 'Error occurred!');
            
            alert(message);
            
            if (data.success) {
                newsletterForm.reset();
            }
        } catch (error) {
            console.error('Newsletter error:', error);
            const errorMsg = currentLang === 'ne' 
                ? 'त्रुटि भयो। कृपया पछि फेरि प्रयास गर्नुहोस्।'
                : 'An error occurred. Please try again later.';
            alert(errorMsg);
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
            }
        }
    });
}

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== SCROLL ANIMATIONS ====================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.portfolio-item, .timeline-item, .stat-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
};

window.addEventListener('load', () => {
    animateOnScroll();
});

// ==================== FORM VALIDATION ====================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Real-time validation
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

if (emailInput) {
    emailInput.addEventListener('blur', () => {
        if (!validateEmail(emailInput.value)) {
            emailInput.style.borderColor = '#dc2626';
        } else {
            emailInput.style.borderColor = '#10b981';
        }
    });
}

if (phoneInput) {
    phoneInput.addEventListener('blur', () => {
        if (phoneInput.value && !validatePhone(phoneInput.value)) {
            phoneInput.style.borderColor = '#dc2626';
        } else if (phoneInput.value) {
            phoneInput.style.borderColor = '#10b981';
        }
    });
}

const vEmailInput = document.getElementById('v-email');
const vPhoneInput = document.getElementById('v-phone');

if (vEmailInput) {
    vEmailInput.addEventListener('blur', () => {
        if (!validateEmail(vEmailInput.value)) {
            vEmailInput.style.borderColor = '#dc2626';
        } else {
            vEmailInput.style.borderColor = '#10b981';
        }
    });
}

if (vPhoneInput) {
    vPhoneInput.addEventListener('blur', () => {
        if (vPhoneInput.value && !validatePhone(vPhoneInput.value)) {
            vPhoneInput.style.borderColor = '#dc2626';
        } else if (vPhoneInput.value) {
            vPhoneInput.style.borderColor = '#10b981';
        }
    });
}

// ==================== KEYBOARD ACCESSIBILITY ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        
        const videoModal = document.querySelector('.video-modal');
        if (videoModal) {
            videoModal.remove();
            document.body.style.overflow = 'auto';
        }
    }
});

console.log('✅ Kushal Gurung Portfolio Website v2.1 Loaded Successfully');
console.log('🌐 Current Language:', currentLang);
console.log('🔗 API URL:', API_URL);
console.log('🎬 Video Section: Ready with Pagination');
console.log('📸 Hero Slider: Active');
console.log(`📹 Total Videos: ${videosData.length}`);
console.log(`📄 Total Pages: ${totalPages}`);
