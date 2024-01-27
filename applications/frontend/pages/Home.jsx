import React from 'react';

const Home = () => {
  const style = {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
  };

  return (
    <section style={style}>
      <div className="p-4 text-center shadow-md rounded-md">
        <h3>If you would like to support me, You can </h3>
        <a
          href="https://www.buymeacoffee.com/momoh"
          target="_blank"
          rel="noopener noreferrer"
        >
          buy me a coffee ☕{' '}
        </a>
      </div>
    </section>
  );
};

export default Home;
