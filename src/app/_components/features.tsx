"use client";

import { StickyScroll } from "~/components/ui/sticky-scroll-reveal";


const content = [
  {
    title: "📊 Track with Precision:",
    description:
      "Effortlessly log and categorize your expenses to gain a clear understanding of where your money is going.",
  },
  {
    title: "💻 Intuitive Interface",
    description:
      "Navigate our user-friendly interface designed for both simplicity and depth.",
  },
  {
    title: "🔒 Quick Setup",
    description:
      " Create your account in minutes with our hassle-free onboarding process.",
  },
  {
    title: "🌐 Anytime, Anywhere Access",
    description:
      "Access CashCraft from your computer, tablet, or smartphone, ensuring you stay in control of your finances no matter where life takes you.",
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
