export default function About() {
    return (
        <main className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-white mb-4">Privacy Developer Program</h1>
                <p className="text-xl text-gray-300">Inputting zk knowledge and outputing LATAM builders</p>
            </div>

            <section className="mb-12">
                <p className="text-white mb-8">
                    Welcome to the Privacy Developer Program, your opportunity to explore the world of programmable cryptography (ZKP, FHE, MPC) and make substantial contributions to open-source projects!
                </p>

                <h2 className="text-3xl font-semibold text-white mb-6">Why you should consider this program</h2>
                <div className="grid md:grid-cols-1 gap-8 mb-12">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="space-y-4 text-gray-300">
                            {/*
                            <p>
                                Zero-knowledge proofs (ZKPs) are cryptographic methods of proving you know a secret without revealing details about the secret 🤯. And that's just a small part of the world of programmable cryptography!
                            </p> */}
                            <p>
                                {/*As you might have guessed, this is very useful in privacy-related tools as they can establish trust and verify claims without revealing sensitive information!*/} if you're interested in building tools that:
                            </p>
                            <ul className="space-y-2 ml-4">
                                <li className="flex items-center space-x-2">
                                    <span>💯</span>
                                    <span>Respect & preserve user privacy</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>🥸</span>
                                    <span>Allow users to securely authenticate themselves</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span>🤫</span>
                                    <span>Do confidential transactions on the blockchain</span>
                                </li>
                            </ul>
                            <p>
                                Then this program might be for you!
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-semibold text-white mb-6">What to Expect?</h2>
                <div className="space-y-4 text-gray-300">
                    <div className="flex items-start space-x-4">
                        <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Seamless AI-powered collaborative coding experience with real-time suggestions and intelligent assistance</p>
                    </div>
                    <div className="flex items-start space-x-4">
                        <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Advanced context-aware AI that understands your projects nuances and provides tailored recommendations</p>
                    </div>
                    <div className="flex items-start space-x-4">
                        <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Intuitive workflow that adapts to your coding style and accelerates development processes</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-semibold text-white mb-6">How it is Structured?</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-white mb-4">AI Flow Paradigm</h3>
                        <p className="text-gray-300">
                            Our unique AI Flow paradigm enables intelligent, context-aware assistance that works both independently and collaboratively with developers.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-white mb-4">Adaptive Assistance</h3>
                        <p className="text-gray-300">
                            Windsurfs AI adapts to your specific project, learning from your codebase and providing personalized, intelligent suggestions.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-white mb-4">Multi-Modal Interaction</h3>
                        <p className="text-gray-300">
                            Seamlessly switch between read-only and edit modes, allowing flexible interaction with your AI coding assistant.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-white mb-4">Comprehensive Toolset</h3>
                        <p className="text-gray-300">
                            Integrated tools for code search, debugging, API interactions, and more, all powered by advanced AI capabilities.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-8">
                <h2 className="text-3xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-white mb-2">What is the time commitment?</h3>
                        <p className="text-gray-300">
                            The program is designed to be flexible and self-paced. However, we recommend dedicating at least 10-15 hours per week to make meaningful progress.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-white mb-2">Do I need prior experience with cryptography?</h3>
                        <p className="text-gray-300">
                            No prior cryptography experience is required! We welcome developers with strong programming fundamentals who are eager to learn about privacy-preserving technologies.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-white mb-2">What kind of support will I receive?</h3>
                        <p className="text-gray-300">
                            You'll have access to mentorship, technical resources, and a community of like-minded developers. We provide regular feedback and guidance throughout your learning journey.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-white mb-2">What can I build during the program?</h3>
                        <p className="text-gray-300">
                            You'll have the opportunity to work on real-world privacy-preserving applications, contribute to open-source projects, and develop your own ideas using ZK proofs and other cryptographic tools.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-12 text-center">
                <div className="inline-block">
                    <p className="text-gray-300 mb-4">For any queries or more information, join our Telegram group:</p>
                    <a 
                        href="https://t.me/latamzk" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-200"
                    >
                        <span className="mr-2">💬</span>
                        <span>Privacy LATAM</span>
                    </a>
                </div>
            </section>
        </main>
    );
}