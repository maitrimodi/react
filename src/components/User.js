import { useEffect, useState } from 'react';

const User = (props) => {
  const [location, setLocation] = useState('');
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    // Best place to make API calls
    // it gets called after render method
    getUserInfo();
    setInterval(() => {
      console.log('Interval Tick from Functional Component');
    }, 1000);

    return () => {
      clearInterval();
    };
  }, []); // componentDidMount in class component

  async function getUserInfo() {
    const data = await fetch('https://api.github.com/users/maitrimodi');
    const json = await data.json();
    console.log(json);
    setLocation(json.location);
  }

  return (
    <div className="user-card">
      <h2>User Information</h2>
      <h2>Count: {count2}</h2>
      <h3>Name: {props.name}</h3>
      <h4>Location: {location}</h4>
      <h5>Contact: @maitri__modi</h5>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default User;
