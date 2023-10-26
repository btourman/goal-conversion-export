/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

import { createAngularJsAdapter } from 'CoreHome';

import GoalConversionList from './GoalConversionList.vue';

export default createAngularJsAdapter({
  component: GoalConversionList,
  scope: {
    exportTypes: {
      angularJsBind: '=',
    },
    alreadyCreatedExportTypes: {
      angularJsBind: '=',
    },
    clickIdProviders: {
      angularJsBind: '=',
    },
    hasWriteAccess: {
      angularJsBind: '=',
    },
  },
  directiveName: 'goalConversionExportEdit',
});
