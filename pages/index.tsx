import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { styled, Box, Typography, Grid, Divider, Skeleton, Button, useScrollTrigger } from '@mui/material'
import { animated, useSpring } from '@react-spring/web'

import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ApartmentIcon from '@mui/icons-material/Apartment'
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined'
import CarRepairOutlinedIcon from '@mui/icons-material/CarRepairOutlined'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined'

import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded'
import TagFacesRoundedIcon from '@mui/icons-material/TagFacesRounded'
import HailRoundedIcon from '@mui/icons-material/HailRounded'
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'

import HomeBanner from '@/components/banner'
import { Column, DefaultButton, Flex, Row, StyledButton, ContentContainer, Title } from '@/components/common'

import project15 from '../public/static/images/projects/p-15-banban-small.jpg'
import project9 from '../public/static/images/projects/p-9-matahimik-5-small.jpg'
import projectWarehouse from '../public/static/images/projects/p-warehouse.jpg'
import designAndConstruct from '../public/static/images/projects/design-and-construct-of-conventional-building.jpg'

import { ProjectResponseData, ClientResponseData } from '@/data/types'
import { aboutUsIcons } from '@/data/constants'
import Slider from '@/components/slider'
import { aboutUs } from './api/about'
import { addComma } from '@/utils'

const ProjectWrapper = styled(Box)({
  borderRadius: '6px',
  display: 'flex',
  height: '250px',
  alignItems: 'end',
  width: '100%',
  cursor: 'pointer',
})
const IconContainer = styled(Box)({
  padding: '8px',
  borderRadius: '8px',
  backgroundColor: '#FFF4EC',
  width: 'min-content',
  marginRight: '24px',
})

function AnimateNumber({ n }: { n: number }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 500,
    config: { mass: 1, tension: 20, friction: 10 },
  })
  return <animated.div>{number.to((n) => `${addComma(n)}+`)}</animated.div>
}

const Home = () => {
  const router = useRouter()
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 2000 })
  const [projects, setProjects] = useState<ProjectResponseData>([])
  const [clients, setClients] = useState<ClientResponseData>([])

  const fetchProjects = async () => {
    const response = await fetch('/api/projects?highlight=true')
    const data = await response.json()

    setProjects(data)
  }
  const fetchClients = async () => {
    const response = await fetch('/api/clients')
    const data = await response.json()

    setClients(data)
  }

  const handleFilterProject = ({ category, name, id }: { category?: string, name?: string, id?: number }) => {
    router.push(
      {
        pathname: '/projects',
        query: { category, name, id },
      },
      '/projects',
    )
  }

  const [shown, setShown] = useState(false)
  useEffect(() => {
    fetchProjects()
    fetchClients()

    const onScroll = () => {
      if (window.scrollY >= 1300) {
        setShown(true)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <title>CEC Construction Corporation - Where quality, safety, and cost efficiency meet</title>
      </Head>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <HomeBanner />

        {/*
        =========================
        Services
        ==========================
        */}
        <ContentContainer>
          <Grid container sx={{ textAlign: 'left' }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Column sx={{ marginRight: { xs: '0', sm: '64px' } }}>
                <Typography component="span" sx={{ color: '#adadad', fontWeight: 600, textTransform: 'uppercase', mb: '4px', flexGrow: 1 }}>
                  Our Services
                </Typography>
                <Title variant="h3">
                  What We Do Best
                </Title>
                <Typography component="span" sx={{ color: '#637381', fontWeight: 400, mt: '32px', fontSize: { xs: '16px', sm: '18px' } }}>
                  We specialized in Design and Rehabilitation / Retrofitting and Construction of Reinforced Concrete and Steel Structures.<br/><br/>
                  We are proficient in the following fields of <b style={{ whiteSpace: 'nowrap' }}>Structural Engineering:</b>
                </Typography>
                <ul style={{ color: '#637381' }}>
                  <li>Pile Driving</li>
                  <li>Sheet Piling</li>
                  <li>Roads and Site Development</li>
                  <li>Bored Piling</li>
                  <li>General Excavation and Dewatering</li>
                  <li>Structural Design and Build</li>
                  <li>General Construction</li>
                  <li>Lightweight Concrete Topping</li>
                  <li>Structural Steel</li>
                </ul>
                {/* <Link href='/services'>
                  <StyledButton
                    variant="outlined"
                    endIcon={<ChevronRightIcon />}
                    sx={{ alignSelf: 'start', m: { xs: '0 0 24px 0', md: '12px 0' }, color: '#637381' }}
                  >
                    View all Services
                  </StyledButton>
                </Link> */}
              </Column>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Grid container spacing={2.5}>
                <Grid item xs={12} md={6}>
                  <Link href='/projects?category=Building' style={{ textDecoration: 'none' }}>
                    <ProjectWrapper
                      sx={{
                        backgroundImage: `url(${project9.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat'
                      }}
                      // onClick={() => handleFilterProject({ category: 'Building' })}
                    >
                      <ProjectWrapper sx={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
                        boxShadow: '0 0 2px 0 rgb(145 158 171 / 30%), 0 12px 24px -4px rgb(145 158 171 / 20%)',
                      }}>
                        <Row sx={{ p: '16px', borderRadius: '0 0 4px 4px' }}>
                          <ApartmentIcon sx={{ color: '#FFF', mr: '8px', fontSize: '1.8rem' }} />
                          <Typography sx={{ color: '#FFF', fontWeight: '600', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                            Buildings
                          </Typography>
                        </Row>
                      </ProjectWrapper>
                    </ProjectWrapper>
                  </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Link href='/projects?category=Road' style={{ textDecoration: 'none' }}>
                    <ProjectWrapper
                      sx={{
                        backgroundImage: `url(${project15.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat'
                      }}
                      // onClick={() => handleFilterProject({ category: 'Road' })}
                    >
                      <ProjectWrapper sx={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
                        boxShadow: '0 0 2px 0 rgb(145 158 171 / 30%), 0 12px 24px -4px rgb(145 158 171 / 20%)',
                      }}>
                        <Row sx={{ p: '16px', borderRadius: '0 0 4px 4px' }}>
                          <CarRepairOutlinedIcon sx={{ color: '#FFF', mr: '8px', fontSize: '1.8rem' }} />
                          <Typography sx={{ color: '#FFF', fontWeight: '600' }}>
                            Roads, Overpasses and Bridges
                          </Typography>
                        </Row>
                      </ProjectWrapper>
                    </ProjectWrapper>
                  </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Link href='/projects?category=Industrial%20Plant' style={{ textDecoration: 'none' }}>
                    <ProjectWrapper
                      sx={{
                        backgroundImage: `url(${projectWarehouse.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat'
                      }}
                      // onClick={() => handleFilterProject({ category: 'Industrial Plant' })}
                    >
                      <ProjectWrapper sx={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
                        boxShadow: '0 0 2px 0 rgb(145 158 171 / 30%), 0 12px 24px -4px rgb(145 158 171 / 20%)',
                      }}>
                        <Row sx={{ p: '16px', borderRadius: '0 0 4px 4px' }}>
                          <WarehouseOutlinedIcon sx={{ color: '#FFF', mr: '8px', fontSize: '1.8rem' }} />
                          <Typography component="span" sx={{ color: '#FFF', fontWeight: '600', textDecoration: 'none' }}>
                            Warehouses and Industrial Plants
                          </Typography>
                        </Row>
                      </ProjectWrapper>
                    </ProjectWrapper>
                  </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Link href='/projects?category=Structural' style={{ textDecoration: 'none' }}>
                    <ProjectWrapper
                      sx={{
                        backgroundImage: `url(${designAndConstruct.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat',
                      }}
                      // onClick={() => handleFilterProject({ category: 'Structural' })}
                    >
                      <ProjectWrapper sx={{
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
                        boxShadow: '0 0 2px 0 rgb(145 158 171 / 30%), 0 12px 24px -4px rgb(145 158 171 / 20%)',
                      }}>
                        <Row sx={{ p: '16px', borderRadius: '0 0 4px 4px' }}>
                          <EngineeringOutlinedIcon sx={{ color: '#FFF', mr: '8px', fontSize: '1.8rem' }} />
                          <Typography sx={{ color: '#FFF', fontWeight: '600' }}>
                            Structural Engineering
                          </Typography>
                        </Row>
                      </ProjectWrapper>
                    </ProjectWrapper>
                  </Link>
                </Grid>
              </Grid>
            </Grid> */}
          </Grid>
        </ContentContainer>

        {/*
        =========================
        Projects
        ==========================
        */}
        <Flex sx={{ width: '100%', backgroundColor: '#F9F9F9', justifyContent: 'center' }}>
          <ContentContainer>
            <Typography component="span" sx={{ color: '#adadad', fontWeight: 600, textTransform: 'uppercase', mb: '4px', flexGrow: 1 }}>
              Our Projects
            </Typography>
            <Title variant="h3" sx={{ mb: '48px' }}>
              Featured Projects
            </Title>
            <Box sx={{
              display: { xs: 'none', sm: 'grid' },
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: 2,
              '& > .MuiBox-root': {
                borderRadius: 2,
              },
              gridTemplateRows: 'auto',
              // gridTemplateAreas: `"A A B B C C"
              //                     "A A B B C C"
              //                     "A A E E C C"
              //                     "D D E E F F"
              //                     "D D E E F F"`,
              gridTemplateAreas: `"A A B B C C"
                                  "A A B B C C"
                                  "A A B B C C"`,
            }}>
              {!projects.length ?
                // ['A','B','C','D','E','F'].map(i => (
                ['A','B','C'].map(i => (
                  <Box key={i} sx={{ gridArea: i }}>
                    {/* <Skeleton variant="rounded" height={new RegExp(["A", "B", "C"].join("|")).test(i) ? '250px' : '200px'} /> */}
                    <Skeleton variant="rounded" height="250px" />
                  </Box>
                ))
              : projects.map((project) => (
                  <Link key={project.id} href={`/projects?id=${project.id}`} style={{ gridArea: project.gridArea, textDecoration: 'none' }}>
                    <ProjectWrapper
                      sx={{
                        height: new RegExp(["A", "B", "C"].join("|")).test(project.gridArea) ? '300px' : '200px',
                        // gridArea: project.gridArea,
                        backgroundImage: `url(${project.src ? `/static/images/projects/${project.src}` : '/static/images/cec-no-image.jpg'})`,
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat'
                      }}
                      // onClick={() => handleFilterProject({ id: project.id })}
                    >
                      <ProjectWrapper sx={{
                        height: new RegExp(["A", "B", "C"].join("|")).test(project.gridArea) ? '300px' : '200px',
                        boxShadow: '0 0 2px 0 rgb(145 158 171 / 30%), 0 12px 24px -4px rgb(145 158 171 / 20%)',
                        '&:hover': {
                          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
                          '> div': {
                            display: 'flex',
                          },
                        },
                      }}>
                        <Box sx={{ display: 'none', flexDirection: 'column' }}>
                          <Typography component="span" sx={{ pl: '28px', color: '#FFF', fontSize: '1.5rem', fontWeight: '600', textAlign: 'left' }}>
                            {project.name}
                          </Typography>
                          <Typography component="span" sx={{ p: '4px 0 20px 28px', color: '#FFF', fontSize: '0.9rem', fontWeight: '300', textAlign: 'left' }}>
                            {project.city}
                          </Typography>
                        </Box>
                      </ProjectWrapper>
                    </ProjectWrapper>
                  </Link>
                ))
              }
            </Box>
            <Column sx={{ display: { xs: 'flex', sm: 'none' } }}>
              {!projects.length ?
                ['A','B','C'].map(i => (
                  <Box key={i} sx={{ mb: '24px' }}>
                    <Skeleton variant="rounded" height="250px" />
                  </Box>
                ))
              : projects.map((project) => (
                <Link key={project.id} href={`/projects?id=${project.id}`} style={{ textDecoration: 'none' }}>
                  <ProjectWrapper
                    sx={{
                      backgroundImage: `url(${project.src ? `/static/images/projects/${project.src}` : '/static/images/cec-no-image.jpg'})`,
                      backgroundSize: 'cover',
                      backgroundPosition: '50% 50%',
                      backgroundRepeat: 'no-repeat',
                      mb: '24px',
                    }}
                    // onClick={() => handleFilterProject({ id: project.id })}
                  >
                    <ProjectWrapper sx={{
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
                      boxShadow: '0 0 2px 0 rgb(145 158 171 / 30%), 0 12px 24px -4px rgb(145 158 171 / 20%)',
                    }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography component="span" sx={{ pl: '28px', color: '#FFF', fontSize: '1rem', fontWeight: '600', textAlign: 'left' }}>
                          {project.name}
                        </Typography>
                        <Typography component="span" sx={{ p: '4px 0 20px 28px', color: '#FFF', fontSize: '0.8rem', fontWeight: '300', textAlign: 'left' }}>
                          {project.city}
                        </Typography>
                      </Box>
                    </ProjectWrapper>
                  </ProjectWrapper>
                </Link>
              ))}
            </Column>
            <Link href='/projects'>
              <DefaultButton sx={{ alignSelf: 'center', m: '32px 0 0 0' }}>
                View all Projects
              </DefaultButton>
            </Link>
          </ContentContainer>
        </Flex>

        {/*
        =========================
        About Us - Why Choose Us
        ==========================
        */}
        <ContentContainer>
          <Column sx={{ alignItems: 'center', marginBottom: '88px' }}>
            <Typography component="span" sx={{ color: '#adadad', fontWeight: 600, textTransform: 'uppercase', mb: '4px', flexGrow: 1 }}>
              About Us
            </Typography>
            <Title variant="h3" sx={{ mb: '64px' }}>
              Why Choose Us
            </Title>

            {shown && <Grid container rowSpacing={6} columnSpacing={6} justifyContent="center" alignItems="start">
              <Grid item xs={6} sm={6} md={3}>
                <SettingsSuggestRoundedIcon sx={{ fontSize: '5rem', color: '#002d5c' }} />
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  <AnimateNumber n={150} />
                </Typography>
                <Typography sx={{ color: '#637381' }}>Projects completed</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <Box sx={{ height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', mb: '5px' }}>
                  <TagFacesRoundedIcon sx={{ fontSize: '4.5rem', color: '#002d5c' }} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  <AnimateNumber n={20} />
                </Typography>
                <Typography sx={{ color: '#637381' }}>Satisfied clients</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <HailRoundedIcon sx={{ fontSize: '5rem', color: '#002d5c' }} />
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  <AnimateNumber n={2000000} />
                </Typography>
                <Typography sx={{ color: '#637381' }}>Manpower hours supplied</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <PrecisionManufacturingRoundedIcon sx={{ fontSize: '5rem', color: '#002d5c' }} />
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  <AnimateNumber n={40} />
                </Typography>
                <Typography sx={{ color: '#637381' }}>Heavy equipments</Typography>
              </Grid>
            </Grid>}
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
          <Link href='/about'>
            <StyledButton
              variant="outlined"
              endIcon={<ChevronRightIcon />}
              sx={{ alignSelf: 'center', mt: '48px' }}
            >
              Learn more about us
            </StyledButton>
          </Link>
        </ContentContainer>

        {/*
        =========================
        About Us - Clients
        ==========================
        */}
        <Flex sx={{ width: '100%', backgroundColor: '#F9F9F9', justifyContent: 'center' }}>
          <ContentContainer sx={{ alignItems: 'center' }}>
            {/* <Typography component="span" sx={{ color: '#adadad', fontWeight: 600, textTransform: 'uppercase', mb: '4px', flexGrow: 1 }}>
              About Us
            </Typography> */}
            <Title variant="h3" sx={{ mb: { xs: '32px', md: '64px' } }}>
              Valued Clients
            </Title>

            <Slider>
              {[1,2,3,4,5].map((i, index) => (
                <div key={i}>
                  <Grid container justifyContent="center" alignItems="start" rowSpacing={2} columnSpacing={2}>
                    {!clients.length ?
                      [1,2,3,4].map(i => (
                        <Grid key={i} item xs={6} sm={6} md={3}>
                          <Box sx={{ backgroundColor: '#FFF', display: 'flex', justifyContent: 'center', borderRadius: '8px' }}>
                            <Skeleton
                              variant="rounded"
                              sx={{ margin: '16px 0', height: { xs: '60px', sm: '120px' }, width: { xs: '120px', sm: '220px' } }}
                            />
                          </Box>
                        </Grid>
                      ))
                    :
                      clients.slice(index * 4, i * 4).map(client => (
                        <Grid key={client.id} item xs={6} sm={6} md={3}>
                          <Box sx={{ backgroundColor: '#FFF', display: 'flex', justifyContent: 'center', borderRadius: '8px' }}>
                            <Box
                              sx={{
                                height: { xs: '60px', sm: '120px' },
                                width: { xs: '120px', sm: '220px' },
                                backgroundImage: `url(${client.img})`,
                                backgroundSize: client.bgMode ? client.bgMode : 'contain',
                                backgroundPosition: '50% 50%',
                                backgroundRepeat: 'no-repeat',
                                margin: '16px 0',
                              }}
                            ></Box>
                          </Box>
                        </Grid>
                      ))
                    }
                  </Grid>
                </div>
              ))}
            </Slider>

            {/* <Grid container justifyContent="center" alignItems="start" rowSpacing={2} columnSpacing={2}>
              {clients.map(client => (
                <Grid key={client.id} item xs={6} sm={6} md={3}>
                  <Box sx={{ backgroundColor: '#FFF', display: 'flex', justifyContent: 'center', borderRadius: '8px' }}>
                    <Box
                      sx={{
                        height: { xs: '60px', sm: '120px' },
                        width: { xs: '120px', sm: '220px' },
                        backgroundImage: `url(${client.img})`,
                        backgroundSize: client.bgMode ? client.bgMode : 'contain',
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat',
                        margin: '16px 0',
                      }}
                    ></Box>
                  </Box>
                </Grid>
              ))}
            </Grid> */}
          </ContentContainer>
        </Flex>

        <Button
          variant="contained"
          size="large"
          sx={{
            display: trigger ? 'inline-flex' : 'none',
            zIndex: 999,
            position: 'fixed',
            bottom: 85,
            right: 24,
            height: '44px',
            backgroundColor: '#FFDBC1',
            '&:hover': {
              backgroundColor: '#FFC79E',
            },
            textTransform: 'none',
            borderRadius: '60px',
            minWidth: '0',
            width: '44px'
          }}
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        >
          <ArrowUpwardRoundedIcon sx={{ fontSize: 32, color: '#FB741C' }} />
        </Button>
      </Box>
    </Fragment>
  )
}

export default Home
