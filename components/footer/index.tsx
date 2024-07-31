import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { styled, Box, Typography } from '@mui/material'

import { Column } from '../common'
import QuoteBanner from '../banner/QuoteBanner'

const StyledFooter = styled(Box)({
  width: '100%',
  background: '#FFF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '& a': {
    textDecoration: 'none',
  },
})

const Footer = () => {
  return (
    <footer>
      <QuoteBanner />
      <StyledFooter sx={{ height: { xs: '140px', md: '160px' } }}>
        <Link href="/">
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: '16px' }}>
            <Image
              src="/static/images/logo-no-bg.png"
              alt="logo"
              width={64}
              height={64}
              style={{ marginRight: '12px' }}
            />
            <Column>
              <Typography
                variant="poster"
                sx={{
                  fontSize: '1.5rem',
                  color: '#414141',
                  lineHeight: '18px',
                }}
              >
                CEC
              </Typography>
              <Typography
                variant="poster"
                sx={{
                  fontSize: '1.2rem',
                  color: '#414141',
                  lineHeight: '16px',
                }}
              >
                CONSTRUCTION
              </Typography>
              <Typography
                variant="poster"
                sx={{
                  letterSpacing: '0.8px',
                  fontSize: '1.2rem',
                  color: '#414141',
                  lineHeight: '16px',
                }}
              >
                CORPORATION
              </Typography>
            </Column>
          </Box>
        </Link>
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Typography sx={{ fontSize: '0.8rem' }}>
            © 2023. All rights reserved.
          </Typography>
          <Typography sx={{ fontSize: '0.65rem', cursor: 'pointer', pt: '4px' }}>
            Powered by Premium Tech
          </Typography>
        </Box>
      </StyledFooter>
    </footer>
  )
}

export default Footer
