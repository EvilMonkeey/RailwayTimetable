export class TimetableResult {
    constructor(
      public id: number,
      public from: string,
      public to: string,
      public start: string,
      public arrive: string,
      public time: string,
      public dist: string,
    ) {  }
  }