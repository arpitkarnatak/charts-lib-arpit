import React from 'react'
import { COLOR_SCHEMES } from './constant'
import { BarChartProps, ChartWrapperProps } from './interfaces'
import { Bars, BarsGroup, BarChartWrapper } from './styled'



function BarChart(
    {
        dataPoints,
        height,
        maxValue,
        minValue,
        divisions
    }: BarChartProps
) {
    const offset = (maxValue - minValue) / divisions

    var divisionMarkings: number[] = [];

    for (let i = minValue; i < divisions + 1; i++) {
        divisionMarkings.push(minValue + i * offset)
    }

    return (
        <div>
            <BarChartWrapper height={height}>
                {
                    dataPoints.map((group, groupIndex) => {
                        return (
                            <BarsGroup key={groupIndex}>
                                {group.map((dataPoint, index) => {
                                    return (
                                        <Bars
                                            key={index}
                                            width={'20px'}
                                            height={`${(dataPoint.value - minValue) / (maxValue - minValue) * 100}%`}
                                            color={dataPoint.color || COLOR_SCHEMES.DEFAULT[index]}
                                        />
                                    )
                                })}
                            </BarsGroup>
                        )
                    })
                }
            </BarChartWrapper>

            <div>
                <h1>Legends</h1>
                {dataPoints[0].map((dataPoint, index) => {
                    return (
                        <div key={index} style={{ width: '100px', display: 'flex' }}>
                            <div style={{ height: '20px', width: '20px', backgroundColor: COLOR_SCHEMES.DEFAULT[index] }}></div>
                            <span >{dataPoint.label}</span>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default BarChart
