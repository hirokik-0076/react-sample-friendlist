import React from 'react';
import './App.css';

const App = () => <PresonList />;

const PresonList = () => {
  const people = [
    {
      img: 22, name: 'john', job: 'developer'
    },
    {
      img: 34, name: 'bob', job: 'designer'
    },
    {
      img: 56, name: 'peter', job: 'artist'
    }
  ];

  return (
    <section>
    <Person person={people[0]} />;
    <Person person={people[1]} >
      Lorem ipsum dolor sit amet consectertur adipisiciping elit. Deserunt
          labore odit molestiae culpa totam aperiam.
      </Person>;
    <Person person={people[2]} />;
   </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url ='https://randomuser.me/api/portraits/thumb/men/${img}.jpg';

  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4> {name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
    );
  };

  export default App;
