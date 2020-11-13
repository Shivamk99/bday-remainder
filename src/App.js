import React, { useState } from 'react';
import Data from './Data';
import List from './List';

const App = () =>  {
  const [people, setPeople] = useState(Data);
  return (
    <main>
      
      <section className='container'>
        <div className="fams">My Fams!!</div>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;