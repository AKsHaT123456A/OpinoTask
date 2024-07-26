export interface DataPoint {
    value: number;
    label: string;
  }
  
  export const dataSets: Record<string, DataPoint[]> = {
    "1h": [
      { value: 30, label: "01:00 AM" },
      { value: 35, label: "01:30 AM" },
      { value: 23, label: "02:00 AM" },
      { value: 40, label: "02:30 AM" },
    ],
    "3h": [
      { value: 10, label: "01:00 AM" },
      { value: 50, label: "01:30 AM" },
      { value: 40, label: "02:00 AM" },
      { value: 40, label: "02:30 AM" },
    ],
    "12h": [
      { value: 80, label: "01:00 AM" },
      { value: 60, label: "01:30 AM" },
      { value: 40, label: "02:00 AM" },
      { value: 60, label: "02:30 AM" },
    ],
    "all time": [
      { value: 50, label: "01:00 AM" },
      { value: 30, label: "01:30 AM" },
      { value: 40, label: "02:00 AM" },
      { value: 20, label: "02:30 AM" },
    ],
  };
  
  export const dataSets2: Record<string, DataPoint[]> = {
    "1h": [
      { value: 20, label: "01:00 AM" },
      { value: 50, label: "01:30 AM" },
      { value: 10, label: "02:00 AM" },
      { value: 30, label: "02:30 AM" },
    ],
    "3h": [
      { value: 20, label: "01:00 AM" },
      { value: 50, label: "01:30 AM" },
      { value: 50, label: "02:00 AM" },
      { value: 30, label: "02:30 AM" },
    ],
    "12h": [
      { value: 20, label: "01:00 AM" },
      { value: 60, label: "01:30 AM" },
      { value: 40, label: "02:00 AM" },
      { value: 60, label: "02:30 AM" },
    ],
    "all time": [
      { value: 20, label: "01:00 AM" },
      { value: 30, label: "01:30 AM" },
      { value: 40, label: "02:00 AM" },
      { value: 20, label: "02:30 AM" },
    ],
  };
  