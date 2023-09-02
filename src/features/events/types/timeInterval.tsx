export type RangeValuePiece = Date | string | null;

export type RangeValue = [RangeValuePiece, RangeValuePiece];
export type IntervalRangeValue = {
  startingTime: RangeValuePiece;
  endingTime: RangeValuePiece;
};

export type EditorIntervalValue = {
  id: string;
  MaxNPlaces: string;
  price: string;
} & IntervalRangeValue;

export type EventTimesPeriod = {
  id: string;
  beginsIn: Date;
  endsIn: Date;
  timingIntervalls: EditorIntervalValue[];
};
