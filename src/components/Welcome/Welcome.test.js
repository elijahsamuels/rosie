import React from 'react';
import { render } from '@testing-library/react';
import Welcome from '../Welcome/index';

describe("Welcome Component", () => {
  test("should render without crashing", () => {
    render(<Welcome />);
  });
});
