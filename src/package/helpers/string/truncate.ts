import type { TruncateOptions } from 'lodash';
import { truncate as _truncate } from 'lodash';

export const truncate = (input: string, options?: TruncateOptions): string => {
  return _truncate(input, {
    length: 250,
    separator: /[,.!?]?\s+/,
    ...options,
  });
};
