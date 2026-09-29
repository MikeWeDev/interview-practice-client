"use client";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [result, setResult] = useState(null);

  async function checkUser() {
    const response = await fetch("http://localhost:5000/api/user/checkstatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
      }),
    });

    const data = await response.json();

    setResult(data);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <input
        className="border p-2"
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        className="rounded bg-black px-4 py-2 text-white"
        onClick={checkUser}
      >
        Check User
      </button>

      {result && (
        <pre className="border p-4">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  );
}
