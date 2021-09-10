import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/configStore';
import Main from '../Main';
import Details from '../Details';

afterEach(() => {
  cleanup();
});

test('should render Main component', () => {
  render(<Provider store={store}><Router><Main /></Router></Provider>);
  const mainElement = screen.getByTestId('main-component');
  expect(mainElement).toBeInTheDocument();
  expect(mainElement).toHaveTextContent('market capitalisation');
});

test('should render Details component', () => {
  render(<Provider store={store}><Router><Details /></Router></Provider>);
  const detailsElement = screen.getByTestId('details-component');
  expect(detailsElement).toHaveTextContent('company capitalisation');
});

test('matches snapshot', () => {
  const tree = renderer
    .create(<Provider store={store}><Router><Details /></Router></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
