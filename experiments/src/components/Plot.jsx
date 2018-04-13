import React from 'react'
import { VictoryChart, VictoryBoxPlot } from 'victory'
import { Loader } from 'semantic-ui-react'
import _ from 'lodash'

const Plot = ({data, loading}) => {

  let boxPlotData = data
    .map(d => ({ ...d, min: d.ci_low, max: d.ci_high }))
    .map(d => _.pick(d, ['x', 'min', 'median', 'max', 'q1', 'q3']))

  if (loading) return <Loader />
  return (
    <VictoryChart domainPadding={20}>
      <VictoryBoxPlot
        boxWidth={20}
        data={boxPlotData}
      />
    </VictoryChart>
  )
}

export default Plot
