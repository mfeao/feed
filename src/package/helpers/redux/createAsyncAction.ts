import { createAction, PayloadActionCreator } from '@reduxjs/toolkit';

export function createAsyncAction<RP = void, SP = any, FP = any, T extends string = string>(type: T): {
  request: PayloadActionCreator<RP, T>,
  success: PayloadActionCreator<SP, T>,
  failure: PayloadActionCreator<FP, T>,
} {
  return {
    request: createAction(`${type}_REQUEST` as T),
    success: createAction(`${type}_SUCCESS` as T),
    failure: createAction(`${type}_FAILURE` as T),
  };
}
