export type NotificationType = {
  id: number;
  text: string;
  time: string;
  read: boolean;
};

export type MenuItem = {
  name: string;
  icon: string;
  active?: boolean;
  path?: string;
};

export type StatCard = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
};

export type TopProduct = {
  name: string;
  percentage: number;
  units: number;
  imagePath?: string;
};

export type ActivityItem = {
  type: 'order' | 'payment' | 'return' | 'signup';
  title: string;
  customer: string;
  time: string;
};