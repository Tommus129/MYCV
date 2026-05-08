/* =============================================================
   PROJECTS — struttura bilingue IT / EN
   Campi invarianti: id, title, type, priceMin, priceMax,
                     difficulty, stack, features (array)
   Campi localizzati: sub, sector, description, typeLabel, features
   Il campo sector.it è la chiave usata internamente dai filtri.
   ============================================================= */

var PROJECTS = [
  {
    id: 1,
    title: 'MediBook',
    sub: { it: 'Clinica Medica Online', en: 'Online Medical Clinic' },
    sector: { it: 'Salute & Benessere', en: 'Health & Wellness' },
    type: 'webapp',
    typeLabel: { it: 'Web App + Mobile', en: 'Web App + Mobile' },
    priceMin: 4000, priceMax: 9000, difficulty: 4,
    description: {
      it: 'Piattaforma di prenotazione visite mediche con area paziente, dashboard medico, notifiche email/SMS e pagamenti online.',
      en: 'Medical appointment booking platform with patient portal, doctor dashboard, email/SMS notifications and online payments.'
    },
    features: {
      it: ['Prenotazioni', 'Multi-ruolo', 'Pagamenti Stripe', 'Notifiche SMS'],
      en: ['Appointments', 'Multi-role', 'Stripe Payments', 'SMS Notifications']
    },
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'React Native']
  },
  {
    id: 2,
    title: 'TableMate',
    sub: { it: 'Ristorante & Prenotazioni', en: 'Restaurant & Bookings' },
    sector: { it: 'Ristorazione', en: 'Food & Beverage' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Booking', en: 'Showcase Site + Booking' },
    priceMin: 800, priceMax: 2200, difficulty: 2,
    description: {
      it: 'Sito vetrina elegante per ristoranti con menu digitale, prenotazione tavoli, gestione eventi e form per richieste catering privato.',
      en: 'Elegant showcase site for restaurants with digital menu, table reservations, event management and a private catering request form.'
    },
    features: {
      it: ['Menu digitale', 'Prenotazione tavoli', 'Form catering', 'Gallery foto'],
      en: ['Digital menu', 'Table reservations', 'Catering form', 'Photo gallery']
    },
    stack: ['React', 'Tailwind CSS', 'Supabase', 'Resend']
  },
  {
    id: 3,
    title: 'FitZone',
    sub: { it: 'Palestra & Personal Trainer', en: 'Gym & Personal Trainer' },
    sector: { it: 'Sport & Fitness', en: 'Sport & Fitness' },
    type: 'mobile',
    typeLabel: { it: 'App Multi-piattaforma', en: 'Cross-platform App' },
    priceMin: 3500, priceMax: 7500, difficulty: 3,
    description: {
      it: 'App iOS/Android/Web per palestre. Prenotazione corsi, tracking allenamenti e acquisto abbonamenti. Il trainer gestisce schede e progressi.',
      en: 'iOS/Android/Web app for gyms. Class booking, workout tracking and membership purchases. Trainers manage plans and progress.'
    },
    features: {
      it: ['Prenotazione corsi', 'Tracking progressi', 'Push Notifications', 'Abbonamenti'],
      en: ['Class booking', 'Progress tracking', 'Push Notifications', 'Memberships']
    },
    stack: ['Flutter', 'Firebase', 'Stripe']
  },
  {
    id: 4,
    title: 'CasaViva',
    sub: { it: 'Agenzia Immobiliare', en: 'Real Estate Agency' },
    sector: { it: 'Casa & Immobili', en: 'Real Estate' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina Premium', en: 'Premium Showcase Site' },
    priceMin: 2000, priceMax: 5000, difficulty: 3,
    description: {
      it: 'Sito vetrina di alto livello per agenzie immobiliari con ricerca avanzata, mappa interattiva, schede immobili dettagliate e area riservata agenti.',
      en: 'High-end showcase site for real estate agencies with advanced search, interactive map, detailed property listings and a private agent portal.'
    },
    features: {
      it: ['Ricerca con filtri', 'Mappa interattiva', 'Form richiesta visita', 'Area agenti'],
      en: ['Search with filters', 'Interactive map', 'Visit request form', 'Agent portal']
    },
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox']
  },
  {
    id: 5,
    title: 'LearnHub',
    sub: { it: 'Piattaforma E-Learning', en: 'E-Learning Platform' },
    sector: { it: 'Formazione', en: 'Education' },
    type: 'webapp',
    typeLabel: { it: 'Web App Complessa', en: 'Complex Web App' },
    priceMin: 5000, priceMax: 12000, difficulty: 4,
    description: {
      it: 'Piattaforma corsi online con video streaming, quiz interattivi, certificati PDF automatici e community integrata.',
      en: 'Online course platform with video streaming, interactive quizzes, automatic PDF certificates and an integrated community.'
    },
    features: {
      it: ['Video streaming', 'Quiz & Certificati', 'Forum community', 'Pagamenti'],
      en: ['Video streaming', 'Quizzes & Certificates', 'Community forum', 'Payments']
    },
    stack: ['Next.js', 'Supabase', 'Mux Video', 'Stripe']
  },
  {
    id: 6,
    title: 'Artigiano Digitale',
    sub: { it: 'Portfolio Creativo + CMS', en: 'Creative Portfolio + CMS' },
    sector: { it: 'Arte & Creatività', en: 'Arts & Creativity' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + CMS', en: 'Showcase Site + CMS' },
    priceMin: 600, priceMax: 1800, difficulty: 2,
    description: {
      it: 'Portfolio per fotografi, designer o artisti con CMS headless personalizzato, form preventivo e feed Instagram integrato.',
      en: 'Portfolio for photographers, designers or artists with a custom headless CMS, quote form and integrated Instagram feed.'
    },
    features: {
      it: ['CMS headless', 'Form preventivo', 'Instagram feed', 'Testimonials'],
      en: ['Headless CMS', 'Quote form', 'Instagram feed', 'Testimonials']
    },
    stack: ['Astro', 'Sanity CMS', 'Tailwind', 'Vercel']
  },
  {
    id: 7,
    title: 'AutoRent',
    sub: { it: 'Noleggio Veicoli', en: 'Vehicle Rental' },
    sector: { it: 'Trasporti & Mobilità', en: 'Transport & Mobility' },
    type: 'webapp',
    typeLabel: { it: 'Web App + Mobile', en: 'Web App + Mobile' },
    priceMin: 4000, priceMax: 9000, difficulty: 4,
    description: {
      it: 'Sistema di prenotazione noleggio auto/moto con disponibilità in tempo reale, preventivo automatico, check-in digitale e gestione flotta.',
      en: 'Car/motorbike rental booking system with real-time availability, automatic quotes, digital check-in and fleet management.'
    },
    features: {
      it: ['Calendario live', 'Preventivo automatico', 'Check-in digitale', 'Gestione flotta'],
      en: ['Live calendar', 'Automatic quote', 'Digital check-in', 'Fleet management']
    },
    stack: ['Vue.js', 'Laravel', 'MySQL', 'Stripe']
  },
  {
    id: 8,
    title: 'LocalShop',
    sub: { it: 'Marketplace Prodotti Locali', en: 'Local Products Marketplace' },
    sector: { it: 'E-commerce', en: 'E-commerce' },
    type: 'ecommerce',
    typeLabel: { it: 'E-commerce Multi-Venditore', en: 'Multi-Vendor E-commerce' },
    priceMin: 7000, priceMax: 15000, difficulty: 5,
    description: {
      it: 'Marketplace multi-venditore per artigiani e produttori locali con vetrine personalizzabili, analytics e tracking spedizioni.',
      en: 'Multi-vendor marketplace for local craftspeople and producers with customisable storefronts, analytics and shipment tracking.'
    },
    features: {
      it: ['Multi-venditore', 'Analytics venditore', 'Tracking spedizioni', 'Recensioni'],
      en: ['Multi-vendor', 'Vendor analytics', 'Shipment tracking', 'Reviews']
    },
    stack: ['Next.js', 'Medusa.js', 'PostgreSQL', 'Stripe']
  },
  {
    id: 9,
    title: 'StayEasy',
    sub: { it: 'B&B & Affitti Brevi', en: 'B&B & Short Rentals' },
    sector: { it: 'Turismo & Hospitality', en: 'Tourism & Hospitality' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Booking', en: 'Showcase Site + Booking' },
    priceMin: 2500, priceMax: 6000, difficulty: 4,
    description: {
      it: 'Sito per B&B con sistema di prenotazione integrato, sync iCal con Airbnb/Booking.com e fatturazione automatica.',
      en: 'B&B site with integrated booking system, iCal sync with Airbnb/Booking.com and automated invoicing.'
    },
    features: {
      it: ['Sync iCal Airbnb', 'Gestione camere', 'Chat host-ospite', 'Fatturazione auto'],
      en: ['iCal Airbnb sync', 'Room management', 'Host-guest chat', 'Auto invoicing']
    },
    stack: ['React', 'Node.js', 'MongoDB', 'iCal API']
  },
  {
    id: 10,
    title: 'LexDesk',
    sub: { it: 'Studio Legale / Consulenza', en: 'Law Firm / Consulting' },
    sector: { it: 'Servizi Professionali', en: 'Professional Services' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + CRM Base', en: 'Showcase Site + Basic CRM' },
    priceMin: 1500, priceMax: 4000, difficulty: 3,
    description: {
      it: 'Sito professionale per studi legali o commercialisti con form intake intelligente, prenotazione consulenze e area clienti riservata con documenti.',
      en: 'Professional site for law firms or accountants with a smart intake form, consultation booking and a private client portal with document management.'
    },
    features: {
      it: ['Form intake cliente', 'Prenotazione consulenza', 'Area clienti', 'Gestione documenti'],
      en: ['Client intake form', 'Consultation booking', 'Client portal', 'Document management']
    },
    stack: ['Next.js', 'Prisma', 'Supabase Auth', 'Resend']
  },
  {
    id: 11,
    title: 'FioreDi',
    sub: { it: 'Fioreria & Wedding Planner', en: 'Florist & Wedding Planner' },
    sector: { it: 'Arte & Creatività', en: 'Arts & Creativity' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Form', en: 'Showcase Site + Form' },
    priceMin: 700, priceMax: 1800, difficulty: 1,
    description: {
      it: 'Sito vetrina floreale con galleria matrimoni, form richiesta preventivo personalizzato, catalogo prodotti stagionali e integrazione WhatsApp.',
      en: 'Floral showcase site with wedding gallery, personalised quote request form, seasonal product catalogue and WhatsApp CTA.'
    },
    features: {
      it: ['Galleria eventi', 'Form preventivo', 'Catalogo stagionale', 'WhatsApp CTA'],
      en: ['Event gallery', 'Quote form', 'Seasonal catalogue', 'WhatsApp CTA']
    },
    stack: ['React', 'Tailwind CSS', 'Formspree']
  },
  {
    id: 12,
    title: 'BarbieraTop',
    sub: { it: 'Barberia & Salon', en: 'Barbershop & Salon' },
    sector: { it: 'Salute & Benessere', en: 'Health & Wellness' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Booking', en: 'Showcase Site + Booking' },
    priceMin: 500, priceMax: 1400, difficulty: 1,
    description: {
      it: 'Sito vetrina moderno per barberie con sistema prenotazione appuntamenti, presentazione team e listino prezzi interattivo.',
      en: 'Modern showcase site for barbershops with appointment booking, team presentation and interactive price list.'
    },
    features: {
      it: ['Prenota slot', 'Team stylist', 'Listino prezzi', 'Recensioni Google'],
      en: ['Slot booking', 'Stylist team', 'Price list', 'Google Reviews']
    },
    stack: ['Astro', 'Tailwind CSS', 'Calendly API']
  },
  {
    id: 13,
    title: 'OfficinaPro',
    sub: { it: 'Officina Meccanica', en: 'Auto Repair Shop' },
    sector: { it: 'Servizi Professionali', en: 'Professional Services' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + CRM Tagliandi', en: 'Showcase Site + Service CRM' },
    priceMin: 800, priceMax: 2000, difficulty: 2,
    description: {
      it: 'Sito per officine con form richiesta preventivo riparazione, prenotazione tagliando online, archivio veicoli del cliente e reminder automatici.',
      en: 'Site for garages with online repair quote form, service booking, customer vehicle archive and automatic reminders.'
    },
    features: {
      it: ['Preventivo online', 'Prenota tagliando', 'Archivio veicoli', 'Reminder email'],
      en: ['Online quote', 'Service booking', 'Vehicle archive', 'Email reminders']
    },
    stack: ['React', 'Supabase', 'Resend']
  },
  {
    id: 14,
    title: 'NutriLife',
    sub: { it: 'Nutrizionista & Dietista', en: 'Nutritionist & Dietitian' },
    sector: { it: 'Salute & Benessere', en: 'Health & Wellness' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Area Clienti', en: 'Showcase Site + Client Portal' },
    priceMin: 900, priceMax: 2500, difficulty: 2,
    description: {
      it: 'Sito vetrina per nutrizionisti con prenotazione consulenza, area clienti per consultare piani alimentari e tracker settimanale peso/obiettivi.',
      en: 'Showcase site for nutritionists with consultation booking, client portal to view meal plans and a weekly weight/goal tracker.'
    },
    features: {
      it: ['Prenotazione', 'Piani alimentari', 'Tracker obiettivi', 'Area clienti'],
      en: ['Booking', 'Meal plans', 'Goal tracker', 'Client portal']
    },
    stack: ['Next.js', 'Supabase', 'Tailwind CSS']
  },
  {
    id: 15,
    title: 'EventiLux',
    sub: { it: 'Agenzia Organizzazione Eventi', en: 'Event Organisation Agency' },
    sector: { it: 'Arte & Creatività', en: 'Arts & Creativity' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina Premium', en: 'Premium Showcase Site' },
    priceMin: 1200, priceMax: 3500, difficulty: 2,
    description: {
      it: 'Sito vetrina di lusso per agenzie eventi con portfolio visivo, modulo richiesta evento personalizzato, counter posti e landing page dedicate.',
      en: 'Luxury showcase site for event agencies with a visual portfolio, personalised event request form, seat counter and dedicated landing pages.'
    },
    features: {
      it: ['Portfolio eventi', 'Form richiesta', 'Landing pages', 'Counter posti'],
      en: ['Event portfolio', 'Request form', 'Landing pages', 'Seat counter']
    },
    stack: ['Next.js', 'Sanity CMS', 'Tailwind CSS']
  },
  {
    id: 16,
    title: 'ArchStudio',
    sub: { it: 'Studio di Architettura', en: 'Architecture Studio' },
    sector: { it: 'Arte & Creatività', en: 'Arts & Creativity' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Portfolio', en: 'Showcase Site + Portfolio' },
    priceMin: 1500, priceMax: 4000, difficulty: 2,
    description: {
      it: 'Portfolio di alto profilo per studi di architettura con case study interattivi, rendering 3D viewer, form richiesta consulenza e blog editoriale.',
      en: 'High-profile portfolio for architecture firms with interactive case studies, 3D viewer, consultation request form and an editorial blog.'
    },
    features: {
      it: ['Case study', '3D viewer', 'Blog CMS', 'Form consulenza'],
      en: ['Case studies', '3D viewer', 'Blog CMS', 'Consultation form']
    },
    stack: ['Astro', 'Sanity CMS', 'Three.js', 'Tailwind']
  },
  {
    id: 17,
    title: 'VetCare',
    sub: { it: 'Clinica Veterinaria', en: 'Veterinary Clinic' },
    sector: { it: 'Salute & Benessere', en: 'Health & Wellness' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Booking', en: 'Showcase Site + Booking' },
    priceMin: 900, priceMax: 2500, difficulty: 2,
    description: {
      it: 'Sito vetrina per cliniche veterinarie con prenotazione visita per animale domestico, scheda salute pet e promemoria vaccini automatici via email.',
      en: 'Showcase site for vet clinics with pet appointment booking, pet health profile and automatic vaccine reminders via email.'
    },
    features: {
      it: ['Prenotazione visita', 'Scheda pet', 'Reminder vaccini', 'Team medici'],
      en: ['Visit booking', 'Pet profile', 'Vaccine reminders', 'Medical team']
    },
    stack: ['React', 'Supabase', 'Resend']
  },
  {
    id: 18,
    title: 'PadelClub',
    sub: { it: 'Centro Sportivo & Padel', en: 'Sports Centre & Padel' },
    sector: { it: 'Sport & Fitness', en: 'Sport & Fitness' },
    type: 'webapp',
    typeLabel: { it: 'Web App + Mobile', en: 'Web App + Mobile' },
    priceMin: 2000, priceMax: 5000, difficulty: 3,
    description: {
      it: 'Piattaforma prenotazione campi da padel/tennis con gestione tornei, membership, ranking giocatori e notifiche partita.',
      en: 'Padel/tennis court booking platform with tournament management, memberships, player rankings and match notifications.'
    },
    features: {
      it: ['Prenotazione campi', 'Tornei', 'Ranking giocatori', 'Membership'],
      en: ['Court booking', 'Tournaments', 'Player rankings', 'Membership']
    },
    stack: ['React', 'Node.js', 'PostgreSQL', 'Firebase']
  },
  {
    id: 19,
    title: 'TruccoMaestro',
    sub: { it: 'Make-up Artist & Beauty', en: 'Make-up Artist & Beauty' },
    sector: { it: 'Arte & Creatività', en: 'Arts & Creativity' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Portfolio', en: 'Showcase Site + Portfolio' },
    priceMin: 500, priceMax: 1200, difficulty: 1,
    description: {
      it: 'Sito vetrina per makeup artist con portfolio before/after, lista servizi con prezzi, form richiesta disponibilità e integrazione Instagram/TikTok.',
      en: 'Showcase site for make-up artists with before/after portfolio, service price list, availability request form and Instagram/TikTok integration.'
    },
    features: {
      it: ['Before/After', 'Listino servizi', 'Form disponibilità', 'Social feed'],
      en: ['Before/After', 'Service price list', 'Availability form', 'Social feed']
    },
    stack: ['Astro', 'Tailwind CSS', 'Instagram API']
  },
  {
    id: 20,
    title: 'CoWorkSpace',
    sub: { it: 'Spazi Coworking', en: 'Coworking Spaces' },
    sector: { it: 'Servizi Professionali', en: 'Professional Services' },
    type: 'webapp',
    typeLabel: { it: 'Web App + Booking', en: 'Web App + Booking' },
    priceMin: 2500, priceMax: 6000, difficulty: 3,
    description: {
      it: 'Piattaforma prenotazione scrivanie e sale meeting per spazi coworking con abbonamenti, accesso QR e dashboard admin con reportistica occupazione.',
      en: 'Desk and meeting room booking platform for coworking spaces with subscriptions, QR access and an admin dashboard with occupancy reports.'
    },
    features: {
      it: ['Prenota desk/sala', 'Abbonamenti', 'Accesso QR', 'Dashboard admin'],
      en: ['Desk/room booking', 'Subscriptions', 'QR access', 'Admin dashboard']
    },
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe']
  },
  {
    id: 21,
    title: 'PsicoStudio',
    sub: { it: 'Psicologo & Terapeuta', en: 'Psychologist & Therapist' },
    sector: { it: 'Salute & Benessere', en: 'Health & Wellness' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Booking', en: 'Showcase Site + Booking' },
    priceMin: 900, priceMax: 2500, difficulty: 2,
    description: {
      it: 'Sito vetrina rassicurante per psicologi con prenotazione primo colloquio, presentazione approcci terapeutici, FAQ e form di contatto anonimo.',
      en: 'Reassuring showcase site for psychologists with first-session booking, therapeutic approach presentation, FAQ and anonymous contact form.'
    },
    features: {
      it: ['Primo colloquio', 'Form anonimo', 'FAQ interattive', 'Approcci terapia'],
      en: ['First session', 'Anonymous form', 'Interactive FAQ', 'Therapy approaches']
    },
    stack: ['Astro', 'Tailwind CSS', 'Supabase']
  },
  {
    id: 22,
    title: 'MenuQR',
    sub: { it: 'Menu Digitale per Locali', en: 'Digital Menu for Venues' },
    sector: { it: 'Ristorazione', en: 'Food & Beverage' },
    type: 'webapp',
    typeLabel: { it: 'SaaS Micro / Web App', en: 'Micro SaaS / Web App' },
    priceMin: 1500, priceMax: 4000, difficulty: 2,
    description: {
      it: 'Piattaforma che permette a bar e ristoranti di gestire il proprio menu digitale via QR code, con aggiornamento in tempo reale, allergeni e modello abbonamento mensile.',
      en: 'Platform that lets bars and restaurants manage their digital menu via QR code, with real-time updates, allergen info and a monthly subscription model.'
    },
    features: {
      it: ['QR code', 'Gestione menu live', 'Allergeni', 'Abbonamento SaaS'],
      en: ['QR code', 'Live menu management', 'Allergens', 'SaaS subscription']
    },
    stack: ['Next.js', 'Supabase', 'Stripe']
  },
  {
    id: 23,
    title: 'FotoStudio',
    sub: { it: 'Fotografo Professionista', en: 'Professional Photographer' },
    sector: { it: 'Arte & Creatività', en: 'Arts & Creativity' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Booking', en: 'Showcase Site + Booking' },
    priceMin: 600, priceMax: 1600, difficulty: 1,
    description: {
      it: 'Portfolio fotografico con gallerie per categoria, form richiesta disponibilità per data evento, pacchetti e prezzi e sistema di consegna foto privato.',
      en: 'Photography portfolio with categorised galleries, event date availability form, packages and pricing, and a private photo delivery system.'
    },
    features: {
      it: ['Gallerie per categoria', 'Richiesta data evento', 'Pacchetti prezzi', 'Consegna privata'],
      en: ['Categorised galleries', 'Event date request', 'Packages & pricing', 'Private delivery']
    },
    stack: ['Astro', 'Sanity CMS', 'Cloudinary']
  },
  {
    id: 24,
    title: 'TraslocoFacile',
    sub: { it: 'Agenzia Traslochi & Facchinaggio', en: 'Removals & Moving Agency' },
    sector: { it: 'Servizi Professionali', en: 'Professional Services' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Preventivo', en: 'Showcase Site + Quote Form' },
    priceMin: 700, priceMax: 1800, difficulty: 2,
    description: {
      it: 'Sito per ditte di traslochi con form preventivo intelligente (volume, distanza, piano, ascensore), servizi extra selezionabili e richiesta sopralluogo con mappa.',
      en: 'Site for removal companies with a smart quote form (volume, distance, floor, lift), selectable extras and a site-visit request with map.'
    },
    features: {
      it: ['Form preventivo smart', 'Servizi extra', 'Richiesta sopralluogo', 'Mappa Google'],
      en: ['Smart quote form', 'Extra services', 'Site visit request', 'Google Maps']
    },
    stack: ['React', 'Tailwind CSS', 'Google Maps API']
  },
  {
    id: 25,
    title: 'AcademiaSport',
    sub: { it: 'Scuola Calcio / Sport Giovanile', en: 'Football School / Youth Sport' },
    sector: { it: 'Sport & Fitness', en: 'Sport & Fitness' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Iscrizioni', en: 'Showcase Site + Registration' },
    priceMin: 800, priceMax: 2200, difficulty: 2,
    description: {
      it: 'Sito per società sportive giovanili con iscrizione online ai corsi, area genitori per documenti e comunicazioni, calendario allenamenti e galleria foto/video.',
      en: 'Site for youth sports clubs with online course registration, parent portal for documents and updates, training calendar and photo/video gallery.'
    },
    features: {
      it: ['Iscrizione online', 'Area genitori', 'Calendario', 'Galleria partite'],
      en: ['Online registration', 'Parent portal', 'Calendar', 'Match gallery']
    },
    stack: ['Next.js', 'Supabase', 'Resend']
  },
  {
    id: 26,
    title: 'CateringEvent',
    sub: { it: 'Catering & Chef a Domicilio', en: 'Catering & Private Chef' },
    sector: { it: 'Ristorazione', en: 'Food & Beverage' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Form Richiesta', en: 'Showcase Site + Request Form' },
    priceMin: 700, priceMax: 1800, difficulty: 1,
    description: {
      it: 'Sito vetrina per catering privato con menu degustazione, form richiesta per tipo evento (matrimonio, azienda, privato), numero ospiti e galleria eventi passati.',
      en: 'Showcase site for private catering with tasting menu, event-type request form (wedding, corporate, private), guest count and past event gallery.'
    },
    features: {
      it: ['Menu degustazione', 'Form tipo evento', 'Galleria', 'Testimonianze'],
      en: ['Tasting menu', 'Event type form', 'Gallery', 'Testimonials']
    },
    stack: ['Astro', 'Tailwind CSS', 'Formspree']
  },
  {
    id: 27,
    title: 'ImmobiliareVR',
    sub: { it: 'Agenzia con Virtual Tour', en: 'Agency with Virtual Tour' },
    sector: { it: 'Casa & Immobili', en: 'Real Estate' },
    type: 'webapp',
    typeLabel: { it: 'Web App + 3D Tour', en: 'Web App + 3D Tour' },
    priceMin: 4000, priceMax: 10000, difficulty: 4,
    description: {
      it: 'Sito immobiliare avanzato con tour virtuali 360° Matterport, confronto immobili side-by-side, simulatore mutuo e notifiche per nuovi annunci compatibili con i filtri salvati.',
      en: 'Advanced real estate site with 360° Matterport virtual tours, side-by-side property comparison, mortgage simulator and alerts for new listings matching saved filters.'
    },
    features: {
      it: ['Tour 360°', 'Simulatore mutuo', 'Confronto immobili', 'Alert annunci'],
      en: ['360° tour', 'Mortgage simulator', 'Property comparison', 'Listing alerts']
    },
    stack: ['Next.js', 'Matterport SDK', 'PostgreSQL', 'Prisma']
  },
  {
    id: 28,
    title: 'CleanPro',
    sub: { it: 'Impresa Pulizie & Sanificazioni', en: 'Cleaning & Sanitisation Company' },
    sector: { it: 'Servizi Professionali', en: 'Professional Services' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Preventivo', en: 'Showcase Site + Quote Form' },
    priceMin: 600, priceMax: 1500, difficulty: 1,
    description: {
      it: 'Sito professionale per imprese di pulizie con form preventivo per tipologia, certificazioni in evidenza, richiesta abbonamento periodico e recensioni verificate.',
      en: 'Professional site for cleaning companies with a type-based quote form, highlighted certifications, periodic subscription request and verified reviews.'
    },
    features: {
      it: ['Preventivo per tipologia', 'Certificazioni', 'Abbonamento periodico', 'Recensioni'],
      en: ['Type-based quote', 'Certifications', 'Periodic subscription', 'Reviews']
    },
    stack: ['Astro', 'Tailwind CSS', 'Supabase']
  },
  {
    id: 29,
    title: 'TattooParlour',
    sub: { it: 'Studio Tatuaggi & Piercing', en: 'Tattoo & Piercing Studio' },
    sector: { it: 'Arte & Creatività', en: 'Arts & Creativity' },
    type: 'vetrina',
    typeLabel: { it: 'Sito Vetrina + Booking', en: 'Showcase Site + Booking' },
    priceMin: 500, priceMax: 1400, difficulty: 1,
    description: {
      it: 'Sito vetrina dark/minimal per studi tattoo con portfolio artisti diviso per stile, prenotazione consulenza gratuita e modulo disponibilità per flash day.',
      en: 'Dark/minimal showcase site for tattoo studios with artist portfolio by style, free consultation booking and a flash day availability form.'
    },
    features: {
      it: ['Portfolio per stile', 'Prenota consulenza', 'Flash day', 'Team artisti'],
      en: ['Portfolio by style', 'Consultation booking', 'Flash day', 'Artist team']
    },
    stack: ['Astro', 'Tailwind CSS', 'Calendly API']
  },
  {
    id: 30,
    title: 'ProjectHub',
    sub: { it: 'Tool Gestione Progetti Freelance', en: 'Freelance Project Management Tool' },
    sector: { it: 'Servizi Professionali', en: 'Professional Services' },
    type: 'webapp',
    typeLabel: { it: 'Web App SaaS', en: 'SaaS Web App' },
    priceMin: 5000, priceMax: 12000, difficulty: 4,
    description: {
      it: 'Piattaforma per freelance e piccole agenzie per gestire progetti, clienti, milestone e fatture. Il cliente ha accesso a un portale dedicato per vedere l\'avanzamento.',
      en: 'Platform for freelancers and small agencies to manage projects, clients, milestones and invoices. The client has access to a dedicated portal to track progress.'
    },
    features: {
      it: ['Gestione progetti', 'Portale cliente', 'Milestone', 'Fatturazione'],
      en: ['Project management', 'Client portal', 'Milestones', 'Invoicing']
    },
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe']
  }
];
