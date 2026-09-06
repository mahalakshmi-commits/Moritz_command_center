import { useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar,
} from "recharts";
import {
  ArrowUpRight, ChevronDown, Bell, Plus,
  UserPlus, TrendingUp, TrendingDown, AlertTriangle,
  LayoutGrid, LayoutDashboard, FileText, Users, BarChart2,
  DollarSign, FileBarChart, Activity, CheckCircle2,
} from "lucide-react";

import imgElsa    from "@/imports/Desktop1-1/dcfb7fe03c83732d2f7c36cd579e420f3f39b051.png";
import imgDaniel  from "@/imports/Desktop1-1/4171c04c5fc021b7eec2e6b866bf6f413db244d3.png";
import imgSarah   from "@/imports/Frame2147225547/5d3def7ca464ae5365be191398199d7010963edb.png";
import imgLiam    from "@/imports/Frame2147225547/6243d52b290541f8dd56282a2604194a65686402.png";
import imgTom     from "@/imports/Frame2147225547/6b9c80cf170af96f4867001b5ae6fc8f63f3f25d.png";
import imgMia     from "@/imports/Frame2147225547/773f90938c4c6cfc92be609465a02420cc7095e0.png";
import imgSophia  from "@/imports/Frame2147225547/7a6612df4bada4ac171c50b069ea1fb92309390a.png";
import imgElena   from "@/imports/Frame2147225547/daef6b034816387b534b4c996196a845a159e45e.png";
import imgEmma    from "@/imports/Desktop1-1/c8929df55fea6dd9303f6b534c947d5e2309083f.png";
import imgAdmin   from "@/imports/Desktop3-1/4d42ae6b1e1e71b7ff2e29504e2ba3e283541713.png";
import imgElsaProfile from "@/imports/image-2.png";

// Desktop4-1 finance images
import imgAcmeLogo   from "@/imports/Desktop4-1/161cf977e2ac3e7a4b0218924236939ce2ee91ab.png";
import imgAppleLogo  from "@/imports/Desktop4-1/9b48d0b463043a6999ab521e0b744f51e4e4b3e5.png";
import imgWaymoLogo  from "@/imports/Desktop4-1/5fc4f42e3066b8d1a7672b3387c5af7a9950ad88.png";
import imgFdLogo     from "@/imports/Desktop4-1/fd684c9b5d8687a18111ba18407a3928c2bcb363.png";

// AI sparkle SVG paths
const sparklePaths = {
  pc99f80: "M5.95939 0C6.21216 0 6.45735 0.0882092 6.65182 0.249674C6.8463 0.411196 6.97832 0.635926 7.02474 0.88444L7.59338 3.89376C7.6136 4.00078 7.66607 4.09922 7.74308 4.17623C7.82009 4.25323 7.91855 4.30518 8.02555 4.3254L11.0343 4.89457C11.2828 4.94098 11.5076 5.07307 11.6691 5.2675C11.8306 5.46192 11.9193 5.70667 11.9193 5.95939C11.9193 6.2122 11.8306 6.45733 11.6691 6.65182C11.5076 6.84623 11.2833 6.97833 11.0349 7.02474L11.0343 7.02421L8.02555 7.59338C7.91853 7.6136 7.8201 7.66607 7.74308 7.74308C7.66607 7.8201 7.6136 7.91853 7.59338 8.02555L7.02421 11.0343C6.9778 11.2828 6.84623 11.5076 6.65182 11.6691C6.45733 11.8306 6.2122 11.9193 5.95939 11.9193C5.70667 11.9193 5.46192 11.8306 5.2675 11.6691C5.07307 11.5076 4.94098 11.2833 4.89457 11.0349L4.3254 8.02555C4.30518 7.91855 4.25323 7.82009 4.17623 7.74308C4.09922 7.66607 4.00078 7.6136 3.89376 7.59338L0.88444 7.02421C0.635926 6.97779 0.411196 6.8463 0.249674 6.65182C0.0882092 6.45735 0 6.21216 0 5.95939C5.57337e-05 5.70672 0.0882759 5.4619 0.249674 5.2675C0.390987 5.09735 0.580778 4.97526 0.792399 4.91626L0.88444 4.89457L3.89376 4.3254C4.00078 4.30518 4.09922 4.25324 4.17623 4.17623C4.25324 4.09922 4.30518 4.00078 4.3254 3.89376L4.89457 0.88444L4.91626 0.792399C4.97526 0.580778 5.09735 0.390987 5.2675 0.249674C5.4619 0.0882759 5.70672 5.57337e-05 5.95939 0ZM5.39022 4.0953C5.32953 4.41625 5.17315 4.71121 4.94218 4.94218C4.71114 5.17322 4.41583 5.32904 4.09477 5.38969L1.08439 5.95939L4.0953 6.52909C4.41614 6.58976 4.71124 6.74576 4.94218 6.9766C5.17317 7.20759 5.32954 7.50304 5.39022 7.82402L5.95939 10.8349L6.52909 7.82402C6.58977 7.50304 6.74562 7.20759 6.9766 6.9766C7.20759 6.74562 7.50304 6.58977 7.82402 6.52909L10.8349 5.95992L7.82402 5.39022C7.50304 5.32954 7.20759 5.17317 6.9766 4.94218C6.74576 4.71124 6.58976 4.41614 6.52909 4.0953L5.95992 1.08439L5.39022 4.0953Z",
  p1eb81400: "M1.62659 8.66825C2.52393 8.6684 3.25159 9.39588 3.25159 10.2933C3.25144 11.1905 2.52384 11.9181 1.62659 11.9183C0.729212 11.9183 0.00172986 11.1906 0.00158691 10.2933C0.00158691 9.39579 0.729124 8.66825 1.62659 8.66825ZM1.62659 9.75159C1.32743 9.75159 1.08492 9.9941 1.08492 10.2933C1.08506 10.5923 1.32752 10.8349 1.62659 10.8349C1.92553 10.8348 2.16811 10.5922 2.16825 10.2933C2.16825 9.99419 1.92562 9.75173 1.62659 9.75159Z",
  p5a48c00: "M10.2933 0.00158691C10.5923 0.00172987 10.8349 0.244188 10.8349 0.543254V1.08492H11.3766C11.6756 1.08506 11.9183 1.32752 11.9183 1.62659C11.9181 1.92553 11.6755 2.16811 11.3766 2.16825H10.8349V2.70992C10.8348 3.00886 10.5922 3.25144 10.2933 3.25159C9.99419 3.25159 9.75173 3.00895 9.75159 2.70992V2.16825H9.20992C8.91085 2.16825 8.6684 1.92562 8.66825 1.62659C8.66825 1.32743 8.91077 1.08492 9.20992 1.08492H9.75159V0.543254C9.75159 0.244099 9.9941 0.00158691 10.2933 0.00158691Z",
};

function AiSparkle({ size = 14, color = "#1D4ED8" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 11.9193 11.9193" fill="none" className="shrink-0">
      <path clipRule="evenodd" d={sparklePaths.pc99f80} fill={color} fillRule="evenodd" />
      <path clipRule="evenodd" d={sparklePaths.p1eb81400} fill={color} fillRule="evenodd" />
      <path d={sparklePaths.p5a48c00} fill={color} />
    </svg>
  );
}

// ─── Font tokens ──────────────────────────────────────────────────────────────
const SF  = `'SF Pro:Regular', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif`;
const SFM = `'SF Pro:Medium', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif`;
const SFB = `'SF Pro:Semibold', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const lawyers = [
  { name: "Daniel Mitchell", img: imgDaniel, assigned: 31, onTrack: 21, atRisk: 6,  overDue: 3,  free: 0,  capacity: 100 },
  { name: "Sarah Chen",      img: imgSarah,  assigned: 31, onTrack: 18, atRisk: 8,  overDue: 5,  free: 0,  capacity: 128 },
  { name: "Liam Johnson",    img: imgLiam,   assigned: 31, onTrack: 21, atRisk: 6,  overDue: 0,  free: 5,  capacity: 74  },
  { name: "Tom Ruiz",        img: imgTom,    assigned: 20, onTrack: 18, atRisk: 0,  overDue: 0,  free: 10, capacity: 43  },
  { name: "Mia Johnson",     img: imgMia,    assigned: 20, onTrack: 16, atRisk: 2,  overDue: 0,  free: 8,  capacity: 55  },
  { name: "Sophia Carter",   img: imgSophia, assigned: 18, onTrack: 14, atRisk: 2,  overDue: 1,  free: 3,  capacity: 82  },
];

const matters = [
  { id: 1,  title: "NDA",                            company: "Acme Corp",      desc: "3 clauses deviate from standard terms",        status: "Over Due",     value: "$2.3K",  due: "Sept 1",  assignee: "Daniel Mitchell", img: imgDaniel },
  { id: 2,  title: "Small Claims Defense",           company: "David Park",     desc: "Response deadline in 2 days",                  status: "Over Due",     value: "$5K",    due: "Sept 2",  assignee: "Liam Johnson",    img: imgLiam   },
  { id: 3,  title: "Contractor Agreement",           company: "Notion",         desc: "Worker classification needs confirmation",      status: "At Risk",      value: "$10.3K", due: "Sept 10", assignee: "Sophia Carter",   img: imgSophia },
  { id: 4,  title: "Referral Agreement",             company: "Sequoia Capital",desc: "Fee structure exceeds firm threshold",          status: "At Risk",      value: "$18K",   due: "Sept 20", assignee: "Mia Johnson",     img: imgMia    },
  { id: 5,  title: "Intercompany Agreement",         company: "Microsoft",      desc: "Transfer pricing terms need confirmation",      status: "Pending Info", value: "$62K",   due: "Sept 25", assignee: "Sarah Chen",      img: imgSarah  },
  { id: 6,  title: "Terms of Use & Privacy Policy", company: "Meta",           desc: "3 policy changes pending approval",             status: "Pending Info", value: "$30K",   due: "Sept 28", assignee: "Daniel Mitchell", img: imgDaniel },
  { id: 7,  title: "Offer Letter",                  company: "Stripe",         desc: "Compensation terms flagged by AI",              status: "Unassigned",   value: "$40K",   due: "Sept 8",  assignee: null,              img: null      },
  { id: 8,  title: "SAFE Review",                   company: "Anthropic",      desc: "Valuation cap differs from approved terms",     status: "Unassigned",   value: "$4.9K",  due: "Sept 12", assignee: null,              img: null      },
  { id: 9,  title: "IP Assignment",                 company: "OpenAI",         desc: "1 signature outstanding",                       status: "Unassigned",   value: "$40K",   due: "Sept 14", assignee: null,              img: null      },
  { id: 10, title: "MSA Contract",                  company: "Google",         desc: "Liability provision flagged as high risk",      status: "Unassigned",   value: "$95K",   due: "Sept 22", assignee: null,              img: null      },
  { id: 11, title: "Partnership Agreement",         company: "Y Combinator",   desc: "Profit-sharing clause requires review",         status: "Unassigned",   value: "$40K",   due: "Sept 18", assignee: null,              img: null      },
  { id: 12, title: "Employment Contract",           company: "Vercel",         desc: "Non-compete clause flagged for review",         status: "Unassigned",   value: "$22K",   due: "Oct 2",   assignee: null,              img: null      },
];

const filterCounts: Record<string, number> = {
  "All": 20, "Over Due": 2, "At Risk": 2, "Unassigned": 6, "Pending Info": 2,
};

// ─── Finance data ─────────────────────────────────────────────────────────────
type FinRow = {
  id: number;
  type: "invoice" | "payout";
  matter: string;
  ref: string;
  partyImg: string | null;
  partyName: string;
  status: "overdue" | "failed" | "pending";
  statusLabel: string;
  value: string;
  dueOn: string;
};

const finRows: FinRow[] = [
  { id: 1,  type: "invoice", matter: "Acme Corp — NDA Review",         ref: "Invoice #123",       partyImg: imgAcmeLogo, partyName: "Acme Corp",       status: "overdue",  statusLabel: "Over Due 27 days",  value: "$40K",   dueOn: "Aug 10, 2026" },
  { id: 2,  type: "payout",  matter: "Sophia Carter — MSA",            ref: "Lawyer Payout #1344",partyImg: imgSophia,   partyName: "Sophia Carter",   status: "failed",   statusLabel: "Payment failed",    value: "$2.6K",  dueOn: "Aug 31, 2026" },
  { id: 3,  type: "invoice", matter: "Alphabet x Apple — Contract",    ref: "Invoice #123",       partyImg: imgAppleLogo,partyName: "Apple Inc",       status: "failed",   statusLabel: "Payment failed",    value: "$10.3K", dueOn: "Aug 31, 2026" },
  { id: 4,  type: "invoice", matter: "Waymo IP Review",                ref: "Invoice #123",       partyImg: imgWaymoLogo,partyName: "Waymo",           status: "overdue",  statusLabel: "Over Due 6 days",   value: "$40K",   dueOn: "Sept 1, 2026" },
  { id: 5,  type: "payout",  matter: "Acme Corp — NDA Review",         ref: "Lawyer Payout #1344",partyImg: imgDaniel,   partyName: "Daniel Mitchell", status: "pending",  statusLabel: "Pending Approval",  value: "$1K",    dueOn: "Sept 1, 2026" },
  { id: 6,  type: "payout",  matter: "Qualcomm — AI Privacy",          ref: "Lawyer Payout #1344",partyImg: imgDaniel,   partyName: "Daniel Mitchell", status: "pending",  statusLabel: "Pending Approval",  value: "$1K",    dueOn: "Sept 1, 2026" },
  { id: 7,  type: "payout",  matter: "Alphabet x Apple — Contract",    ref: "Lawyer Payout #5512",partyImg: imgSarah,    partyName: "Sarah Chen",      status: "pending",  statusLabel: "Pending Approval",  value: "$5K",    dueOn: "Sept 2, 2026" },
  { id: 8,  type: "payout",  matter: "Employment Dispute Resolution",  ref: "Lawyer Payout #2201",partyImg: imgLiam,     partyName: "Liam Johnson",    status: "pending",  statusLabel: "Pending Approval",  value: "$2.5K",  dueOn: "Sept 5, 2026" },
];

const totalRevData = [
  { day: "1",  rev: 125 }, { day: "2",  rev: 138 }, { day: "3",  rev: 148 }, { day: "4",  rev: 142 },
  { day: "5",  rev: 155 }, { day: "6",  rev: 168 }, { day: "7",  rev: 175 }, { day: "8",  rev: 170 },
  { day: "9",  rev: 165 }, { day: "10", rev: 178 }, { day: "11", rev: 188 }, { day: "12", rev: 195 },
  { day: "13", rev: 185 }, { day: "14", rev: 178 }, { day: "15", rev: 192 }, { day: "16", rev: 205 },
  { day: "17", rev: 198 }, { day: "18", rev: 188 }, { day: "19", rev: 195 }, { day: "20", rev: 210 },
  { day: "21", rev: 220 }, { day: "22", rev: 215 }, { day: "23", rev: 208 }, { day: "24", rev: 218 },
  { day: "25", rev: 232 }, { day: "26", rev: 240 }, { day: "27", rev: 235 }, { day: "28", rev: 225 },
  { day: "29", rev: 218 }, { day: "30", rev: 210 },
];

const practiceData = [
  { area: "Commercial",     value: 142, pct: 33 },
  { area: "Corporate M&A",  value: 76,  pct: 18 },
  { area: "Litigation",     value: 68,  pct: 16 },
  { area: "Real Estate",    value: 54,  pct: 13 },
  { area: "Privacy",        value: 46,  pct: 11 },
  { area: "Employment",     value: 42,  pct: 10 },
];

// ─── Firm Pulse feed ──────────────────────────────────────────────────────────
const pulseEvents = [
  { color: "#3B5BDB", label: "AI analysis completed",    sub: "Acme AI — Employment dispute",       time: "2 min ago"  },
  { color: "#16a34a", label: "Matter assigned to Sarah Chen", sub: "Northstar — Contract review",   time: "34 min ago" },
  { color: "#7c3aed", label: "New client onboarded",     sub: "Fenwick & Co.",                      time: "1 hr ago"   },
  { color: "#dc2626", label: "Matter escalated",         sub: "Solvent Robotics — DPA flagged high risk", time: "3 hr ago" },
  { color: "#0891b2", label: "Meeting scheduled",        sub: "Kickoff call — Fenwick & Co.",       time: "4 hr ago"   },
  { color: "#16a34a", label: "Matter resolved",          sub: "TechStart Inc. — NDA review",        time: "Yesterday"  },
];

// ─── Nav config ───────────────────────────────────────────────────────────────
const navItems = [
  { id: "overview",  label: "Overview",  Icon: LayoutDashboard },
  { id: "matters",   label: "Matters",   Icon: FileText,    count: 120 },
  { id: "clients",   label: "Clients",   Icon: Users,       count: 48  },
  { id: "workload",  label: "Workload",  Icon: BarChart2 },
  { id: "finance",   label: "Finance",   Icon: DollarSign },
  { id: "reports",   label: "Reports",   Icon: FileBarChart },
  { id: "activity",  label: "Activity",  Icon: Activity },
] as const;
type NavId = typeof navItems[number]["id"];

// ─── Primitives ───────────────────────────────────────────────────────────────
function Av({ src, name, size = 28, imgStyle }: { src: string | null; name: string; size?: number; imgStyle?: React.CSSProperties }) {
  if (!src) {
    return (
      <div className="rounded-full bg-neutral-100 flex items-center justify-center text-xs text-neutral-500 shrink-0"
        style={{ width: size, height: size, fontFamily: SFM }}>{name[0]}</div>
    );
  }
  return <img src={src} alt={name} className="rounded-full object-cover shrink-0" width={size} height={size} style={{ height: size, ...imgStyle }} />;
}

function Badge({ label }: { label: string }) {
  const cls = (() => {
    switch (label) {
      case "Over Due":     return "border border-red-200 text-red-700 bg-red-50";
      case "At Risk":      return "border border-orange-200 text-orange-700 bg-orange-50";
      case "Unassigned":   return "border border-neutral-200 text-neutral-500 bg-neutral-100";
      case "Pending Info": return "border border-blue-200 text-blue-700 bg-blue-50";
      default:             return "border border-neutral-200 text-neutral-500 bg-neutral-50";
    }
  })();
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] whitespace-nowrap ${cls}`}
      style={{ fontFamily: SFM }}>{label}</span>
  );
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({ active, onNav }: { active: NavId; onNav: (id: NavId) => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside
      className="hidden lg:flex flex-col shrink-0 border-r border-[#e5e5e5] bg-[#fafafa] h-full overflow-hidden"
      style={{
        width: expanded ? 240 : 52,
        transition: "width 260ms cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Logo / brand area */}
      <div className="px-3 pt-4 pb-3 shrink-0">
        <div className="flex items-center gap-2 h-9 px-1">
          <Av src={imgElsa} name="Moritz" size={28} />
          <div className="min-w-0 flex-1 overflow-hidden" style={{ opacity: expanded ? 1 : 0, transition: "opacity 180ms", whiteSpace: "nowrap" }}>
            <p className="text-[13px] leading-5 text-black" style={{ fontFamily: SFM }}>Moritz</p>
          </div>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 px-2 flex flex-col gap-0.5 overflow-hidden">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              title={!expanded ? item.label : undefined}
              className={`w-full flex items-center gap-2.5 h-8 px-2 rounded-lg text-[13px] transition-colors shrink-0 ${
                isActive
                  ? "bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] text-black border border-[#e5e5e5]"
                  : "text-[#404040] hover:bg-white/60"
              }`}
              style={{ fontFamily: isActive ? SFM : SF }}
            >
              <item.Icon size={15} className="shrink-0" strokeWidth={1.6} />
              <span className="flex-1 text-left overflow-hidden whitespace-nowrap" style={{ opacity: expanded ? 1 : 0, transition: "opacity 160ms" }}>
                {item.label}
              </span>
              {"count" in item && expanded && (
                <span className="text-[11px] text-[#a3a3a3] shrink-0"
                  style={{ fontFamily: SF, opacity: expanded ? 1 : 0, transition: "opacity 160ms" }}>
                  {item.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom profile */}
      <div className="px-2 py-4 border-t border-[#e5e5e5] shrink-0">
        <div className="flex items-center gap-2 px-1 h-8">
          <Av src={imgElsaProfile} name="Elsa Albertson" size={26} />
          <div className="min-w-0 flex-1 overflow-hidden" style={{ opacity: expanded ? 1 : 0, transition: "opacity 160ms", whiteSpace: "nowrap" }}>
            <p className="text-[12px] text-black truncate" style={{ fontFamily: SFM }}>Elsa Albertson</p>
            <p className="text-[11px] text-[#a3a3a3] truncate" style={{ fontFamily: SF }}>moritz@superadmin</p>
          </div>
          {expanded && <ChevronDown size={11} className="text-[#a3a3a3] ml-auto shrink-0" />}
        </div>
      </div>
    </aside>
  );
}

// ─── AI Bar ──────────────────────────────────────────────────────────────────
function AiBar() {
  return (
    <div className="bg-white border border-[#e5e5e5] rounded-2xl shadow-[0_1px_1px_rgba(0,0,0,0.05)] mb-3">
      <div className="flex items-center gap-3 px-5 py-4">
        <AiSparkle size={16} color="#6366f1" />
        <p className="flex-1 text-[15px] text-[#a3a3a3]" style={{ fontFamily: SF }}>
          Ask Moritz about matters, clients, workflow
        </p>
        <button className="shrink-0 w-8 h-8 rounded-xl border border-[#e5e5e5] flex items-center justify-center hover:bg-neutral-50 transition-colors">
          <ArrowUpRight size={13} className="text-black" />
        </button>
      </div>
      <div className="flex items-center gap-2 px-5 pb-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {[
          "Who’s overloaded right now?",
          "Summarize overdue matters",
          "Which clients have unpaid invoices?",
          "Draft a follow-up for Acme Corp",
          "Show revenue vs last month",
        ].map((prompt, i) => (
          <button key={i}
            className="bg-white border border-[#e5e5e5] rounded-full px-3.5 py-2 text-[13px] text-[#737373] hover:bg-neutral-50 hover:border-neutral-300 transition-colors whitespace-nowrap shrink-0"
            style={{ fontFamily: SF }}>
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── KPI Cards ────────────────────────────────────────────────────────────────
function KpiCards() {
  const cards = [
    { label: "Total Matters closed", value: "120",    delta: "+10% vs last week", up: true  },
    { label: "Avg cycle Time",       value: "2 Days", delta: "-8% vs last week",  up: false },
    { label: "New Matters",          value: "20",     delta: "+15% vs last week", up: true  },
    { label: "Revenue Generated",    value: "$200k",  delta: "+5% vs last week",  up: true  },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-3">
      {cards.map((c, i) => (
        <div key={c.label} className="bg-white border border-[#e5e5e5] rounded-xl px-5 py-4 flex flex-col" style={i === 0 ? { columnGap: 6 } : undefined}>
          <div className="flex flex-col" style={{ rowGap: 8, columnGap: 4 }}>
            <p className="text-[12px] text-[#737373]" style={{ fontFamily: SF }}>{c.label}</p>
            <p className="text-[26px] leading-none text-black tracking-tight" style={{ fontFamily: SFB }}>{c.value}</p>
          </div>
          <p className={`flex items-center gap-1 text-[12px] mt-3 ${c.up ? "text-emerald-600" : "text-red-500"}`} style={{ fontFamily: SF }}>
            {c.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}{c.delta}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Needs Attention ── segmented tabs ────────────────────────────────────────
function NeedsAttention({ filter, setFilter }: { filter: string; setFilter: (f: string) => void }) {
  const filters = Object.keys(filterCounts);
  const rows = filter === "All" ? matters : matters.filter((m) => m.status === filter);

  return (
    <div className="border border-[#e9eaeb] rounded-xl overflow-hidden bg-white mb-3">
      <div className="px-4 pt-4 pb-3">
        <p className="text-[15px] text-black" style={{ fontFamily: SFB }}>Needs attention</p>
      </div>
      <div className="flex items-center justify-between px-4 pb-3">
        <div className="bg-[#f5f5f5] rounded-[10px] p-[3px] flex items-center">
          {filters.map((f) => {
            const isActive = filter === f;
            return (
              <button key={f} onClick={() => setFilter(f)}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-[8px] transition-all ${
                  isActive ? "bg-white shadow-[0_1px_1.5px_rgba(0,0,0,0.10),0_1px_1px_rgba(0,0,0,0.10)]" : ""
                }`}>
                <span className={`text-[13px] whitespace-nowrap ${isActive ? "text-black" : "text-[#737373]"}`}
                  style={{ fontFamily: isActive ? SFM : SF }}>
                  {f}
                </span>
                <span className="h-4 min-w-[16px] rounded-[6px] px-1 flex items-center justify-center text-[11px] text-[#737373]"
                  style={{ fontFamily: SFM, background: "rgba(0,0,0,0.05)" }}>
                  {filterCounts[f]}
                </span>
              </button>
            );
          })}
        </div>
        <button className="flex items-center gap-1 text-[13px] text-black hover:text-neutral-600 transition-colors" style={{ fontFamily: SFM }}>
          View All
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 7L7 1M7 1H2M7 1V6" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Mobile: card list */}
      <div className="lg:hidden divide-y divide-[#e9eaeb] overflow-y-auto" style={{ maxHeight: "420px" }}>
        {rows.map((m) => {
          const showFollowUp = m.status === "Over Due" || m.status === "At Risk" || m.status === "Pending Info";
          return (
            <div key={m.id} className="px-4 py-3 flex flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[13px] text-black leading-tight" style={{ fontFamily: SFB }}>{m.title}</p>
                  <p className="text-[11px] text-[#a3a3a3] mt-0.5" style={{ fontFamily: SF }}>{m.company}</p>
                </div>
                <Badge label={m.status} />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[12px] text-black" style={{ fontFamily: SFM }}>{m.value}</span>
                <span className="text-[#d4d4d4] text-[10px]">•</span>
                <span className="text-[12px] text-[#737373]" style={{ fontFamily: SF }}>Due {m.due}</span>
                <span className="text-[#d4d4d4] text-[10px]">•</span>
                {m.assignee ? (
                  <div className="flex items-center gap-1.5">
                    <Av src={m.img} name={m.assignee} size={18} imgStyle={{ height: 18 }} />
                    <span className="text-[12px] text-[#737373]" style={{ fontFamily: SF }}>{m.assignee}</span>
                  </div>
                ) : (
                  <button className="flex items-center gap-1 text-[11px] text-[#737373] bg-[#f5f5f5] border border-[#e9eaeb] rounded-md px-2 py-0.5" style={{ fontFamily: SF }}>
                    <UserPlus size={10} /> Assign
                  </button>
                )}
              </div>
              {showFollowUp && (
                <div>
                  <button className="flex items-center gap-1.5 text-[12px] text-black border border-[#e9eaeb] rounded-lg px-4 py-3 hover:bg-black hover:text-white hover:border-black transition-colors" style={{ fontFamily: SFM }}>
                    <ArrowUpRight size={12} className="shrink-0" />Follow Up
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop: table */}
      <div className="hidden lg:block overflow-auto" style={{ maxHeight: "390px" }}>
        <table className="w-full table-fixed">
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "14%" }} />
            <col style={{ width: "8%" }} />
            <col style={{ width: "9%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "19%" }} />
          </colgroup>
          <thead className="sticky top-0 z-10">
            <tr className="border-b border-[#e9eaeb] bg-[#fafafa]">
              {["Matter", "Status", "Value", "Due On", "Assigned to", "Actions"].map((h) => (
                <th key={h} className="px-4 py-2.5 text-left text-[12px] text-[#717680] font-normal whitespace-nowrap"
                  style={{ fontFamily: SFB }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e9eaeb]">
            {rows.map((m) => {
              const needsFollowUp = m.status === "Over Due" || m.status === "At Risk";
              return (
                <tr key={m.id} className="hover:bg-[#fafafa] transition-colors group">
                  <td className="px-4 py-3">
                    <p className="text-[13px] text-black leading-tight truncate" style={{ fontFamily: SFB }}>{m.title}</p>
                    <p className="text-[11px] text-[#a3a3a3] mt-0.5 truncate" style={{ fontFamily: SF }}>{m.company} · {m.desc}</p>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap"><Badge label={m.status} /></td>
                  <td className="px-4 py-3 text-[13px] text-black whitespace-nowrap" style={{ fontFamily: SF }}>{m.value}</td>
                  <td className="px-4 py-3 text-[13px] text-black whitespace-nowrap" style={{ fontFamily: SF }}>{m.due}</td>
                  <td className="px-4 py-3">
                    {m.assignee ? (
                      <div className="flex items-center gap-2">
                        <Av src={m.img} name={m.assignee} size={22} imgStyle={{ height: 22 }} />
                        <span className="text-[13px] text-black truncate" style={{ fontFamily: SF }}>{m.assignee}</span>
                      </div>
                    ) : (
                      <button className="flex items-center gap-1.5 text-[12px] text-[#737373] hover:text-black transition-colors bg-[#f5f5f5] border border-[#e9eaeb] rounded-lg px-2 py-1" style={{ fontFamily: SF }}>
                        <UserPlus size={11} />Assign Lawyer
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      {needsFollowUp || m.status === "Pending Info" ? (
                        <button className="flex items-center gap-1.5 text-[12px] text-black border border-[#e9eaeb] rounded-lg px-2.5 py-1.5 hover:bg-black hover:text-white hover:border-black transition-colors" style={{ fontFamily: SFM }}>
                          <ArrowUpRight size={12} className="shrink-0" />Follow Up
                        </button>
                      ) : null}
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-[#a3a3a3] hover:text-black p-1 rounded-md hover:bg-[#f5f5f5]">
                        <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
                          <circle cx="7.5" cy="2.5" r="1.25" fill="currentColor"/>
                          <circle cx="7.5" cy="7.5" r="1.25" fill="currentColor"/>
                          <circle cx="7.5" cy="12.5" r="1.25" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Lawyer Workload ──────────────────────────────────────────────────────────
function LawyerWorkload() {
  return (
    <div className="border border-[#e9eaeb] rounded-xl bg-white overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-5 pt-5 pb-3 shrink-0 border-b border-[#e5e5e5]" style={{ marginTop: 0, marginRight: 0, marginLeft: 0, marginBottom: 12 }}>
        <p className="text-[18px] text-black tracking-tight" style={{ fontFamily: SFB }}>Lawyer Workload</p>
        <button className="flex items-center gap-1 text-[14px] text-black" style={{ fontFamily: SFM }}>
          View All <ArrowUpRight size={14} />
        </button>
      </div>

      <div className="mx-4 mb-3 bg-[#f5f5f5] rounded-xl p-3 flex items-start gap-3 shrink-0">
        <div className="mt-0.5 shrink-0"><AiSparkle size={13} color="#1D4ED8" /></div>
        <div className="flex-1 min-w-0">
          <p className="text-[12px] text-[#525252] leading-relaxed" style={{ fontFamily: SF }}>
            Sarah Chen is at 128% capacity and holds all 4 overdue deadlines. Tom Ruiz is at 43% with matching commercial experience, moving 6 matters clears the backlog by Friday.
          </p>
          <button className="mt-2 bg-[#171717] text-white text-[12px] px-3 py-1.5 rounded-lg hover:bg-neutral-800 transition-colors" style={{ fontFamily: SFM }}>
            View Details
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 px-5 pb-3 shrink-0">
        {[["#171717","On track"],["#fb923c","At Risk"],["#f87171","Over Due"],["#d4d4d4","Free"]].map(([color, label]) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: color }} />
            <span className="text-[12px] text-[#a3a3a3]" style={{ fontFamily: SF }}>{label}</span>
          </div>
        ))}
      </div>

      <div className="overflow-y-auto" style={{ maxHeight: "420px" }}>
        <div className="divide-y divide-[#e9eaeb] px-4">
          {lawyers.map((l) => {
            const total   = l.assigned || 1;
            const trackPx = Math.round((l.onTrack / total) * 100);
            const riskPx  = Math.round((l.atRisk  / total) * 100);
            const overPx  = Math.round((l.overDue / total) * 100);
            const freePx  = Math.max(0, 100 - trackPx - riskPx - overPx);
            return (
              <div key={l.name} className="py-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Av src={l.img} name={l.name} size={28} />
                    <span className="text-[13px] text-black" style={{ fontFamily: SFB }}>{l.name}</span>
                  </div>
                  <span className={`text-[12px] ${l.free > 0 ? "text-[#a3a3a3]" : "text-red-500"}`} style={{ fontFamily: SF }}>
                    {l.free > 0 ? `${l.free} Free` : "Full"}
                  </span>
                </div>
                <div className="h-[5px] w-full rounded-full overflow-hidden flex gap-px">
                  {trackPx > 0 && <div className="h-full bg-[#171717]" style={{ width: `${trackPx}%` }} />}
                  {riskPx  > 0 && <div className="h-full bg-[#fb923c]" style={{ width: `${riskPx}%` }} />}
                  {overPx  > 0 && <div className="h-full bg-[#f87171]" style={{ width: `${overPx}%` }} />}
                  {freePx  > 0 && <div className="h-full bg-[#d4d4d4] flex-1" />}
                </div>
                <div className="flex items-center mt-1.5 flex-wrap gap-y-0.5">
                  {[`${l.assigned} Assigned`, `${l.onTrack} On track`, `${l.atRisk} At Risk`, `${l.overDue} Over Due`].map((s, i) => (
                    <span key={s} className="text-[12px] text-[#a3a3a3] flex items-center" style={{ fontFamily: SF }}>
                      {i > 0 && <span className="mx-1.5 text-[#d4d4d4]">|</span>}
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Firm Pulse ───────────────────────────────────────────────────────────────
function FirmPulse() {
  return (
    <div className="border border-[#e9eaeb] rounded-xl bg-white overflow-hidden flex flex-col">
      <div className="flex items-start justify-between px-5 pt-5 pb-4 shrink-0 border-b border-[#e5e5e5]">
        <div>
          <p className="text-[18px] text-black tracking-tight" style={{ fontFamily: SFB }}>Firm Pulse</p>
          <p className="text-[13px] text-[#a3a3a3] mt-0.5" style={{ fontFamily: SF }}>Live feed of filings, meetings & onboardings</p>
        </div>
        <button className="flex items-center gap-1 text-[13px] text-black hover:text-neutral-600 transition-colors" style={{ fontFamily: SFM }}>
          View All
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="flex flex-col gap-0">
          {pulseEvents.map((e, i) => (
            <div key={i} className="flex gap-3 py-3 border-b border-[#f5f5f5] last:border-b-0">
              {/* Timeline dot + line */}
              <div className="flex flex-col items-center shrink-0 pt-1">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: e.color }} />
                {i < pulseEvents.length - 1 && <div className="w-px flex-1 bg-[#e9eaeb] mt-1.5" style={{ minHeight: 28 }} />}
              </div>
              <div className="flex-1 min-w-0 pb-1">
                <p className="text-[13px] text-black leading-tight" style={{ fontFamily: SFM }}>{e.label}</p>
                <p className="text-[12px] text-[#a3a3a3] mt-0.5 truncate" style={{ fontFamily: SF }}>{e.sub}</p>
              </div>
              <span className="text-[11px] text-[#a3a3a3] shrink-0 mt-0.5 whitespace-nowrap" style={{ fontFamily: SF }}>{e.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Finance Tab ──────────────────────────────────────────────────────────────
function FinStatusBadge({ status, label }: { status: "overdue" | "failed" | "pending"; label: string }) {
  const cls = {
    overdue: "border border-orange-200 text-orange-700 bg-orange-50",
    failed:  "border border-red-200 text-red-700 bg-red-50",
    pending: "border border-blue-200 text-blue-700 bg-blue-50",
  }[status];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] whitespace-nowrap ${cls}`}
      style={{ fontFamily: SFM }}>{label}</span>
  );
}

function FinanceTab() {
  const [finFilter, setFinFilter] = useState<"All" | "Invoices" | "Lawyer Payouts">("All");

  const finKpis = [
    {
      label: "Total Revenue", value: "$428K",
      sub: <span className="text-emerald-600 flex items-center gap-1" style={{ fontFamily: SF }}><TrendingUp size={10} />+10% vs last month</span>,
    },
    {
      label: "Lawyer Payouts", value: "$142K",
      sub: <span className="text-[#a3a3a3]" style={{ fontFamily: SF }}>$38,400 due this week</span>,
    },
    {
      label: "Outstanding AR", value: "$86K",
      sub: <span className="text-red-500 flex items-center gap-1" style={{ fontFamily: SF }}><AlertTriangle size={10} />4 Invoice Overdue</span>,
    },
    {
      label: "Net Revenue (Total – Payouts)", value: "$285K",
      sub: <span className="text-emerald-600" style={{ fontFamily: SF }}>66.7% margin</span>,
    },
  ];

  const filteredRows = finFilter === "All" ? finRows
    : finFilter === "Invoices" ? finRows.filter(r => r.type === "invoice")
    : finRows.filter(r => r.type === "payout");

  const tabCounts = { All: 8, Invoices: 3, "Lawyer Payouts": 5 };

  return (
    <div className="space-y-3">
      {/* KPI row — separate cards with 16px gap */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {finKpis.map((c) => (
          <div key={c.label} className="bg-white border border-[#e5e5e5] rounded-xl px-5 py-4 flex flex-col">
            <div className="flex flex-col gap-[4px]">
              <p className="text-[12px] text-[#737373] leading-snug" style={{ fontFamily: SF }}>{c.label}</p>
              <p className="text-[26px] leading-none text-black tracking-tight" style={{ fontFamily: SFB }}>{c.value}</p>
            </div>
            <p className="text-[12px] mt-3">{c.sub}</p>
          </div>
        ))}
      </div>

      {/* Needs Attention — finance */}
      <div className="border border-[#e9eaeb] rounded-xl bg-white overflow-hidden">
        <div className="px-4 pt-4 pb-3">
          <p className="text-[15px] text-black" style={{ fontFamily: SFB }}>Needs attention</p>
        </div>
        <div className="flex items-center justify-between px-4 pb-3">
          <div className="bg-[#f5f5f5] rounded-[10px] p-[3px] flex items-center">
            {(["All", "Invoices", "Lawyer Payouts"] as const).map((f) => {
              const isActive = finFilter === f;
              return (
                <button key={f} onClick={() => setFinFilter(f)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] transition-all ${
                    isActive ? "bg-white shadow-[0_1px_1.5px_rgba(0,0,0,0.10),0_1px_1px_rgba(0,0,0,0.10)]" : ""
                  }`}>
                  <span className={`text-[13px] whitespace-nowrap ${isActive ? "text-black" : "text-[#737373]"}`}
                    style={{ fontFamily: isActive ? SFM : SF }}>{f}</span>
                  <span className="h-4 min-w-[16px] rounded-[6px] px-1 flex items-center justify-center text-[11px] text-[#737373]"
                    style={{ fontFamily: SFM, background: "rgba(0,0,0,0.05)" }}>
                    {tabCounts[f]}
                  </span>
                </button>
              );
            })}
          </div>
          <button className="flex items-center gap-1 text-[13px] text-black hover:text-neutral-600 transition-colors" style={{ fontFamily: SFM }}>
            View All
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 7L7 1M7 1H2M7 1V6" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        {/* Mobile: card list */}
        <div className="lg:hidden divide-y divide-[#e9eaeb] overflow-y-auto" style={{ maxHeight: "420px" }}>
          {filteredRows.map((row) => (
            <div key={row.id} className="px-4 py-3 flex flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2 min-w-0">
                  <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full" style={{ background: row.type === "invoice" ? "#16a34a" : "#dc2626" }} />
                  <div className="min-w-0">
                    <p className="text-[13px] text-black leading-tight" style={{ fontFamily: SFM }}>{row.matter}</p>
                    <p className="text-[11px] text-[#a3a3a3] mt-0.5" style={{ fontFamily: SF }}>{row.ref}</p>
                  </div>
                </div>
                <FinStatusBadge status={row.status} label={row.statusLabel} />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1.5">
                  {row.partyImg
                    ? <img src={row.partyImg} alt={row.partyName} className="rounded-full object-cover shrink-0" width={18} height={18} style={{ height: 18 }} />
                    : <div className="w-[18px] h-[18px] rounded-full bg-neutral-100 flex items-center justify-center text-[10px] shrink-0">{row.partyName[0]}</div>
                  }
                  <span className="text-[12px] text-[#737373]" style={{ fontFamily: SF }}>{row.partyName}</span>
                </div>
                <span className="text-[#d4d4d4] text-[10px]">•</span>
                <span className="text-[12px] text-black" style={{ fontFamily: SFM }}>{row.value}</span>
                <span className="text-[#d4d4d4] text-[10px]">•</span>
                <span className="text-[12px] text-[#737373]" style={{ fontFamily: SF }}>{row.dueOn}</span>
              </div>
              <div>
                {row.status === "pending" ? (
                  <button className="flex items-center gap-2 text-black border border-[#e9eaeb] rounded-lg px-4 py-3 hover:bg-black hover:text-white hover:border-black transition-colors group/btn" style={{ fontFamily: SFM }}>
                    <svg width="9" height="6.5" viewBox="0 0 8.99992 6.49992" fill="none" className="shrink-0">
                      <path d="M8.14645 0.146447C8.34171 -0.0488156 8.65821 -0.0488154 8.85348 0.146447C9.04874 0.341709 9.04874 0.658216 8.85348 0.853478L3.35348 6.35348C3.15822 6.54874 2.84171 6.54874 2.64645 6.35348L0.146447 3.85348C-0.0488155 3.65822 -0.0488155 3.34171 0.146447 3.14645C0.341709 2.95118 0.658216 2.95118 0.853478 3.14645L2.99996 5.29293L8.14645 0.146447Z" className="fill-black group-hover/btn:fill-white" />
                    </svg>
                    <span className="text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>Approve</span>
                  </button>
                ) : (
                  <button className="flex items-center gap-2 text-black border border-[#e9eaeb] rounded-lg px-4 py-3 hover:bg-black hover:text-white hover:border-black transition-colors" style={{ fontFamily: SFM }}>
                    <ArrowUpRight size={13} className="shrink-0" />
                    <span className="text-[13px]">Follow Up</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table */}
        <div className="hidden lg:block overflow-auto" style={{ maxHeight: "360px" }}>
          <table className="w-full table-fixed">
            <colgroup>
              <col style={{ width: "28%" }} />
              <col style={{ width: "18%" }} />
              <col style={{ width: "18%" }} />
              <col style={{ width: "10%" }} />
              <col style={{ width: "13%" }} />
              <col style={{ width: "13%" }} />
            </colgroup>
            <thead className="sticky top-0 z-10">
              <tr className="border-b border-[#e9eaeb] bg-[#fafafa]">
                {["Item", "Party", "Status", "Value", "Due On", "Actions"].map((h) => (
                  <th key={h} className="px-4 py-2.5 text-left text-[12px] text-[#717680] font-normal whitespace-nowrap"
                    style={{ fontFamily: SFB }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e9eaeb]">
              {filteredRows.map((row) => (
                <tr key={row.id} className="hover:bg-[#fafafa] transition-colors group">
                  <td className="px-4 py-3">
                    <div className="flex items-start gap-2">
                      <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full"
                        style={{ background: row.type === "invoice" ? "#16a34a" : "#dc2626" }} />
                      <div className="min-w-0">
                        <p className="text-[13px] text-black leading-tight truncate" style={{ fontFamily: SFM }}>{row.matter}</p>
                        <p className="text-[11px] text-[#a3a3a3] mt-0.5 truncate" style={{ fontFamily: SF }}>{row.ref}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {row.partyImg
                        ? <img src={row.partyImg} alt={row.partyName} className="rounded-full object-cover shrink-0" width={22} height={22} style={{ height: 22 }} />
                        : <div className="w-[22px] h-[22px] rounded-full bg-neutral-100 flex items-center justify-center text-[10px] text-neutral-500 shrink-0" style={{ fontFamily: SFM }}>{row.partyName[0]}</div>
                      }
                      <span className="text-[13px] text-black truncate" style={{ fontFamily: SF }}>{row.partyName}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap"><FinStatusBadge status={row.status} label={row.statusLabel} /></td>
                  <td className="px-4 py-3 text-[13px] text-black whitespace-nowrap" style={{ fontFamily: SFM }}>{row.value}</td>
                  <td className="px-4 py-3 text-[12px] text-[#737373] whitespace-nowrap" style={{ fontFamily: SF }}>{row.dueOn}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      {row.status === "pending" ? (
                        <button className="flex items-center gap-[6px] text-black bg-white border border-[#e9eaeb] rounded-[8px] px-[10px] py-[6px] hover:bg-black hover:text-white hover:border-black transition-colors shrink-0 group/btn">
                          <svg width="9" height="6.5" viewBox="0 0 8.99992 6.49992" fill="none" className="shrink-0">
                            <path d="M8.14645 0.146447C8.34171 -0.0488156 8.65821 -0.0488154 8.85348 0.146447C9.04874 0.341709 9.04874 0.658216 8.85348 0.853478L3.35348 6.35348C3.15822 6.54874 2.84171 6.54874 2.64645 6.35348L0.146447 3.85348C-0.0488155 3.65822 -0.0488155 3.34171 0.146447 3.14645C0.341709 2.95118 0.658216 2.95118 0.853478 3.14645L2.99996 5.29293L8.14645 0.146447Z" className="fill-black group-hover/btn:fill-white" />
                          </svg>
                          <span className="text-[12px] leading-[18px] whitespace-nowrap" style={{ fontFamily: SFM, fontVariationSettings: '"wdth" 100' }}>Approve</span>
                        </button>
                      ) : (
                        <button className="flex items-center gap-1 text-[12px] text-black bg-white border border-[#e9eaeb] rounded-lg px-2.5 py-1.5 hover:bg-black hover:text-white hover:border-black transition-colors" style={{ fontFamily: SFM }}>
                          <ArrowUpRight size={12} className="shrink-0" />Follow Up
                        </button>
                      )}
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-[#a3a3a3] hover:text-black p-1 rounded-md hover:bg-[#f5f5f5]">
                        <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
                          <circle cx="7.5" cy="2.5" r="1.25" fill="currentColor"/>
                          <circle cx="7.5" cy="7.5" r="1.25" fill="currentColor"/>
                          <circle cx="7.5" cy="12.5" r="1.25" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        {/* Total Revenue area chart */}
        <div className="border border-[#e5e5e5] rounded-xl bg-white overflow-hidden">
          <div className="px-5 pt-4 pb-3 border-b border-[#e5e5e5]">
            <p className="text-[15px] text-black flex items-center gap-1" style={{ fontFamily: SFB }}>
              Total Revenue <ChevronDown size={14} className="text-[#737373]" />
            </p>
            <p className="text-[12px] text-[#a3a3a3] mt-0.5" style={{ fontFamily: SF }}>August 1 - 30, $428K</p>
          </div>
          <div className="px-2 pb-4">
            <ResponsiveContainer width="100%" height={210}>
              <AreaChart data={totalRevData} margin={{ top: 8, right: 16, bottom: 0, left: -4 }}>
                <defs>
                  <linearGradient id="finRevG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#171717" stopOpacity={0.10} />
                    <stop offset="100%" stopColor="#171717" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 10, fill: "#a3a3a3" }} axisLine={false} tickLine={false} interval={4} />
                <YAxis
                  domain={[0, 280]}
                  ticks={[0, 60, 120, 180, 240]}
                  tickFormatter={(v) => v === 0 ? "0" : `$${v}K`}
                  tick={{ fontSize: 10, fill: "#a3a3a3" }}
                  axisLine={false}
                  tickLine={false}
                  width={52}
                />
                <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e5e5" }} formatter={(v) => [`$${v}K`, "Revenue"]} />
                <Area type="monotoneX" dataKey="rev" stroke="#171717" strokeWidth={2} fill="url(#finRevG)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue by Practice Area — horizontal bars */}
        <div className="border border-[#e5e5e5] rounded-xl bg-white overflow-hidden">
          <div className="px-5 pt-4 pb-3 border-b border-[#e5e5e5]">
            <p className="text-[15px] text-black" style={{ fontFamily: SFB }}>Revenue by Practice Area</p>
            <p className="text-[12px] text-[#a3a3a3] mt-0.5" style={{ fontFamily: SF }}>Net Revenue 285K</p>
          </div>
          <div className="px-4 pt-4 pb-5 flex flex-col gap-4">
            {practiceData.map((p) => {
              const maxVal = practiceData[0].value;
              const barPct = Math.round((p.value / maxVal) * 100);
              return (
                <div key={p.area} className="flex items-center gap-2">
                  <span className="text-[12px] text-[#262626] shrink-0" style={{ fontFamily: SF, width: 96 }}>{p.area}</span>
                  <div className="flex-1 relative" style={{ height: 8 }}>
                    <div className="absolute left-0 top-0 h-full rounded-[6px] bg-[#0a0a0a]" style={{ width: `${barPct}%` }} />
                  </div>
                  <span className="text-[12px] text-[#737373] shrink-0 whitespace-nowrap" style={{ fontFamily: SF }}>${p.value}K ({p.pct}%)</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [sidebarActive, setSidebarActive] = useState<NavId>("overview");
  const [dashTab, setDashTab]             = useState<"Operations" | "Finance">("Operations");
  const [attFilter, setAttFilter]         = useState("All");
  const [mobileOpen, setMobileOpen]       = useState(false);

  return (
    <div className="flex h-full bg-[#f5f5f5]" style={{ fontFamily: SF }}>
      <Sidebar active={sidebarActive} onNav={setSidebarActive} />

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="w-[240px] h-full bg-[#fafafa] border-r border-[#e5e5e5] shadow-xl">
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#e5e5e5]">
              <p className="text-[14px]" style={{ fontFamily: SFM }}>Moritz</p>
              <button onClick={() => setMobileOpen(false)} className="text-[#a3a3a3]"><Plus size={16} className="rotate-45" /></button>
            </div>
            <nav className="px-2 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => { setSidebarActive(item.id); setMobileOpen(false); }}
                  className={`w-full flex items-center gap-2.5 h-8 px-3 rounded-lg text-[13px] transition-colors ${sidebarActive === item.id ? "bg-white shadow-sm text-black border border-[#e5e5e5]" : "text-[#404040] hover:bg-white/60"}`}
                  style={{ fontFamily: sidebarActive === item.id ? SFM : SF }}>
                  <item.Icon size={14} strokeWidth={1.6} />
                  <span>{item.label}</span>
                  {"count" in item && <span className="text-[11px] text-[#a3a3a3] ml-auto">{item.count}</span>}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex-1 bg-black/20" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-[#f5f5f5] px-4 lg:px-6 py-3 flex items-center justify-between shrink-0 border-b border-[#e9eaeb]">
          <div className="flex items-center gap-3">
            <button className="lg:hidden text-[#a3a3a3] mr-1" onClick={() => setMobileOpen(true)}>
              <LayoutGrid size={16} />
            </button>
            <div>
              <h1 className="text-[17px] text-black tracking-[-0.3px] leading-tight" style={{ fontFamily: SFM }}>Good Evening, Elsa</h1>
              <p className="text-[12px] text-[#a3a3a3] mt-0.5" style={{ fontFamily: SF }}>Wednesday, September 1</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 bg-white border border-[#e5e5e5] rounded-lg px-3 py-1.5">
              <span className="text-[12px] text-[#737373]" style={{ fontFamily: SF }}>Date Range:</span>
              <span className="text-[12px] text-black" style={{ fontFamily: SFM }}>Last Week</span>
              <ChevronDown size={11} className="text-[#737373]" />
            </div>
            <button className="w-8 h-8 bg-white border border-[#e5e5e5] rounded-lg flex items-center justify-center hover:bg-neutral-50 transition-colors">
              <span className="text-sm">🇺🇸</span>
            </button>
            <button className="w-8 h-8 bg-white border border-[#e5e5e5] rounded-lg flex items-center justify-center hover:bg-neutral-50 transition-colors">
              <Bell size={13} className="text-black" />
            </button>
          </div>
        </header>

        {/* Scroll area */}
        <main className="flex-1 overflow-y-auto px-4 lg:px-6 py-3">
          <AiBar />

          {/* Operations / Finance tabs */}
          <div className="flex items-center border-b border-[#e5e5e5] mb-4">
            {(["Operations", "Finance"] as const).map((tab) => (
              <button key={tab} onClick={() => setDashTab(tab)}
                className={`px-1 pb-2.5 mr-6 text-[13px] transition-colors border-b-2 -mb-px ${
                  dashTab === tab ? "border-black text-black" : "border-transparent text-[#737373] hover:text-black"
                }`}
                style={{ fontFamily: dashTab === tab ? SFM : SF }}>
                {tab}
              </button>
            ))}
          </div>

          {dashTab === "Operations" ? (
            <>
              <KpiCards />
              <NeedsAttention filter={attFilter} setFilter={setAttFilter} />
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 items-stretch">
                <LawyerWorkload />
                <FirmPulse />
              </div>
            </>
          ) : (
            <FinanceTab />
          )}
        </main>
      </div>
    </div>
  );
}
