import React from 'react';

export default function Pet(props) {
  return (
    <card style={{ width: '18rem' }}>
        <h3>Kitty Name</h3>
      <img src="http://placekitten.com/200/300" />
      <ul>
        <li>Cats food habits</li>
        <li>Cats play habits</li>

      </ul>

    </card>
  );
}
