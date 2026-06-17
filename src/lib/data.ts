// All content sourced from Ankush Chopadekar's resume.
// Centralized here so copy changes happen in one place.

export const profile = {
  name: "Ankush Chopadekar",
  title: "FP&A Consultant",
  subtitle:
    "Financial Planning & Analysis · Budgeting & Forecasting · Business Partnering",
  location: "Pune, India",
  phone: "+91 84110 56611",
  email: "ankush.chopadekar@gmail.com",
  linkedin: "linkedin.com/in/ankush-chopadekar-14b832166",
  linkedinUrl: "https://linkedin.com/in/ankush-chopadekar-14b832166",
  yearsExperience: 10,
  summary:
    "FP&A consultant with 10 years of experience across financial planning, budgeting, forecasting, P&L management, variance analysis, and management reporting within large, multi-market organisations. Experienced in partnering with CFO-level stakeholders and Market Unit leadership to consolidate financial inputs, deliver forecast and variance insight, and support group-level decision-making. Track record of driving process transition and automation initiatives that improve reporting accuracy and efficiency, alongside hands-on experience leading a team of 4 FTEs and managing end-to-end Procure-to-Pay (P2P) operations.",
};

export const heroStats = [
  { value: 1.4, prefix: "$", suffix: "M", decimals: 1, label: "Saved via Duplicate Payment Control" },
  { value: 10, suffix: "+", decimals: 0, label: "Years in FP&A & Finance" },
  { value: 31, suffix: "%", decimals: 0, label: "FTE Utilisation Improvement" },
  { value: 19, suffix: "+", decimals: 0, label: "Performance Recognitions" },
];

export type CompetencyGroup = {
  heading: string;
  items: string[];
};

export const competencies: CompetencyGroup[] = [
  {
    heading: "Planning & Analysis",
    items: [
      "FP&A, Budgeting & Forecasting",
      "P&L Management & Variance Analysis",
      "Financial Modelling & KPI Reporting",
      "Month-End / Quarter-End Close & Consolidation",
      "Cash Flow Analysis",
    ],
  },
  {
    heading: "Operations & Leadership",
    items: [
      "Process Transition & Automation",
      "Procure-to-Pay (P2P) & AP Reconciliation",
      "Cost Control & Revenue Analysis",
      "Stakeholder & CFO Engagement",
      "Oracle Fusion, Hyperion (HFM), Power BI, Power Automate, Advanced Excel",
    ],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  groups?: { heading: string; bullets: string[] }[];
  bullets?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Capgemini Technology Services India Limited",
    role: "Consultant",
    location: "Pune, India",
    period: "Jan 2025 – Present",
    current: true,
    groups: [
      {
        heading: "Financial Planning & Analysis",
        bullets: [
          "Manage the Italy business unit and coordinate with multiple Market Units to gather, validate, and consolidate financial inputs, securing sign-off on business numbers from the SBU and Group.",
          "Prepare monthly and quarterly forecasts using trend analysis, business updates, and performance insights.",
          "Deliver monthly variance analysis with commentary across multiple scenarios for SBU and Group reporting.",
          "Finalise P&L statements and KPI dashboards; submit consolidated results to the Group CFO.",
          "Identify and flag revenue and expense discrepancies, presenting findings to senior management for corrective action.",
          "Lead preparation of the Annual Budget, aligning assumptions with Group expectations and Market Unit business plans.",
          "Support month-end and quarter-end close to ensure accurate financial reporting and consolidation.",
          "Load monthly forecast submissions into HFM and prepare management review decks.",
        ],
      },
      {
        heading: "Process Transition & Automation",
        bullets: [
          "Lead process transition initiatives from the onshore team, ensuring smooth knowledge transfer, documentation, and stabilisation of activities across finance functions.",
          "Design and implement process automation solutions using Excel Macros and Power Automate, delivering significant time savings and improved accuracy.",
          "Streamline reporting processes by reducing manual touchpoints, integrating AI use cases, and standardising templates across business units.",
          "Proactively identify process gaps, propose efficiency improvements, and partner with stakeholders on end-to-end implementation.",
        ],
      },
      {
        heading: "Leadership & Team Management",
        bullets: [
          "Lead a team of 4 FTEs, overseeing daily deliverables across FP&A and reporting activities.",
          "Allocate tasks and review financial analysis, forecasts, and variance reports for accuracy and timeliness.",
          "Provide feedback, training, and guidance to improve team efficiency and quality.",
          "Act as primary escalation point for finance-related queries and stakeholder coordination.",
          "Drive adherence to SLAs, timelines, and internal controls across the team.",
        ],
      },
    ],
  },
  {
    company: "Accenture Solutions Pvt Ltd",
    role: "Process Analyst (Process Outsourced)",
    location: "Pune, India",
    period: "Sep 2024 – Jan 2025",
  },
  {
    company: "FIS Solutions Software (India) Pvt Ltd",
    role: "Finance Analyst, promoted to Senior Analyst",
    location: "Pune, India",
    period: "Jan 2019 – Aug 2024",
    groups: [
      {
        heading: "Financial Planning & Analysis",
        bullets: [
          "Prepared monthly variance analysis and rolling forecasts for the FIS business, supporting both Accenture's outsourced delivery model and FIS's internal reporting requirements.",
          "Built cash flow statements across multiple business units and forecast cash positions for the treasury department.",
          "Prepared the annual budget along with monthly and daily forecasts.",
          "Led the Duplicate Payment Control project, identifying and preventing duplicate vendor payments to deliver substantial cost savings.",
          "Supported month-end and quarter-end close, ensuring timely and accurate reporting of results.",
          "Cleared open items by coordinating directly with business representatives to validate transaction and account details.",
          "Monitored shared reporting mailboxes to ensure all queries and action items were addressed promptly.",
          "Loaded final monthly forecast data into HFM and performed month-end reporting using Oracle, HFM, and Excel.",
          "Supported financial reporting, analysis, and data consolidation, and provided FP&A support to the accounting team ahead of month-end close.",
          "Analysed monthly and quarterly financial statements and prepared management packs and business review decks.",
        ],
      },
    ],
  },
  {
    company: "FIS Solutions Software (India) Pvt Ltd",
    role: "Associate, promoted to Finance Analyst",
    location: "Pune, India",
    period: "Jul 2017 – Dec 2018",
  },
  {
    company: "Quess Corp Ltd (Magna Infotech)",
    role: "Associate (Contract)",
    location: "Pune, India",
    period: "May 2017 – Jul 2017",
    groups: [
      {
        heading: "Accounts Payable – Procure-to-Pay (P2P)",
        bullets: [
          "Managed global P2P activities including AP reconciliation, invoice processing and validation, and vendor payments, alongside daily and monthly reporting for senior management.",
          "Prepared daily validation and hold-report allocations, ensuring completion within SLA.",
          "Prepared weekly cash flow and ageing reports for the treasury team.",
          "Managed end-to-end T&E activities, including FOREX issuance and settlement of employee claims across India and Tunisia, and prepared month-end accruals.",
          "Developed Excel macros that streamlined processes and delivered significant time savings for the team.",
          "Served as point of contact for business units, employees, and vendors, monitoring processes and driving improvements.",
          "Managed corporate credit cards, reconciliations, and consolidated payments across pan-India entities.",
          "Resolved business unit and vendor escalations, performing root-cause analysis to prevent recurrence.",
          "Supported Oracle implementation and UAT testing, and trained new joiners on P2P processes.",
        ],
      },
    ],
  },
  {
    company: "State Street Syntel Services Pvt Ltd",
    role: "Associate",
    location: "Pune, India",
    period: "May 2013 – Oct 2014",
  },
];

export type Achievement = {
  metric: string;
  unit?: string;
  label: string;
};

export const achievements: Achievement[] = [
  { metric: "1.4", unit: "USD M", label: "Saved through a Duplicate Payment Control project" },
  { metric: "300", unit: "USD K", label: "Vendor late-fee waivers enabled through proactive follow-ups and reconciliation" },
  { metric: "15", unit: "%", label: "Improvement in reporting accuracy through process improvements" },
  { metric: "31", unit: "%", label: "Increase in FTE utilisation by transitioning a process from the onshore team" },
  { metric: "80", unit: "%", label: "Reduction in paper usage through a redesigned documentation flow" },
  { metric: "19+", unit: "Awards", label: "Kudos & WOW recognitions for excellence and team contribution (2017–2025)" },
];

export const recognitions = [
  "STAR Performer recognition for automation initiatives and process optimisation",
];

export type Certification = { name: string; issuer?: string; year?: string };

export const certifications: Certification[] = [
  { name: "Financial Modeling Foundations" },
  { name: "Excel Macros in Depth" },
  { name: "Lean Six Sigma Black Belt (Provisional)", issuer: "AIQM", year: "2018" },
  { name: "Lean Six Sigma Green Belt", issuer: "AIQM", year: "2018" },
];

export const software = [
  "Oracle Fusion Financials",
  "Oracle Hyperion (HFM)",
  "Power BI",
  "Power Automate",
  "Advanced Excel",
];

export const education = {
  degree: "Master of Business Administration (MBA) – Finance",
  school: "RMD Sinhgad School of Management Studies, University of Pune",
  period: "2015 – 2017",
  location: "Pune, India",
  detail: "CGPA: 7.84",
};

export const languages = ["English", "Hindi", "Marathi"];

export const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Experience", href: "#experience" },
  { label: "Competencies", href: "#competencies" },
  { label: "Impact", href: "#impact" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];
