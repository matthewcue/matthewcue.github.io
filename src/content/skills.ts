// Edit this file to update skills or the roadmap. Keep entries short and focused.

export type SkillLevel = "beginner" | "intermediate" | "advanced";

export interface Skill {
  name: string;
  level: SkillLevel;
  years?: number;
  notes?: string;
  tags?: string[];
}

export interface SkillArea {
  id: string;
  title: string;
  description?: string;
  iconKey?: string;
  skills: Skill[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  description?: string;
  targetDate?: string;
  status: "planning" | "in-progress" | "completed";
  category: "certification" | "lab" | "course" | "project" | "other";
}

export const skillAreas: SkillArea[] = [
  {
    id: "support",
    title: "Support & Troubleshooting",
    description: "Hands-on user support, device setup, and issue triage.",
    iconKey: "support",
    skills: [
      {
        name: "Windows 10/11 troubleshooting",
        level: "intermediate",
        notes: "Event logs, device drivers, profile fixes",
        tags: ["windows", "support", "core"]
      },
      {
        name: "macOS support basics",
        level: "beginner",
        notes: "User setup, updates, permissions",
        tags: ["macos", "support", "core"]
      },
      {
        name: "Hardware triage & peripherals",
        level: "beginner",
        notes: "Workstations, printers, docking stations",
        tags: ["hardware", "support", "core"]
      },
      {
        name: "Ticketing & documentation",
        level: "intermediate",
        notes: "Clear notes, SLAs, and follow-up",
        tags: ["process", "support", "core"]
      },
      {
        name: "Account onboarding/offboarding",
        level: "beginner",
        notes: "User access checks and checklist-based workflows",
        tags: ["process", "support"]
      }
    ]
  },
  {
    id: "networking",
    title: "Networking & Connectivity",
    description: "Core networking concepts and user connectivity support.",
    iconKey: "networking",
    skills: [
      {
        name: "TCP/IP fundamentals",
        level: "intermediate",
        notes: "Subnetting, DNS, DHCP",
        tags: ["networking", "core"]
      },
      {
        name: "Wi-Fi troubleshooting",
        level: "intermediate",
        notes: "Signal checks, channel resets, device reconnection",
        tags: ["networking", "support", "core"]
      },
      {
        name: "Network tools",
        level: "intermediate",
        notes: "ping, tracert, nslookup",
        tags: ["networking", "core"]
      },
      {
        name: "VLAN & segmentation basics",
        level: "beginner",
        notes: "Tagged vs. untagged networks",
        tags: ["networking"]
      },
      {
        name: "VPN fundamentals",
        level: "beginner",
        notes: "Client setup and connectivity checks",
        tags: ["networking", "nice-to-have"]
      }
    ]
  },
  {
    id: "os",
    title: "Systems & Operating Systems",
    description: "Foundational systems work across Windows and Linux.",
    iconKey: "os",
    skills: [
      {
        name: "Windows Server basics",
        level: "beginner",
        notes: "Roles, updates, and permissions",
        tags: ["windows", "systems", "core"]
      },
      {
        name: "Linux server administration",
        level: "beginner",
        notes: "Users, systemd, package updates",
        tags: ["linux", "systems", "core"]
      },
      {
        name: "Imaging & deployment basics",
        level: "beginner",
        notes: "Reimage workflows and recovery media",
        tags: ["windows", "systems"]
      },
      {
        name: "Monitoring & logs",
        level: "beginner",
        notes: "Resource checks and log review",
        tags: ["systems", "core"]
      }
    ]
  },
  {
    id: "automation",
    title: "Automation & Reporting",
    description: "Light scripting to reduce manual support tasks.",
    iconKey: "automation",
    skills: [
      {
        name: "PowerShell scripting",
        level: "intermediate",
        notes: "Backup scripts, user reports",
        tags: ["automation", "windows", "core"]
      },
      {
        name: "Bash fundamentals",
        level: "beginner",
        notes: "File operations, cron jobs",
        tags: ["automation", "linux", "core"]
      },
      {
        name: "SQL queries",
        level: "beginner",
        notes: "Basic reporting and data checks",
        tags: ["data", "core"]
      },
      {
        name: "Python scripting",
        level: "beginner",
        notes: "Small scripts and API calls",
        tags: ["automation", "nice-to-have"]
      }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & Security Fundamentals",
    description: "Learning cloud services and foundational security practices.",
    iconKey: "cloud",
    skills: [
      {
        name: "AWS & Azure fundamentals",
        level: "beginner",
        notes: "Compute, storage, and networking basics",
        tags: ["cloud", "core"]
      },
      {
        name: "Identity & access basics",
        level: "beginner",
        notes: "Least privilege and role-based access",
        tags: ["security", "core"]
      },
      {
        name: "Cloud storage & backups",
        level: "beginner",
        notes: "S3/Blob fundamentals",
        tags: ["cloud"]
      },
      {
        name: "Security monitoring basics",
        level: "beginner",
        notes: "Log review and alerting concepts",
        tags: ["security"]
      }
    ]
  }
];

export const roadmap: RoadmapItem[] = [
  {
    id: "azure-fundamentals",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    description: "Complete core services study guide and practice tests.",
    targetDate: "2025-05-15",
    status: "in-progress",
    category: "certification"
  },
  {
    id: "active-directory-lab",
    title: "Active Directory homelab",
    description: "Build a small AD domain with users, groups, and GPO basics.",
    status: "in-progress",
    category: "lab"
  },
  {
    id: "security-plus",
    title: "CompTIA Security+",
    description: "Follow a structured study plan with weekly labs.",
    targetDate: "2025-09-01",
    status: "planning",
    category: "certification"
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner",
    description: "Finish cloud fundamentals course and hands-on labs.",
    targetDate: "2025-07-01",
    status: "planning",
    category: "certification"
  },
  {
    id: "linux-automation",
    title: "Linux automation playbooks",
    description: "Document repeatable setup scripts for lab servers.",
    status: "planning",
    category: "project"
  },
  {
    id: "siem-tuning",
    title: "SIEM alert tuning",
    description: "Refine homelab alerts for Windows security logs.",
    status: "completed",
    category: "lab"
  }
];

export default { skillAreas, roadmap };
