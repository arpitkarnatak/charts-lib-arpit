import styled, { css } from "styled-components";

interface BarProps {
  height: string;
  width: string;
  color: string;
}

interface BarChartWrapperProps {
  height: string;
}

export const ChartWrapper = styled.div`
  display: flex;
`;

export const BarsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Bars = styled.div<BarProps>`
  width: ${(props: BarProps) => props.width};
  height: ${(props: BarProps) => props.height};
  background-color: ${(props: BarProps) => props.color};
`;

export const BarChartWrapper = styled.div<BarChartWrapperProps>`
  display: grid;
  grid-auto-flow: column;
  width: fit-content;
  grid-gap: 20px;
  padding: 24px 24px 0 24px;
  border: 1px solid black;
  height: ${(props: BarChartWrapperProps) => props.height};
`;
