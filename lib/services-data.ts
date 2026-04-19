// Seed data for the services CMS. This same shape lives in Supabase
// (see supabase/migrations/0001_services.sql). The CMS admin will
// eventually replace this static file — for now it's the source of truth.

export type CategorySlug = "core" | "ai" | "custom";

export type SubService = {
    slug: string;
    title: string;
    shortDesc: string;
    longDesc: string;
    features: string[];
    iconKey: string; // resolved via lucide-react in the UI layer
    imageUrl?: string; // placeholder until user uploads assets
    videoUrl?: string;
};

export type ServiceCategory = {
    slug: CategorySlug;
    label: string;
    eyebrow: string;
    heroTitle: string;
    heroTagline: string;
    subServices: SubService[];
};

export const serviceCategories: ServiceCategory[] = [
    {
        slug: "core",
        label: "Core Services",
        eyebrow: "01 / Core Services",
        heroTitle: "The Foundation Every Real Estate Agency Needs",
        heroTagline:
            "Lead capture, CRM, and follow-up systems — the backbone that stops deals slipping through the cracks.",
        subServices: [
            {
                slug: "email-systems",
                title: "Email & Lead Inbox Systems",
                shortDesc: "Every inquiry captured, tagged, and routed from a single inbox.",
                longDesc:
                    "We build a central inbox that pulls leads from portals, ads, websites, and WhatsApp into one place — with auto-tagging, scoring, and routing to the right agent within seconds.",
                features: [
                    "Multi-source lead capture",
                    "Auto-tagging & scoring",
                    "SLA alerts",
                    "Unified agent view",
                ],
                iconKey: "Mail",
            },
            {
                slug: "whatsapp-chat",
                title: "WhatsApp & Chat Automation",
                shortDesc: "24/7 AI on WhatsApp that qualifies leads and books viewings.",
                longDesc:
                    "AI-powered WhatsApp bots that respond instantly, qualify intent, share property details, and schedule viewings — even at 2am. Built specifically for real estate conversations.",
                features: [
                    "Instant auto-replies",
                    "Lead qualification flow",
                    "Viewing scheduler",
                    "Handoff to human agents",
                ],
                iconKey: "MessageSquare",
            },
            {
                slug: "crm-setup",
                title: "CRM Setup & Optimization",
                shortDesc: "Your CRM, configured around how your team actually works.",
                longDesc:
                    "We design and deploy a real estate CRM (HubSpot, Zoho, or custom) with your exact pipeline stages, custom fields, automations, and reporting baked in from day one.",
                features: [
                    "Pipeline design",
                    "Data migration",
                    "Custom fields & views",
                    "Team onboarding",
                ],
                iconKey: "Database",
            },
            {
                slug: "follow-ups",
                title: "Automated Follow-Up Sequences",
                shortDesc: "7-touch drip sequences that nurture leads without manual work.",
                longDesc:
                    "Multi-channel follow-up sequences (email + WhatsApp + SMS) that run automatically based on lead behaviour — so no opportunity goes cold.",
                features: [
                    "Behaviour-based triggers",
                    "Multi-channel drips",
                    "Deal-stalled alerts",
                    "Re-engagement flows",
                ],
                iconKey: "Workflow",
            },
        ],
    },
    {
        slug: "ai",
        label: "AI Integrations",
        eyebrow: "02 / AI Integrations",
        heroTitle: "AI That Works While You Sleep",
        heroTagline:
            "Large-language-model integrations, voice agents, and intelligent automations that replace the busywork of a real estate agency.",
        subServices: [
            {
                slug: "ai-voice-agent",
                title: "AI Voice Agents",
                shortDesc: "24/7 phone agents that qualify and book — indistinguishable from human.",
                longDesc:
                    "Voice AI that answers incoming calls, qualifies leads, books viewings, and hands off warm prospects to your agents — trained on your specific real estate stock and tone.",
                features: [
                    "Natural voice conversations",
                    "Real-time qualification",
                    "Calendar integration",
                    "Seamless human handoff",
                ],
                iconKey: "Phone",
            },
            {
                slug: "gpt-assistants",
                title: "GPT-Powered Sales Assistants",
                shortDesc: "Custom LLM assistants trained on your property inventory.",
                longDesc:
                    "A private GPT-style assistant your team queries for deal info, comparables, objection handling, and listing write-ups — grounded in your real property data.",
                features: [
                    "Trained on your inventory",
                    "Listing copy generation",
                    "Instant comparables",
                    "Objection playbooks",
                ],
                iconKey: "Bot",
            },
            {
                slug: "smart-routing",
                title: "Smart Lead Routing",
                shortDesc: "AI that assigns leads to the agent most likely to close.",
                longDesc:
                    "Routing engine that scores agents on historical close rates, language, geography, and price band — then auto-assigns each incoming lead for maximum conversion.",
                features: [
                    "Performance-based routing",
                    "Language matching",
                    "Price-band specialization",
                    "Live re-routing",
                ],
                iconKey: "Zap",
            },
            {
                slug: "analytics-ai",
                title: "AI Analytics & Forecasting",
                shortDesc: "Predictive pipeline forecasting and agent-level insights.",
                longDesc:
                    "Machine-learning models that forecast pipeline closure, spot agent underperformance, and flag leads at risk of going cold — before it happens.",
                features: [
                    "Pipeline forecasts",
                    "Agent scorecards",
                    "At-risk lead alerts",
                    "Revenue predictions",
                ],
                iconKey: "BarChart3",
            },
        ],
    },
    {
        slug: "custom",
        label: "Custom Solutions",
        eyebrow: "03 / Custom Solutions",
        heroTitle: "When Off-the-Shelf Won't Cut It",
        heroTagline:
            "Mobile apps, web platforms, internal tools, and deep integrations — built end-to-end for your real estate operation.",
        subServices: [
            {
                slug: "mobile-apps",
                title: "Mobile Applications",
                shortDesc: "iOS & Android apps for agents in the field and clients on the move.",
                longDesc:
                    "Native and cross-platform mobile apps — for agents managing deals on the road, or for buyers browsing inventory with AR-style property tours.",
                features: [
                    "Native iOS & Android",
                    "Agent field apps",
                    "Client-facing apps",
                    "Offline-first architecture",
                ],
                iconKey: "Smartphone",
            },
            {
                slug: "web-platforms",
                title: "Custom Web Platforms",
                shortDesc: "Portals, deal rooms, and listing sites built to your spec.",
                longDesc:
                    "Full-stack web builds — investor portals, off-market deal rooms, premium listing sites with live 3D tours, agent extranets, and anything in between.",
                features: [
                    "Investor portals",
                    "Off-market deal rooms",
                    "Listing platforms",
                    "Agent extranets",
                ],
                iconKey: "Globe",
            },
            {
                slug: "internal-tools",
                title: "Internal Tools & Dashboards",
                shortDesc: "Commission calcs, inventory trackers, and ops dashboards.",
                longDesc:
                    "The boring but revenue-critical internal stuff: commission calculators, contract generators, compliance trackers, inventory managers, ops dashboards.",
                features: [
                    "Commission calculators",
                    "Contract generators",
                    "Inventory trackers",
                    "Ops dashboards",
                ],
                iconKey: "Wrench",
            },
            {
                slug: "integrations",
                title: "Deep System Integrations",
                shortDesc: "Connect everything: CRMs, portals, phones, payments, ads.",
                longDesc:
                    "We integrate CRMs with portals (Bayut, Property Finder, Dubizzle), phone systems, payment gateways, ad platforms, and accounting — into one coherent data flow.",
                features: [
                    "Portal sync",
                    "Call tracking",
                    "Payment webhooks",
                    "Ad platform pipes",
                ],
                iconKey: "Link2",
            },
        ],
    },
];

export function getCategory(slug: string): ServiceCategory | undefined {
    return serviceCategories.find((c) => c.slug === slug);
}
