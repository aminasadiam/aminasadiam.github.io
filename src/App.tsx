import type { Component, ParentProps } from 'solid-js';

const App: Component = (props: ParentProps) => {
  return (
    <div class="bg-white text-black min-h-screen">
      {/* Simple Navigation */}
      <nav class="border-b border-black">
        <div class="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <div class="text-2xl font-bold">Amina</div>
          <div class="flex gap-12 items-center text-sm">
            <a href="#about" class="hover:opacity-50 transition">About</a>
            <a href="#work" class="hover:opacity-50 transition">Work</a>
            <a href="#contact" class="hover:opacity-50 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main class="max-w-6xl mx-auto px-6">
        {props.children}
      </main>
    </div>
  );
};

export default App;
