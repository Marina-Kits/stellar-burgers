import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/store';
import { getAuthUser } from '../../services/slices and tests/authSlice';

export const AppHeader: FC = () => {
  const user = useSelector(getAuthUser);
  return <AppHeaderUI userName={user?.name} />;
};
