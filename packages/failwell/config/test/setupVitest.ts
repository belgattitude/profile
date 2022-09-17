import { vi } from 'vitest';

const jestCompatOverride = {
  fn: vi.fn,
  spyOn: vi.spyOn,
};

(global as Record<'jest', typeof jestCompatOverride>).jest = jestCompatOverride;
