import React from 'react';

const Jokes = ({ jokes }) => {
  return (
    <div className="row">
      {jokes.map((joke) => (
        <div className="col-md-4 mb-4" key={joke.id}>
          <div className="card" id={`joke-${joke.id}`}>
            <div className="card-body">
              <p className="card-text">{joke.text}</p>
              <button className="btn btn-primary" onClick={() => copyToClipboard(joke.id)}>Copy permalink</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const copyToClipboard = (id) => {
  const url = `${window.location.origin}/#joke-${id}`;
  navigator.clipboard.writeText(url).then(() => {
    alert('Permalink copied to clipboard!');
  });
};

export default Jokes;