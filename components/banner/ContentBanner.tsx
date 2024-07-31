import React from 'react'
import { styled, Box, Typography } from '@mui/material'

import { navBarHeightMobile, maxWidth } from '../header'

interface ContentBannerProps {
  imageSrc?: string
  title: string
  subTitle: string
}

const ContentBannerContainer = styled(Box)({
  marginTop: `${navBarHeightMobile}px`,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: '#212B36',
})
const Banner = styled(Box)(({ theme }) => ({
  maxWidth: `${maxWidth - 400}px`,
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
  backgroundSize: 'cover',
}))
const GradientWrapper = styled(Box)({
  display: 'flex',
  height: '100%',
  flexGrow: 1,
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(to right, rgba(33,43,54,1) 0%, rgba(33,43,54,0.7) 50%, rgba(33,43,54,1) 100%)',
})
const Title = styled(Typography)(({ theme }) => ({
  color: '#FFF',
  fontWeight: 600,
  fontSize: '3.75rem !important',
  [theme.breakpoints.down('lg')]: {
    fontSize: '3.3333rem !important',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '3.125rem !important',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem !important',
  },
}))

const ContentBanner = ({ imageSrc, title, subTitle }: ContentBannerProps) => {
  return (
    <ContentBannerContainer>
      <Banner sx={{ height: { xs: '120px', md: '200px' }, backgroundImage: imageSrc || 'url("/static/images/services.jpg")' }}>
        <GradientWrapper>
          <Typography component="span" sx={{ color: '#adadad', fontWeight: 600, textTransform: 'uppercase', mb: '16px' }}>
            {subTitle}
          </Typography>
          <header>
            <Title variant="h1">
              {title}
            </Title>
          </header>
        </GradientWrapper>
      </Banner>
    </ContentBannerContainer>
  )
}

export default ContentBanner
