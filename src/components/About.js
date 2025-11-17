import User from './User';
import UserClass from './UserClass';
import React from 'react';
import UserContext from '../utils/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <p>This is the about page of our application.</p>
        <User name={'Maitri Modi'} age={'29'} />
        <UserClass name={'Maitri Modi(Class)'} location="Ahmedabad Class" />
      </div>
    );
  }
}

/**
 * - Parent Constructor
 * - Parent Render
 *
 *  - First Child Constructor
 *  - First Child Render
 *
 *  - Second Child Constructor
 *  - Second Child Render
 *
 *  - DOM Updated - in single batch
 *
 *  - First Child componentDidMount
 *  - Second Child componentDidMount
 *
 * - Parent componentDidMount
 */

export default About;
