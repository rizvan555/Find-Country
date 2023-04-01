import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    gap: 2vw;
    input {
      width: 20vw;
      padding: 6px;
    }
    button {
      width: 6vw;
      padding: 6px 20p;
    }
  }
`;

function searchButton(e: any) {
  e.preventDefault();
  const searchTerm = e.target.form[0].value;

  fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function App() {
  return (
    <div>
      <AppContainer>
        <header>
          <h1>Find your country 🤩</h1>
        </header>
        <main>
          <form>
            <input type="text" placeholder="Country name" />
            <button onClick={searchButton}>Search</button>
          </form>
          <article></article>
        </main>
      </AppContainer>
    </div>
  );
}

export default App;
