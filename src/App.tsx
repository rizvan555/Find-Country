import React, { useState } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: aliceblue;

  form {
    display: flex;
    gap: 2vw;
    margin: 20px auto 50px auto;
    input {
      width: 30vw;
      padding: 10px;
      border: none;
      border-radius: 5px;
      box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    }
    button {
      width: 7vw;
      padding: 10px 20p;
      border: none;
      border-radius: 5px;
      box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

      :hover {
        background-color: red;
        color: white;
      }
    }
  }
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      display: flex;
      align-items: center;
      font-weight: bold;
      color: red;
    }
    ul {
      li {
        display: flex;
        align-items: center;
        list-style-type: none;
        font-weight: bold;
      }
      p {
        font-weight: 400;
        padding-left: 10px;
      }
    }
  }
`;

function App() {
  const [countryData, setCountryData] = useState<any>(null);

  function searchButton(e: any) {
    e.preventDefault();
    const searchTerm = e.target.form[0].value;
    fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setCountryData(data[0]));
  }
  // )  console.log(data)  setCountryData(data[0]
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
          {countryData && (
            <article>
              <h2> {`${countryData.altSpellings[1]}  ${countryData.flag}`}</h2>
              <ul>
                <li>
                  Capital:
                  <p>{` ${countryData.capital}`}</p>
                </li>
                <li>
                  Area:
                  <p>{` ${countryData.area} km`}</p>
                </li>
                <li>
                  Borders:
                  <p>{` ${countryData.borders}`}</p>
                </li>
                <li>
                  Google Map:
                  <p>{` ${countryData.maps.googleMaps}`}</p>
                </li>
              </ul>
            </article>
          )}
        </main>
      </AppContainer>
    </div>
  );
}

export default App;
