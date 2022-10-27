/**
*
* Asynchronously loads the component for AjaShowcase
*
*/

import { lazyLoad } from 'utils/loadable';

export const AjaShowcase = lazyLoad(() => import('./index'), module => module.AjaShowcase);