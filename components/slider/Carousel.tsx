import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { MobileStepper, Button, Box, IconButton } from '@mui/material'

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRightRounded'

interface SliderProps {
  children: React.ReactNode
  max: number
  iconSize?: string
  onChangeIndex?: (index: number) => void
}

const Carousel = ({ children, max, iconSize, onChangeIndex }: SliderProps) => {
  const [index, setIndex] = useState(0)

  const handleChangeIndex = (index: number) => {
    setIndex(index)
    onChangeIndex && onChangeIndex(index)
  }

  return (
    <div style={{ position: 'relative', width: '100%', backgroundColor: '#212B36' }}>
      <SwipeableViews
        index={index}
        onChangeIndex={handleChangeIndex}
        hysteresis={0.5}
      >
        {children}
      </SwipeableViews>

      <Box
        sx={{ position: 'absolute', left: 0, top: '40%', display: index === 0 ? 'none' : 'block' }}
        onClick={() => handleChangeIndex(index - 1)}
      >
        <IconButton>
          <KeyboardArrowLeft sx={{fontSize: { xs: iconSize || '1.9rem', sm: '4rem' }, color: '#FFF', pt: '0' }} />
        </IconButton>
      </Box>
      <Box
        sx={{ position: 'absolute', right: 0, top: '40%', display: index === max - 1 ? 'none' : 'block' }}
        onClick={() => handleChangeIndex(index + 1)}
      >
        <IconButton>
          <KeyboardArrowRight sx={{ fontSize: { xs: iconSize || '1.9rem', sm: '4rem' }, color: '#FFF', pt: '0' }} />
        </IconButton>
      </Box>

      <MobileStepper
        variant="dots"
        steps={max}
        position="static"
        activeStep={index}
        sx={{
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          mb: '8px',
        }}
        nextButton={<Button sx={{ display: 'none' }}>Next</Button>}
        backButton={<Button sx={{ display: 'none' }}>Back</Button>}
      />
    </div>
  )
}

export default Carousel
