import Particles from "@/components/ui/particles";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Particles />
      <main className="container relative z-10 mx-auto max-w-4xl px-4 py-8 text-base md:text-lg">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/"
            className="absolute left-4 top-4 inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-900/90 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-100/90 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900">
            Go Back
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Privacy Developer Program
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
                {/*<p className="text-sm tracking-tight">
                                    Zero-knowledge proofs (ZKPs) are cryptographic methods of proving you know a secret without revealing details about the secret 🤯. And that&apos;s just a small part of the world of programmable cryptography!
                                </p>*/}
                <p className="text-lg tracking-tight">
                  {/*As you might have guessed, this is very useful in privacy-related tools as they can establish trust and verify claims without revealing sensitive information!*/}{" "}
                  if you&apos;re interested in building tools that:
                </p>
                <ul className="ml-4 space-y-2">
                  <li className="flex items-center space-x-2 text-lg tracking-tight">
                    <span>💯</span>
                    <span>Respect & preserve user privacy</span>
                  </li>
                  <li className="flex items-center space-x-2 text-lg tracking-tight">
                    <span>🥸</span>
                    <span>Allow users to securely authenticate themselves</span>
                  </li>
                  <li className="flex items-center space-x-2 text-lg tracking-tight">
                    <span>🤫</span>
                    <span>Do confidential transactions on the blockchain</span>
                  </li>
                </ul>
                <p className="text-lg tracking-tight text-zinc-300">
                  Then this program might be for you!
                </p>
              </div>
            </div>
          </div>
          {/*          <div className="mb-12 grid gap-8 md:grid-cols-1">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
              <div className="space-y-4 text-zinc-300">
                <p className="text-lg tracking-tight">
                  Zero-knowledge proofs (ZKPs) are cryptographic methods of
                  proving you know a secret without revealing details about the
                  secret 🤯. And that&apos;s just a small part of the world of
                  programmable cryptography!
                </p>
                <p className="text-lg tracking-tight">
                  As you might have guessed, this is very useful in
                  privacy-related tools as they can establish trust and verify
                  claims without revealing sensitive information!
                </p>
              </div>
            </div>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-100">
            Program Stages
          </h2>
          <div className="space-y-4 text-zinc-300">
            <div className="flex items-start space-x-4">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg">Stage 1️⃣: General Knowledge Layer</p>
            </div>
            <div className="flex items-start space-x-4">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg">Stage 2️⃣: Specialization Layer</p>
            </div>
            <div className="flex items-start space-x-4">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg">Stage 3️⃣: Contribution Layer</p>
            </div>
          </div>*/}
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-100">
            How it is Structured?
          </h2>
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-zinc-100">
                General Knowledge Layer
              </h3>
              <ul className="text-lg text-zinc-300">
                <li>- Basic concepts of zero-knowledge proofs</li>
                <li>
                  - Graphical explanations for each concept&apos;s workflow
                </li>
                <li>- Overview of available technologies</li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-zinc-100">
                Specialization Layer
              </h3>
              <ul className="text-lg text-zinc-300">
                <li>- Comprehensive technology deep-dives</li>
                <li>- Hands-on practical workshops</li>
                <li>- Step-by-step implementations</li>
                <li>
                  - Detailed information on privacy-focused projects for each
                  technology
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-zinc-100">
                Contribution Layer
              </h3>
              <ul className="text-lg text-zinc-300">
                <li>
                  - Curated repository links and Good First Issues listings
                </li>
                <li>
                  - Enhanced rewards for documentation contributions that
                  demonstrate practical applications of privacy projects
                </li>
              </ul>
            </div>
            {/*}
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-zinc-100">
                Comprehensive Toolset
              </h3>
              <p className="text-lg text-zinc-300">
                Integrated tools for code search, debugging, API interactions,
                and more, all powered by advanced AI capabilities.
              </p>
            </div> */}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-100">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-zinc-100">
                Do I need prior experience with cryptography?
              </h3>
              <p className="text-lg text-zinc-300">
                No prior cryptography experience is required! We welcome
                developers with strong programming fundamentals who are eager to
                learn about privacy-preserving technologies.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-zinc-100">
                What kind of support will I receive?
              </h3>
              <p className="text-lg text-zinc-300">
                You&apos;ll have access to experienced mentors, office hours,
                and a community of like-minded developers. We provide regular
                guidance throughout your learning journey and help you overcome
                technical challenges.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-zinc-100">
                What can I build during the program?
              </h3>
              <p className="text-lg text-zinc-300">
                You&apos;ll have the opportunity to work on real-world
                privacy-preserving applications, contribute to open-source
                projects, and develop your own ideas using ZK proofs and other
                cryptographic tools.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-zinc-100">
                What will I gain from this program?
              </h3>
              <p className="text-lg text-zinc-300">
                Upon completing the program, you&apos;ll have comprehensive
                knowledge about ZKP, MPC and FHE, a bolstered GitHub portfolio
                from contributing to open-source projects, and potentially earn
                a grant for further contributions.
              </p>
            </div>
          </div>
        </section>

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

        <section className="mt-16">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-100">
            What is Privacy LATAM?
          </h2>
          <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-8">
            <div className="space-y-6 text-zinc-300">
              <p className="text-lg">
                Privacy LATAM is an initiative to popularize Privacy Enhancing
                Technologies and serve as a hub for PETs, connecting LATAM to
                the best resources out there. This movement offers free
                educational resources to help you dive deep into the latest in
                programmable cryptography. Let&apos;s get back to the cypherpunk
                roots.
              </p>
              <p className="text-lg">
                Join us this summer to contribute, learn, and shape the future
                of zero-knowledge technology! We can&apos;t wait to welcome you
                into our community of innovators.
              </p>
              <div className="mt-8 space-y-2">
                <h3 className="mb-4 text-xl font-semibold tracking-tight text-zinc-100">
                  Learn about us
                </h3>
                <ul className="space-y-3">
                  {/*
                                    <li className="flex items-center space-x-2">
                                        <span>🌐</span>
                                        <a href="https://pse.dev/en" target="_blank" rel="noopener noreferrer" 
                                            className="text-zinc-400 hover:text-zinc-300 transition-colors">
                                            Check out our website
                                        </a>
                                    </li>*/}
                  <li className="flex items-center space-x-2">
                    <span>🐦</span>
                    <a
                      href="https://twitter.com/latamzk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 transition-colors hover:text-zinc-300">
                      Follow us on Twitter
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span>🗣️</span>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 transition-colors hover:text-zinc-300">
                      Come say hi on Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
