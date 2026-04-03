// Data for Modals
const servicesData = {
    cachorros: [
        { title: "Primer Baño", desc: "Introducción suave al agua con champús hipoalergénicos.", price: "$45", img: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=600&q=80" },
        { title: "Corte de Uñas", desc: "Limado suave para evitar rasguños.", price: "$15", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" },
        { title: "Masaje Relajante", desc: "Ayuda a la socialización y reduce el estrés.", price: "$30", img: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=600&q=80" },
        { title: "Limpieza de Oídos", desc: "Prevención de infecciones con productos naturales.", price: "$20", img: "https://images.unsplash.com/photo-1537151608804-ea2f14cb1f3f?auto=format&fit=crop&w=600&q=80" },
        { title: "Cepillado Dental", desc: "Acostumbramiento a la higiene bucal.", price: "$25", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80" },
        { title: "Deslanado Suave", desc: "Remoción de pelo muerto sin irritar la piel.", price: "$40", img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80" },
        { title: "Spa Facial", desc: "Limpieza de lágrimas y pliegues.", price: "$35", img: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=600&q=80" },
        { title: "Acondicionamiento", desc: "Tratamiento de hidratación profunda.", price: "$50", img: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&w=600&q=80" },
        { title: "Paquete Puppy Love", desc: "Experiencia completa de spa para cachorros.", price: "$120", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80" }
    ],
    perros: [
        { title: "Corte de Raza", desc: "Estilismo profesional según el estándar de la raza.", price: "$80", img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80" },
        { title: "Baño de Ozono", desc: "Terapia para problemas de piel y relajación.", price: "$65", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" },
        { title: "Stripping", desc: "Técnica manual para razas de pelo duro.", price: "$90", img: "https://images.unsplash.com/photo-1537151608804-ea2f14cb1f3f?auto=format&fit=crop&w=600&q=80" },
        { title: "Masaje Terapéutico", desc: "Alivio para perros mayores o con artritis.", price: "$55", img: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=600&q=80" },
        { title: "Tratamiento de Keratina", desc: "Restauración del brillo y suavidad del manto.", price: "$70", img: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&w=600&q=80" },
        { title: "Limpieza Dental Profunda", desc: "Sin anestesia, usando ultrasonido.", price: "$150", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80" },
        { title: "Pedicura Spa", desc: "Corte, limado y bálsamo hidratante en almohadillas.", price: "$30", img: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=600&q=80" },
        { title: "Baño Antipulgas", desc: "Tratamiento natural y efectivo.", price: "$50", img: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=600&q=80" },
        { title: "Paquete Royal Dog", desc: "El tratamiento de lujo definitivo.", price: "$200", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80" }
    ],
    gatos: [
        { title: "Baño Seco", desc: "Limpieza profunda sin estrés de agua.", price: "$40", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80" },
        { title: "Corte de León", desc: "Estilo clásico y fresco para gatos de pelo largo.", price: "$85", img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80" },
        { title: "Deslanado Felino", desc: "Reducción de bolas de pelo.", price: "$50", img: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=600&q=80" },
        { title: "Limpieza de Oídos", desc: "Cuidado delicado para prevenir ácaros.", price: "$25", img: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=600&q=80" },
        { title: "Corte de Uñas", desc: "Seguro y rápido.", price: "$20", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80" },
        { title: "Baño Relajante", desc: "Para gatos acostumbrados al agua, con aromaterapia.", price: "$60", img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80" },
        { title: "Spa Facial", desc: "Limpieza de manchas de lágrimas.", price: "$30", img: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=600&q=80" },
        { title: "Cepillado Diario", desc: "Mantenimiento para evitar nudos.", price: "$35", img: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=600&q=80" },
        { title: "Paquete Purrfect", desc: "Mimo total para tu felino.", price: "$150", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80" }
    ],
    adicionales: [
        { title: "Coloración Segura", desc: "Tintes veganos temporales.", price: "$40+", img: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&w=600&q=80" },
        { title: "Aromaterapia", desc: "Aceites esenciales calmantes.", price: "$20", img: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=600&q=80" },
        { title: "Fotografía de Estudio", desc: "Sesión profesional tras el spa.", price: "$100", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80" },
        { title: "Transporte VIP", desc: "Recogida y entrega en vehículo climatizado.", price: "$50", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80" },
        { title: "Guardería de Día", desc: "Cuidado mientras trabajas.", price: "$45/día", img: "https://images.unsplash.com/photo-1537151608804-ea2f14cb1f3f?auto=format&fit=crop&w=600&q=80" },
        { title: "Boutique", desc: "Accesorios de diseñador.", price: "Varía", img: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=600&q=80" },
        { title: "Pastelería Pet-Friendly", desc: "Premios gourmet.", price: "$15+", img: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80" },
        { title: "Fiestas de Cumpleaños", desc: "Organización completa del evento.", price: "$300+", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80" },
        { title: "Consultoría Nutricional", desc: "Dietas personalizadas.", price: "$80", img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80" }
    ]
};

// Translations
const translations = {
    es: {
        slogan: "El amor es una palabra de cuatro patitas",
        menu_home: "Inicio",
        menu_about: "Nosotros",
        menu_services: "Servicios",
        menu_gallery: "Galería",
        menu_contact: "Contacto",
        hero_title: "Elegancia para tu mejor amigo",
        hero_subtitle: "Experiencias de spa y cuidado de ultra-lujo.",
        hero_cta: "Reserva una Cita",
        about_title: "Nuestra Filosofía",
        about_desc: "En Pet-A-Cure, creemos que cada mascota es una obra de arte y un miembro invaluable de la familia. Nuestro santuario fue creado con un solo propósito: devolverles un poco del amor incondicional que nos regalan a diario. Combinamos técnicas de estilismo de vanguardia con un trato compasivo y paciente, asegurando que cada visita sea una experiencia de relajación y lujo absoluto.",
        stat_clients: "Clientes Satisfechos",
        stat_experience: "Años de Experiencia",
        stat_sessions: "Sesiones de Spa",
        stat_awards: "Premios de Estilismo",
        services_title: "Nuestros Servicios",
        cat_puppies: "Cachorros",
        cat_dogs: "Perros",
        cat_cats: "Gatos",
        cat_extras: "Adicionales",
        discover: "Descubrir",
        gallery_title: "Galería Playful",
        test_title: "Experiencia Pet-A-Cure",
        test_1_text: "\"El mejor trato que ha recibido mi perrita. Salió luciendo hermosa y súper relajada.\"",
        test_1_author: "Sofía & Luna",
        test_2_text: "\"Instalaciones de primer nivel. Se nota el amor y la paciencia que tienen con los gatos.\"",
        test_2_author: "Carlos & Milo",
        test_3_text: "\"Un verdadero spa de lujo. Los productos que usan dejaron el pelaje de mi Golden increíble.\"",
        test_3_author: "Elena & Max",
        test_4_text: "\"Atención impecable desde que cruzas la puerta. Mi cachorro ya no le teme al baño.\"",
        test_4_author: "Roberto & Rocky",
        test_5_text: "\"Vale cada centavo. Es una experiencia premium que nuestras mascotas merecen.\"",
        test_5_author: "Ana & Bella",
        contact_title: "Visítanos",
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        slogan: "Love is a four-legged word",
        menu_home: "Home",
        menu_about: "About Us",
        menu_services: "Services",
        menu_gallery: "Gallery",
        menu_contact: "Contact",
        hero_title: "Elegance for your best friend",
        hero_subtitle: "Ultra-luxury spa and grooming experiences.",
        hero_cta: "Book an Appointment",
        about_title: "Our Philosophy",
        about_desc: "At Pet-A-Cure, we believe every pet is a masterpiece and an invaluable family member. Our sanctuary was created with a single purpose: to give back a fraction of the unconditional love they gift us daily. We combine avant-garde grooming techniques with compassionate, patient care, ensuring every visit is an experience of absolute relaxation and luxury.",
        stat_clients: "Happy Clients",
        stat_experience: "Years of Experience",
        stat_sessions: "Spa Sessions",
        stat_awards: "Grooming Awards",
        services_title: "Our Services",
        cat_puppies: "Puppies",
        cat_dogs: "Dogs",
        cat_cats: "Cats",
        cat_extras: "Extras",
        discover: "Discover",
        gallery_title: "Playful Gallery",
        test_title: "Pet-A-Cure Experience",
        test_1_text: "\"The best treatment my dog has ever received. She came out looking beautiful and super relaxed.\"",
        test_1_author: "Sophia & Luna",
        test_2_text: "\"Top-notch facilities. You can feel the love and patience they have with cats.\"",
        test_2_author: "Charles & Milo",
        test_3_text: "\"A true luxury spa. The products they use left my Golden's coat looking incredible.\"",
        test_3_author: "Elena & Max",
        test_4_text: "\"Impeccable attention from the moment you walk in. My puppy is no longer afraid of baths.\"",
        test_4_author: "Robert & Rocky",
        test_5_text: "\"Worth every penny. It's a premium experience our pets deserve.\"",
        test_5_author: "Anna & Bella",
        contact_title: "Visit Us",
        footer_rights: "All rights reserved."
    }
};

let currentLang = 'es';

$(document).ready(function() {
    // GSAP Splash Screen
    const tl = gsap.timeline();
    
    tl.to(".pulse-logo", {
        scale: 1.1,
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
    })
    .to("#splash-screen", {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
        delay: 0.5
    })
    .from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    }, "-=0.5");

    // GSAP ScrollTrigger for Parallax
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".hero-carousel", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Hero Carousel Auto-Play
    const heroSlides = $('.hero-slide');
    let currentHeroSlide = 0;
    
    setInterval(() => {
        heroSlides.eq(currentHeroSlide).removeClass('active');
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        heroSlides.eq(currentHeroSlide).addClass('active');
    }, 5000); // Cambia de imagen cada 5 segundos

    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    
    ScrollTrigger.create({
        trigger: "#about",
        start: "top 70%",
        onEnter: () => {
            stats.forEach(stat => {
                const target = +stat.getAttribute('data-target');
                gsap.to(stat, {
                    innerHTML: target,
                    duration: 2.5,
                    snap: { innerHTML: 1 },
                    ease: "power2.out",
                    onUpdate: function() {
                        // Formatear con comas si es mayor a 999
                        let val = Math.round(this.targets()[0].innerHTML);
                        stat.innerHTML = val.toLocaleString('en-US');
                    }
                });
            });
        },
        once: true
    });

    // Menu Toggle
    $('#menu-toggle').click(function() {
        $('#full-menu').toggleClass('active');
        const bars = $(this).find('.bar');
        if ($('#full-menu').hasClass('active')) {
            gsap.to(bars[0], { y: 4, rotation: 45, duration: 0.3 });
            gsap.to(bars[1], { y: -4, rotation: -45, duration: 0.3 });
            
            gsap.fromTo(".glass-menu li", 
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.2 }
            );
        } else {
            gsap.to(bars[0], { y: 0, rotation: 0, duration: 0.3 });
            gsap.to(bars[1], { y: 0, rotation: 0, duration: 0.3 });
        }
    });

    $('.glass-menu a').click(function() {
        $('#menu-toggle').click();
    });

    // Theme Toggle
    $('#theme-toggle').click(function() {
        const html = $('html');
        const icon = $(this).find('i');
        const logos = $('.brand-logo'); // Select both header and footer logos
        
        // Rutas de los logos
        const logoLightMode = 'images/black.png'; // Logo oscuro para fondo claro
        const logoDarkMode = 'images/white.png'; // Logo blanco para fondo oscuro
        
        if (html.attr('data-theme') === 'light') {
            html.attr('data-theme', 'dark');
            icon.removeClass('fa-moon').addClass('fa-sun');
            logos.attr('src', logoDarkMode);
        } else {
            html.attr('data-theme', 'light');
            icon.removeClass('fa-sun').addClass('fa-moon');
            logos.attr('src', logoLightMode);
        }
    });

    // Language Toggle
    $('#lang-toggle').click(function() {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        $(this).text(currentLang === 'es' ? 'EN' : 'ES');
        
        $('[data-i18n]').each(function() {
            const key = $(this).data('i18n');
            if (translations[currentLang][key]) {
                // Animate text change
                gsap.to(this, {
                    opacity: 0,
                    duration: 0.2,
                    onComplete: () => {
                        $(this).text(translations[currentLang][key]);
                        gsap.to(this, { opacity: 1, duration: 0.2 });
                    }
                });
            }
        });
    });

    // Slick Carousel for Gallery
    $('.gallery-carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // Slick Carousel for Testimonials
    $('.testimonials-carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Modal Logic
    $('.service-card').click(function() {
        const category = $(this).data('category');
        const data = servicesData[category];
        const titleKey = `cat_${category === 'adicionales' ? 'extras' : category}`;
        
        $('.modal-title').text(translations[currentLang][titleKey] || category);
        
        let gridHtml = '';
        data.forEach(item => {
            gridHtml += `
                <div class="service-item">
                    <img src="${item.img}" alt="${item.title}" class="service-img" referrerpolicy="no-referrer">
                    <div class="service-info">
                        <h4>${item.title}</h4>
                        <p>${item.desc}</p>
                        <span class="service-price">${item.price}</span>
                    </div>
                </div>
            `;
        });
        
        $('.modal-grid').html(gridHtml);
        $('#service-modal').addClass('active');
        
        gsap.fromTo(".service-item", 
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.2 }
        );
    });

    $('.close-modal').click(function() {
        $('#service-modal').removeClass('active');
    });

    // Close modal on outside click
    $('#service-modal').click(function(e) {
        if (e.target === this) {
            $(this).removeClass('active');
        }
    });
});
