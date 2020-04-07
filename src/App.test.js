import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';
import List from './List';
import Card from './Card';
import store from './STORE';
import renderer from 'react-test-renderer';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('<Card />', () => {
  it('renders without crashing', () => {
    // Create a DOM element to render the component into
    const div = document.createElement('div');

    // Render the component
    // If something is wrong it will fail here
    ReactDOM.render(<Card
      key={100}
      title={'the card'}
      content={'card string'}
    />, div);

    // Clean up
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected', () => {
    // Render the component, as JSON
    const tree = renderer.create(<Card
      key={100}
      title={'the card'}
      content={'card string'}
    />).toJSON();
    // Check whether it matches the previous snapshot
    // Stored in __snapshots__/App.test.js.snap
    expect(tree).toMatchSnapshot();
  });
});