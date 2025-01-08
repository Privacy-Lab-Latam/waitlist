import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const faqs = [
  {
    question: "Do I need prior experience with cryptography?",
    answer:
      "No prior cryptography experience is required! We welcome developers with strong programming fundamentals who are eager to learn about privacy-preserving technologies.",
  },
  {
    question: "What kind of support will I receive?",
    answer:
      "You'll have access to experienced mentors, office hours, and a community of like-minded developers. We provide regular guidance throughout your learning journey and help you overcome technical challenges.",
  },
  {
    question: "What can I build during the program?",
    answer:
      "You'll have the opportunity to work on real-world privacy-preserving applications, contribute to open-source projects, and develop your own ideas using ZK proofs and other cryptographic tools.",
  },
  {
    question: "What will I gain from this program?",
    answer:
      "Upon completing the program, you'll have comprehensive knowledge about ZKP, MPC and FHE, a bolstered GitHub portfolio from contributing to open-source projects, and potentially earn a grant for further contributions.",
  },
];

const programLayers = [
  {
    title: "Phase 1: Learn",
    items: [
      "Introduction to ZKP, FHE, and MPC",
      "Hands-on workshops and tutorials",
      "Community building and networking",
    ],
  },
  {
    title: "Phase 2: Build",
    items: [
      "Selection of open-source projects",
      "Mentorship and guidance from experts",
      "Collaboration with other developers",
    ],
  },
  {
    title: "Phase 3: Contribute",
    items: [
      "Deployment of developed projects",
      "Presentation of results to VCs",
      "Opportunity for further collaboration",
    ],
  },
];

const interests = [
  { icon: "💯", text: "Respect & preserve user privacy" },
  { icon: "🥸", text: "Allow users to securely authenticate themselves" },
  { icon: "🤫", text: "Do confidential transactions on the blockchain" },
];

const tools = [
  {
    icon: "🐦",
    text: "Twitter",
    link: "https://twitter.com/latamzk",
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
  {
    icon: "🗣️",
    text: "Telegram",
    link: "https://t.me/privacylatam",
    bgColor: "bg-sky-600",
    hoverColor: "hover:bg-sky-700",
  },
];

export default function About() {
  return (
    <>
      <Particles />
      <main className="container relative z-10 mx-auto max-w-4xl px-4 py-8 text-base md:text-lg">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/"
            className="w-full text-center text-yellow-50 transition-all duration-150 ease-linear md:w-auto md:hover:text-yellow-200">
            <Button size="sm" variant="secondary">
              {/*<FaGithub className="md:mr-1.5" /> */}
              <span className="block">Home</span>
            </Button>
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Privacy Contribution Program
          </h1>
          <p className="mt-4 text-lg tracking-tight text-zinc-400">
            Inputting zk knowledge and outputing LATAM builders
          </p>
        </div>

        <section className="mb-12">
          <p className="mb-8 text-lg tracking-tight text-zinc-300">
            Welcome to the Privacy Developer Program, your opportunity to
            explore the world of programmable cryptography (ZKP, FHE, MPC) and
            make substantial contributions to open-source projects!
          </p>

          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-100">
            Why you should consider this program
          </h2>
          <div className="mb-12 grid gap-8 md:grid-cols-1">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
              <div className="space-y-4 text-zinc-300">
                <p className="text-lg tracking-tight">
                  if you&apos;re interested in building tools that:
                </p>
                <ul className="ml-4 space-y-2">
                  {interests.map((interest, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-2 text-lg tracking-tight">
                      <span>{interest.icon}</span>
                      <span>{interest.text}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg tracking-tight text-zinc-300">
                  Then this program might be for you!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* This section provides an overview of the program structure, detailing the different phases and what participants can expect to learn and accomplish in each phase. */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-100">
            How it is Structured?
          </h2>
          <div className="mb-16 grid gap-6 md:grid-cols-3">
            {programLayers.map((layer, index) => (
              <div
                key={index}
                className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-zinc-700">
                <h3 className="mb-4 text-xl font-semibold tracking-tight text-zinc-100">
                  {layer.title}
                </h3>
                <ul className="space-y-2 text-lg text-zinc-300">
                  {layer.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/*
        <section className="mt-12 text-center">
          <div className="inline-block">
            <p className="mb-4 text-lg tracking-tight text-zinc-300">
              For any queries or more information, join our Telegram group:
            </p>
            <a
              href="https://t.me/latamzk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 py-6 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-900/90 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-100/90 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900">
              <span className="mr-2">💬</span>
              <span>Privacy LATAM</span>
            </a>
          </div>
        </section>
*/}

        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-100">
            What is Privacy LATAM?
          </h2>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-8">
            <div className="space-y-6 text-zinc-300">
              <p className="text-lg">
                Privacy LATAM is your gateway to Privacy Enhancing Technologies
                in Latin America. We provide free resources and build a
                community around programmable cryptography and
                privacy-preserving solutions.
              </p>
              <div className="mt-8 flex flex-col items-center space-y-4">
                <h3 className="mb-4 text-xl font-semibold tracking-tight text-zinc-100">
                  Join Our Community
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {tools.map((tool, index) => (
                    <a
                      key={index}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 rounded-lg px-6 py-3 text-base font-medium text-white transition-colors ${tool.bgColor} ${tool.hoverColor}`}>
                      <span className="text-xl">{tool.icon}</span>
                      <span>{tool.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
