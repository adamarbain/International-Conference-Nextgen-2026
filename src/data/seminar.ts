// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface SeminarInfo {
  name: string;
  shortName: string;
  acronym: string;
  dateRange: string;
  startDate: string;
  endDate: string;
  year: number;
  venue: string;
  city: string;
  country: string;
  university: string;
  format: string;
  email: string;
  phone: string;
  address: string;
  organiserFaculties: string[];
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  role: string;
  institution: string;
  keynoteNumber: number;
  bio: string;
  topic: string;
  initials: string;
  color: string;
}

export interface Track {
  id: string;
  number: number;
  title: string;
  description: string;
  iconName: string;
  topics: string[];
}

export interface ImportantDate {
  id: string;
  label: string;
  date: string;
  description: string;
  status: "upcoming" | "current" | "past";
}

export interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
  type: "ceremony" | "keynote" | "break" | "parallel" | "closing";
}

export interface ParallelSessionRow {
  time: string;
  track1: string;
  track2: string;
  track3: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "registration" | "submission" | "attendance" | "venue" | "general";
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  institution?: string;
}

export interface CommitteeGroup {
  id: string;
  title: string;
  members: CommitteeMember[];
}

export interface SponsorTierData {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  slots: number;
}

export interface SponsorshipPackage {
  tier: string;
  logoOnMaterials: string;
  logoOnWebsite: string;
  exhibitionBooth: string;
  programmeAdvert: string;
  complimentaryPasses: string;
  socialMediaFeature: string;
  speakingSlot: string;
  price: string;
}

export interface RegistrationTier {
  id: string;
  name: string;
  localFee: string;
  intlFee: string;
  description: string;
}

export interface Hotel {
  id: string;
  name: string;
  distance: string;
  priceRange: string;
  stars: number;
  address: string;
}

export interface TransportOption {
  id: string;
  mode: string;
  iconName: string;
  description: string;
  details: string[];
}

export interface Highlight {
  id: string;
  value: string;
  label: string;
  iconName: string;
}

// ─── Seminar Info ─────────────────────────────────────────────────────────────

export const seminarInfo: SeminarInfo = {
  name: "The International Seminar on Global Sustainable Business Transformation with NextGen Information Technology",
  shortName: "NextGen IT & Business Seminar 2026",
  acronym: "NEXTGEN2026",
  dateRange: "14–15 July 2026",
  startDate: "2026-07-14",
  endDate: "2026-07-15",
  year: 2026,
  venue: "Universiti Malaya, Kuala Lumpur, Malaysia",
  city: "Kuala Lumpur",
  country: "Malaysia",
  university: "Universiti Malaya",
  format: "Physical (In-person)",
  email: "nextgen2026@um.edu.my",
  phone: "+60 3-XXXX XXXX",
  address: "Universiti Malaya, 50603 Kuala Lumpur, Malaysia",
  organiserFaculties: [
    "Faculty of Computer Science & IT",
    "Faculty of Business & Economics",
  ],
};

// ─── Speakers ─────────────────────────────────────────────────────────────────

export const speakers: Speaker[] = [
  {
    id: "speaker-1",
    name: "Prof. Dr. Yusniza binti Kamarulzaman",
    title: "Professor",
    role: "Keynote Speaker 1",
    institution: "Universiti Malaya",
    keynoteNumber: 1,
    bio: "Prof. Dr. Yusniza is a distinguished professor with deep expertise in digital transformation and sustainable business practices. Her research has significantly contributed to the understanding of technology adoption and digital economy frameworks in developing nations, informing policy and industry strategy across Southeast Asia.",
    topic: "Digital Transformation for Sustainable Business Ecosystems",
    initials: "YK",
    color: "#1a2e5a",
  },
  {
    id: "speaker-2",
    name: "Industry Speaker (TBA)",
    title: "Senior Executive",
    role: "Keynote Speaker 2",
    institution: "Industry Expert",
    keynoteNumber: 2,
    bio: "A leading industry expert with extensive experience in NextGen digital technologies and global business transformation. This speaker brings a practitioner's perspective on how organisations are navigating the challenges and opportunities of sustainable digitalisation. Full details to be announced.",
    topic: "Industry Perspectives on NextGen Digital Innovation",
    initials: "IS",
    color: "#374151",
  },
  {
    id: "speaker-3",
    name: "Assoc. Prof. Dr. Norisma Idris",
    title: "Associate Professor",
    role: "Keynote Speaker 3",
    institution: "Universiti Malaya",
    keynoteNumber: 3,
    bio: "Assoc. Prof. Dr. Norisma Idris is a renowned researcher in artificial intelligence and computational technologies. Her work spans natural language processing, intelligent systems, and AI-driven sustainability solutions, with numerous publications in high-impact international journals and conferences.",
    topic: "Artificial Intelligence as a Catalyst for Sustainable Development",
    initials: "NI",
    color: "#065f46",
  },
];

// ─── Tracks ───────────────────────────────────────────────────────────────────

export const tracks: Track[] = [
  {
    id: "track-1",
    number: 1,
    title: "Sustainable Business, Green Economy & Policy Transformation",
    description:
      "Exploring the intersection of sustainable business models, green economic policies, and transformative governance frameworks for a net-zero future.",
    iconName: "Leaf",
    topics: [
      "Sustainable Business Models & Strategies",
      "Green Economy Frameworks",
      "ESG Reporting & Compliance",
      "Climate Policy & Carbon Markets",
      "Corporate Social Responsibility",
      "Circular Economy Practices",
    ],
  },
  {
    id: "track-2",
    number: 2,
    title: "NextGen Digital Technologies for Sustainability",
    description:
      "Harnessing cutting-edge AI, blockchain, IoT, and cloud technologies to drive sustainable digital transformation across industries.",
    iconName: "Cpu",
    topics: [
      "Artificial Intelligence & Machine Learning",
      "Digital Economy & E-commerce",
      "Cross-border Digital Trade",
      "Blockchain for Sustainability",
      "IoT & Smart Systems",
      "Financial Technology Innovation",
    ],
  },
  {
    id: "track-3",
    number: 3,
    title: "Sustainable Energy, Environment & Tourism Transformation",
    description:
      "Advancing renewable energy adoption, environmental stewardship, and sustainable tourism development for resilient communities.",
    iconName: "Sun",
    topics: [
      "Renewable Energy Technologies",
      "Environmental Management Systems",
      "Green Tourism & Eco-hospitality",
      "Climate Change Adaptation",
      "Sustainable Urban Development",
      "Community-based Conservation",
    ],
  },
];

// ─── Important Dates ──────────────────────────────────────────────────────────

export const importantDates: ImportantDate[] = [
  {
    id: "abstract-deadline",
    label: "Abstract Submission Deadline",
    date: "15 March 2026",
    description:
      "Submit your abstract (250–350 words) via the online submission portal.",
    status: "past",
  },
  {
    id: "acceptance-notification",
    label: "Acceptance Notification",
    date: "30 April 2026",
    description:
      "Authors will be notified of abstract acceptance/rejection via email.",
    status: "past",
  },
  {
    id: "full-paper-deadline",
    label: "Full Paper Submission Deadline",
    date: "31 May 2026",
    description:
      "Submit your complete paper in PDF/Word format following the proceedings template.",
    status: "upcoming",
  },
  {
    id: "camera-ready",
    label: "Camera-Ready Paper Deadline",
    date: "15 June 2026",
    description:
      "Final revised papers incorporating all reviewer feedback must be submitted.",
    status: "upcoming",
  },
  {
    id: "conference",
    label: "Conference Dates",
    date: "14–15 July 2026",
    description:
      "The International Seminar takes place at Universiti Malaya, Kuala Lumpur.",
    status: "upcoming",
  },
];

// ─── Schedule ─────────────────────────────────────────────────────────────────

export const day1Schedule: ScheduleItem[] = [
  { time: "9:00am – 9:15am", title: "Opening Ceremony", type: "ceremony" },
  {
    time: "9:15am – 10:00am",
    title: "Keynote Address 1",
    speaker: "Prof. Dr. Yusniza binti Kamarulzaman",
    type: "keynote",
  },
  {
    time: "10:00am – 10:15am",
    title: "Coffee Break & Networking",
    type: "break",
  },
  {
    time: "10:15am – 11:00am",
    title: "Keynote Address 2",
    speaker: "Industry Speaker (TBA)",
    type: "keynote",
  },
  {
    time: "11:00am – 12:00pm",
    title: "Keynote Address 3",
    speaker: "Assoc. Prof. Dr. Norisma Idris",
    type: "keynote",
  },
  { time: "12:00pm – 2:00pm", title: "Lunch Break", type: "break" },
  {
    time: "2:00pm – 4:00pm",
    title: "Parallel Session 1 (3 Tracks)",
    type: "parallel",
  },
];

export const day2Schedule: ScheduleItem[] = [
  {
    time: "9:00am – 1:00pm",
    title: "Parallel Session 2 (3 Tracks — 14 Papers)",
    type: "parallel",
  },
  { time: "1:00pm – 2:00pm", title: "Lunch Break", type: "break" },
  {
    time: "2:00pm – 4:00pm",
    title: "Parallel Session 3 (3 Tracks — 8 Papers)",
    type: "parallel",
  },
  {
    time: "4:00pm – 4:30pm",
    title: "Closing Ceremony & Best Paper Award",
    type: "closing",
  },
];

export const parallelSession1: ParallelSessionRow[] = [
  {
    time: "2:00 – 2:15",
    track1: "Sustainable Business Models in the Digital Age",
    track2: "AI Applications in E-commerce",
    track3: "Renewable Energy Policy Frameworks",
  },
  {
    time: "2:15 – 2:30",
    track1: "Green Economy Transition Strategies",
    track2: "Machine Learning for Supply Chain Optimisation",
    track3: "Environmental Impact Assessment Methods",
  },
  {
    time: "2:30 – 2:45",
    track1: "ESG Integration in Corporate Governance",
    track2: "Blockchain for Trade Finance",
    track3: "Sustainable Tourism Development Models",
  },
  {
    time: "2:45 – 3:00",
    track1: "Circular Economy Business Models",
    track2: "IoT Smart Grid Solutions",
    track3: "Climate Change Adaptation Strategies",
  },
  {
    time: "3:00 – 3:15",
    track1: "Carbon Market Mechanisms",
    track2: "Digital Payment Systems Innovation",
    track3: "Eco-friendly Urban Planning Approaches",
  },
  {
    time: "3:15 – 3:30",
    track1: "CSR & Stakeholder Management",
    track2: "Cross-border E-commerce Platforms",
    track3: "Green Building Technologies",
  },
  {
    time: "3:30 – 3:45",
    track1: "SDG Alignment in Business Strategy",
    track2: "Fintech for Financial Inclusion",
    track3: "Water Resource Management",
  },
  {
    time: "3:45 – 4:00",
    track1: "Policy Reform for Green Transition",
    track2: "Cybersecurity in the Digital Economy",
    track3: "Community-based Tourism Models",
  },
];

export const parallelSession2: ParallelSessionRow[] = [
  {
    time: "9:00 – 9:15",
    track1: "Business Transformation Frameworks",
    track2: "NLP Applications in Business",
    track3: "Solar Energy Implementation Strategies",
  },
  {
    time: "9:15 – 9:30",
    track1: "Digital Economy Policy Analysis",
    track2: "Predictive Analytics in Finance",
    track3: "Green Supply Chain Management",
  },
  {
    time: "9:30 – 9:45",
    track1: "Sustainable Finance Models",
    track2: "Cloud Computing for SMEs",
    track3: "Eco-tourism Marketing Strategies",
  },
  {
    time: "9:45 – 10:00",
    track1: "Corporate Sustainability Reporting",
    track2: "Big Data Analytics in Retail",
    track3: "Environmental Policy Reform",
  },
  {
    time: "10:00 – 10:15",
    track1: "Green Marketing Strategies",
    track2: "AI in Healthcare Sustainability",
    track3: "Wind Energy Development",
  },
  {
    time: "10:15 – 10:30",
    track1: "Social Enterprise Models",
    track2: "Digital Transformation Roadmaps",
    track3: "Biodiversity Conservation Technology",
  },
  {
    time: "10:30 – 10:45",
    track1: "Impact Investing Frameworks",
    track2: "Smart City Applications",
    track3: "Sustainable Agriculture Technology",
  },
  {
    time: "10:45 – 11:00",
    track1: "Green Bond Markets",
    track2: "Robotic Process Automation",
    track3: "Carbon Capture Technologies",
  },
  {
    time: "11:00 – 11:15",
    track1: "ESG Investment Strategies",
    track2: "Quantum Computing Applications",
    track3: "Ocean Resource Management",
  },
  {
    time: "11:15 – 11:30",
    track1: "Sustainability Governance Models",
    track2: "AR/VR in Education",
    track3: "Reforestation Technologies",
  },
  {
    time: "11:30 – 11:45",
    track1: "SDG-linked Business Models",
    track2: "5G Networks & Sustainability",
    track3: "Waste Management Innovation",
  },
  {
    time: "11:45 – 12:00",
    track1: "Green Procurement Policies",
    track2: "Edge Computing Solutions",
    track3: "Circular Economy Technology",
  },
  {
    time: "12:00 – 12:15",
    track1: "Transition Finance Mechanisms",
    track2: "Data Privacy & Ethics",
    track3: "Smart Grid Integration",
  },
  {
    time: "12:15 – 12:30",
    track1: "Climate Risk & Business Resilience",
    track2: "Digital Twin Technology",
    track3: "Clean Transportation Systems",
  },
];

export const parallelSession3: ParallelSessionRow[] = [
  {
    time: "2:00 – 2:15",
    track1: "Sustainable Business Partnerships",
    track2: "AI Ethics & Governance",
    track3: "Renewable Energy Finance",
  },
  {
    time: "2:15 – 2:30",
    track1: "Green Economy Indicators",
    track2: "Digital Inclusivity Strategies",
    track3: "Environmental Education Technology",
  },
  {
    time: "2:30 – 2:45",
    track1: "Policy Coherence for SDGs",
    track2: "Tech Startups & Sustainability",
    track3: "Smart Environment Monitoring",
  },
  {
    time: "2:45 – 3:00",
    track1: "Stakeholder Engagement Strategies",
    track2: "Open Innovation Platforms",
    track3: "Urban Green Infrastructure",
  },
  {
    time: "3:00 – 3:15",
    track1: "Sustainable Value Chains",
    track2: "Platform Economy Models",
    track3: "Geothermal Energy Projects",
  },
  {
    time: "3:15 – 3:30",
    track1: "Green Entrepreneurship Models",
    track2: "Knowledge Graph Applications",
    track3: "Coastal Zone Management",
  },
  {
    time: "3:30 – 3:45",
    track1: "Corporate Governance Innovation",
    track2: "API Economy Development",
    track3: "Green Chemistry Applications",
  },
  {
    time: "3:45 – 4:00",
    track1: "Future of Sustainable Work",
    track2: "Metaverse & Digital Commerce",
    track3: "Ecosystem Services Valuation",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I register for the seminar?",
    answer:
      "Registration is completed online through our registration portal. Click 'Register Now' on the Registration page, fill in your details, select your registration category, and complete the payment process. A confirmation email will be sent upon successful registration.",
    category: "registration",
  },
  {
    id: "faq-2",
    question: "What payment methods are accepted?",
    answer:
      "We accept bank transfers, credit/debit cards (Visa/Mastercard), and online banking. Detailed payment instructions will be provided upon completing the registration form. International participants may pay via international bank transfer or credit card.",
    category: "registration",
  },
  {
    id: "faq-3",
    question: "Can I cancel my registration and receive a refund?",
    answer:
      "Cancellations made before 1 June 2026 are eligible for a 70% refund. Cancellations between 1–30 June 2026 receive a 30% refund. No refunds are available after 30 June 2026. Substitutions (name changes) are permitted at any time at no charge.",
    category: "registration",
  },
  {
    id: "faq-4",
    question: "What is the required format for paper submission?",
    answer:
      "Papers should be submitted in PDF or Microsoft Word format, following the official proceedings template available on the Call for Papers page. The maximum length is 8 pages including references, figures, and tables. All submissions must be in English.",
    category: "submission",
  },
  {
    id: "faq-5",
    question: "What is the abstract submission deadline?",
    answer:
      "The abstract submission deadline is 15 March 2026. Abstracts should be 250–350 words and submitted through the online portal. Authors will receive acceptance/rejection notifications by 30 April 2026.",
    category: "submission",
  },
  {
    id: "faq-6",
    question: "How are submitted papers reviewed?",
    answer:
      "All submitted papers undergo a double-blind peer review process by the international programme committee. Each paper is independently reviewed by at least two experts. Authors receive detailed written feedback alongside the decision.",
    category: "submission",
  },
  {
    id: "faq-7",
    question: "Is there a virtual attendance option?",
    answer:
      "The seminar is primarily an in-person event at Universiti Malaya. We are exploring hybrid options for international participants unable to travel. Please contact us at nextgen2026@um.edu.my for the latest updates on virtual attendance availability.",
    category: "attendance",
  },
  {
    id: "faq-8",
    question: "Will I receive a certificate of participation?",
    answer:
      "Yes. All registered participants receive a digital certificate of participation. Presenting authors additionally receive a certificate of presentation. Certificates are distributed electronically within two weeks after the seminar.",
    category: "attendance",
  },
  {
    id: "faq-9",
    question: "What is the dress code for the seminar?",
    answer:
      "Business casual or smart casual attire is recommended for all seminar days. Traditional formal wear is equally welcome. Comfortable footwear is advised given campus distances between venues.",
    category: "attendance",
  },
  {
    id: "faq-10",
    question: "How do I get to Universiti Malaya from KLIA/KLIA2?",
    answer:
      "Take the KLIA Ekspres from KLIA/KLIA2 to KL Sentral (28 minutes), then connect to the LRT Kelana Jaya Line to Universiti station (approximately 25 minutes). Grab ridesharing and metered taxis are also readily available from both airports.",
    category: "venue",
  },
  {
    id: "faq-11",
    question: "Is parking available at the venue?",
    answer:
      "Yes, paid parking is available within the Universiti Malaya campus. Dedicated parking areas for seminar participants will be marked on the venue map in the final programme booklet. Daily parking rates apply.",
    category: "venue",
  },
  {
    id: "faq-12",
    question: "Are there recommended hotels near the venue?",
    answer:
      "Yes — we have curated a list of hotels near Universiti Malaya at various price points. Please refer to the Venue & Travel page for recommended accommodation options with approximate rates and booking links.",
    category: "venue",
  },
  {
    id: "faq-13",
    question: "Who can attend the seminar?",
    answer:
      "The seminar is open to academics, researchers, postgraduate students, industry professionals, and policymakers from all countries. We welcome participants from disciplines related to sustainability, digital transformation, business innovation, energy, and environmental science.",
    category: "general",
  },
  {
    id: "faq-14",
    question: "What language will the seminar be conducted in?",
    answer:
      "The official language of the seminar is English. All paper submissions, presentations, and proceedings are in English. Keynote addresses and Q&A sessions are also conducted in English.",
    category: "general",
  },
  {
    id: "faq-15",
    question: "Will the proceedings be published?",
    answer:
      "Yes. Accepted and presented papers will be published in the official Proceedings of The International Seminar on Global Sustainable Business Transformation with NextGen Information Technology. Selected high-quality papers may be invited for extended publication in affiliated indexed journals.",
    category: "general",
  },
];

// ─── Committee ────────────────────────────────────────────────────────────────

export const committeeGroups: CommitteeGroup[] = [
  {
    id: "patron",
    title: "Patron & Advisor",
    members: [
      {
        id: "p1",
        name: "Yang Berbahagia Prof. Datuk Dr. [Name]",
        role: "Vice-Chancellor, Universiti Malaya",
        institution: "Universiti Malaya",
      },
      {
        id: "p2",
        name: "Prof. Dr. [Dean Name]",
        role: "Dean, Faculty of Computer Science & IT",
        institution: "Universiti Malaya",
      },
      {
        id: "p3",
        name: "Prof. Dr. [Dean Name]",
        role: "Dean, Faculty of Business & Economics",
        institution: "Universiti Malaya",
      },
    ],
  },
  {
    id: "chair",
    title: "Organising Chair",
    members: [
      {
        id: "c1",
        name: "Prof. Dr. Ainuddin Wahid bin Abdul Wahab",
        role: "Director, Center of Digital Transformation Impact",
        institution: "Universiti Malaya",
      },
    ],
  },
  {
    id: "secretariat",
    title: "Secretariat",
    members: [
      {
        id: "s1",
        name: "Prof. Dr. Siti Hafizah Ab Hamid",
        role: "Secretariat Lead",
        institution: "Faculty of Computer Science & IT, UM",
      },
    ],
  },
  {
    id: "academic",
    title: "Academic Committee",
    members: [
      {
        id: "ac1",
        name: "Dr. [Name Placeholder]",
        role: "Academic Committee Chair",
        institution: "Universiti Malaya",
      },
      {
        id: "ac2",
        name: "Dr. [Name Placeholder]",
        role: "Programme Reviewer",
        institution: "Universiti Malaya",
      },
      {
        id: "ac3",
        name: "Dr. [Name Placeholder]",
        role: "Publications Coordinator",
        institution: "Universiti Malaya",
      },
    ],
  },
  {
    id: "operations",
    title: "Operations Team",
    members: [
      {
        id: "op1",
        name: "[Name Placeholder]",
        role: "Operations Manager",
        institution: "Universiti Malaya",
      },
      {
        id: "op2",
        name: "[Name Placeholder]",
        role: "Venue Coordinator",
        institution: "Universiti Malaya",
      },
      {
        id: "op3",
        name: "[Name Placeholder]",
        role: "Registration Officer",
        institution: "Universiti Malaya",
      },
    ],
  },
  {
    id: "publicity",
    title: "Publicity Team",
    members: [
      {
        id: "pub1",
        name: "[Name Placeholder]",
        role: "Publicity Chair",
        institution: "Universiti Malaya",
      },
      {
        id: "pub2",
        name: "[Name Placeholder]",
        role: "Social Media Officer",
        institution: "Universiti Malaya",
      },
      {
        id: "pub3",
        name: "[Name Placeholder]",
        role: "Graphic Designer",
        institution: "Universiti Malaya",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical Team",
    members: [
      {
        id: "tech1",
        name: "[Name Placeholder]",
        role: "Technical Chair",
        institution: "Universiti Malaya",
      },
      {
        id: "tech2",
        name: "[Name Placeholder]",
        role: "AV & Equipment Officer",
        institution: "Universiti Malaya",
      },
      {
        id: "tech3",
        name: "[Name Placeholder]",
        role: "IT Support Specialist",
        institution: "Universiti Malaya",
      },
    ],
  },
  {
    id: "protocol",
    title: "Protocol Team",
    members: [
      {
        id: "prot1",
        name: "[Name Placeholder]",
        role: "Protocol Chair",
        institution: "Universiti Malaya",
      },
      {
        id: "prot2",
        name: "[Name Placeholder]",
        role: "Guest Relations Officer",
        institution: "Universiti Malaya",
      },
      {
        id: "prot3",
        name: "[Name Placeholder]",
        role: "Ushering Coordinator",
        institution: "Universiti Malaya",
      },
    ],
  },
  {
    id: "logistics",
    title: "Logistics Team",
    members: [
      {
        id: "log1",
        name: "[Name Placeholder]",
        role: "Logistics Chair",
        institution: "Universiti Malaya",
      },
      {
        id: "log2",
        name: "[Name Placeholder]",
        role: "Transportation Coordinator",
        institution: "Universiti Malaya",
      },
      {
        id: "log3",
        name: "[Name Placeholder]",
        role: "Catering & Facilities Officer",
        institution: "Universiti Malaya",
      },
    ],
  },
];

// ─── Sponsors ─────────────────────────────────────────────────────────────────

export const sponsorTiers: SponsorTierData[] = [
  {
    id: "gold",
    name: "Gold Partner",
    color: "#f0a500",
    bgColor: "#fef9ec",
    slots: 3,
  },
  {
    id: "silver",
    name: "Silver Partner",
    color: "#6b7280",
    bgColor: "#f9fafb",
    slots: 4,
  },
  {
    id: "strategic",
    name: "Strategic Partner",
    color: "#1a2e5a",
    bgColor: "#eff6ff",
    slots: 2,
  },
];

export const sponsorshipPackages: SponsorshipPackage[] = [
  {
    tier: "Gold Partner",
    logoOnMaterials: "✓ (Full colour, prominent)",
    logoOnWebsite: "✓ (Homepage featured)",
    exhibitionBooth: "✓ (10 × 10 ft)",
    programmeAdvert: "✓ (Full page)",
    complimentaryPasses: "5",
    socialMediaFeature: "✓",
    speakingSlot: "✓ (5 minutes)",
    price: "RM 10,000 / USD 2,500",
  },
  {
    tier: "Silver Partner",
    logoOnMaterials: "✓",
    logoOnWebsite: "✓",
    exhibitionBooth: "✓ (6 × 6 ft)",
    programmeAdvert: "✓ (Half page)",
    complimentaryPasses: "3",
    socialMediaFeature: "✓",
    speakingSlot: "—",
    price: "RM 5,000 / USD 1,250",
  },
  {
    tier: "Strategic Partner",
    logoOnMaterials: "✓",
    logoOnWebsite: "✓",
    exhibitionBooth: "—",
    programmeAdvert: "✓ (Quarter page)",
    complimentaryPasses: "2",
    socialMediaFeature: "—",
    speakingSlot: "—",
    price: "RM 2,500 / USD 625",
  },
];

// ─── Registration ─────────────────────────────────────────────────────────────

export const registrationTiers: RegistrationTier[] = [
  {
    id: "student",
    name: "Student",
    localFee: "RM 200",
    intlFee: "USD 60",
    description:
      "Enrolled undergraduate or postgraduate students with valid student ID",
  },
  {
    id: "academic",
    name: "Academic / Researcher",
    localFee: "RM 400",
    intlFee: "USD 130",
    description:
      "Academics, lecturers, researchers, and postdoctoral fellows",
  },
  {
    id: "industry",
    name: "Industry Professional",
    localFee: "RM 600",
    intlFee: "USD 180",
    description:
      "Professionals from the corporate, government, and non-profit sectors",
  },
  {
    id: "group",
    name: "Group Registration (3+ persons)",
    localFee: "RM 350 / person",
    intlFee: "USD 100 / person",
    description:
      "Minimum 3 participants from the same institution. 10% group discount applied.",
  },
];

// ─── Hotels ───────────────────────────────────────────────────────────────────

export const hotels: Hotel[] = [
  {
    id: "hotel-1",
    name: "University Malaya Hotel",
    distance: "On Campus — 0.5 km",
    priceRange: "RM 180 – RM 280 / night",
    stars: 3,
    address: "Universiti Malaya Campus, 50603 Kuala Lumpur",
  },
  {
    id: "hotel-2",
    name: "Tune Hotel — PJ",
    distance: "3.2 km from UM",
    priceRange: "RM 80 – RM 150 / night",
    stars: 3,
    address: "Jalan SS 7/26, Kelana Jaya, Petaling Jaya, Selangor",
  },
  {
    id: "hotel-3",
    name: "Cititel Mid Valley",
    distance: "5.0 km from UM",
    priceRange: "RM 220 – RM 380 / night",
    stars: 4,
    address: "Mid Valley City, Lingkaran Syed Putra, 59200 Kuala Lumpur",
  },
];

// ─── Transport ────────────────────────────────────────────────────────────────

export const transportOptions: TransportOption[] = [
  {
    id: "flight",
    mode: "By Flight",
    iconName: "Plane",
    description: "KLIA & KLIA2 are the main international gateways to KL",
    details: [
      "KLIA Ekspres to KL Sentral: 28 minutes",
      "LRT from KL Sentral to Universiti station: ~25 min",
      "Grab / taxi from KLIA to UM: ~45–60 minutes",
    ],
  },
  {
    id: "train",
    mode: "By Train / LRT",
    iconName: "Train",
    description: "UM is served directly by the LRT Kelana Jaya Line",
    details: [
      "LRT Station: Universiti (KJ13)",
      "5-minute walk to UM main gate",
      "Trains every 5–10 minutes during peak hours",
    ],
  },
  {
    id: "bus",
    mode: "By Bus",
    iconName: "Bus",
    description: "Several RapidKL and Metrobus routes serve the UM area",
    details: [
      "RapidKL T781: KL Sentral to UM",
      "RapidKL T783: Bangsar to UM",
      "Buses operate from 6:00am to 11:00pm",
    ],
  },
  {
    id: "car",
    mode: "By Car / Grab",
    iconName: "Car",
    description: "UM is easily accessible via major Kuala Lumpur highways",
    details: [
      "Via Jalan Universiti or Federal Highway",
      "GPS: Universiti Malaya, 50603 Kuala Lumpur",
      "Grab ridesharing is widely available and affordable",
    ],
  },
];

// ─── Highlights ───────────────────────────────────────────────────────────────

export const highlights: Highlight[] = [
  {
    id: "participants",
    value: "100+",
    label: "Expected Participants",
    iconName: "Users",
  },
  {
    id: "tracks",
    value: "3",
    label: "Research Tracks",
    iconName: "BookOpen",
  },
  {
    id: "speakers",
    value: "3",
    label: "Keynote Speakers",
    iconName: "Mic",
  },
  {
    id: "days",
    value: "2",
    label: "Conference Days",
    iconName: "Calendar",
  },
];
