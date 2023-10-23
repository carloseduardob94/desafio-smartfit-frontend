export interface Location {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: string;
  towel: string;
  fountain: string;
  lockerRoom: string;
  schedules: Schedule[];
}

interface Schedule {
  weekdays: string;
  hour: string;
}
