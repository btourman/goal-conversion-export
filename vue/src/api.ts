import { AjaxHelper, Matomo } from 'CoreHome';
import { GoalConversion, KeyValue } from './types';

export const fetchGoals = (): Promise<KeyValue> => AjaxHelper.fetch<Record<string | number,
  { idgoal: number, name: string }>>({
    module: 'API',
    method: 'Goals.getGoals',
    idSite: Matomo.idSite,
    filter_limit: '-1',
  }).then((goals) => Object.values(goals).reduce((acc, g) => {
    acc[g.idgoal] = g.name;
    return acc;
  }, {} as KeyValue));

export const fetchGoalConversions = (): Promise<GoalConversion[]> => AjaxHelper
  .fetch<GoalConversion[]>({
    module: 'API',
    method: 'GoalConversionExport.getGoalConversions',
    idSite: Matomo.idSite,
    filter_limit: '-1',
  }).then((goalConversions) => goalConversions.map((goalConversion) => {
    if (typeof goalConversion.goals === 'string') {
      goalConversion.goals = JSON.parse(goalConversion.goals);
    }
    return goalConversion;
  }));

export const fetchGoalConversion = (idExport: string | null): Promise<GoalConversion> => AjaxHelper
  .fetch<GoalConversion>({
    module: 'API',
    method: 'GoalConversionExport.getGoalConversion',
    idSite: Matomo.idSite,
    idExport,
    filter_limit: '-1',
  }).then((goalConversion) => {
    if (typeof goalConversion.goals === 'string') {
      goalConversion.goals = JSON.parse(goalConversion.goals);
    }
    if (typeof goalConversion.parameters === 'string' && goalConversion.parameters !== 'null') {
      goalConversion.parameters = JSON.parse(goalConversion.parameters);
    } else {
      goalConversion.parameters = {};
    }
    return goalConversion;
  });

export const deleteConversion = (id_export: number) => AjaxHelper.post(
  {},
  {
    idExport: id_export,
    idSite: Matomo.idSite,
    method: 'GoalConversionExport.deleteGoalConversion',
  },
  {
    withTokenInUrl: true,
  },
).then((response) => ({
  type: 'success',
  response,
})).catch((e) => ({
  type: 'error',
  message: e.message || e,
}));
