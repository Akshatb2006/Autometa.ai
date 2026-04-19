export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    author: {
        name: string;
        role: string;
    };
    heroGradient: string;
    tags: string[];
    body: string[];
    featured?: boolean;
};

export const blogPosts: BlogPost[] = [
    {
        slug: "real-estate-lead-management-2025",
        title: "The Complete Guide to Real Estate Lead Management in 2025",
        excerpt: "Learn how top-performing real estate teams capture, track, and convert every lead with structured systems and automation.",
        category: "Lead Management",
        readTime: "8 min read",
        date: "Apr 2, 2025",
        author: { name: "Akshat Baranwal", role: "Co-founder, Autometa" },
        heroGradient: "linear-gradient(135deg, #0A0E18 0%, #0066FF 140%)",
        tags: ["Lead capture", "CRM", "WhatsApp", "Follow-up"],
        featured: true,
        body: [
            "Real estate teams lose more deals to bad pipeline hygiene than to bad salesmanship. The average agency loses 40% of their leads within the first 24 hours — not because the leads went cold, but because nobody followed up.",
            "In this guide we break down the four layers of a modern real estate lead management system: capture (multi-channel intake), enrichment (scoring + routing), nurture (multi-touch follow-up), and visibility (dashboards and alerts). You don&apos;t need to rebuild everything — start with the highest-leverage layer for your team and grow from there.",
            "The centre of the system is the single unified inbox. Every lead — from WhatsApp, Bayut, Property Finder, Meta Ads, your website — lands in one place, automatically tagged by source, intent, and budget. No spreadsheets, no personal phones, no &quot;I&apos;ll forward it to Ahmed later&quot;.",
            "Once capture is clean, routing becomes trivial. We score leads on intent signals (speed of first response, questions asked, property type) and assign to the agent most likely to close based on their historical performance on similar leads. This alone typically lifts conversion 20-30% without touching anything else.",
            "Nurture is where most real estate teams leak revenue. A lead that doesn&apos;t close in the first 72 hours still has an 80% chance of closing within 90 days — if you touch them 7 times. We build 7-touch sequences across WhatsApp, email, and SMS that run automatically based on behaviour, not calendar.",
        ],
    },
    {
        slug: "follow-up-sequences-that-convert",
        title: "5 Follow-Up Sequences That Convert Real Estate Leads",
        excerpt: "Proven email and WhatsApp templates that keep real estate leads engaged from first contact to closing.",
        category: "Automation",
        readTime: "5 min read",
        date: "Mar 28, 2025",
        author: { name: "Fatima Al Hamad", role: "Systems Lead, Autometa" },
        heroGradient: "linear-gradient(135deg, #0066FF 0%, #00CFFF 120%)",
        tags: ["WhatsApp", "Follow-up", "Templates"],
        body: [
            "The best real estate follow-up system is boring: the same message, sent at the same time, to every lead, forever. The magic isn&apos;t in the copy — it&apos;s in the consistency.",
            "We share the 5 follow-up sequences we build for every client — the new-lead sprint, the stalled-deal re-engagement, the no-show recovery, the post-viewing nurture, and the dormant lead revival.",
            "Each sequence is multi-channel (WhatsApp, email, and SMS) and behaviour-triggered. If the lead clicks the property link, they get one flow. If they go silent for 48 hours, they get another. The system never forgets, never sleeps, and never gets discouraged.",
        ],
    },
    {
        slug: "crm-agents-will-use",
        title: "How to Set Up a CRM That Your Agents Will Actually Use",
        excerpt: "A practical guide to real estate CRM implementation that focuses on adoption, not just features.",
        category: "CRM",
        readTime: "6 min read",
        date: "Mar 22, 2025",
        author: { name: "Akshat Baranwal", role: "Co-founder, Autometa" },
        heroGradient: "linear-gradient(135deg, #00A3FF 0%, #66F2FF 120%)",
        tags: ["CRM", "HubSpot", "Adoption"],
        body: [
            "Every agency has a graveyard of abandoned CRMs. The problem is almost never the tool — it&apos;s that nobody designed the CRM around how the agents actually work.",
            "We walk through the exact playbook we use: start with the pipeline stages the agents already talk about, remove every field that doesn&apos;t drive a decision, and automate the data entry they hate most.",
            "The goal isn&apos;t a full CRM — it&apos;s a CRM agents open on Monday and don&apos;t avoid on Friday. Adoption is the only metric that matters in the first 90 days.",
        ],
    },
    {
        slug: "ai-real-estate-what-works",
        title: "AI in Real Estate: What Actually Works (And What Doesn&apos;t)",
        excerpt: "Cutting through the hype to show you which AI tools deliver real ROI for real estate teams.",
        category: "AI",
        readTime: "7 min read",
        date: "Mar 15, 2025",
        author: { name: "Fatima Al Hamad", role: "Systems Lead, Autometa" },
        heroGradient: "linear-gradient(135deg, #0A0E18 0%, #00A3FF 140%)",
        tags: ["AI", "LLMs", "Voice agents"],
        body: [
            "Every real estate vendor claims their product is &quot;AI-powered&quot;. Most of them aren&apos;t — they&apos;re rule-based systems with a GPT wrapper.",
            "After deploying AI for 40+ UAE agencies, we share the short list of AI use cases that actually return ROI in real estate today: lead qualification, voice agents for after-hours inbound, listing copy generation, and predictive pipeline forecasting.",
            "We also cover the use cases we don&apos;t recommend yet — including fully autonomous closing agents, hallucination-prone price estimators, and most AI-generated property photography.",
        ],
    },
    {
        slug: "automation-journey",
        title: "From Chaos to System: A Real Estate Team&apos;s Automation Journey",
        excerpt: "How a 30-agent brokerage went from spreadsheets to a fully automated lead pipeline in 14 days.",
        category: "Operations",
        readTime: "8 min read",
        date: "Mar 8, 2025",
        author: { name: "Akshat Baranwal", role: "Co-founder, Autometa" },
        heroGradient: "linear-gradient(135deg, #0066FF 0%, #0A0E18 130%)",
        tags: ["Case study", "Automation", "CRM"],
        body: [
            "A 30-agent brokerage came to us with the classic stack: WhatsApp on personal phones, spreadsheets per agent, no CRM, no visibility. The managing director was losing three nights a week chasing reports.",
            "We rebuilt the entire lead flow in 14 days. Centralised inbox, AI-powered first response, CRM pipeline, 7-touch nurture, and a live ops dashboard. Response time went from 4 hours to 90 seconds. Pipeline visibility went from 60% to 99%.",
            "The full teardown — architecture diagrams, what we built in week one, week two, and the mistakes we fixed in week three.",
        ],
    },
    {
        slug: "hidden-cost-slow-response",
        title: "The Hidden Cost of Slow Lead Response Times",
        excerpt: "Data-backed analysis of how response time impacts conversion rates for real estate teams.",
        category: "Lead Management",
        readTime: "4 min read",
        date: "Mar 1, 2025",
        author: { name: "Fatima Al Hamad", role: "Systems Lead, Autometa" },
        heroGradient: "linear-gradient(135deg, #66F2FF 0%, #0066FF 110%)",
        tags: ["Lead response", "Metrics", "Real estate"],
        body: [
            "The 5-minute rule is the most quoted stat in real estate lead management — and it&apos;s true. Leads contacted within 5 minutes are 21× more likely to convert than leads contacted after an hour.",
            "We ran the numbers across 18 UAE brokerages. The median first-response time was 3 hours 42 minutes. The top-decile agency responded in under 90 seconds. The difference in conversion was 4.2×.",
            "If your team responds in under 5 minutes, you don&apos;t need more ads — you need to keep doing what you&apos;re doing. If you don&apos;t, every dirham you spend on ads is subsidising the teams that do.",
        ],
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((b) => b.slug === slug);
}
