import React from 'react';
import SearchComponent from './components/SearchComponent';
import RepoCard from './components/RepoCard';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SearchComponent></SearchComponent>
      </header>
      <main>
        <RepoCard></RepoCard>
      </main>
    </div>
  );
}

export default App;
