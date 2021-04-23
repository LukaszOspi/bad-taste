/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import styles from './FilterButton.css';

const FilterButton = () => {
  const [background, setBackground] = useState('#fdfdfd');
  const [font, setFont] = useState('#424246');

  const setStyle = (background, font) => {
    setBackground(background);
    setFont(font);
  };

  const card = css`
    max-width: 600px;
    padding: 40px 40px 20px 40px;
    background-color: ${background};
    h1 {
      font-family: 'Abril Fatface', cursive;
      font-weight: 400;
      font-size: 36px;
      margin-bottom: 10px;
      color: ${font};
    }
    p {
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 16px;
      margin-bottom: 20px;
      color: ${font};
    }
  `;

  const cardButtons = css`
    display: flex;
    flex-wrap: wrap;

    div {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 12px;
      padding: 10px 30px;
      margin-right: 20px;
      margin-bottom: 20px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }
  `;

  const blackButton = css`
    color: #fdfdfd;
    background-color: #424246;
  `;

  const blueButton = css`
    color: #fdfdfd;
    background-color: #1d499b;
  `;

  const yellowButton = css`
    color: #424246;
    background-color: #f9d648;
  `;

  return (
    <div css={card}>
      <h1>Medium you want to search</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed
        elementum egestas blandit. Proin augue lacus, phasellus vel lorem risus.
      </p>
      <div css={cardButtons}>
        <div
          onMouseEnter={() => setStyle('#424246', '#fdfdfd')}
          onMouseOut={() => setStyle('#fdfdfd', '#424246')}
          css={blackButton}
        >
          Movie
        </div>
        <div
          onMouseEnter={() => setStyle('#1d499b', '#fdfdfd')}
          onMouseOut={() => setStyle('#fdfdfd', '#424246')}
          css={blueButton}
        >
          Book
        </div>
        <div
          onMouseEnter={() => setStyle('#f9d648', '#424246')}
          onMouseOut={() => setStyle('#fdfdfd', '#424246')}
          css={yellowButton}
        >
          Music
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
//comment to update git
