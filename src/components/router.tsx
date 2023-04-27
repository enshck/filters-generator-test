import { Route, Routes, Navigate } from 'react-router-dom';

import { AppRoute } from 'common/enums';
import { FiltersGenerator } from 'components/filters-generator';

/**
 * Container for all routes
 * @returns `Router` component
 */
export const Router = () => {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<FiltersGenerator />} />
      <Route path={AppRoute.ANY} element={<Navigate to={AppRoute.ROOT} />} />
    </Routes>
  );
};
