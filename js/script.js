// ===== DEMOCRACY WEBSITE JAVASCRIPT =====
// Interactive Timeline & History Visualization

document.addEventListener('DOMContentLoaded', function() {
    console.log('🇻🇳 Democracy Website Loaded Successfully');
    
    // Initialize all interactive components
    initializeTimeline();
    initializeScrollEffects();
    initializeNavigation();
    initializeHeroAnimations();
    initializeMilestoneInteractions();
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('🇻🇳 Democracy Website Loaded Successfully');
    
    // Initialize all interactive components
    initializeTimeline();
    initializeScrollEffects();
    initializeNavigation();
    initializeHeroAnimations();
    initializeMilestoneInteractions();
});

// ===== VIETNAM PRACTICE ACCORDION =====
// ===== VIETNAM PRACTICE ACCORDION =====
document.addEventListener('DOMContentLoaded', function () {
    const practiceHeaders = document.querySelectorAll('.practice-card-header');

    practiceHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const card = this.parentElement;
            const body = card.querySelector('.practice-card-body');
            const icon = this.querySelector('i');
            const isOpen = card.classList.contains('open');

            if (isOpen) {
                // Đóng card
                card.classList.remove('open');
                body.style.maxHeight = null;
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                // Mở card
                card.classList.add('open');
                body.style.maxHeight = body.scrollHeight + 'px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });

    // Chỉ gắn resize listener một lần
    window.addEventListener('resize', function () {
        document.querySelectorAll('.practice-card.open .practice-card-body')
            .forEach(body => {
                body.style.maxHeight = body.scrollHeight + 'px';
            });
    });
});


// ===== TIMELINE FUNCTIONALITY =====
function initializeTimeline() {
    console.log('📚 Initializing Historical Timeline');
    
    // Timeline milestone data with Vietnamese historical context
    const milestoneData = {
        1: {
            title: "Hy Lạp Cổ Đại (500-300 TCN)",
            description: "Nơi ra đời khái niệm dân chủ đầu tiên với nghĩa 'quyền lực của nhân dân' (demos + kratos). Athens là mô hình dân chủ trực tiếp đầu tiên.",
            period: "Cổ đại",
            characteristics: "Dân chủ trực tiếp, chỉ dành cho công dân nam"
        },
        2: {
            title: "Dân Chủ Nguyên Thủy",
            description: "Các hình thức quản lý tập thể sơ khai trong các cộng đồng nguyên thủy, nơi quyết định được đưa ra thông qua hội nghị của toàn bộ thành viên.",
            period: "Tiền sử",
            characteristics: "Tập thể, bình đẳng trong cộng đồng nhỏ"
        },
        3: {
            title: "Dân Chủ Chủ Nô (100-500 SCN)",
            description: "Hình thức dân chủ bị hạn chế trong xã hội có giai cấp, chỉ áp dụng cho tầng lớp thống trị, loại trừ nô lệ và người nghèo.",
            period: "Cổ đại muộn",
            characteristics: "Dân chủ của giai cấp thống trị"
        },
        4: {
            title: "Chế Độ Phong Kiến (500-1500)",
            description: "Thời kỳ thống trị của quý tộc và giáo hội, dân chủ hầu như biến mất, được thay thế bằng chế độ quân chủ chuyên chế và phân cấp phong kiến.",
            period: "Trung cổ",
            characteristics: "Thống trị của quý tộc, không có dân chủ"
        },
        5: {
            title: "Dân Chủ Tư Sản (1600-1900)",
            description: "Dân chủ đại nghị phục hồi với các cuộc cách mạng tư sản. Tuy nhiên vẫn bị hạn chế bởi tài sản và giới tính, phục vụ lợi ích giai cấp tư sản.",
            period: "Cận đại",
            characteristics: "Dân chủ đại nghị, bị hạn chế bởi tài sản"
        },
        6: {
            title: "Dân Chủ XHCN (1917-nay)",
            description: "Hình thức dân chủ cao nhất, bảo đảm quyền lực thực sự thuộc về nhân dân lao động dưới sự lãnh đạo của Đảng Cộng sản, vì lợi ích của đại đa số.",
            period: "Hiện đại",
            characteristics: "Dân chủ của đại đa số nhân dân"
        }
    };

    // Animate milestones in sequence
    const milestones = document.querySelectorAll('.timeline-milestone');
    const container = document.querySelector('.historical-timeline-container');
    
    // Position milestones along timeline
    milestones.forEach((milestone, index) => {
        const position = (index + 1) * (100 / (milestones.length + 1));
        milestone.style.position = 'absolute';
        milestone.style.left = `${position}%`;
        milestone.style.top = '50%';
        milestone.style.transform = 'translate(-50%, -50%)';
        
        // Animate in sequence
        setTimeout(() => {
            milestone.classList.add('animate');
        }, index * 300);
        
        // Add click handler
        milestone.addEventListener('click', () => {
            showMilestoneDetail(milestone.dataset.milestone, milestoneData);
        });
        
        // Add hover effects
        milestone.addEventListener('mouseenter', () => {
            milestone.style.zIndex = '15';
        });
        
        milestone.addEventListener('mouseleave', () => {
            milestone.style.zIndex = '5';
        });
    });
}

// ===== MILESTONE DETAIL POPUP =====
function showMilestoneDetail(milestoneId, data) {
    const viewport = document.querySelector('.camera-viewport');
    const title = viewport.querySelector('.milestone-title');
    const description = viewport.querySelector('.milestone-description');
    const statLabels = viewport.querySelectorAll('.stat-label');
    const statValues = viewport.querySelectorAll('.stat-value');
    
    const milestoneInfo = data[milestoneId];
    
    if (milestoneInfo) {
        title.textContent = milestoneInfo.title;
        description.textContent = milestoneInfo.description;
        
        if (statLabels[0] && statValues[0]) {
            statValues[0].textContent = milestoneInfo.period;
        }
        if (statLabels[1] && statValues[1]) {
            statValues[1].textContent = milestoneInfo.characteristics;
        }
        
        // Show viewport with animation
        viewport.classList.add('active');
        
        // Hide after 5 seconds or on click
        setTimeout(() => {
            viewport.classList.remove('active');
        }, 8000);
        
        viewport.addEventListener('click', () => {
            viewport.classList.remove('active');
        });
        
        console.log(`📖 Showing details for: ${milestoneInfo.title}`);
    }
}

// ===== MILESTONE INTERACTIONS =====
function initializeMilestoneInteractions() {
    const milestones = document.querySelectorAll('.timeline-milestone');
    
    milestones.forEach(milestone => {
        // Enhanced hover effects
        milestone.addEventListener('mouseenter', () => {
            // Scale up and add glow
            milestone.style.transform = 'translate(-50%, -50%) scale(1.15)';
            milestone.style.filter = 'drop-shadow(0 0 20px rgba(193, 155, 10, 0.8))';
            
            // Animate ring
            const ring = milestone.querySelector('.milestone-ring');
            if (ring) {
                ring.style.opacity = '1';
                ring.style.animation = 'ringRotate 2s linear infinite';
            }
        });
        
        milestone.addEventListener('mouseleave', () => {
            milestone.style.transform = 'translate(-50%, -50%) scale(1)';
            milestone.style.filter = 'none';
            
            const ring = milestone.querySelector('.milestone-ring');
            if (ring) {
                ring.style.opacity = '0.6';
            }
        });
        
        // Click feedback
        milestone.addEventListener('click', () => {
            milestone.style.transform = 'translate(-50%, -50%) scale(0.95)';
            setTimeout(() => {
                milestone.style.transform = 'translate(-50%, -50%) scale(1.15)';
            }, 100);
        });
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    console.log('🎬 Setting up scroll animations');
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special handling for timeline container
                if (entry.target.classList.contains('historical-timeline-container')) {
                    animateTimelineEntry();
                }
                
                // Special handling for overview items
                if (entry.target.classList.contains('overview-item')) {
                    animateOverviewItem(entry.target);
                }
                
                // Special handling for essence cards
                if (entry.target.classList.contains('essence-card')) {
                    animateEssenceCard(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(`
        .overview-item,
        .historical-timeline-container,
        .essence-card,
        .evolution-step,
        .definition-highlight,
        .lenin-quote
    `);
    
    animatableElements.forEach(el => observer.observe(el));
}

// ===== SPECIALIZED ANIMATIONS =====
function animateTimelineEntry() {
    const container = document.querySelector('.historical-timeline-container');
    const stars = container.querySelectorAll('.star');
    const path = container.querySelector('.time-flow-path');
    
    // Animate stars with staggered delay
    stars.forEach((star, index) => {
        setTimeout(() => {
            star.style.animation = `twinkle 3s infinite ${index * 0.2}s`;
        }, index * 100);
    });
    
    // Animate time flow path
    if (path) {
        path.style.animation = 'timeFlow 4s ease-in-out infinite';
    }
    
    console.log('⭐ Timeline stars animated');
}

function animateOverviewItem(item) {
    const number = item.querySelector('.overview-number');
    const content = item.querySelector('.overview-content');
    
    if (number) {
        number.style.transform = 'scale(1.1)';
        number.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            number.style.transform = 'scale(1)';
        }, 500);
    }
    
    if (content) {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        content.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 200);
    }
}

function animateEssenceCard(card) {
    const header = card.querySelector('.card-header');
    const content = card.querySelector('.card-content');
    const items = card.querySelectorAll('li');
    
    if (header) {
        header.style.transform = 'translateY(-10px)';
        header.style.transition = 'transform 0.6s ease';
        
        setTimeout(() => {
            header.style.transform = 'translateY(0)';
        }, 100);
    }
    
    if (items.length > 0) {
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = `all 0.5s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 300 + (index * 100));
        });
    }
}

// ===== NAVIGATION ENHANCEMENTS =====
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Handle internal navigation
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            
            // Visual feedback
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // Active section tracking
    const updateActiveNav = () => {
        let activeSection = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                activeSection = section.id;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeSection}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', throttle(updateActiveNav, 100));
}

// ===== HERO ANIMATIONS =====
function initializeHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroStats = document.querySelectorAll('.stat-item');
    const heroImage = document.querySelector('.hero-img');
    
    // Staggered entrance animations
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(20px)';
        heroSubtitle.style.transition = 'all 1s ease';
        
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 600);
    }
    
    // Animate stats with delay
    heroStats.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateX(-20px)';
        stat.style.transition = `all 0.8s ease ${0.9 + (index * 0.2)}s`;
        
        setTimeout(() => {
            stat.style.opacity = '1';
            stat.style.transform = 'translateX(0)';
        }, 900 + (index * 200));
    });
    
    // Hero image animation
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'scale(0.8) rotate(-5deg)';
        heroImage.style.transition = 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'scale(1) rotate(0deg)';
        }, 1200);
    }
    
    console.log(' Hero animations initialized');
}

// ===== UTILITY FUNCTIONS =====
function throttle(func, wait) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, wait);
        }
    };
}

// Add CSS classes for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.8s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .timeline-milestone {
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .overview-item {
        transition: all 0.4s ease;
    }
    
    .essence-card {
        transition: all 0.4s ease;
    }
`;
document.head.appendChild(style);

// ===== PERFORMANCE MONITORING =====
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(` Website fully loaded in ${Math.round(loadTime)}ms`);
    
    // Check for any missing images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', () => {
            console.warn(` Failed to load image: ${img.src}`);
            img.style.display = 'none';
        });
    });
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeTimeline,
        showMilestoneDetail,
        initializeScrollEffects,
        throttle
    };
}

console.log(' Democracy Website JavaScript Loaded Successfully');
