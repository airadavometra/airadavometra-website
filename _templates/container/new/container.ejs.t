---
to: src/containers/<%= Name %>.tsx
---
import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../store';
import { <%= Name %> } from '../components/<%= Name %>/<%= Name %>';

export const <%= Name %>Container: FC = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return <<%= Name %> />
};
