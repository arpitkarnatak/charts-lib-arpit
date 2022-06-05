## Charts Lib

charts-lib is a simple library to plot charts in React. 

## Bar Charts

A bar chart can be plotted using the following format
```jsx
<BarChart
	divisions={10}
	minValue={0}
	maxValue={100}
	height="400px"
	dataPoints={[
					[{
						label:  'A',
						value:  60,
					},
					{
						label:  'B',
						value:  100,
					}],
					[{
						label:  'A',
						value:  82,
					},
					{
						label:  'B',
						value:  99,
					}]
				]}
/>
```
 
 The parameters for the BarChart object are as follows:
 
 <b>dataPoints: BarChartItem[][]</b> This is the list of data points. It is a 2D array of <b>BarChartItem</b> which consists of the following parameters.
 ```ts
 interface BarChartItem {
	 label: string;
	 value: number;
	 color?: string;
	 }
 ```
 The optional parameter `color` can be used if we want to do different colors than the ones provided.
 
 <b>height: string</b> Height takes a string parameter for the entire chart. The heights of the bars are calculated as a percentage of this height. 
 
 <b>minValue: number</b> Takes in a number for the maximum value in the `BarChartItem` class.
 
 <b>maxValue: number</b> Takes in a number for the minimum value in the `BarChartItem` class.
 
 <b>divisions: number</b> Number of divisions we want to see in our chart (still under development).
