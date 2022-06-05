import React from "react";

export interface BarChartProps {
  dataPoints: BarChartItem[][];
  height: string;
  minValue: number;
  maxValue: number;
  divisions: number;
  children?: React.ReactNode;
}

export interface BarChartItem {
  label: string;
  value: number;
  color?: string;
}

export interface ChartWrapperProps {
  minimumValue: number;
  maximumValue: number;
  divisions: number;
}
