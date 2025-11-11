import { Download } from "lucide-react";

type ResumeSectionProps = {
  resumeButtonLabel: string;
  resumeAriaLabel: string;
};

export function ResumeSection({
  resumeButtonLabel,
  resumeAriaLabel,
}: ResumeSectionProps) {
  return (
    <div className="flex justify-start animate-on-scroll">
      <a
        href="/ailin-nakaganeku-resume.pdf"
        download="ailin-nakaganeku-resume.pdf"
        className="btn-primary flex items-center justify-center gap-2 no-underline"
        aria-label={resumeAriaLabel}
      >
        <Download size={20} aria-hidden="true" />
        <span>{resumeButtonLabel}</span>
      </a>
    </div>
  );
}

