import Particles from "@/components/ui/particles";
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Particles />
            <main className="container relative z-10 mx-auto px-4 py-8 max-w-4xl">
                <div className="container mx-auto px-4 py-8">
                    <Link
                        href="/"
                        className="absolute top-4 left-4 inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-900/90 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-100/90 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900"
                    >
                        Go Back
                    </Link>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Privacy Developer Program</h1>
                    <p className="mt-4 text-base tracking-tight text-zinc-400">Inputting zk knowledge and outputing LATAM builders</p>
                </div>

                <section className="mb-12">
                    <p className="text-base tracking-tight text-zinc-300 mb-8">
                        Welcome to the Privacy Developer Program, your opportunity to explore the world of programmable cryptography (ZKP, FHE, MPC) and make substantial contributions to open-source projects!
                    </p>

                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-6">Why you should consider this program</h2>
                    <div className="grid md:grid-cols-1 gap-8 mb-12">
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                            <div className="space-y-4 text-zinc-300">
                                <p className="text-sm tracking-tight">
                                    Zero-knowledge proofs (ZKPs) are cryptographic methods of proving you know a secret without revealing details about the secret 🤯. And that&apos;s just a small part of the world of programmable cryptography!
                                </p>
                                <p className="text-sm tracking-tight">
                                    As you might have guessed, this is very useful in privacy-related tools as they can establish trust and verify claims without revealing sensitive information! if you&apos;re interested in building tools that:
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-center space-x-2 text-sm tracking-tight">
                                        <span>💯</span>
                                        <span>Respect & preserve user privacy</span>
                                    </li>
                                    <li className="flex items-center space-x-2 text-sm tracking-tight">
                                        <span>🥸</span>
                                        <span>Allow users to securely authenticate themselves</span>
                                    </li>
                                    <li className="flex items-center space-x-2 text-sm tracking-tight">
                                        <span>🤫</span>
                                        <span>Do confidential transactions on the blockchain</span>
                                    </li>
                                </ul>
                                <p className="text-sm tracking-tight">
                                    Then this program might be for you!
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-6">What to Expect?</h2>
                    <div className="space-y-4 text-zinc-300">
                        <div className="flex items-start space-x-4">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm">Seamless AI-powered collaborative coding experience with real-time suggestions and intelligent assistance</p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm">Advanced context-aware AI that understands your projects nuances and provides tailored recommendations</p>
                        </div>
                        <div className="flex items-start space-x-4">
                            <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm">Intuitive workflow that adapts to your coding style and accelerates development processes</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-6">How it is Structured?</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                            <h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-4">AI Flow Paradigm</h3>
                            <p className="text-sm text-zinc-300">
                                Our unique AI Flow paradigm enables intelligent, context-aware assistance that works both independently and collaboratively with developers.
                            </p>
                        </div>
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                            <h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-4">Adaptive Assistance</h3>
                            <p className="text-sm text-zinc-300">
                                Windsurfs AI adapts to your specific project, learning from your codebase and providing personalized, intelligent suggestions.
                            </p>
                        </div>
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                            <h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-4">Multi-Modal Interaction</h3>
                            <p className="text-sm text-zinc-300">
                                Seamlessly switch between read-only and edit modes, allowing flexible interaction with your AI coding assistant.
                            </p>
                        </div>
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                            <h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-4">Comprehensive Toolset</h3>
                            <p className="text-sm text-zinc-300">
                                Integrated tools for code search, debugging, API interactions, and more, all powered by advanced AI capabilities.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                            <h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2">What is the time commitment?</h3>
                            <p className="text-sm text-zinc-300">
                                The program is designed to be flexible and self-paced. However, we recommend dedicating at least 10-15 hours per week to make meaningful progress.
                            </p>
                        </div>

                        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                            <h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2">Do I need prior experience with cryptography?</h3>
                            <p className="text-sm text-zinc-300">
                                No prior cryptography experience is required! We welcome developers with strong programming fundamentals who are eager to learn about privacy-preserving technologies.
                            </p>
                        </div>

                        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                            <h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2">What kind of support will I receive?</h3>
                            <p className="text-sm text-zinc-300">
                                You&apos;ll have access to mentorship, technical resources, and a community of like-minded developers. We provide regular feedback and guidance throughout your learning journey.
                            </p>
                        </div>

                        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
                            <h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-2">What can I build during the program?</h3>
                            <p className="text-sm text-zinc-300">
                                You&apos;ll have the opportunity to work on real-world privacy-preserving applications, contribute to open-source projects, and develop your own ideas using ZK proofs and other cryptographic tools.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mt-12 text-center">
                    <div className="inline-block">
                        <p className="text-base tracking-tight text-zinc-300 mb-4">For any queries or more information, join our Telegram group:</p>
                        <a 
                            href="https://t.me/latamzk" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 py-6 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-900/90 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-100/90 dark:focus:ring-zinc-400 dark:focus:ring-offset-zinc-900"
                        >
                            <span className="mr-2">💬</span>
                            <span>Privacy LATAM</span>
                        </a>
                    </div>
                </section>

                <section className="mt-16">
                    <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 mb-6">What is Privacy LATAM?</h2>
                    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-8">
                        <div className="space-y-6 text-zinc-300">
                            <p>
                                PSE is an Ethereum Foundation supported research and development lab dedicated to testing use cases for cryptographic primitives. We build open source infrastructure and tools, host workshops and summer programs, and collaborate with people bringing cryptography to life.
                            </p>
                            <p>
                                Join us this summer to contribute, learn, and shape the future of zero-knowledge technology! We can&apos;t wait to welcome you into our community of innovators.
                            </p>
                            <div className="mt-8 space-y-2">
                                <h3 className="text-xl font-semibold tracking-tight text-zinc-100 mb-4">Learn about PSE</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center space-x-2">
                                        <span>🌐</span>
                                        <a href="https://pse.dev/en" target="_blank" rel="noopener noreferrer" 
                                            className="text-zinc-400 hover:text-zinc-300 transition-colors">
                                            Check out our website
                                        </a>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span>🐦</span>
                                        <a href="https://twitter.com/latamzk" target="_blank" rel="noopener noreferrer"
                                            className="text-zinc-400 hover:text-zinc-300 transition-colors">
                                            Follow us on Twitter
                                        </a>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span>🗣️</span>
                                        <a href="" target="_blank" rel="noopener noreferrer"
                                            className="text-zinc-400 hover:text-zinc-300 transition-colors">
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