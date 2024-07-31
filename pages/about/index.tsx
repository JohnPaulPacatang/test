import React, { Fragment } from 'react'
import { styled, Box, Typography, Grid, Divider } from '@mui/material'
import ContentBanner from '@/components/banner/ContentBanner'
import { Row, ContentContainer, Column, Title } from '@/components/common'
import { animated, useSpring } from '@react-spring/web'
import Head from 'next/head'

import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded'
import TagFacesRoundedIcon from '@mui/icons-material/TagFacesRounded'
import HailRoundedIcon from '@mui/icons-material/HailRounded'
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded'

import { aboutUsIcons } from '@/data/constants'
import { aboutUs } from '../api/about'
import { addComma } from '@/utils'

const IconContainer = styled(Box)({
  padding: '8px',
  borderRadius: '8px',
  backgroundColor: '#FFF4EC',
  width: 'min-content',
  marginRight: '24px',
})
const StyledUl = styled('ul')({
  textAlign: 'left',
  color: '#637381',
})
const StyledOl = styled('ol')({
  textAlign: 'left',
  color: '#637381',
})

function AnimateNumber({ n }: { n: number }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 300,
    config: { mass: 1, tension: 20, friction: 10 },
  })
  return <animated.div>{number.to((n) => `${addComma(n)}+`)}</animated.div>
}

const AboutUs = () => {
  return (
    <Fragment>
      <Head>
        <title>Why Choose Us - CEC Construction Corporation</title>
      </Head>

      <Box sx={{ backgroundColor: '#F8F9F9', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ContentBanner imageSrc='url("/static/images/about-us.jpg")' subTitle="About Us" title="Why Choose Us" />

        <ContentContainer sx={{ pt: '56px !important', pb: '12px !important' }}>
          <Column sx={{ alignItems: 'start', marginBottom: '88px' }}>
            <Grid container rowSpacing={6} columnSpacing={6} justifyContent="center" alignItems="start">
              <Grid item xs={6} sm={6} md={3}>
                <Box sx={{ height: '80px' }}>
                  <SettingsSuggestRoundedIcon sx={{ fontSize: '5rem', color: '#002d5c' }} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  <AnimateNumber n={150} />
                </Typography>
                <Typography sx={{ color: '#637381' }}>Projects completed</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Box sx={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                  <TagFacesRoundedIcon sx={{ fontSize: '4.5rem', color: '#002d5c' }} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  <AnimateNumber n={20} />
                </Typography>
                <Typography sx={{ color: '#637381' }}>Satisfied clients</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Box sx={{ height: '80px' }}>
                  <HailRoundedIcon sx={{ fontSize: '5rem', color: '#002d5c' }} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  <AnimateNumber n={2000000} />
                </Typography>
                <Typography sx={{ color: '#637381' }}>Manpower hours supplied</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Box sx={{ height: '80px' }}>
                  <PrecisionManufacturingRoundedIcon sx={{ fontSize: '5rem', color: '#002d5c' }} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  <AnimateNumber n={40} />
                </Typography>
                <Typography sx={{ color: '#637381' }}>Heavy equipments</Typography>
              </Grid>
            </Grid>
          </Column>

          <Divider
            sx={{
              '> span': { color: '#adadad', textTransform: 'uppercase', fontWeight: '600' },
              mb: '64px',
            }}
          >
            Our Philosophy
          </Divider>

          <Grid container rowSpacing={8} columnSpacing={8} justifyContent="center" alignItems="start">
            {aboutUs.map(about => (
              <Grid key={about.id} item xs={12} md={6} lg={4}>
                <Row sx={{ alignItems: 'start' }}>
                  <IconContainer>
                    {aboutUsIcons[about.icon]}
                  </IconContainer>
                  <Column sx={{ textAlign: 'left' }}>
                    <Typography variant="h5" sx={{ mb: '12px', fontWeight: '600' }}>{about.title}</Typography>
                    <Typography component="span" sx={{ color: '#637381' }}>
                      {about.description}
                    </Typography>
                  </Column>
                </Row>
              </Grid>
            ))}
          </Grid>
        </ContentContainer>

        <ContentBanner imageSrc='url("/static/images/mission.jpg")' subTitle="About Us" title="Mission and Vision" />
        <ContentContainer sx={{ paddingTop: '48px !important' }}>
          <Title variant="h4" sx={{ mb: '24px', textAlign: 'left' }}>
            Quality Policy
          </Title>
          <Typography component="span" sx={{ textAlign: 'left', color: '#637381', fontWeight: 400, fontSize: { xs: '16px', sm: '18px' } }}>
            <b>CEC Construction Corporation</b> is dedicated in attaining customer satisfaction by providing quality services in general engineering works, rehabilitation of retrofitting, and construction of reinforced concrete and steel structures.<br/><br/>

            We envision of being the best by:
          </Typography>
          <StyledUl sx={{ fontSize: { xs: '16px', sm: '18px' } }}>
            <li><b>C</b>onsistent quality and on-time completion of projects conforming to projects specifications and responsive after sales services;</li>
            <li><b>E</b>xcellent, competent and motivated personnel and professionals devoted to conform all quality requirements of our internal and external stakeholders; and</li>
            <li><b>C</b>ontinual improvement of our Quality Management System with full dedication and team work.</li>
          </StyledUl>

          <Title variant="h4" sx={{ m: '36px 0 24px', textAlign: 'left' }}>
            Mission
          </Title>
          <Typography component="span" sx={{ textAlign: 'left', color: '#637381', fontWeight: 400, fontSize: { xs: '16px', sm: '18px' } }}>
            To serve the country and clients with dignity, integrity, love and respect.<br/><br/>
            To develop genuine and responsible construction that delivers professional and ethical workmanship based on God&apos;s grace and power.<br/><br/>
            To motivate employees to stand out from opportunities, greatness and be grateful for what God bestowed upon them.
          </Typography>

          <Title variant="h4" sx={{ m: '36px 0 24px', textAlign: 'left' }}>
            Vision
          </Title>
          <Typography component="span" sx={{ textAlign: 'left', color: '#637381', fontWeight: 400, fontSize: { xs: '16px', sm: '18px' } }}>
            Be the leading construction firm in the Philippines and Asia delivering the best infrastructure both in high rise building and power plants through excellence and quality services.<br/><br/>
            <b>CEC</b> envisions being the best by:
          </Typography>
          <StyledOl sx={{ fontSize: { xs: '16px', sm: '18px' } }}>
            <li>Maintaining highest trained and motivated men and professionals committed to provide services of highest quality and excellence driven by superior technology.</li>
            <li>Being an efficient and dynamic company.</li>
            <li>Helping build a progressive with highest ethical standard and GOD - centered Company in the service of the nation.</li>
          </StyledOl>

          <Divider
            sx={{
              '> span': { color: '#adadad', textTransform: 'uppercase', fontWeight: '600', fontSize: '1.5rem' },
              m: '92px 0 48px',
            }}
          >
            Our History
          </Divider>
          <Typography component="span" sx={{ textAlign: 'left', color: '#637381', fontWeight: 400, fontSize: { xs: '16px', sm: '18px' }, mb: '24px' }}>
            <b>CEC Construction Corporation</b> doesn&apos;t have the grandest beginning. And that makes it a unique kind of company.{' '}
            {`
              Its humble start rooted from the leap of faith of its founder, Engr. Alan Russel Caracena.
              When he finished as one of the board topnotchers of the May 2005 Civil Engineering Exam, he decided to take on his journey outside his comfort place, the Province of Cebu, to a bigger environment of Metro Manila.
              He courageously faced the big world with a strong faith in God and self-determination as his tools for survival.
              Employed in an Ortigas based construction company, he developed his talents and skills of being a Civil Engineer through his experiences in structural engineering field, both in local and foreign construction and designing firms.
              In July 2010, with an audacious vision and burning faith, he took the courage to build his own construction company.
              He brought with him the steadfast perception and goal that his company will soon be one of the key players in the construction industry.
              True enough, the visions of Engr. Alan, from a humble beginning in Bantayan Island, Cebu equipped with a brilliant mind and strong-willed capacity took his company to a higher level.
              Currently, CEC Construction Corporation has 36 full time employees. Its offices are situated in the major cities of Luzon, and Mindanao. Primary headquarter is located in Pasig City, Manila which had been operational since 2010.
              It had been working with several eminent brands and companies around the country. It is on its way to becoming a prominent name in the construction industry in the Philippines.
            `}
          </Typography>
        </ContentContainer>
      </Box>
    </Fragment>
  )
}

export default AboutUs
