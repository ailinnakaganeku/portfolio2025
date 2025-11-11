import { z } from "zod";

const roleSchema = z.object({
  title: z.string(),
  period: z.string(),
});

const experienceEntrySchema = z.object({
  company: z.string(),
  role: roleSchema,
  description: z.string(),
});

const experienceSectionSchema = z
  .object({
    title: z.string(),
  })
  .catchall(experienceEntrySchema)
  .transform(({ title, ...entries }) => ({
    title,
    entries: Object.entries(entries).map(([id, entry]) => ({
      id,
      company: entry.company,
      roleTitle: entry.role.title,
      rolePeriod: entry.role.period,
      description: entry.description,
    })),
  }));

const technicalSkillSchema = z.object({
  title: z.string(),
  skills: z.string(),
});

const technicalSkillsSectionSchema = z
  .object({
    title: z.string(),
  })
  .catchall(technicalSkillSchema)
  .transform(({ title, ...categories }) => ({
    title,
    categories: Object.entries(categories).map(([id, category]) => ({
      id,
      title: category.title,
      skills: category.skills,
    })),
  }));

const educationEntrySchema = z.object({
  degree: z.string(),
  institution: z.string(),
});

const educationSectionSchema = z
  .object({
    title: z.string(),
  })
  .catchall(educationEntrySchema)
  .transform(({ title, ...entries }) => ({
    title,
    entries: Object.entries(entries).map(([id, entry]) => ({
      id,
      degree: entry.degree,
      institution: entry.institution,
    })),
  }));

const certificationsSectionSchema = z.object({
  title: z.string(),
  items: z.array(z.string()),
});

const contactSectionSchema = z.object({
  title: z.string(),
  email: z.string().email(),
  phone: z.string(),
  phoneNumber: z.string(),
});

const locationSectionSchema = z.object({
  title: z.string(),
  city: z.string(),
});

const footerSchema = z.object({
  copyright: z.string(),
  github: z.string(),
  githubAriaLabel: z.string(),
  linkedin: z.string(),
  linkedinAriaLabel: z.string(),
});

const profileSectionSchema = z
  .object({
    ariaLabel: z.string(),
    name: z.string(),
    imageAlt: z.string(),
    titleLine1: z.string(),
    titleLine2: z.string(),
  })
  .transform(({ titleLine1, titleLine2, ...profile }) => ({
    ...profile,
    titles: [titleLine1, titleLine2] as const,
  }));

const homeSchema = z.object({
  about: z.object({
    title: z.string(),
    description: z.string(),
  }),
  experience: experienceSectionSchema,
  technicalSkills: technicalSkillsSectionSchema,
  education: educationSectionSchema,
  certifications: certificationsSectionSchema,
  contact: contactSectionSchema,
  location: locationSectionSchema,
  resumeButton: z.string(),
  resumeAriaLabel: z.string(),
  footer: footerSchema,
  profileSection: profileSectionSchema,
});

export const portfolioMessagesSchema = z.object({
  home: homeSchema,
  ariaLabels: z.object({
    portfolioDetails: z.string(),
  }),
});

export type PortfolioMessages = z.infer<typeof portfolioMessagesSchema>;
export type HomeContent = z.infer<typeof homeSchema>;

export type ExperienceEntry = HomeContent["experience"]["entries"][number];
export type SkillCategory = HomeContent["technicalSkills"]["categories"][number];
export type EducationEntry = HomeContent["education"]["entries"][number];

