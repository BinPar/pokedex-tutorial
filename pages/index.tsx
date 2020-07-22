import React from 'react';
import Head from 'next/head';

const Index =  (): JSX.Element => (
  <React.Fragment>
    <Head>
      <title>BinPar Pokedex</title>
    </Head>
    <main>
      <h1>BinPar Pokedex</h1>
      <div id="app">
        <div className="card">
          <span className="card--id">#11</span>
          <img
            className="card--image"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
            alt="metapod"
          />
          <h2 className="card--name">metapod</h2>
          <span className="card--details">bug</span>
        </div>
        <div className="card">
          <span className="card--id">#10</span>
          <img
            className="card--image"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
            alt="caterpie"
          />
          <h2 className="card--name">caterpie</h2>
          <span className="card--details">bug</span>
        </div>
        <div className="card">
          <span className="card--id">#5</span>
          <img
            className="card--image"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
            alt="charmeleon"
          />
          <h2 className="card--name">charmeleon</h2>
          <span className="card--details">fire</span>
        </div>
      </div>
    </main>
  </React.Fragment>
);

export default Index;