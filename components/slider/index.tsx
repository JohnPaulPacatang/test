import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

interface SliderProps {
  children: React.ReactNode
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Slider = ({ children }: SliderProps) => {
  const [index, setIndex] = useState(0)

  const handleChangeIndex = (index: number) => {
    setIndex(index)
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <AutoPlaySwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
        interval={2500}
        hysteresis={0.5}
      >
        {children}
      </AutoPlaySwipeableViews>
    </div>
  )
}

export default Slider
