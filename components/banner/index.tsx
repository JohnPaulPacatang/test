import React from 'react'
import { styled, Typography, Box } from '@mui/material'

// import { getDeviceWidth } from '@/utils'
import { maxWidth } from '../header'

const BackgroundDiv = styled('div')({
  width: '100%',
  backgroundImage: `url('/static/images/landing-banner.jpg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 80%',
})

const MottoDiv = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  flex: 1,
  padding: '0 42px',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(to right, rgba(0,45,92,0.8) 0%,rgba(255,255,255,0) 80%)',
})

const Banner = () => {
  // const [deviceWidth, setDeviceWidth] = useState(0)

  // const onWindowResize = () => {
  //   setDeviceWidth(getDeviceWidth())
  // }

  // useEffect(() => {
  //   setDeviceWidth(getDeviceWidth())
  //   window.addEventListener("resize", onWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", () => null);
  //   }
  // }, [])

  return (
    <BackgroundDiv sx={{
      backgroundSize: 'cover',
      // height: deviceWidth < 700 ? '60vh' : '100vh',
      height: { xs: '70vh', md: '100vh' },
    }}>
      <MottoDiv>
        <Box sx={{ display: 'flex', flexGrow: 1, maxWidth: maxWidth - 20 }}>
          <Typography
            variant='h2'
            sx={{
              fontWeight: 500,
              color: '#FFF',
              fontSize: { xs: '1.4rem', sm: '2.65rem', md: '3.75rem' },
              textShadow: '4px 4px 8px rgba(0, 0, 0, 1)',
            }}
          >
            Where quality, safety,<br />
            and cost efficiency<br />meet
          </Typography>
        </Box>
      </MottoDiv>
    </BackgroundDiv>
  )
}

export default Banner
