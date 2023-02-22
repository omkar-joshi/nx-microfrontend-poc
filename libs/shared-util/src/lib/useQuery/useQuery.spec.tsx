import { renderHook } from '@testing-library/react';

import { useQuery } from './useQuery';

describe('useHttp', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useQuery('test'));

    expect(result.current.data).toBe(0);
  });
});
