import { Component, For } from "solid-js";

const Home: Component = () => {
    const projects = [
        {
            title: "Project One",
            year: "2024",
            description: "A minimalist web application"
        },
        {
            title: "Project Two",
            year: "2023",
            description: "Clean interface design"
        },
        {
            title: "Project Three",
            year: "2023",
            description: "Focused user experience"
        },
        {
            title: "Project Four",
            year: "2022",
            description: "Elegant solutions"
        }
    ];

    const skills = ["React", "SolidJS", "TypeScript", "Tailwind", "Design", "UX", "Node.js", "Python"];

    return (
        <div class="w-full">
            {/* Hero Section */}
            <section class="py-20 border-b border-black">
                <div class="grid lg:grid-cols-[300px_minmax(0,1fr)] gap-12 items-center">
                    <div class="w-full max-w-[300px] mx-auto lg:mx-0">
                        <img
                            src="https://avatars.githubusercontent.com/u/54182094"
                            alt="Amina profile"
                            class="w-full aspect-square rounded-full border-4 border-black object-cover"
                        />
                    </div>
                    <div class="space-y-8">
                        <div>
                            <h1 class="text-7xl font-bold leading-tight mb-8">Amina</h1>
                            <p class="text-xl text-gray-700 max-w-2xl leading-relaxed">
                                Designer and developer. Building simple, elegant digital experiences.
                            </p>
                        </div>
                        <div class="flex gap-6 text-sm">
                            <a href="mailto:" class="link-minimal">Email</a>
                            <a href="#" class="link-minimal">Twitter</a>
                            <a href="#" class="link-minimal">GitHub</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" class="py-20 border-b border-black">
                <h2 class="text-4xl font-bold mb-12">About</h2>
                <div class="grid grid-cols-2 gap-12">
                    <div class="space-y-6">
                        <div class="card-simple">
                            <h3 class="text-xl font-bold mb-3">Design</h3>
                            <p class="text-gray-700">Creating clean, minimal interfaces focused on clarity and purpose.</p>
                        </div>
                        <div class="card-simple">
                            <h3 class="text-xl font-bold mb-3">Development</h3>
                            <p class="text-gray-700">Building fast, accessible, and maintainable applications.</p>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="card-simple">
                            <h3 class="text-xl font-bold mb-3">Experience</h3>
                            <p class="text-gray-700">5+ years working on digital products and creative direction.</p>
                        </div>
                        <div class="card-simple">
                            <h3 class="text-xl font-bold mb-3">Philosophy</h3>
                            <p class="text-gray-700">Less is more. Every element should have a purpose.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section class="py-20 border-b border-black">
                <h2 class="text-4xl font-bold mb-12">Skills</h2>
                <div class="flex flex-wrap gap-4">
                    <For each={skills}>
                        {(skill) => (
                            <div class="border border-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors">
                                {skill}
                            </div>
                        )}
                    </For>
                </div>
            </section>

            {/* Work Section */}
            <section id="work" class="py-20 border-b border-black">
                <h2 class="text-4xl font-bold mb-12">Work</h2>
                <div class="space-y-8">
                    <For each={projects}>
                        {(project) => (
                            <div class="border border-black p-8 hover:bg-black hover:text-white transition-colors group cursor-pointer">
                                <div class="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 class="text-2xl font-bold">{project.title}</h3>
                                        <p class="text-gray-700 group-hover:text-gray-300 text-sm mt-2">{project.description}</p>
                                    </div>
                                    <span class="text-sm font-medium text-gray-700 group-hover:text-gray-300">{project.year}</span>
                                </div>
                                <div class="text-xs group-hover:text-gray-300">View Project →</div>
                            </div>
                        )}
                    </For>
                </div>
            </section>

            {/* Stats Section */}
            <section class="py-20 border-b border-black">
                <div class="grid grid-cols-4 gap-8">
                    <div class="border-b border-black pb-8">
                        <div class="text-5xl font-bold mb-2">50+</div>
                        <p class="text-sm text-gray-700">Projects</p>
                    </div>
                    <div class="border-b border-black pb-8">
                        <div class="text-5xl font-bold mb-2">30+</div>
                        <p class="text-sm text-gray-700">Clients</p>
                    </div>
                    <div class="border-b border-black pb-8">
                        <div class="text-5xl font-bold mb-2">5+</div>
                        <p class="text-sm text-gray-700">Years</p>
                    </div>
                    <div class="border-b border-black pb-8">
                        <div class="text-5xl font-bold mb-2">100%</div>
                        <p class="text-sm text-gray-700">Satisfaction</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" class="py-20 border-b border-black">
                <h2 class="text-4xl font-bold mb-8">Get in Touch</h2>
                <p class="text-lg text-gray-700 mb-8 max-w-2xl">
                    Have a project in mind? Let's talk about it.
                </p>
                <form class="flex gap-4">
                    <input 
                        type="email" 
                        placeholder="your@email.com" 
                        class="flex-1 border border-black px-6 py-4 focus:outline-none focus:bg-black focus:text-white focus:placeholder-gray-500 transition-colors"
                    />
                    <button class="border border-black px-8 py-4 font-bold hover:bg-black hover:text-white transition-colors">
                        Send
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer class="py-12 text-center text-sm text-gray-700 border-b border-black">
                <p>© 2024 Amina. Hand-crafted with care.</p>
            </footer>
        </div>
    );
};

export default Home;