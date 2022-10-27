/**
 * Asynchronously loads the component for AboutUsPage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const AboutUsPage = lazyLoad(
  () => import('./index'),
  module => module.AboutUsPage,
  {
    fallback: <LoadingIndicator />,
  },
);
