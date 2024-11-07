import React from 'react';
import { Helmet } from 'react-helmet';
import Jokes from './components/Jokes';

const Home = () => {
  const jokes = [
    { id: 1, text: "Why do programmers prefer dark mode? Because light attracts bugs." },
    { id: 2, text: "How many programmers does it take to change a light bulb? None, that's a hardware problem." },
    { id: 3, text: "Why do Java developers wear glasses? Because they don't see sharp." },
    { id: 4, text: "Why do programmers hate nature? It has too many bugs." },
    { id: 5, text: "Why do Python programmers prefer snake_case? Because they can't C." },
    { id: 6, text: "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25." },
    { id: 7, text: "Why do programmers prefer using the dark mode? Because the light attracts bugs." },
    { id: 8, text: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings." },
    { id: 9, text: "Why do programmers prefer iOS development? Because Android is too buggy." },
    { id: 10, text: "Why do programmers prefer to work at night? Because the code is easier to debug in the dark." },
    { id: 11, text: "Why do programmers prefer to use the terminal? Because they don't like Windows." },
    { id: 12, text: "Why do programmers prefer to use Git? Because they can't commit to anything else." },
    { id: 13, text: "Why do programmers prefer to use Linux? Because they don't like Windows." },
    { id: 14, text: "Why do programmers prefer to use Vim? Because they don't like Emacs." },
    { id: 15, text: "Why do programmers prefer to use Python? Because they don't like Java." }
  ];

  return (
    <div className="container mt-5">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className="text-center mb-4">Web Dev Jokes</h1>
      <Jokes jokes={jokes} />
    </div>
  );
};

export default Home;