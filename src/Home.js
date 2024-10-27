import React from 'react';

const Home = () => {
  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why do Java developers wear glasses? Because they don't see sharp."
  ];

  return (
    <div>
      <h1>Web Dev Jokes</h1>
      <ul>
        {jokes.map((joke, index) => (
          <li key={index}>{joke}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;