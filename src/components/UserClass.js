import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'Dummy Name',
        location: 'Dummy Location',
      },
    };
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/maitrimodi');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log('Interval Tick');
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Component Will Unmount');
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>User Information</h2>
        <h3>Name: {name}</h3>
        <img src={avatar_url} />
        <h4>Location: {location}</h4>
        <h5>Contact: @maitri__modi</h5>
        <p>Age: 29</p>
      </div>
    );
  }
}

export default UserClass;

/**
 * MOUNTING LIFECYCLE METHODS
 * Constructor (dummy)
 * Render(dummy)
 *    <HTML Dummy>
 * ComponentDidMount
 *    API Call
 *    SetState -> State variable updated
 *
 * ---- UPDATE CYCLE ----
 *    Render (with real API data)
 *    <HTML with real API data>
 *    componentDidUpdate
 */
