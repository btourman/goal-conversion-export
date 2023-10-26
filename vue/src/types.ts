export interface GoalFromGoalConversion {
  id_goal: number;
  export_name: string;
  revenu: string
}

export interface KeyValue {
  [key: string]: string
}

export interface GoalConversion {
  access_token: string;
  name: string;
  description: string;
  id_export: string | number | null;
  id_site: string | number;
  day_to_export: number;
  ts_created: string;
  ts_modified: string;
  ts_requested: string;
  export_type: string;
  goals: GoalFromGoalConversion[];

  parameters: KeyValue | null
}

export interface SaveGoalConversion {
  name: string;
  exportType: string;
  description: string;
  method: string;
  goals: GoalFromGoalConversion[];
  dayToExport: number;
  idExport: string | number | null;
  parameters: KeyValue | null;
}
