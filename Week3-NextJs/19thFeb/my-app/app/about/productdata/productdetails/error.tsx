
'use client';

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>prooduct data Error 🚨</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
}
