import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '이경태',
  'birthday': '900814',
  'gender': '남자',
  'job': '연구원',
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '박진욱',
  'birthday': '900601',
  'gender': '남자',
  'job': '연구원',
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '강상균',
  'birthday': '881006',
  'gender': '남자',
  'job': '책임연구원',
}
]

function App() {
  return (
    <div>
      {customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            name={c.name}
            birthday={c.id}
            gender={c.gender}
            image={c.image}
          />)
      })}
    </div>
  );
}

export default App;
