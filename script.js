// Inicialización de AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de scroll en el header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (!header) return; // Evitar errores si no existe la clase .header
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animación de las tarjetas flotantes con movimiento aleatorio
function animateFloatingCards() {
    const cards = document.querySelectorAll('.card-float');
    
    cards.forEach((card, index) => {
        // Movimiento base con variaciones aleatorias
        setInterval(() => {
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 20;
            const randomRotation = (Math.random() - 0.5) * 10;
            
            card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
        }, 3000 + (index * 500)); // Diferentes intervalos para cada tarjeta
    });
}

// Animación de partículas con movimiento continuo
function animateParticles() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        let x = 0;
        let y = 0;
        let directionX = (Math.random() - 0.5) * 0.5;
        let directionY = (Math.random() - 0.5) * 0.5;
        
        setInterval(() => {
            x += directionX;
            y += directionY;
            
            // Cambiar dirección ocasionalmente
            if (Math.random() < 0.02) {
                directionX = (Math.random() - 0.5) * 0.5;
                directionY = (Math.random() - 0.5) * 0.5;
            }
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        }, 50);
    });
}

// Animación de los iconos de la timeline
function animateTimelineIcons() {
    const icons = document.querySelectorAll('.timeline-icon');
    
    icons.forEach((icon, index) => {
        // Rotación suave continua
        let rotation = 0;
        setInterval(() => {
            rotation += 0.5;
            icon.style.transform = `rotate(${rotation}deg)`;
        }, 50);
        
        // Efecto de brillo ocasional
        setInterval(() => {
            icon.style.boxShadow = '0 0 30px rgba(79, 172, 254, 0.8)';
            setTimeout(() => {
                icon.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            }, 1000);
        }, 5000 + (index * 1000));
    });
}

// Animación de las tarjetas de arquitectura
function animateArchCards() {
    const cards = document.querySelectorAll('.arch-card');
    
    cards.forEach((card, index) => {
        // Efecto hover mejorado
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            const icon = this.querySelector('.arch-icon');
            icon.style.transform = 'rotate(360deg) scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            const icon = this.querySelector('.arch-icon');
            icon.style.transform = 'rotate(0deg) scale(1)';
        });
        
        // Animación automática de los anillos de pulso
        const pulseRing = card.querySelector('.pulse-ring');
        setInterval(() => {
            pulseRing.style.animation = 'none';
            setTimeout(() => {
                pulseRing.style.animation = 'pulse 2s ease-in-out infinite';
            }, 100);
        }, 4000 + (index * 800));
    });
}

// Contador animado para estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 200;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 10);
            } else {
                counter.textContent = target;
            }
        };
        
        // Iniciar cuando el elemento sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Efecto de typewriter para texto
function typewriterEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Animación de gradientes en movimiento
function animateGradients() {
    const gradientElements = document.querySelectorAll('[class*="gradient"]');
    
    gradientElements.forEach(element => {
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            element.style.filter = `hue-rotate(${hue}deg)`;
        }, 100);
    });
}

// Efecto parallax para el hero
function parallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Parallax para partículas
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const rate = scrolled * (0.1 + index * 0.05);
            particle.style.transform += ` translateY(${rate}px)`;
        });
    });
}

// Animación de reveal para elementos
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1
    });
    
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// Funciones para los botones de CTA
function showDiagram() {
    // Crear modal para mostrar diagrama
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Diagrama de Flujo - Sistema de Información</h2>
            <div class="diagram-container">
                <div class="diagram-node">
                    <i class="fas fa-lightbulb"></i>
                    <span>Planificación</span>
                </div>
                <div class="diagram-arrow">↓</div>
                <div class="diagram-node">
                    <i class="fas fa-search"></i>
                    <span>Análisis</span>
                </div>
                <div class="diagram-arrow">↓</div>
                <div class="diagram-node">
                    <i class="fas fa-drafting-compass"></i>
                    <span>Diseño</span>
                </div>
                <div class="diagram-arrow">↓</div>
                <div class="diagram-node">
                    <i class="fas fa-hammer"></i>
                    <span>Desarrollo</span>
                </div>
                <div class="diagram-arrow">↓</div>
                <div class="diagram-node">
                    <i class="fas fa-vial"></i>
                    <span>Pruebas</span>
                </div>
                <div class="diagram-arrow">↓</div>
                <div class="diagram-node">
                    <i class="fas fa-rocket"></i>
                    <span>Implantación</span>
                </div>
                <div class="diagram-arrow">↓</div>
                <div class="diagram-node">
                    <i class="fas fa-tools"></i>
                    <span>Mantenimiento</span>
                </div>
                <div class="diagram-arrow">↓</div>
                <div class="diagram-node">
                    <i class="fas fa-power-off"></i>
                    <span>Retiro</span>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Cerrar modal
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Cerrar al hacer clic fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function downloadNotes() {
    // Crear contenido para descargar
    const content = `
ARQUITECTURA Y DISEÑO DE SISTEMAS DE INFORMACIÓN

1. COMPONENTES PRINCIPALES:
   • Hardware: Equipos físicos (servidores, computadores, dispositivos móviles, redes)
   • Software: Programas y aplicaciones que procesan información
   • Datos: Información organizada en bases de datos
   • Personas: Usuarios que interactúan con el sistema
   • Procesos: Actividades y reglas de manejo de información
   • Redes: Medios de comunicación para flujo de información

2. PROCESO DE DISEÑO:
   • Arquitectura de software (modularidad, interfaces, seguridad)
   • Arquitectura de hardware (servidores, almacenamiento, cloud)
   • Flujos de información y procesos
   • Interfaz de usuario y experiencia de uso

CICLO DE VIDA DEL SISTEMA DE INFORMACIÓN

1. Planificación: Identificación de necesidades y definición de objetivos
2. Análisis: Estudio de procesos actuales y definición de requerimientos
3. Diseño: Definición de arquitectura y diseño de interfaces
4. Desarrollo: Construcción del sistema e integración de módulos
5. Pruebas: Verificación de funcionamiento, seguridad y usabilidad
6. Implantación: Puesta en marcha y capacitación de usuarios
7. Mantenimiento: Operación continua y mejoras del sistema
8. Retiro: Reemplazo por nueva solución al final del ciclo

RESUMEN:
• La arquitectura define cómo se estructura el sistema
• El ciclo de vida describe las 8 fases desde planificación hasta retiro
• Objetivo: Sistema funcional, seguro, escalable y mantenible
    `;
    
    // Crear y descargar archivo
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'sistemas-informacion-apuntes.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Añadir estilos para el modal
const modalStyles = `
.modal {
    display: block;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    animation: fadeIn 0.3s ease;
}

.modal-content {
    background-color: white;
    margin: 5% auto;
    padding: 2rem;
    border-radius: 12px;
    width: 80%;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    animation: slideIn 0.3s ease;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 1rem;
}

.close:hover {
    color: #000;
}

.modal .diagram-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
}

.modal .diagram-node {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 200px;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    animation: nodeAppear 0.5s ease forwards;
    opacity: 0;
    transform: translateY(20px);
}

.modal .diagram-node:nth-child(odd) {
    animation-delay: 0.1s;
}

.modal .diagram-node:nth-child(even) {
    animation-delay: 0.2s;
}

.modal .diagram-arrow {
    font-size: 2rem;
    color: #667eea;
    font-weight: bold;
    animation: arrowBounce 2s ease-in-out infinite;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

@keyframes nodeAppear {
    to { opacity: 1; transform: translateY(0); }
}

@keyframes arrowBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
}
`;

// Añadir estilos al documento
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Inicializar todas las animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Pequeño delay para asegurar que todo esté cargado
    setTimeout(() => {
        animateFloatingCards();
        animateParticles();
        animateTimelineIcons();
        animateArchCards();
        animateCounters();
        revealOnScroll();
    parallaxEffect();
    // Crear ondas solo si existe .hero (evita error reportado)
    try { createWaves(); } catch(_) {}
    }, 500);
});

// Animación adicional: ondas en el fondo
function createWaves() {
    const hero = document.querySelector('.hero');
    if (!hero) return; // Evita error si no existe sección hero
    const waves = document.createElement('div');
    waves.className = 'waves';
    waves.innerHTML = `
        <svg viewBox="0 0 1440 320">
            <path fill="rgba(255,255,255,0.1)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    `;
    hero.appendChild(waves);
    
    // Añadir estilos para las ondas
    const waveStyles = `
        .waves {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
        }
        
        .waves svg {
            position: relative;
            display: block;
            width: calc(100% + 1.3px);
            height: 150px;
            animation: waveMove 10s ease-in-out infinite;
        }
        
        @keyframes waveMove {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-20px); }
        }
    `;
    
    const waveStyleSheet = document.createElement('style');
    waveStyleSheet.textContent = waveStyles;
    document.head.appendChild(waveStyleSheet);
}

// Llamar a la función de ondas
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(createWaves, 1000);
});

// ===================================
// FUNCIONES DE DIAGRAMAS INTERACTIVOS
// ===================================

// Variables globales para charts
let performanceChart = null;
let architectureComparisonChart = null;
let cqrsPerformanceChart = null;
let cqrsBenefitsChart = null;

// Función principal para inicializar diagramas
function initDiagrams() {
    // Inicializar botones de patrones arquitectónicos
    initArchitectureButtons();
    
    // Mostrar el primer diagrama por defecto
    showArchitectureDiagram('monolith');
    
    // Inicializar gráficos principales
    initPerformanceChart();
    initArchitectureComparisonChart();
    initArchitectureComparisonDashboard();
    
    // Agregar tooltips a nodos con data-info
    initTooltips();

    // Inicializar sección CQRS si existe
    initCQRSSection();
}

// Inicializar botones de patrones arquitectónicos
function initArchitectureButtons() {
    const buttons = document.querySelectorAll('.architecture-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            // Obtener el patrón seleccionado
            const selectedArch = this.getAttribute('data-arch');
            
            // Mostrar el diagrama correspondiente
            showArchitectureDiagram(selectedArch);
        });
    });
    
    // Activar el primer botón por defecto
    buttons[0]?.classList.add('active');
}

// Mostrar diagrama de arquitectura específico
function showArchitectureDiagram(architecture) {
    // Normalizar claves (botón 'eventdriven' -> id 'event-driven')
    const idKey = architecture === 'eventdriven' ? 'event-driven' : architecture;
    // Ocultar todos los diagramas
    const allDiagrams = document.querySelectorAll('.architecture-diagram');
    allDiagrams.forEach(diagram => {
        diagram.classList.add('hidden');
        diagram.classList.remove('active');
    });
    
    // Mostrar el diagrama seleccionado
    const selectedDiagram = document.getElementById(`${idKey}-diagram`);
    if (selectedDiagram) {
        selectedDiagram.classList.remove('hidden');
        selectedDiagram.classList.add('active');
        
        // Animar la aparición del diagrama
        anime({
            targets: selectedDiagram,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            easing: 'easeOutCubic'
        });
        
        // Animar los nodos del diagrama
        const nodes = selectedDiagram.querySelectorAll('.diagram-node');
        anime({
            targets: nodes,
            scale: [0.8, 1],
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 500,
            easing: 'easeOutElastic(1, .8)'
        });
        
        // Ejecutar animaciones específicas según el tipo
        setTimeout(() => {
            animateSpecificDiagram(idKey);
        }, 800);
    }
}

// Animaciones específicas para cada tipo de diagrama
function animateSpecificDiagram(architecture) {
    switch(architecture) {
        case 'monolith':
            animateMonolithDiagram();
            break;
        case 'microservices':
            animateMicroservicesDiagram();
            break;
        case 'layered':
            animateLayeredDiagram();
            break;
        case 'mvc':
            animateMVCDiagram();
            break;
    case 'eventdriven':
    case 'event-driven':
            animateEventDrivenDiagram();
            break;
        case 'serverless':
            animateServerlessDiagram();
            break;
        case 'cqrs':
            animateCQRS();
            break;
    }
}

// Animación específica para diagrama monolítico
function animateMonolithDiagram() {
    const layers = document.querySelectorAll('#monolith-diagram .bg-green-600, #monolith-diagram .bg-yellow-600, #monolith-diagram .bg-red-600, #monolith-diagram .bg-purple-600');
    
    anime({
        targets: layers,
        scale: [1, 1.05, 1],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeInOutSine'
    });
}

// Animación específica para diagrama de microservicios
function animateMicroservicesDiagram() {
    const connections = document.querySelectorAll('#microservices-diagram .connection-lines line');
    
    // Animar conexiones
    anime({
        targets: connections,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 100 }
    });
    
    // Simular comunicación entre servicios
    setTimeout(() => {
        simulateMicroservicesCommunication();
    }, 1000);
}

// Simular comunicación en microservicios
function simulateMicroservicesCommunication() {
    const diagram = document.querySelector('#microservices-diagram .microservices-container');
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'absolute w-2 h-2 bg-yellow-400 rounded-full';
            particle.style.left = '50%';
            particle.style.top = '15%';
            particle.style.zIndex = '10';
            diagram.appendChild(particle);
            
            anime({
                targets: particle,
                translateX: anime.random(-150, 150),
                translateY: anime.random(50, 150),
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                duration: 2000,
                easing: 'easeOutCubic',
                complete: () => particle.remove()
            });
        }, i * 800);
    }
}

// Animación específica para diagrama en capas
function animateLayeredDiagram() {
    const layers = document.querySelectorAll('#layered-diagram .layer');
    
    anime({
        targets: layers,
        translateX: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(300),
        duration: 800,
        easing: 'easeOutElastic(1, .8)'
    });
    
    // Animar flechas
    const arrows = document.querySelectorAll('#layered-diagram .text-3xl');
    anime({
        targets: arrows,
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(400, {start: 200}),
        duration: 600
    });
}

// Animación específica para diagrama MVC
function animateMVCDiagram() {
    const connections = document.querySelectorAll('#mvc-diagram .mvc-connections line');

    // Animar conexiones MVC con ligero rebote
    anime({
        targets: connections,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeOutCubic',
        duration: 1400,
        delay: (el, i) => i * 180
    });

    // Pequeño ripple en nodos principales
    const nodes = document.querySelectorAll('#mvc-diagram .diagram-node .node-circle');
    anime({ targets: nodes, scale: [1, 1.08, 1], duration: 700, delay: anime.stagger(120), easing: 'easeOutSine' });

    // Simular flujo de datos
    setTimeout(() => { simulateMVCFlow(); }, 1600);
}

// Simular flujo MVC
function simulateMVCFlow() {
    const steps = [
        { element: '.mvc-controller', message: 'Procesando solicitud...' },
        { element: '.mvc-model', message: 'Consultando datos...' },
        { element: '.mvc-view', message: 'Renderizando vista...' }
    ];
    
    steps.forEach((step, index) => {
        setTimeout(() => {
            const element = document.querySelector(`#mvc-diagram ${step.element} .node-circle`);
            if (element) {
                element.classList.add('node-active');

                // Tooltip temporal
                const tooltip = document.createElement('div');
                tooltip.className = 'absolute bg-gray-900 text-white px-3 py-1 rounded text-xs top-full mt-2 left-1/2 transform -translate-x-1/2 shadow-lg';
                tooltip.textContent = step.message;
                element.parentElement.appendChild(tooltip);

                // Efecto ping
                const ping = document.createElement('span');
                ping.className = 'absolute inline-flex h-8 w-8 rounded-full opacity-75 -top-2 -right-2';
                ping.style.border = '2px solid currentColor';
                element.appendChild(ping);
                anime({ targets: ping, scale: [0.4, 1.6], opacity: [0.8, 0], duration: 900, easing: 'easeOutCubic', complete: () => ping.remove() });

                setTimeout(() => {
                    element.classList.remove('node-active');
                    tooltip.remove();
                }, 1500);
            }
        }, index * 900);
    });
}

// Animación específica para diagrama orientado a eventos
function animateEventDrivenDiagram() {
    const eventBus = document.querySelector('#event-driven-diagram .event-bus .node-circle');
    // Redibujar líneas en base a posiciones reales (evita desalineaciones en responsive)
    drawEventDrivenLines();
    
    // Animar bus de eventos
    anime({
        targets: eventBus,
        scale: [1, 1.2, 1],
        duration: 1000,
        easing: 'easeInOutSine',
        loop: 2
    });
    
    // Simular eventos
    setTimeout(() => {
        simulateEventFlow();
    }, 1200);
}

// Simular flujo de eventos
function simulateEventFlow() {
    const eventTypes = [
        { name: 'UserCreated', color: '#3b82f6', from: { x: 15, y: 15 }, to: { x: 85, y: 85 } },
        { name: 'OrderPlaced', color: '#10b981', from: { x: 15, y: 50 }, to: { x: 85, y: 50 } },
        { name: 'PaymentProcessed', color: '#f59e0b', from: { x: 15, y: 85 }, to: { x: 85, y: 15 } }
    ];
    
    eventTypes.forEach((event, index) => {
        setTimeout(() => {
            createEventFlowParticle(event);
        }, index * 1000);
    });
}
// Dibuja líneas entre productores/consumidores y el event bus usando posiciones reales
function drawEventDrivenLines() {
    const container = document.getElementById('event-driven-container');
    const svg = document.getElementById('event-lines');
    if (!container || !svg) return;

    svg.innerHTML = '';
    const bus = container.querySelector('.event-bus .node-circle');
    if (!bus) return;
    const busRect = bus.getBoundingClientRect();
    const contRect = container.getBoundingClientRect();
    const cx = busRect.left - contRect.left + busRect.width / 2;
    const cy = busRect.top - contRect.top + busRect.height / 2;

    const addLineTo = (el, color = '#eab308') => {
        const r = el.getBoundingClientRect();
        const x = r.left - contRect.left + r.width / 2;
        const y = r.top - contRect.top + r.height / 2;
        const line = document.createElementNS('http://www.w3.org/2000/svg','line');
        line.setAttribute('x1', String(x));
        line.setAttribute('y1', String(y));
        line.setAttribute('x2', String(cx));
        line.setAttribute('y2', String(cy));
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width','2');
        svg.appendChild(line);
    };

    container.querySelectorAll('.producer .node-circle').forEach(n => addLineTo(n));
    container.querySelectorAll('.consumer .node-circle').forEach(n => addLineTo(n));
}

window.addEventListener('resize', () => {
    // Mantener líneas alineadas al cambiar tamaño
    drawEventDrivenLines();
});


// Crear partícula de flujo de eventos
function createEventFlowParticle(event) {
    const diagram = document.querySelector('#event-driven-diagram');
    const particle = document.createElement('div');
    particle.className = 'absolute w-3 h-3 rounded-full flex items-center justify-center text-xs font-bold text-white';
    particle.style.backgroundColor = event.color;
    particle.style.left = event.from.x + '%';
    particle.style.top = event.from.y + '%';
    particle.style.zIndex = '10';
    particle.textContent = 'E';
    
    diagram.appendChild(particle);
    
    // Crear etiqueta del evento
    const label = document.createElement('div');
    label.className = 'absolute bg-gray-800 text-white px-2 py-1 rounded text-xs';
    label.textContent = event.name;
    label.style.left = event.from.x + '%';
    label.style.top = (event.from.y + 5) + '%';
    label.style.zIndex = '10';
    diagram.appendChild(label);
    
    // Animar partícula
    anime({
        targets: particle,
        left: event.to.x + '%',
        top: event.to.y + '%',
        scale: [0, 1.5, 1, 0],
        duration: 2500,
        easing: 'easeInOutCubic',
        complete: () => particle.remove()
    });
    
    // Animar etiqueta
    anime({
        targets: label,
        left: event.to.x + '%',
        top: (event.to.y + 5) + '%',
        opacity: [0, 1, 1, 0],
        duration: 2500,
        complete: () => label.remove()
    });
}

// Animación específica para diagrama serverless
function animateServerlessDiagram() {
    const lambdas = document.querySelectorAll('#serverless-diagram .lambda-node');
    drawServerlessLines();
    
    // Animar funciones lambda
    anime({
        targets: lambdas,
        scale: [1, 1.2, 1],
        duration: 800,
        delay: anime.stagger(200),
        easing: 'easeOutElastic(1, .8)'
    });
    
    // Simular ejecución de funciones y flujo visual
    setTimeout(() => {
        simulateServerlessExecution();
        simulateServerlessFlow();
    }, 1000);
}

// Simular ejecución serverless
function simulateServerlessExecution() {
    const lambdas = document.querySelectorAll('#serverless-diagram .lambda-node .node-circle');
    
    lambdas.forEach((lambda, index) => {
        setTimeout(() => {
            lambda.classList.add('node-active');
            
            // Crear indicador de ejecución
            const indicator = document.createElement('div');
            indicator.className = 'absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping';
            lambda.appendChild(indicator);
            
            setTimeout(() => {
                lambda.classList.remove('node-active');
                indicator.remove();
            }, 1500);
        }, index * 500);
    });
}

// Dibuja líneas en serverless según posiciones reales
function drawServerlessLines() {
    const container = document.getElementById('serverless-container');
    const svg = document.getElementById('serverless-lines');
    if (!container || !svg) return;
    svg.innerHTML = '';

    const toCenter = el => {
        const r = el.getBoundingClientRect();
        const c = container.getBoundingClientRect();
        return { x: r.left - c.left + r.width/2, y: r.top - c.top + r.height/2 };
    };

    const client = container.querySelector('.srv-client .node-circle');
    const gateway = container.querySelector('.srv-gateway .node-circle');
    const lambdas = container.querySelectorAll('.srv-lambda .node-circle');
    const db = container.querySelector('.srv-db .node-circle');
    const storage = container.querySelector('.srv-storage .node-circle');
    const msg = container.querySelector('.srv-messaging .node-circle');
    if (!client || !gateway) return;

    // Cliente -> API Gateway
    addLine(svg, toCenter(client), toCenter(gateway), '#8b5cf6');
    // Gateway -> Lambdas
    lambdas.forEach(lambda => addLine(svg, toCenter(gateway), toCenter(lambda), '#f97316'));
    // Lambda -> Servicios
    const mid = lambdas[1] || lambdas[0];
    if (mid) {
        if (db) addLine(svg, toCenter(mid), toCenter(db), '#10b981');
        if (storage) addLine(svg, toCenter(mid), toCenter(storage), '#ef4444');
        if (msg) addLine(svg, toCenter(mid), toCenter(msg), '#3b82f6');
    }
}

function addLine(svg, p1, p2, color) {
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1', p1.x);
    line.setAttribute('y1', p1.y);
    line.setAttribute('x2', p2.x);
    line.setAttribute('y2', p2.y);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', '2');
    // Añadir flecha al final del trazo
    const markerId = getArrowMarker(svg, color);
    line.setAttribute('marker-end', `url(#${markerId})`);
    line.style.filter = 'drop-shadow(0 0 6px rgba(255,255,255,.12))';
    svg.appendChild(line);
    // animación de trazo profesional
    anime({ targets: line, strokeDasharray: [1, 500], strokeDashoffset: [500, 0], duration: 1200, easing: 'easeOutCubic' });
}

// Devuelve/crea un marcador de flecha para el color dado
function getArrowMarker(svg, color) {
    const id = `arrow-${color.replace('#','')}`;
    let marker = svg.querySelector(`#${id}`);
    if (!marker) {
        let defs = svg.querySelector('defs');
        if (!defs) { defs = document.createElementNS('http://www.w3.org/2000/svg','defs'); svg.appendChild(defs); }
        marker = document.createElementNS('http://www.w3.org/2000/svg','marker');
        marker.setAttribute('id', id);
        marker.setAttribute('viewBox', '0 0 10 10');
        marker.setAttribute('refX', '10');
        marker.setAttribute('refY', '5');
        marker.setAttribute('markerWidth', '6');
        marker.setAttribute('markerHeight', '6');
        marker.setAttribute('orient', 'auto-start-reverse');
        const path = document.createElementNS('http://www.w3.org/2000/svg','path');
        path.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
        path.setAttribute('fill', color);
        marker.appendChild(path);
        defs.appendChild(marker);
    }
    return id;
}

// Flujo de partículas entre nodos serverless
function simulateServerlessFlow() {
    const container = document.getElementById('serverless-container');
    if (!container) return;
    const client = container.querySelector('.srv-client .node-circle');
    const gateway = container.querySelector('.srv-gateway .node-circle');
    const lambdas = Array.from(container.querySelectorAll('.srv-lambda .node-circle'));
    const db = container.querySelector('.srv-db .node-circle');
    const storage = container.querySelector('.srv-storage .node-circle');
    const msg = container.querySelector('.srv-messaging .node-circle');
    if (!client || !gateway || lambdas.length === 0) return;

    const run = (from, to, color, delay=0) => createTravelParticle(container, from, to, color, delay);
    // Cliente -> Gateway
    run(client, gateway, '#8b5cf6', 0);
    // Gateway -> Lambdas
    lambdas.forEach((l, i) => run(gateway, l, '#f97316', 300 + i*250));
    // Lambda central -> servicios
    const mid = lambdas[1] || lambdas[0];
    if (mid) {
        if (db) run(mid, db, '#10b981', 1200);
        if (storage) run(mid, storage, '#ef4444', 1400);
        if (msg) run(mid, msg, '#3b82f6', 1600);
    }
}

function createTravelParticle(container, fromEl, toEl, color, delay) {
    if (!fromEl || !toEl) return;
    const cRect = container.getBoundingClientRect();
    const f = fromEl.getBoundingClientRect();
    const t = toEl.getBoundingClientRect();
    const dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.width = '8px';
    dot.style.height = '8px';
    dot.style.borderRadius = '9999px';
    dot.style.background = color;
    dot.style.left = (f.left - cRect.left + f.width/2) + 'px';
    dot.style.top = (f.top - cRect.top + f.height/2) + 'px';
    dot.style.zIndex = '10';
    container.appendChild(dot);
    anime({
        targets: dot,
        left: (t.left - cRect.left + t.width/2) + 'px',
        top: (t.top - cRect.top + t.height/2) + 'px',
        duration: 900,
        delay,
        easing: 'easeInOutCubic',
        complete: () => dot.remove()
    });
}

window.addEventListener('resize', () => {
    drawServerlessLines();
});

// Inicializa el dashboard de comparación (gráficos y selector descriptivo)
function initArchitectureComparisonDashboard() {
    const ctxComplexity = document.getElementById('complexityChart');
    const ctxScalability = document.getElementById('scalabilityRadarChart');
    if (ctxComplexity && ctxScalability && window.Chart) {
        // Complejidad vs Rendimiento
        new Chart(ctxComplexity.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Monolito', 'Microservicios', 'Serverless', 'Eventos'],
                datasets: [
                    { label: 'Complejidad', backgroundColor: '#f97316', data: [2, 5, 3, 4] },
                    { label: 'Rendimiento', backgroundColor: '#22c55e', data: [4, 4, 3, 4] }
                ]
            },
            options: {
                responsive: true,
                plugins: { legend: { labels: { color: '#fff' } } },
                scales: { x: { ticks: { color: '#d1d5db' } }, y: { ticks: { color: '#d1d5db' }, beginAtZero:true, max:6 } }
            }
        });
        // Radar de escalabilidad
        new Chart(ctxScalability.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['Autoescalado', 'Coste', 'Latencia', 'Mantenimiento', 'Despliegue'],
                datasets: [
                    { label: 'Monolito', data: [2, 4, 4, 3, 3], borderColor: '#60a5fa', backgroundColor: 'rgba(96,165,250,.2)' },
                    { label: 'Microservicios', data: [4, 3, 3, 4, 4], borderColor: '#a78bfa', backgroundColor: 'rgba(167,139,250,.2)' },
                    { label: 'Serverless', data: [5, 4, 3, 4, 5], borderColor: '#34d399', backgroundColor: 'rgba(52,211,153,.2)' },
                    { label: 'Eventos', data: [4, 3, 4, 4, 4], borderColor: '#fbbf24', backgroundColor: 'rgba(251,191,36,.2)' }
                ]
            },
            options: { plugins: { legend: { labels: { color: '#fff' } } }, scales: { r: { angleLines: { color:'#374151' }, grid: { color:'#374151' }, pointLabels: { color:'#e5e7eb' }, ticks: { display:false } } } }
        });
    }

    // Contenido del selector interactivo
    const details = document.getElementById('arch-details');
    const buttons = document.querySelectorAll('.architecture-btn');
    if (details && buttons.length) {
        const content = {
            monolith: 'Aplicación unificada, despliegue sencillo, menor complejidad inicial.',
            microservices: 'Servicios independientes, desacoplamiento y escalabilidad granular.',
            serverless: 'Ejecución bajo demanda, sin servidores gestionados, coste por uso.',
            eventdriven: 'Componentes reaccionan a eventos, alto desacoplamiento y extensibilidad.'
        };
        const render = (key) => { details.textContent = content[key] || ''; };
        buttons.forEach(b => b.addEventListener('click', () => render(b.dataset.arch)));
        render('monolith');
    }
}

// Inicializar tooltips para nodos con información
function initTooltips() {
    const nodesWithInfo = document.querySelectorAll('[data-info]');
    
    nodesWithInfo.forEach(node => {
        node.addEventListener('mouseenter', function() {
            const info = this.getAttribute('data-info');
            if (info) {
                showTooltip(this, info);
            }
        });
        
        node.addEventListener('mouseleave', function() {
            hideTooltip(this);
        });
    });
}

// Mostrar tooltip
function showTooltip(element, text) {
    // Remover tooltip existente
    hideTooltip(element);
    
    const tooltip = document.createElement('div');
    tooltip.className = 'architecture-tooltip absolute bg-gray-900 text-white p-3 rounded-lg shadow-lg z-50 max-w-xs text-sm';
    tooltip.textContent = text;
    tooltip.style.bottom = '100%';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.marginBottom = '10px';
    tooltip.style.pointerEvents = 'none';
    
    // Agregar flecha del tooltip
    const arrow = document.createElement('div');
    arrow.className = 'absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0';
    arrow.style.borderLeft = '6px solid transparent';
    arrow.style.borderRight = '6px solid transparent';
    arrow.style.borderTop = '6px solid rgb(17 24 39)';
    tooltip.appendChild(arrow);
    
    element.style.position = 'relative';
    element.appendChild(tooltip);
    
    // Animar aparición
    anime({
        targets: tooltip,
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 300,
        easing: 'easeOutCubic'
    });
}

// Ocultar tooltip
function hideTooltip(element) {
    const tooltip = element.querySelector('.architecture-tooltip');
    if (tooltip) {
        anime({
            targets: tooltip,
            opacity: [1, 0],
            translateY: [0, -10],
            duration: 200,
            complete: () => tooltip.remove()
        });
    }
}

// Función para crear efectos de partículas en comunicación
function createCommunicationEffect(fromElement, toElement, color = '#fbbf24') {
    const fromRect = fromElement.getBoundingClientRect();
    const toRect = toElement.getBoundingClientRect();
    const container = fromElement.closest('.architecture-diagram');
    
    if (!container) return;
    
    const particle = document.createElement('div');
    particle.className = 'communication-particle';
    particle.style.left = (fromRect.left - container.getBoundingClientRect().left + fromRect.width/2) + 'px';
    particle.style.top = (fromRect.top - container.getBoundingClientRect().top + fromRect.height/2) + 'px';
    particle.style.background = color;
    
    container.appendChild(particle);
    
    anime({
        targets: particle,
        left: (toRect.left - container.getBoundingClientRect().left + toRect.width/2) + 'px',
        top: (toRect.top - container.getBoundingClientRect().top + toRect.height/2) + 'px',
        scale: [0, 1.5, 0],
        opacity: [0, 1, 0],
        duration: 1500,
        easing: 'easeInOutCubic',
        complete: () => particle.remove()
    });
}

// Animar diagrama según patrón seleccionado
function animatePatternDiagram(pattern) {
    if (pattern.includes('microservicios')) {
        animateMicroservices();
    } else if (pattern.includes('eventos')) {
        animateEventDriven();
    } else if (pattern.includes('cqrs')) {
        animateCQRS();
    }
}

// Inicializar y animar diagrama de microservicios
function initMicroservicesDiagram() {
    const nodes = document.querySelectorAll('.microservices-diagram .diagram-node');
    
    // Animar aparición inicial de nodos
    anime({
        targets: nodes,
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 800,
        easing: 'easeOutElastic(1, .8)'
    });
    
    // Agregar eventos de click a los nodos
    nodes.forEach((node, index) => {
        node.addEventListener('click', () => {
            highlightMicroservice(node, index);
        });
    });
}

// Animar microservicios específico
function animateMicroservices() {
    const nodes = document.querySelectorAll('.microservices-diagram .diagram-node');
    const connections = document.querySelectorAll('.microservices-diagram .connection-lines line');
    
    // Resetear y animar nodos
    anime({
        targets: nodes,
        scale: [0.8, 1.2, 1],
        rotation: [0, 360],
        duration: 1000,
        delay: anime.stagger(100),
        easing: 'easeOutBounce'
    });
    
    // Animar conexiones
    anime({
        targets: connections,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 100 }
    });
    
    // Simular comunicación entre servicios
    setTimeout(() => {
        simulateServiceCommunication();
    }, 2000);
}

// Simular comunicación entre servicios
function simulateServiceCommunication() {
    const particles = [];
    const diagram = document.querySelector('.microservices-diagram');
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'event-particle absolute w-3 h-3 bg-blue-400 rounded-full';
        particle.style.left = '50%';
        particle.style.top = '50%';
        diagram.appendChild(particle);
        particles.push(particle);
        
        anime({
            targets: particle,
            translateX: anime.random(-200, 200),
            translateY: anime.random(-100, 100),
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            duration: 2000,
            delay: i * 200,
            easing: 'easeOutCubic',
            complete: () => {
                particle.remove();
            }
        });
    }
}

// Resaltar microservicio específico
function highlightMicroservice(node, index) {
    const circle = node.querySelector('.node-circle');
    const services = ['Usuario', 'Autenticación', 'Pedidos', 'Pagos', 'Inventario', 'Notificaciones'];
    
    // Remover highlight previo
    document.querySelectorAll('.node-active').forEach(n => n.classList.remove('node-active'));
    
    // Agregar highlight
    circle.classList.add('node-active');
    
    // Mostrar información del servicio
    showServiceInfo(services[index], node);
    
    // Animar nodo seleccionado
    anime({
        targets: circle,
        scale: [1, 1.3, 1],
        duration: 600,
        easing: 'easeOutElastic(1, .8)'
    });
}

// Mostrar información del servicio
function showServiceInfo(serviceName, node) {
    const info = {
        'Usuario': 'Gestiona perfiles y preferencias de usuarios',
        'Autenticación': 'Maneja login, registro y tokens JWT',
        'Pedidos': 'Procesa y gestiona órdenes de compra',
        'Pagos': 'Integra pasarelas de pago y transacciones',
        'Inventario': 'Controla stock y disponibilidad',
        'Notificaciones': 'Envía emails, SMS y push notifications'
    };
    
    // Crear tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'absolute bg-gray-900 text-white p-3 rounded-lg shadow-lg z-50 max-w-xs';
    tooltip.innerHTML = `<strong>${serviceName}</strong><br>${info[serviceName]}`;
    tooltip.style.bottom = '100%';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translateX(-50%)';
    tooltip.style.marginBottom = '10px';
    
    node.style.position = 'relative';
    node.appendChild(tooltip);
    
    // Animar aparición del tooltip
    anime({
        targets: tooltip,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 300
    });
    
    // Remover tooltip después de 3 segundos
    setTimeout(() => {
        anime({
            targets: tooltip,
            opacity: [1, 0],
            translateY: [0, -20],
            duration: 300,
            complete: () => tooltip.remove()
        });
    }, 3000);
}

// Inicializar diagrama orientado a eventos
function initEventDrivenDiagram() {
    const producers = document.querySelectorAll('.event-driven-diagram .producer');
    const consumers = document.querySelectorAll('.event-driven-diagram .consumer');
    
    // Animar productores y consumidores
    anime({
        targets: [...producers, ...consumers],
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        duration: 800
    });
}

// Animar arquitectura orientada a eventos
function animateEventDriven() {
    const eventBus = document.querySelector('.event-driven-diagram .event-bus');
    
    // Animar bus de eventos
    anime({
        targets: eventBus,
        scale: [1, 1.1, 1],
        duration: 1000,
        easing: 'easeInOutSine',
        loop: 3
    });
    
    // Simular eventos
    setTimeout(() => {
        simulateEvents();
    }, 1500);
}

// Simular flujo de eventos
function simulateEvents() {
    const eventTypes = [
        { name: 'UserRegistered', color: 'bg-green-400' },
        { name: 'OrderCreated', color: 'bg-blue-400' },
        { name: 'PaymentProcessed', color: 'bg-yellow-400' },
        { name: 'InventoryUpdated', color: 'bg-purple-400' }
    ];
    
    eventTypes.forEach((event, index) => {
        setTimeout(() => {
            createEventParticle(event);
        }, index * 800);
    });
}

// Crear partícula de evento
function createEventParticle(event) {
    const diagram = document.querySelector('.event-driven-diagram');
    const particle = document.createElement('div');
    particle.className = `event-particle absolute w-4 h-4 ${event.color} rounded-full flex items-center justify-center text-xs font-bold text-white`;
    particle.textContent = 'E';
    particle.style.left = '20%';
    particle.style.top = '50%';
    particle.style.zIndex = '10';
    
    diagram.appendChild(particle);
    
    // Animar partícula
    anime({
        targets: particle,
        translateX: [0, 400],
        scale: [0, 1, 1, 0],
        duration: 2000,
        easing: 'easeInOutCubic',
        complete: () => particle.remove()
    });
    
    // Mostrar nombre del evento
    const eventLabel = document.createElement('div');
    eventLabel.className = 'absolute bg-gray-800 text-white px-2 py-1 rounded text-xs';
    eventLabel.textContent = event.name;
    eventLabel.style.left = '20%';
    eventLabel.style.top = '60%';
    eventLabel.style.zIndex = '10';
    
    diagram.appendChild(eventLabel);
    
    anime({
        targets: eventLabel,
        opacity: [0, 1, 1, 0],
        translateX: [0, 400],
        duration: 2000,
        complete: () => eventLabel.remove()
    });
}

// Inicializar diagrama CQRS
function initCQRSDiagram() {
    const nodes = document.querySelectorAll('#cqrs-diagram .diagram-node .node-circle');
    if (!nodes.length) return;
    anime({ targets: nodes, scale: [0.8, 1], opacity: [0, 1], delay: anime.stagger(120), duration: 500, easing: 'easeOutCubic' });
}

// Animar flujo CQRS
function animateCQRS() {
    // Limpiar animaciones previas
    const diagram = document.getElementById('cqrs-diagram');
    if (!diagram) return;
    // Eliminar flechas, etiquetas y highlights previos
    diagram.querySelectorAll('.cqrs-arrow, .cqrs-label, .cqrs-globo, .cqrs-highlight, .cqrs-marco, .cqrs-respuesta').forEach(e => e.remove());
    diagram.querySelectorAll('.node-circle').forEach(n => n.classList.remove('cqrs-pulse','cqrs-glow','cqrs-update','cqrs-query','cqrs-highlighted'));

    // Escena 1: Cliente aparece y pulsa
    const cliente = diagram.querySelector('.client .node-circle');
    cliente.classList.add('cqrs-pulse');

    // Escena 2: Flecha punteada verde Cliente → Command Handler
    setTimeout(() => {
        drawCqrsArrow(diagram, '15%', '25%', '40%', '25%', '#22c55e', 'Comando (Create/Update/...)', 'cqrs-arrow1');
        cliente.classList.remove('cqrs-pulse');
        const handler = diagram.querySelector('.command-handler .node-circle');
        handler.classList.add('cqrs-glow');
    }, 700);

    // Escena 3: Globo en Command Handler y flecha a Event Store
    setTimeout(() => {
        const handler = diagram.querySelector('.command-handler');
        showCqrsGlobo(handler, 'Valida / Ejecuta lógica');
    }, 1400);
    setTimeout(() => {
        drawCqrsArrow(diagram, '45%', '25%', '85%', '25%', '#a855f7', 'Evento generado', 'cqrs-arrow2');
        const handler = diagram.querySelector('.command-handler .node-circle');
        handler.classList.remove('cqrs-glow');
        const eventStore = diagram.querySelector('.event-store .node-circle');
        eventStore.classList.add('cqrs-glow');
    }, 2000);

    // Escena 4: Event Store brilla y popup
    setTimeout(() => {
        const eventStore = diagram.querySelector('.event-store');
        showCqrsGlobo(eventStore, 'Evento almacenado (inmutable)');
    }, 2500);

    // Escena 5: Flecha naranja Event Store → Projection, luego azul Projection → Read Model
    setTimeout(() => {
        drawCqrsArrow(diagram, '85%', '30%', '85%', '70%', '#f59e0b', '', 'cqrs-arrow3');
        const projection = diagram.querySelector('.projection .node-circle');
        projection.classList.add('cqrs-glow');
    }, 3100);
    setTimeout(() => {
        drawCqrsArrow(diagram, '80%', '75%', '45%', '75%', '#06b6d4', 'Actualiza Read Model', 'cqrs-arrow4');
        const projection = diagram.querySelector('.projection .node-circle');
        projection.classList.remove('cqrs-glow');
        const readModel = diagram.querySelector('.read-model .node-circle');
        readModel.classList.add('cqrs-update');
    }, 3700);

    // Escena 6: Consulta
    setTimeout(() => {
        // Marco highlight en la parte inferior
        showCqrsMarco(diagram);
        const queryClient = diagram.querySelector('.query-client .node-circle');
        queryClient.classList.add('cqrs-query');
    }, 4300);
    setTimeout(() => {
        drawCqrsArrow(diagram, '15%', '75%', '40%', '75%', '#fb923c', 'Consulta', 'cqrs-arrow5');
        const readModel = diagram.querySelector('.read-model .node-circle');
        readModel.classList.add('cqrs-glow');
    }, 4800);
    setTimeout(() => {
        // Respuesta
        const readModel = diagram.querySelector('.read-model');
        showCqrsGlobo(readModel, 'Respuesta', 'cqrs-respuesta');
        drawCqrsArrow(diagram, '40%', '75%', '15%', '75%', '#fb923c', '', 'cqrs-arrow6', true);
        const queryClient = diagram.querySelector('.query-client .node-circle');
        queryClient.classList.add('cqrs-glow');
    }, 5300);

    // Escena Final: Highlight animado de todo el recorrido
    setTimeout(() => {
        animateCqrsHighlight(diagram);
    }, 6000);
}

// Dibuja una flecha SVG animada y etiqueta
function drawCqrsArrow(diagram, x1, y1, x2, y2, color, label, id, reverse) {
    // Elimina si ya existe
    const prev = diagram.querySelector('#'+id);
    if (prev) prev.remove();
    const svg = diagram.querySelector('svg.connection-lines');
    if (!svg) return;
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1', x1); line.setAttribute('y1', y1);
    line.setAttribute('x2', x2); line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', '3');
    line.setAttribute('stroke-dasharray', '8,6');
    line.setAttribute('marker-end', 'url(#arrowhead-cqrs)');
    line.setAttribute('id', id);
    line.classList.add('cqrs-arrow');
    svg.appendChild(line);
    // Animación de trazo
    anime({ targets: line, strokeDashoffset: [100,0], duration: 700, easing: 'easeOutCubic' });
    // Etiqueta
    if (label) {
        // Calcular posición real de la flecha en el SVG
        const svgRect = svg.getBoundingClientRect();
        // Convertir % a px respecto al SVG
        const getPx = (val, axis) => {
            if (typeof val === 'string' && val.includes('%')) {
                const num = parseFloat(val);
                return axis === 'x' ? svgRect.width * num / 100 : svgRect.height * num / 100;
            }
            return parseFloat(val);
        };
        const x1px = getPx(x1, 'x');
        const y1px = getPx(y1, 'y');
        const x2px = getPx(x2, 'x');
        const y2px = getPx(y2, 'y');
        // Punto medio
        const mx = (x1px + x2px) / 2;
        const my = (y1px + y2px) / 2;
        // Crear etiqueta
        const lbl = document.createElement('div');
        lbl.className = 'cqrs-label absolute font-bold';
        lbl.style.background = color;
        lbl.style.color = '#fff';
        lbl.style.left = `${mx - 60}px`;
        lbl.style.top = `${my - 28}px`;
        lbl.style.minWidth = '120px';
        lbl.style.maxWidth = '220px';
        lbl.style.textAlign = 'center';
        lbl.style.pointerEvents = 'none';
        lbl.style.fontSize = '1rem';
        lbl.style.padding = '6px 16px';
        lbl.style.borderRadius = '8px';
        lbl.style.boxShadow = '0 2px 12px 0 #0005';
        lbl.style.border = '1.5px solid #fff3';
        lbl.style.letterSpacing = '0.5px';
        lbl.style.zIndex = 40;
        lbl.textContent = label;
        diagram.appendChild(lbl);
        anime({ targets: lbl, opacity: [0,1], translateY: [-10,0], duration: 400 });
    }
}

// Muestra un globo de texto sobre un nodo
function showCqrsGlobo(node, text, extraClass='') {
    const globo = document.createElement('div');
    globo.className = `cqrs-globo absolute bg-gray-900 text-white px-3 py-1 rounded shadow-lg text-xs ${extraClass}`;
    globo.style.left = '110%';
    globo.style.top = '0';
    globo.textContent = text;
    node.appendChild(globo);
    anime({ targets: globo, opacity: [0,1], translateX: [20,0], duration: 400 });
    setTimeout(()=>globo.remove(), 1800);
}

// Muestra un marco highlight en la parte inferior
function showCqrsMarco(diagram) {
    let marco = diagram.querySelector('.cqrs-marco');
    if (marco) marco.remove();
    marco = document.createElement('div');
    marco.className = 'cqrs-marco absolute border-4 border-orange-400 rounded-xl';
    marco.style.left = '5%';
    marco.style.top = '140px';
    marco.style.width = '90%';
    marco.style.height = '90px';
    marco.style.zIndex = '10';
    diagram.appendChild(marco);
    anime({ targets: marco, opacity: [0,1], duration: 400 });
    setTimeout(()=>marco.remove(), 1200);
}

// Highlight animado del recorrido completo
function animateCqrsHighlight(diagram) {
    // Línea animada desde Cliente → Handler → Event Store → Projection → Read Model → Query Client
    const svg = diagram.querySelector('svg.connection-lines');
    if (!svg) return;
    const path = document.createElementNS('http://www.w3.org/2000/svg','polyline');
    path.setAttribute('points','15,25 40,25 85,25 85,70 45,75 15,75');
    path.setAttribute('fill','none');
    path.setAttribute('stroke','#fbbf24');
    path.setAttribute('stroke-width','5');
    path.setAttribute('stroke-dasharray','12,10');
    path.setAttribute('id','cqrs-highlight');
    path.classList.add('cqrs-highlight');
    svg.appendChild(path);
    anime({ targets: path, strokeDashoffset: [200,0], duration: 1200, easing: 'easeInOutCubic' });
    setTimeout(()=>path.remove(), 1800);
}

// Simular comando CQRS
function simulateCommand() {
    const commandFlow = [
        { selector: '.client', text: 'Comando: CreateOrder' },
        { selector: '.command-handler', text: 'Procesando...' },
        { selector: '.event-store', text: 'Evento almacenado' }
    ];
    
    commandFlow.forEach((step, index) => {
        setTimeout(() => {
            const element = document.querySelector(`.cqrs-diagram ${step.selector}`);
            if (element) {
                highlightCQRSElement(element, step.text);
            }
        }, index * 600);
    });
}

// Simular consulta CQRS
function simulateQuery() {
    const queryFlow = [
        { selector: '.query-client', text: 'Consulta: GetOrders' },
        { selector: '.read-model', text: 'Leyendo modelo de lectura' },
        { selector: '.projection', text: 'Proyección actualizada' }
    ];
    
    queryFlow.forEach((step, index) => {
        setTimeout(() => {
            const element = document.querySelector(`.cqrs-diagram ${step.selector}`);
            if (element) {
                highlightCQRSElement(element, step.text);
            }
        }, index * 600);
    });
}

// Resaltar elemento CQRS
function highlightCQRSElement(element, text) {
    const circle = element.querySelector('.node-circle');
    circle.classList.add('node-active');
    
    // Animar elemento
    anime({
        targets: circle,
        scale: [1, 1.2, 1],
        duration: 600
    });
    
    // Mostrar texto de estado
    const statusText = document.createElement('div');
    statusText.className = 'absolute bg-blue-600 text-white px-2 py-1 rounded text-xs top-full mt-1 shadow-lg';
    statusText.textContent = text;
    element.style.position = 'relative';
    element.appendChild(statusText);
    
    // Remover highlight y texto después de 2 segundos
    setTimeout(() => {
        circle.classList.remove('node-active');
        statusText.remove();
    }, 2000);
}

// Inicializar sección CQRS (botón y gráficos)
function initCQRSSection() {
    const cqrsDiagram = document.getElementById('cqrs-diagram');
    if (!cqrsDiagram) return;

    // Botón de animación
    const btn = document.querySelector('.animate-cqrs-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            animateCQRS();
        });
    }

    // Inicializar gráficos específicos
    initCQRSPerformanceChart();
    initCQRSBenefitsChart();

    // Aparición de nodos
    initCQRSDiagram();
}

function initCQRSPerformanceChart() {
    const ctx = document.getElementById('cqrsPerformanceChart');
    if (!ctx) return;
    cqrsPerformanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
                { label: 'Monolito', data: [60, 62, 65, 70, 72, 75], borderColor: '#ef4444', tension: 0.3 },
                { label: 'CQRS + ES', data: [50, 58, 68, 80, 88, 95], borderColor: '#8b5cf6', tension: 0.3 }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#ffffff' } } },
            scales: {
                x: { ticks: { color: '#e5e7eb' }, grid: { color: '#374151' } },
                y: { ticks: { color: '#e5e7eb' }, grid: { color: '#374151' } }
            }
        }
    });
}

function initCQRSBenefitsChart() {
    const ctx = document.getElementById('cqrsBenefitsChart');
    if (!ctx) return;
    cqrsBenefitsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Escalabilidad', 'Desacoplamiento', 'Lecturas rápidas', 'Auditoría (ES)'],
            datasets: [{
                data: [30, 25, 25, 20],
                backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6'],
                borderColor: '#111827'
            }]
        },
        options: {
            plugins: { legend: { labels: { color: '#ffffff' } } },
            cutout: '60%'
        }
    });
}

// Inicializar gráfico de rendimiento
function initPerformanceChart() {
    const ctx = document.getElementById('performanceChart');
    if (!ctx) return;
    
    performanceChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Monolítico', 'Microservicios', 'Serverless', 'Evento-Orientado'],
            datasets: [{
                data: [25, 35, 20, 20],
                backgroundColor: [
                    '#ef4444',
                    '#10b981',
                    '#3b82f6',
                    '#8b5cf6'
                ],
                borderWidth: 2,
                borderColor: '#1f2937'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 2000
            }
        }
    });
    
    // Animar entrada del gráfico
    setTimeout(() => {
        performanceChart.update('none');
        anime({
            targets: ctx.parentElement,
            scale: [0, 1],
            opacity: [0, 1],
            duration: 1000
        });
    }, 500);
}

// Inicializar gráfico de comparación de arquitecturas
function initArchitectureComparisonChart() {
    const ctx = document.getElementById('architectureChart');
    if (!ctx) return;
    
    architectureComparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Escalabilidad', 'Mantenibilidad', 'Rendimiento', 'Complejidad'],
            datasets: [{
                label: 'Monolítico',
                data: [3, 4, 5, 2],
                backgroundColor: '#ef4444',
                borderColor: '#dc2626',
                borderWidth: 1
            }, {
                label: 'Microservicios',
                data: [5, 5, 4, 4],
                backgroundColor: '#10b981',
                borderColor: '#059669',
                borderWidth: 1
            }, {
                label: 'Serverless',
                data: [5, 3, 3, 3],
                backgroundColor: '#3b82f6',
                borderColor: '#2563eb',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: '#374151'
                    }
                },
                x: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: '#374151'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutBounce'
            }
        }
    });
    
    // Animar entrada del gráfico
    setTimeout(() => {
        anime({
            targets: ctx.parentElement,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000
        });
    }, 1000);
}

// Modificar el event listener existente para incluir diagramas
document.addEventListener('DOMContentLoaded', function() {
    // Código existente...
    setTimeout(createWaves, 1000);
    
    // Inicializar diagramas cuando el DOM esté listo
    setTimeout(initDiagrams, 2000);
    
    // Agregar efecto hover a todos los nodos de diagramas
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.diagram-node')) {
            const node = e.target.closest('.diagram-node');
            const circle = node.querySelector('.node-circle');
            if (circle && typeof anime !== 'undefined') {
                anime({
                    targets: circle,
                    scale: 1.1,
                    duration: 300
                });
            }
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.diagram-node')) {
            const node = e.target.closest('.diagram-node');
            const circle = node.querySelector('.node-circle');
            if (circle && typeof anime !== 'undefined') {
                anime({
                    targets: circle,
                    scale: 1,
                    duration: 300
                });
            }
        }
    });
});
