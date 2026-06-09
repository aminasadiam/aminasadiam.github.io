import { Component, For } from "solid-js";

const Home: Component = () => {

    const skills = ["Go", "C", "TypeScript", "Tailwind", "Docker"];

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
                            <h1 class="text-7xl font-bold leading-tight mb-8">Amin Asadi</h1>
                            <p class="text-xl text-gray-700 max-w-2xl leading-relaxed">
                                a developer focused on building fast, minimal, and reliable systems.
                            </p>
                        </div>
                        <div class="flex gap-6 text-sm">
                            <a href="mailto:adoramdev@gmail.com" class="link-minimal">Email</a>
                            <a href="https://x.com/aminasadiam" class="link-minimal">Twitter</a>
                            <a href="https://github.com/aminasadiam" class="link-minimal">GitHub</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" class="py-20 border-b border-black">
                <h2 class="text-4xl font-bold mb-12">About Me</h2>
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

            {/* Footer */}
            <footer class="py-12 text-center text-sm text-gray-700 border-b border-black">
                <p>© 2026 Amin Asadi. Hand-crafted with care.</p>
            </footer>
        </div>
    );
};

export default Home;