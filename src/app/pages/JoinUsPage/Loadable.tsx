/**
 * Asynchronously loads the component for JoinUsPage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const JoinUsPage = lazyLoad(
  () => import('./index'),
  module => module.JoinUsPage,
  {
    fallback: <LoadingIndicator />,
  },
);
