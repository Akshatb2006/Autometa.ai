export type CaseStudyResult = {
    metric: string;
    before: string;
    after: string;
};

export type CaseStudy = {
    slug: string;
    client: string;
    industry: string;
    location: string;
    summary: string;
    problem: string;
    discovery: string;
    design: string;
    execution: string;
    results: CaseStudyResult[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
    timeline: string;
    stackTags: string[];
    accent: string;
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "metro-realty-group",
        client: "Metro Realty Group",
        industry: "Residential Brokerage",
        location: "Dubai, UAE",
        summary: "Cut response time from 4+ hours to under 2 minutes by unifying WhatsApp, email, and portal leads into a single AI-routed pipeline.",
        problem: "Leads were scattered across WhatsApp, email, and spreadsheets. Agents had no system to track follow-ups, and response times averaged 4+ hours — most leads had already gone cold by the time someone got to them.",
        discovery: "Our audit revealed 40% of leads received no follow-up within 24 hours. There was no centralized CRM — every agent kept their own spreadsheet. Hot inquiries on WhatsApp were routinely missed overnight.",
        design: "We built a centralized lead management system with auto-routing by language and price band, a custom CRM pipeline, and AI-powered instant responses on WhatsApp that qualify leads before handing off to a human agent.",
        execution: "Implemented in 2 weeks. Trained 25 agents across two offices. Built automated 7-touch follow-up sequences for every lead. Integrated with Bayut, Property Finder, and Meta Ads.",
        results: [
            { metric: "Response Time", before: "4+ hours", after: "< 2 minutes" },
            { metric: "Follow-up Rate", before: "60%", after: "100%" },
            { metric: "Monthly Conversions", before: "12", after: "31" },
        ],
        testimonial: {
            quote: "Autometa rebuilt our entire lead pipeline in under three weeks. We went from missing half our inquiries to responding to every lead within 60 seconds. Our conversion rate more than doubled.",
            author: "Nick Barnard",
            role: "Managing Director, Metro Realty Group",
        },
        timeline: "2 weeks build · Live for 11 months",
        stackTags: ["HubSpot CRM", "WhatsApp AI", "Bayut API", "Property Finder API", "Make.com"],
        accent: "#0066FF",
    },
    {
        slug: "pinnacle-property-management",
        client: "Pinnacle Property Management",
        industry: "Property Management",
        location: "Abu Dhabi, UAE",
        summary: "Replaced phone-and-paper maintenance requests with an automated tenant portal, cutting resolution time from 5 days to 1.5 days across 200+ units.",
        problem: "Maintenance requests were handled via phone calls and paper forms. No tracking, no SLA adherence. Tenant complaints were rising and property managers spent half their day coordinating vendors manually.",
        discovery: "Average resolution time was 5 days. 30% of maintenance requests were lost or duplicated. There was no performance visibility for management — they couldn't even answer 'how many tickets are open right now?'.",
        design: "We designed an automated intake system: tenant portal, auto-assignment to the right vendor by category, SLA tracking with escalations, and live management dashboards showing every open request.",
        execution: "Rolled out across 3 properties (200+ units). Integrated with their existing accounting software. Trained 12 property managers on the new dashboards and alerting system.",
        results: [
            { metric: "Resolution Time", before: "5 days", after: "1.5 days" },
            { metric: "Requests Lost", before: "30%", after: "0%" },
            { metric: "Tenant Satisfaction", before: "3.2 / 5", after: "4.7 / 5" },
        ],
        testimonial: {
            quote: "We stopped firefighting. My team finally has a dashboard that tells them exactly what needs doing, and tenants can see their request status without calling us five times.",
            author: "Layla Al Suwaidi",
            role: "Head of Operations, Pinnacle Property Management",
        },
        timeline: "3 weeks build · Live for 9 months",
        stackTags: ["Custom web portal", "Supabase", "SendGrid", "Xero integration", "Twilio SMS"],
        accent: "#00A3FF",
    },
    {
        slug: "horizon-developments",
        client: "Horizon Developments",
        industry: "Real Estate Development",
        location: "Sharjah, UAE",
        summary: "Unified 3 active project pipelines into one CRM with real-time inventory tracking, cutting manual reporting from 8 hours/week to zero.",
        problem: "The sales team was managing 3 active projects with no unified pipeline. Each project lived in a different tool. Manual weekly reporting consumed 8+ hours of senior time and the leadership had no single source of truth.",
        discovery: "Each project used different tools — one on HubSpot, one on Salesforce, one on spreadsheets. There was no consolidated view of inventory, leads, or sales progress. Management was flying blind at the portfolio level.",
        design: "A unified CRM across all projects with a custom inventory module that syncs unit availability in real time. Custom dashboards for pipeline health, weekly auto-generated reports, and agent-level leaderboards.",
        execution: "Migrated all historical project data into one system. Built a custom inventory management tool with live sync. Automated every weekly and monthly report. Trained the leadership team on the new dashboards.",
        results: [
            { metric: "Reporting Time", before: "8 hrs/week", after: "Automated" },
            { metric: "Sales Cycle", before: "45 days", after: "28 days" },
            { metric: "Pipeline Accuracy", before: "~60%", after: "99%" },
        ],
        testimonial: {
            quote: "For the first time we have a true single source of truth across projects. I open one dashboard in the morning and I know exactly where every deal stands.",
            author: "Ahmed Rahman",
            role: "Chief Sales Officer, Horizon Developments",
        },
        timeline: "4 weeks build · Live for 14 months",
        stackTags: ["HubSpot CRM", "Custom inventory app", "Retool", "Supabase", "Metabase"],
        accent: "#66F2FF",
    },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
    return caseStudies.find((c) => c.slug === slug);
}
