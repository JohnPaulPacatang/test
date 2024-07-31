import React, { Fragment } from 'react'
import Head from 'next/head'
import { styled, Box, Typography, Grid } from '@mui/material'

import LocationOnIcon from '@mui/icons-material/LocationOnRounded'
import EmailIcon from '@mui/icons-material/EmailRounded'
import CallIcon from '@mui/icons-material/CallRounded'

import ContentBanner from '@/components/banner/ContentBanner'
import { ContentContainer, Title, Row } from '@/components/common'

const StyledTypography = styled(Typography)({
  color: '#637381',
  lineHeight: '20px',
  textAlign: 'left',
  '& a': {
    textDecoration: 'none',
    color: '#637381',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Us - CEC Construction Corporation</title>
      </Head>

      <Box sx={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ContentBanner imageSrc='url("/static/images/contact-us.jpg")' subTitle="" title="Contact Us" />

        <ContentContainer sx={{ paddingTop: '48px !important', paddingBottom: '64px !important' }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7076560815663!2d121.08212926037699!3d14.558703171042314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c7b5879b4a67%3A0xd4c9542230b6a9db!2sCEC%20Construction%20Corporation!5e0!3m2!1sen!2sph!4v1684055762355!5m2!1sen!2sph"
                  style={{ border: 0, width: '100%', minHeight: '450px', }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Title variant="h4" sx={{ mb: '24px', textAlign: 'left' }}>
                Main Office
              </Title>
              <Row sx={{ marginTop: '16px' }}>
                <LocationOnIcon sx={{ color: '#212B36', mr: '16px' }} />
                <StyledTypography>
                  <a href="https://www.google.com/maps/place/CEC+Construction+Corporation/@14.558428,121.081566,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c7b5879b4a67:0xd4c9542230b6a9db!8m2!3d14.558428!4d121.081566!16s%2Fg%2F11kpf4qwp4?hl=en-US" target='_blank'>
                    Unit S-6 & S-7 2F, Armal Center,<br /> Caruncho Ave., Malinao, Pasig City
                  </a>
                </StyledTypography>
              </Row>
              <Row sx={{ marginTop: '16px' }}>
                <CallIcon sx={{ color: '#212B36', mr: '16px' }} />
                <StyledTypography>
                  <a href="tel://63-2-7934-0045">(02) 7934-0045</a>
                </StyledTypography>
              </Row>
              <Row sx={{ mt: '4px', ml: '40px' }}>
                <StyledTypography>
                  <a href="tel://63-2-7576-3964">(02) 7576-3964</a>
                </StyledTypography>
              </Row>
              <Row sx={{ mt: '4px', ml: '40px' }}>
                <StyledTypography>
                  <a href="tel://639271577100">(+63) 927-157-7100</a>
                </StyledTypography>
              </Row>
              <Row sx={{ mt: '4px', ml: '40px' }}>
                <StyledTypography>
                  <a href="tel://639178366221">(+63) 917-836-6221</a>
                </StyledTypography>
              </Row>
              <Row sx={{ marginTop: '16px' }}>
                <EmailIcon sx={{ color: '#212B36', mr: '16px' }} />
                <StyledTypography>
                  <a href="mailto:info@cec.com.ph">info@cec.com.ph</a>
                </StyledTypography>
              </Row>
              <Row sx={{ marginTop: '4px', ml: '40px', mb: '48px' }}>
                <StyledTypography>
                  <a href="mailto:caracena_structural@yahoo.com">caracena_structural@yahoo.com</a>
                </StyledTypography>
              </Row>
            </Grid>
          </Grid>
        </ContentContainer>
      </Box>
    </Fragment>
  )
}

export default Contact
