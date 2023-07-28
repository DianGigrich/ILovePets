import React from 'react';
import Pet from '../components/Pet';



export default function Profile(props) {
  return (
    <div className="container">
      <section className="row">
        <div className="col">
        <Pet/>
        </div>
        <div className="col">
        <Pet/>
        </div>
        <div className="col">
        <Pet/>
        </div>

      </section>

    </div>
  );
}
