import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useTokenCount } from './useTokenCount';

describe('useTokenCount', () => {
  it('should always return 0 for any input', () => {
    const { result } = renderHook(() => useTokenCount('test input'));
    expect(result.current).toBe(0);
  });

  it('should handle empty input', () => {
    const { result } = renderHook(() => useTokenCount(''));
    expect(result.current).toBe(0);
  });

  it('should handle null input', () => {
    const { result } = renderHook(() => useTokenCount(null as any));
    expect(result.current).toBe(0);
  });
  
  it('should handle no input', () => {
    const { result } = renderHook(() => useTokenCount());
    expect(result.current).toBe(0);
  });
});