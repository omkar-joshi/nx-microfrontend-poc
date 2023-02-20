import { render } from '@testing-library/react';

import Welcome from './welcome';

describe('Welcome', () => {
  it('should render successfully', () => {
    const { getByText } = render(<Welcome title="My component" />);
    expect(getByText('Welcome My component 👋')).toBeDefined();
  });
});
