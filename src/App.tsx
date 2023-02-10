import { Component, createSignal, Show } from "solid-js";

import { Transition } from "solid-transition-group";

import "./App.css";

const App: Component = () => {
  const [show, setShow] = createSignal(false);
  return (
    <>
      <button onClick={() => setShow((show) => !show)}>Toggle show</button>
      <Transition name="slide-fade">
        <Show when={show()}>
          <div>Hello</div>
        </Show>
      </Transition>
    </>
  );
};

export default App;
