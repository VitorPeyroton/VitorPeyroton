const translations = {
    pt: {
        logo: "Desenvolvedor",
        toggleLang: "EN",
        hero: {
            name: "Vitor Peyroton",
            subtitle: "Full-Stack Architect | Tech Leader | SaaS Specialist",
            description: "10+ anos escalando negócios digitais. De e-commerces até SaaS multi-tenant. Especialista em novos negócios, arquitetura escalável, billing complexo e Big Data."
        },
        experience: {
            title: "Experiência",
            ecommerce: {
                title: "E-commerce & Digital Solutions",
                period: "2015 - Presente",
                description: "Mais de 10 anos liderando projetos de transformação digital.",
                points: [
                    "Gestão 360° de e-commerces: de fabricação, estoque, processos, financeiro, marketing até tecnologia",
                    "Desenvolvimento especializado em WordPress: e-commerces do zero, plugins customizados e customizações avançadas",
                    "Mentoria de donos de negócios em estratégia digital e escalabilidade",
                    "Desenvolvimento de soluções customizadas para PMEs"
                ]
            },
            mentorship: {
                title: "Mentoria & Liderança Técnica",
                period: "2016 - Presente",
                description: "Mentoria de empresários e líderes técnicos.",
                points: [
                    "Consultoria em arquitetura de sistemas escaláveis",
                    "Estratégia de produto e go-to-market",
                    "Formação de equipes de desenvolvimento",
                    "Gestão de processos e otimização operacional"
                ]
            },
            saas: {
                title: "SaaS & Arquitetura Escalável",
                period: "2024 - Presente",
                description: "Desenvolvimento de plataformas multi-tenant enterprise.",
                points: [
                    "Arquitetura de SaaS com suporte a múltiplos tenants",
                    "Sistemas de billing complexo (Stripe, MercadoPago, OpenPix)",
                    "RBAC avançado (95+ tipos de permissões)",
                    "Compliance total com LGPD/GDPR desde arquitetura"
                ]
            }
        },
        wordpress: {
            title: "WordPress",
            description: "CMS versátil com desenvolvimento zero, plugins customizados e e-commerces robustos"
        },
        projects: {
            title: "Projetos",
            description: "Projetos privados em desenvolvimento. Não estão públicos no GitHub.",
            controllerFinance: {
                name: "Controller Finance",
                problem: "Pequenas e médias empresas não têm ferramentas integradas para gestão financeira, vendas, permissões e assinaturas em um único lugar. Sistemas legados são caros, lentos e não escalam.",
                solution: "SaaS completo de gestão financeira com PDV, relatórios, multi-gateway de pagamento, permissões granulares (95+ tipos), FAQ com IA e suporte via ticket.",
                stack: "Next.js • Express • Prisma • PostgreSQL • Stripe • MercadoPago • OpenPix • OpenAI",
                scale: "Suporte a 95+ tipos de permissões • Conciliação automática de múltiplos gateways • IA para FAQ do cliente • Sistema de tickets auditável"
            },
            storyPlugin: {
                name: "Stories Video Plugin",
                problem: "Proprietários de sites WordPress não têm forma fácil de adicionar vídeos em formato de stories (como Planweb) sem integração complexa ou custos altos.",
                solution: "Plugin WordPress que permite adicionar vídeos em formato de stories diretamente no site. Interface intuitiva no admin e visualização moderna no frontend.",
                stack: "WordPress • PHP • JavaScript • MySQL • CSS3",
                scale: "Em funcionamento em múltiplos sites • Admin dashboard completo • Interface responsiva para usuários finais • Suporte a múltiplos formatos de vídeo"
            },
            aiChatPlugin: {
                name: "AI Chat Plugin",
                problem: "Sites WordPress precisam de atendimento 24/7 com chat inteligente, mas mudar de automático para manual é complexo e requer múltiplas ferramentas.",
                solution: "Plugin WordPress com chat IA (integração OpenAI) que permite pausar automático e tornar manual em tempo real, com retorno automático configurável.",
                stack: "WordPress • PHP • JavaScript • OpenAI API • MySQL • WebSocket",
                scale: "Em funcionamento em alguns sites • Pausa/retoma automático de atendimento • Interface admin + usuário final • Histórico de conversas com IA"
            },
            base180: {
                name: "Base 180",
                problem: "Falta template production-ready que sirva como referência para SaaS com padrões arquiteturais, checklist de produção e documentação clara.",
                solution: "SaaS starter kit completo com padrões SOLID, estrutura clara, Docker Compose, Nginx, PM2 e checklist de produção detalhado.",
                stack: "React 18 • Vite • Node.js 20 • Prisma • PostgreSQL • Docker • Nginx",
                scale: "Estrutura para aplicações enterprise • Pronto para staging e produção • Documentação de padrões arquiteturais"
            },
            criminalApp: {
                name: "Criminal App",
                problem: "Plataforma de segurança precisava de design system consistente, configurações de ambiente complexas e documentação técnica clara.",
                solution: "Design system completo com componentes reutilizáveis, sistema de configurações escalável e documentação visual detalhada.",
                stack: "React • Angular • Node.js • PostgreSQL • Docker • Design System CSS",
                scale: "Suporte a múltiplos ambientes • 100+ componentes documentados • Arquitetura modular escalável"
            },
            streamFlix: {
                name: "StreamFlix",
                problem: "Plataforma de streaming precisava gerenciar aplicações, integrações, permissões e múltiplas configurações de forma escalável.",
                solution: "Sistema de gestão de aplicações com RBAC, integrações dinâmicas, suporte a múltiplos tipos de usuários e recursos por plano.",
                stack: "React • Node.js • Express • PostgreSQL • Docker",
                scale: "Gerenciamento de múltiplas aplicações • Permissões dinâmicas por plano • Escalável para milhares de usuários simultâneos"
            },
            miniSaas: {
                name: "Mini SaaS",
                problem: "Empreendedores precisam de um template production-ready para lançar SaaS rapidamente, sem refazer arquitetura do zero cada vez.",
                solution: "Esqueleto SaaS mínimo, pronto para VPS, com autenticação, dashboard protegido, API estruturada e banco de dados pré-configurado.",
                stack: "Next.js • Express • Prisma • PostgreSQL • Docker",
                scale: "Deploy imediato em VPS • Escalável para milhões de usuários • Estrutura preparada para múltiplos tenants"
            },
            zeroGameEducation: {
                name: "Zero Game Education",
                problem: "Plataformas educacionais tradicionais têm baixa retenção porque faltam mecanismos de gamificação. Alunos precisam de aprendizado interativo com feedback em tempo real, flashcards eficientes, tempos de execução das lições e progressão clara.",
                solution: "Plataforma gamificada com flashcards interativos, sistema de tempos/progressão de lições, aprendizagem guiada com feedback automático, pontuação em tempo real, e sistema de assinaturas PIX para monetização.",
                stack: "React Native • Node.js • Express • Firebase • OpenPIX • JWT • TypeScript • Real-time Feedback",
                scale: "Flashcards interativos com tempos de execução • Sistema dinâmico de progressão de lições • Aprendizagem guiada adaptativa • Gamificação com pontuação e achievements • Assinaturas recorrentes PIX • 20+ arquivos ~4200 linhas"
            }
        },
        skills: {
            title: "Competências",
            languages: {
                category: "Linguagens",
                skills: ["JavaScript", "TypeScript", "PHP", "HTML", "CSS", "SQL"]
            },
            frontend: {
                category: "Frontend",
                skills: ["React 18", "Next.js", "Tailwind CSS", "RWD", "Vite"]
            },
            backend: {
                category: "Backend",
                skills: ["Node.js", "Express", "Prisma ORM", "REST API"]
            },
            databases: {
                category: "Bancos de Dados",
                skills: ["PostgreSQL", "Neon", "SQLite", "Redis"]
            },
            security: {
                category: "Segurança & Auth",
                skills: ["JWT", "OAuth2", "RBAC 95+ permissões", "Bcrypt", "LGPD/GDPR"]
            },
            saas: {
                category: "SaaS & Billing",
                skills: ["Multi-tenant", "Stripe", "MercadoPago", "OpenPix", "Webhooks", "Reconciliação"]
            },
            devops: {
                category: "DevOps & Deploy",
                skills: ["Docker", "Docker Compose", "GitHub Actions", "PM2", "Nginx", "VPS"]
            },
            mentorship: {
                category: "Mentoria & Negócio",
                skills: ["Arquitetura de Sistemas", "Estratégia de Produto", "Go-to-Market", "Formação de Equipes"]
            }
        },
        focus: {
            title: "Áreas de Foco",
            architecture: {
                title: "🏗️ Arquitetura Multi-Tenant",
                description: "Sistemas que crescem de MVP até milões de usuários. Permissões granulares (95+), isolamento de dados e performance escalável"
            },
            billing: {
                title: "💳 Sistemas de Billing Complexo",
                description: "Integração 3+ gateways simultâneos, reconciliação automática, webhooks confiáveis e conformidade total com órgãos reguladores"
            },
            mentorship: {
                title: "👥 Mentoria de Negócios",
                description: "Ajudo empresários a estruturar tecnologia alinhada com crescimento. Do MVP até escala, sem over-engineering ou desperdício"
            }
        },
        education: {
            title: "Formação",
            grad: {
                degree: "Administração Geral",
                institution: "Universidade Federal do Espírito Santo (UFES)",
                year: "2010"
            },
            spec1: {
                degree: "Pós-Graduação em Gestão de Marketing",
                institution: "Universidade Federal do Rio de Janeiro",
                year: "Especialização"
            },
            spec2: {
                degree: "Pós-Graduação em Desenvolvimento Full-Stack",
                institution: "Especialização em Frontend, Backend e Cloud Database",
                year: "Especialização"
            },
            spec3: {
                degree: "Pós-Graduação em Big Data & Inteligência Competitiva",
                institution: "Machine Learning e LearnAI para análise de grandes bases de dados em SQL",
                year: "Especialização"
            }
        },
        softskills: {
            title: "Soft Skills & Personalidade",
            pragmatic: {
                title: "🎯 Pragmático",
                description: "Não sou teórico. Prefiro soluções que funcionam em produção a arquiteturas perfeitas que nunca saem do papel. Trade-offs são conversas reais comigo."
            },
            communicator: {
                title: "🗣️ Comunicador Direto",
                description: "Digo não quando preciso. Se um projeto está fadado a falhar ou um requisito não faz sentido, coloco na mesa. Honestidade constrói melhor que consenso falso."
            },
            ownership: {
                title: "🏆 Proprietário Mentalidade",
                description: "Encaro cada projeto como se fosse meu. Detalhes importam: segurança de dados, performance, UX, testes. Qualidade não é negociável."
            },
            mentorship: {
                title: "🤝 Mentor de Verdade",
                description: "Não dou receita pronta. Ensino você a pensar. Meu trabalho é deixar seu time mais forte e independente para continuar sem mim."
            },
            continuousLearner: {
                title: "📚 Aprendizado Contínuo",
                description: "Tech muda toda semana. Estou sempre testando, lendo, experimentando. O que funcionou ontem pode não funcionar hoje—preciso estar atualizado."
            },
            delivery: {
                title: "⚡ Execução & Entrega",
                description: "Não complico o que pode ser simples. Defino prioridades, entrego o que prometo e aviso com antecedência se um prazo não vai fechar. Toda decisão técnica passa por uma pergunta: isso agrega valor agora ou é over-engineering?"
            }
        },
        contact: {
            title: "Vamos Trabalhar Junto?",
            description: "Seja para consultoria, desenvolvimento, mentoria ou qualquer parceria estratégica. Estou aberto a conversas que agregam valor.",
            emailBtn: "Email",
            linkedinBtn: "LinkedIn",
            githubBtn: "GitHub",
            whatsappBtn: "WhatsApp"
        },
        footer: "© 2026 Vitor Peyroton. Desenvolvido com foco em arquitetura escalável e excelência técnica."
    },
    en: {
        logo: "Developer",
        toggleLang: "PT",
        hero: {
            name: "Vitor Peyroton",
            subtitle: "Full-Stack Architect | Tech Leader | SaaS Specialist",
            description: "10+ years scaling digital businesses. From e-commerces to multi-tenant SaaS. Expert in new business, scalable architecture, complex billing, and Big Data."
        },
        experience: {
            title: "Experience",
            ecommerce: {
                title: "E-commerce & Digital Solutions",
                period: "2015 - Present",
                description: "Over 10 years leading digital transformation projects.",
                points: [
                    "360° e-commerce management: from manufacturing, inventory, processes, finance, marketing to technology",
                    "Specialized WordPress development: e-commerces from zero, custom plugins and advanced customizations",
                    "Mentoring business owners on digital strategy and scalability",
                    "Development of custom solutions for SMEs"
                ]
            },
            mentorship: {
                title: "Mentorship & Technical Leadership",
                period: "2016 - Present",
                description: "Mentoring entrepreneurs and technical leaders.",
                points: [
                    "Consulting on scalable systems architecture",
                    "Product strategy and go-to-market",
                    "Development team formation",
                    "Process management and operational optimization"
                ]
            },
            saas: {
                title: "SaaS & Scalable Architecture",
                period: "2024 - Present",
                description: "Development of multi-tenant enterprise platforms.",
                points: [
                    "Multi-tenant SaaS architecture",
                    "Complex billing systems (Stripe, MercadoPago, OpenPix)",
                    "Advanced RBAC (95+ permission types)",
                    "Full LGPD/GDPR compliance from architecture"
                ]
            }
        },
        wordpress: {
            title: "WordPress",
            description: "Versatile CMS with zero-development customizations, custom plugins and robust e-commerces"
        },
        projects: {
            title: "Projects",
            description: "Private projects in development. Not public on GitHub.",
            controllerFinance: {
                name: "Controller Finance",
                problem: "Small and medium-sized businesses don't have integrated tools for managing finances, sales, permissions and subscriptions in one place. Legacy systems are expensive, slow and don't scale.",
                solution: "Complete SaaS for financial management with POS, reports, multi-gateway payments, granular permissions (95+ types), AI-powered FAQ and ticket support.",
                stack: "Next.js • Express • Prisma • PostgreSQL • Stripe • MercadoPago • OpenPix • OpenAI",
                scale: "Support for 95+ permission types • Automatic reconciliation of multiple gateways • AI-powered customer FAQ • Auditable ticket system"
            },
            storyPlugin: {
                name: "Stories Video Plugin",
                problem: "WordPress site owners don't have an easy way to add video in stories format (like Planweb) without complex integration or high costs.",
                solution: "WordPress plugin that allows adding videos in stories format directly to the site. Intuitive admin interface and modern frontend display.",
                stack: "WordPress • PHP • JavaScript • MySQL • CSS3",
                scale: "Running on multiple sites • Complete admin dashboard • Responsive interface for end users • Support for multiple video formats"
            },
            aiChatPlugin: {
                name: "AI Chat Plugin",
                problem: "WordPress sites need 24/7 support with smart chat, but switching from automatic to manual is complex and requires multiple tools.",
                solution: "WordPress plugin with AI chat (OpenAI integration) that allows pausing automatic mode and switching to manual in real-time, with configurable auto-return.",
                stack: "WordPress • PHP • JavaScript • OpenAI API • MySQL • WebSocket",
                scale: "Running on multiple sites • Pause/resume automatic support • Admin + end-user interface • Conversation history with AI"
            },
            base180: {
                name: "Base 180",
                problem: "Lack of production-ready template to serve as reference for SaaS with architectural patterns, production checklist and clear documentation.",
                solution: "Complete SaaS starter kit with SOLID patterns, clear structure, Docker Compose, Nginx, PM2 and detailed production checklist.",
                stack: "React 18 • Vite • Node.js 20 • Prisma • PostgreSQL • Docker • Nginx",
                scale: "Structure for enterprise applications • Ready for staging and production • Architectural patterns documentation"
            },
            criminalApp: {
                name: "Criminal App",
                problem: "Security platform needed consistent design system, complex environment configurations and clear technical documentation.",
                solution: "Complete design system with reusable components, scalable configuration system and detailed visual documentation.",
                stack: "React • Angular • Node.js • PostgreSQL • Docker • Design System CSS",
                scale: "Support for multiple environments • 100+ documented components • Scalable modular architecture"
            },
            streamFlix: {
                name: "StreamFlix",
                problem: "Streaming platform needed to manage applications, integrations, permissions and multiple configurations in a scalable way.",
                solution: "Application management system with RBAC, dynamic integrations, support for multiple user types and resources per plan.",
                stack: "React • Node.js • Express • PostgreSQL • Docker",
                scale: "Management of multiple applications • Dynamic permissions per plan • Scalable for thousands of simultaneous users"
            },
            miniSaas: {
                name: "Mini SaaS",
                problem: "Entrepreneurs need a production-ready template to launch SaaS quickly, without rebuilding architecture from scratch each time.",
                solution: "Minimal SaaS skeleton, ready for VPS, with authentication, protected dashboard, structured API and pre-configured database.",
                stack: "Next.js • Express • Prisma • PostgreSQL • Docker",
                scale: "Immediate VPS deployment • Scalable to millions of users • Structure prepared for multiple tenants"
            },
            zeroGameEducation: {
                name: "Zero Game Education",
                problem: "Traditional educational platforms have low retention because they lack gamification mechanisms. Students need interactive learning with real-time feedback, efficient flashcards, timed lesson execution and clear progression.",
                solution: "Gamified platform with interactive flashcards, lesson progression timing system, guided learning with automatic feedback, real-time scoring, and PIX subscription system for monetization.",
                stack: "React Native • Node.js • Express • Firebase • OpenPIX • JWT • TypeScript • Real-time Feedback",
                scale: "Interactive flashcards with execution timers • Dynamic lesson progression system • Adaptive guided learning • Gamification with scoring and achievements • Recurring PIX subscriptions • 20+ files ~4200 lines"
            }
        },
        skills: {
            title: "Skills",
            languages: {
                category: "Languages",
                skills: ["JavaScript", "TypeScript", "PHP", "HTML", "CSS", "SQL"]
            },
            frontend: {
                category: "Frontend",
                skills: ["React 18", "Next.js", "Tailwind CSS", "RWD", "Vite"]
            },
            backend: {
                category: "Backend",
                skills: ["Node.js", "Express", "Prisma ORM", "REST API"]
            },
            databases: {
                category: "Databases",
                skills: ["PostgreSQL", "Neon", "SQLite", "Redis"]
            },
            security: {
                category: "Security & Auth",
                skills: ["JWT", "OAuth2", "RBAC 95+ permissions", "Bcrypt", "LGPD/GDPR"]
            },
            saas: {
                category: "SaaS & Billing",
                skills: ["Multi-tenant", "Stripe", "MercadoPago", "OpenPix", "Webhooks", "Reconciliation"]
            },
            devops: {
                category: "DevOps & Deploy",
                skills: ["Docker", "Docker Compose", "GitHub Actions", "PM2", "Nginx", "VPS"]
            },
            mentorship: {
                category: "Mentorship & Business",
                skills: ["Systems Architecture", "Product Strategy", "Go-to-Market", "Team Building"]
            }
        },
        focus: {
            title: "Areas of Focus",
            architecture: {
                title: "🏗️ Multi-Tenant Architecture",
                description: "Systems that grow from MVP to millions of users. Granular permissions (95+), data isolation, and scalable performance"
            },
            billing: {
                title: "💳 Complex Billing Systems",
                description: "Integration of 3+ simultaneous gateways, automatic reconciliation, reliable webhooks and full compliance with regulatory bodies"
            },
            mentorship: {
                title: "👥 Business Mentorship",
                description: "I help entrepreneurs structure technology aligned with growth. From MVP to scale, without over-engineering or waste"
            }
        },
        education: {
            title: "Education",
            grad: {
                degree: "General Administration",
                institution: "Federal University of Espírito Santo (UFES)",
                year: "2010"
            },
            spec1: {
                degree: "Postgraduate in Marketing Management",
                institution: "Federal University of Rio de Janeiro",
                year: "Specialization"
            },
            spec2: {
                degree: "Postgraduate in Full-Stack Development",
                institution: "Specialization in Frontend, Backend and Cloud Database",
                year: "Specialization"
            },
            spec3: {
                degree: "Postgraduate in Big Data & Competitive Intelligence",
                institution: "Machine Learning and LearnAI for analyzing large SQL databases",
                year: "Specialization"
            }
        },
        softskills: {
            title: "Soft Skills & Personality",
            pragmatic: {
                title: "🎯 Pragmatic",
                description: "I'm not theoretical. I prefer solutions that work in production over perfect architectures that never leave paper. Trade-offs are real conversations with me."
            },
            communicator: {
                title: "🗣️ Direct Communicator",
                description: "I say no when I need to. If a project is doomed to fail or a requirement doesn't make sense, I put it on the table. Honesty builds better than false consensus."
            },
            ownership: {
                title: "🏆 Ownership Mentality",
                description: "I treat every project as if it were mine. Details matter: data security, performance, UX, testing. Quality is not negotiable."
            },
            mentorship: {
                title: "🤝 Real Mentoring",
                description: "I don't give ready recipes. I teach you how to think. My job is to leave your team stronger and independent to continue without me."
            },
            continuousLearner: {
                title: "📚 Continuous Learning",
                description: "Tech changes every week. I'm always testing, reading, experimenting. What worked yesterday might not work today—I need to stay current."
            },
            delivery: {
                title: "⚡ Execution & Delivery",
                description: "I don't overcomplicate what can be simple. I set priorities, deliver what I promise, and warn in advance if a deadline won't be met. Every technical decision goes through one question: does this add value now or is it over-engineering?"
            }
        },
        contact: {
            title: "Let's Work Together?",
            description: "Whether for consulting, development, mentorship or any strategic partnership. I'm open to conversations that add value.",
            emailBtn: "Email",
            linkedinBtn: "LinkedIn",
            githubBtn: "GitHub",
            whatsappBtn: "WhatsApp"
        },
        footer: "© 2024 Vitor Peyroton. Built with focus on scalable architecture and technical excellence."
    }
};

function applyTranslations(lang) {
    const t = translations[lang];
    
    document.querySelector('.logo').textContent = t.logo;
    
    document.querySelector('.hero h1').textContent = t.hero.name;
    document.querySelector('.hero .subtitle').textContent = t.hero.subtitle;
    document.querySelector('.hero .description').textContent = t.hero.description;
    
    document.querySelector('#experience-title').textContent = t.experience.title;
    
    const expCardsHtml = `
        <div class="experience-card">
            <h3>${t.experience.ecommerce.title}</h3>
            <div class="timeline">${t.experience.ecommerce.period}</div>
            <p>${t.experience.ecommerce.description}</p>
            <ul>
                ${t.experience.ecommerce.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
        </div>
        <div class="experience-card">
            <h3>${t.experience.mentorship.title}</h3>
            <div class="timeline">${t.experience.mentorship.period}</div>
            <p>${t.experience.mentorship.description}</p>
            <ul>
                ${t.experience.mentorship.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
        </div>
        <div class="experience-card">
            <h3>${t.experience.saas.title}</h3>
            <div class="timeline">${t.experience.saas.period}</div>
            <p>${t.experience.saas.description}</p>
            <ul>
                ${t.experience.saas.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
        </div>
    `;
    document.querySelector('.experience-container').innerHTML = expCardsHtml;
    
    document.querySelector('#projects-title').textContent = t.projects.title;
    document.querySelector('#projects-description').textContent = t.projects.description;
    const projectsHtml = `
        <div class="project-card">
            <h3>${t.projects.controllerFinance.name}</h3>
            <div class="project-section">
                <div class="project-section-title">Problema</div>
                <div class="project-section-content">${t.projects.controllerFinance.problem}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Solução</div>
                <div class="project-section-content">${t.projects.controllerFinance.solution}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Stack</div>
                <div class="project-stack">${t.projects.controllerFinance.stack}</div>
            </div>
            <div class="project-section" style="flex-grow: 1;">
                <div class="project-section-title">Escala & Dados</div>
                <div class="project-scale">${t.projects.controllerFinance.scale}</div>
            </div>
        </div>
        <div class="project-card">
            <h3>${t.projects.storyPlugin.name}</h3>
            <div class="project-section">
                <div class="project-section-title">Problema</div>
                <div class="project-section-content">${t.projects.storyPlugin.problem}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Solução</div>
                <div class="project-section-content">${t.projects.storyPlugin.solution}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Stack</div>
                <div class="project-stack">${t.projects.storyPlugin.stack}</div>
            </div>
            <div class="project-section" style="flex-grow: 1;">
                <div class="project-section-title">Escala & Dados</div>
                <div class="project-scale">${t.projects.storyPlugin.scale}</div>
            </div>
        </div>
        <div class="project-card">
            <h3>${t.projects.aiChatPlugin.name}</h3>
            <div class="project-section">
                <div class="project-section-title">Problema</div>
                <div class="project-section-content">${t.projects.aiChatPlugin.problem}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Solução</div>
                <div class="project-section-content">${t.projects.aiChatPlugin.solution}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Stack</div>
                <div class="project-stack">${t.projects.aiChatPlugin.stack}</div>
            </div>
            <div class="project-section" style="flex-grow: 1;">
                <div class="project-section-title">Escala & Dados</div>
                <div class="project-scale">${t.projects.aiChatPlugin.scale}</div>
            </div>
        </div>
        <div class="project-card">
            <h3>${t.projects.base180.name}</h3>
            <div class="project-section">
                <div class="project-section-title">Problema</div>
                <div class="project-section-content">${t.projects.base180.problem}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Solução</div>
                <div class="project-section-content">${t.projects.base180.solution}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Stack</div>
                <div class="project-stack">${t.projects.base180.stack}</div>
            </div>
            <div class="project-section" style="flex-grow: 1;">
                <div class="project-section-title">Escala & Dados</div>
                <div class="project-scale">${t.projects.base180.scale}</div>
            </div>
        </div>
        <div class="project-card">
            <h3>${t.projects.criminalApp.name}</h3>
            <div class="project-section">
                <div class="project-section-title">Problema</div>
                <div class="project-section-content">${t.projects.criminalApp.problem}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Solução</div>
                <div class="project-section-content">${t.projects.criminalApp.solution}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Stack</div>
                <div class="project-stack">${t.projects.criminalApp.stack}</div>
            </div>
            <div class="project-section" style="flex-grow: 1;">
                <div class="project-section-title">Escala & Dados</div>
                <div class="project-scale">${t.projects.criminalApp.scale}</div>
            </div>
        </div>
        <div class="project-card">
            <h3>${t.projects.streamFlix.name}</h3>
            <div class="project-section">
                <div class="project-section-title">Problema</div>
                <div class="project-section-content">${t.projects.streamFlix.problem}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Solução</div>
                <div class="project-section-content">${t.projects.streamFlix.solution}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Stack</div>
                <div class="project-stack">${t.projects.streamFlix.stack}</div>
            </div>
            <div class="project-section" style="flex-grow: 1;">
                <div class="project-section-title">Escala & Dados</div>
                <div class="project-scale">${t.projects.streamFlix.scale}</div>
            </div>
        </div>
        <div class="project-card">
            <h3>${t.projects.miniSaas.name}</h3>
            <div class="project-section">
                <div class="project-section-title">Problema</div>
                <div class="project-section-content">${t.projects.miniSaas.problem}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Solução</div>
                <div class="project-section-content">${t.projects.miniSaas.solution}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Stack</div>
                <div class="project-stack">${t.projects.miniSaas.stack}</div>
            </div>
            <div class="project-section" style="flex-grow: 1;">
                <div class="project-section-title">Escala & Dados</div>
                <div class="project-scale">${t.projects.miniSaas.scale}</div>
            </div>
        </div>
        <div class="project-card">
            <h3>${t.projects.zeroGameEducation.name}</h3>
            <div class="project-section">
                <div class="project-section-title">Problema</div>
                <div class="project-section-content">${t.projects.zeroGameEducation.problem}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Solução</div>
                <div class="project-section-content">${t.projects.zeroGameEducation.solution}</div>
            </div>
            <div class="project-section">
                <div class="project-section-title">Stack</div>
                <div class="project-stack">${t.projects.zeroGameEducation.stack}</div>
            </div>
            <div class="project-section" style="flex-grow: 1;">
                <div class="project-section-title">Escala & Dados</div>
                <div class="project-scale">${t.projects.zeroGameEducation.scale}</div>
            </div>
        </div>
    `;
    document.querySelector('.projects-container').innerHTML = projectsHtml;
    
    document.querySelector('#skills-title').textContent = t.skills.title;
    const skillsHtml = `
        <div class="skill-category">
            <h3>${t.skills.languages.category}</h3>
            ${t.skills.languages.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="skill-category">
            <h3>${t.skills.frontend.category}</h3>
            ${t.skills.frontend.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="skill-category">
            <h3>${t.skills.backend.category}</h3>
            ${t.skills.backend.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="skill-category">
            <h3>${t.skills.databases.category}</h3>
            ${t.skills.databases.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="skill-category">
            <h3>${t.skills.security.category}</h3>
            ${t.skills.security.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="skill-category">
            <h3>${t.skills.saas.category}</h3>
            ${t.skills.saas.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="skill-category">
            <h3>${t.skills.devops.category}</h3>
            ${t.skills.devops.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div class="skill-category">
            <h3>${t.skills.mentorship.category}</h3>
            ${t.skills.mentorship.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
    `;
    document.querySelector('.skills-grid').innerHTML = skillsHtml;
    
    document.querySelector('#focus-title').textContent = t.focus.title;
    const focusHtml = `
        <div class="focus-item">
            <div class="focus-icon">🏗️</div>
            <h3>${t.focus.architecture.title.replace('🏗️ ', '')}</h3>
            <p>${t.focus.architecture.description}</p>
        </div>
        <div class="focus-item">
            <div class="focus-icon">💳</div>
            <h3>${t.focus.billing.title.replace('💳 ', '')}</h3>
            <p>${t.focus.billing.description}</p>
        </div>
        <div class="focus-item">
            <div class="focus-icon">👥</div>
            <h3>${t.focus.mentorship.title.replace('👥 ', '')}</h3>
            <p>${t.focus.mentorship.description}</p>
        </div>
    `;
    document.querySelector('.focus-areas').innerHTML = focusHtml;
    
    document.querySelector('#education-title').textContent = t.education.title;
    const educationHtml = `
        <div class="education-item">
            <h3>${t.education.grad.degree}</h3>
            <div class="institution">${t.education.grad.institution}</div>
            <div class="year">${t.education.grad.year}</div>
        </div>
        <div class="education-item">
            <h3>${t.education.spec1.degree}</h3>
            <div class="institution">${t.education.spec1.institution}</div>
            <div class="year">${t.education.spec1.year}</div>
        </div>
        <div class="education-item">
            <h3>${t.education.spec2.degree}</h3>
            <div class="institution">${t.education.spec2.institution}</div>
            <div class="year">${t.education.spec2.year}</div>
        </div>
        <div class="education-item">
            <h3>${t.education.spec3.degree}</h3>
            <div class="institution">${t.education.spec3.institution}</div>
            <div class="year">${t.education.spec3.year}</div>
        </div>
    `;
    document.querySelector('.education-list').innerHTML = educationHtml;
    
    document.querySelector('#softskills-title').textContent = t.softskills.title;
    const softskillsHtml = `
        <div class="softskill-item">
            <h3>${t.softskills.pragmatic.title}</h3>
            <p>${t.softskills.pragmatic.description}</p>
        </div>
        <div class="softskill-item">
            <h3>${t.softskills.communicator.title}</h3>
            <p>${t.softskills.communicator.description}</p>
        </div>
        <div class="softskill-item">
            <h3>${t.softskills.ownership.title}</h3>
            <p>${t.softskills.ownership.description}</p>
        </div>
        <div class="softskill-item">
            <h3>${t.softskills.mentorship.title}</h3>
            <p>${t.softskills.mentorship.description}</p>
        </div>
        <div class="softskill-item">
            <h3>${t.softskills.continuousLearner.title}</h3>
            <p>${t.softskills.continuousLearner.description}</p>
        </div>
        <div class="softskill-item">
            <h3>${t.softskills.delivery.title}</h3>
            <p>${t.softskills.delivery.description}</p>
        </div>
    `;
    document.querySelector('.softskills-container').innerHTML = softskillsHtml;
    
    document.querySelector('#contact-title').textContent = t.contact.title;
    document.querySelector('#contact-description').textContent = t.contact.description;
    document.querySelector('#contact-email-btn').querySelector('.contact-text').textContent = t.contact.emailBtn;
    document.querySelector('#contact-linkedin-btn').querySelector('.contact-text').textContent = t.contact.linkedinBtn;
    document.querySelector('#contact-github-btn').querySelector('.contact-text').textContent = t.contact.githubBtn;
    document.querySelector('#contact-whatsapp-btn').querySelector('.contact-text').textContent = t.contact.whatsappBtn;
    
    document.querySelector('#footer-text').textContent = t.footer;
}
