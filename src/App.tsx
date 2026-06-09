import type { Component, ParentProps } from 'solid-js';

const App: Component = (props: ParentProps) => {
  return (
    <div class="bg-white text-black min-h-screen">
      <main class="max-w-6xl mx-auto px-6">
        {props.children}
      </main>
    </div>
  );
};

export default App;
