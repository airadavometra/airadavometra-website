import React, { FC } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useAppSelector, useAppDispatch } from '../store';
import { exampleActions } from '../store/slices/example';

export const Example: FC = () => {
  const count = useAppSelector((state) => state.example.count);
  const dispatch = useAppDispatch();

  const { toggleTheme } = useTheme();

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(exampleActions.increment());
          toggleTheme();
        }}
      >
        Add
      </button>
    </>
  );
};
