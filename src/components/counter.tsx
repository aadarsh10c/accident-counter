import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [draft, setDraft] = useState(count);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount(draft);
  };
  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick={() => setCount((count) => count - 1)}>
          ➖ Decrement
        </button>
        <button onClick={() => setCount(0)}>🔁 Reset</button>
        <button onClick={() => setCount((count) => count + 1)}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={draft}
            onChange={(e) => setDraft(e.target.valueAsNumber)}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
