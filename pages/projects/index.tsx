import React, { useState, useEffect, Fragment } from 'react'
import {
  styled,
  Box,
  Grid,
  Typography,
  Divider,
  Tooltip,
  Skeleton,
  MenuItem,
  FormControl,
  useScrollTrigger,
  IconButton,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Chip,
  SwipeableDrawer,
} from '@mui/material'
import Image from 'next/image'
import { withRouter, Router } from 'next/router'
import Head from 'next/head'

import Select, { SelectChangeEvent } from '@mui/material/Select'

import ContentBanner from '@/components/banner/ContentBanner'
import { ContentContainer, DefaultButton, StyledInput } from '@/components/common'
import { ProjectDetailsResponseData, ProjectDetails } from '@/data/types'

import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded' // Structural
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded' // Construction
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded' // Design
import AddHomeWorkRoundedIcon from '@mui/icons-material/AddHomeWorkRounded' // Retrofit
import FoundationRoundedIcon from '@mui/icons-material/FoundationRounded' // Erection
import AddRoadRoundedIcon from '@mui/icons-material/AddRoadRounded' // Road
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { SERVICES_ID, SERVICES_ID_SELECT, CATEGORIES_SELECT } from '@/data/constants'

import { useDebounce } from '@/utils/hooks/debounce'
import Carousel from '@/components/slider/Carousel'
import { getDeviceWidth } from '@/utils'

const SERVICES_ICONS = {
  [SERVICES_ID.GENERAL_CONSTRUCTION.id]: <ConstructionRoundedIcon />,
  [SERVICES_ID.DESIGN_AND_BUILD.id]: <DesignServicesRoundedIcon />,
  [SERVICES_ID.STRUCTURAL_STEEL.id]: <AddHomeWorkRoundedIcon />,
  [SERVICES_ID.PILE_DRIVING.id]: <FoundationRoundedIcon />,
  [SERVICES_ID.ROADS_AND_SITE_DEVELOPMENT.id]: <AddRoadRoundedIcon />,
  [SERVICES_ID.STRUCTURAL_RETROFITTING.id]: <AccountBalanceRoundedIcon />,

  [SERVICES_ID.SHEET_PILING.id]: <AccountBalanceRoundedIcon />,
  [SERVICES_ID.BORED_PILING.id]: <AccountBalanceRoundedIcon />,
  [SERVICES_ID.GENERAL_EXCAVATION_AND_DEWATERING.id]: <AccountBalanceRoundedIcon />,
  [SERVICES_ID.LIGHTWEIGHT_CONCRETE_TOPPING.id]: <AccountBalanceRoundedIcon />,
  // [SERVICES_ID.ROAD.id]: <AddRoadRoundedIcon />,
}

const StyledBox = styled(Box)({
  backgroundColor: '#FFFFFF',
  color: '#212B36',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  borderRadius: '8px',
  backgroundImage: 'none',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
  zIndex: '0',
  margin: '16px',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: '0 0 2px 0 rgba(145, 158, 171, 1), 0 12px 24px -4px rgba(145, 158, 171, 1)',
  },
})
const SearchInput = styled(StyledInput)({
  color: '#212B36',
  width: '80%',
  maxWidth: '500px',
  marginBottom: '20px',
  '& .MuiInputBase-root': {
    backgroundColor: '#FFF',
    '&:before,:after': {
      display: 'none',
    },
    '&:hover': {
      backgroundColor: '#FFF',
    },
    '&.Mui-focused': {
      backgroundColor: '#FFF',
    },
  },
  '& input, & textarea': {
    color: '#212B36',
  },
})
const StyledTh = styled('th')({
  zIndex: 1,
})

type Props = {}
type PropsWithRouter = Props & {
  router: Router
}

const Projects = (props: PropsWithRouter) => {
  const [projects, setProjects] = useState<ProjectDetailsResponseData>([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [displayedProject, setDisplayedProject] = useState<ProjectDetails>()
  const [pageInfo, setPageInfo] = useState({
    total: 0,
    page: 1,
    size: 8,
    search: '',
    category: props.router.query.category ? `${props.router.query.category}` : 'all',
    status: 'all',
    service: 'all',
  })

  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 200 })
  const scrollToTopTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 1200 })

  const handleOpenProjectDetails = (project: ProjectDetails) => {
    setDisplayedProject(project)

    if (getDeviceWidth() > 900) {
      setOpen(true)
    } else {
      setOpenDrawer(true)
    }
  }

  const handleLoadMore = () => {
    const newPageInfo = {
      ...pageInfo,
      page: pageInfo.page + 1,
    }
    setPageInfo(newPageInfo)
    fetchProjects(newPageInfo)
  }

  const handleCategoryChange = (event: SelectChangeEvent) => {
    const newPageInfo = {
      ...pageInfo,
      page: 1,
      category: event.target.value as string,
    }
    setPageInfo(newPageInfo)
    fetchProjects(newPageInfo)
  }
  const handleServiceChange = (event: SelectChangeEvent) => {
    const newPageInfo = {
      ...pageInfo,
      page: 1,
      service: event.target.value as string,
    }
    setPageInfo(newPageInfo)
    fetchProjects(newPageInfo)
  }
  const handleTagChange = (event: SelectChangeEvent) => {
    const newPageInfo = {
      ...pageInfo,
      page: 1,
      tag: event.target.value as string,
    }
    setPageInfo(newPageInfo)
    fetchProjects(newPageInfo)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPageInfo = {
      ...pageInfo,
      page: 1,
      search: event.target.value as string,
    }
    setPageInfo(newPageInfo)
    debounced(newPageInfo)
  }
  const debounced = useDebounce((pInfo) => fetchProjects(pInfo))

  const fetchProjects = async (
    { page, size, search, category, status, service }:
    { page: number, size: number, search: string, category: string, status: string, service: string }
  ) => {
    const params = {
      page,
      size,
      search,
      category,
      status,
      service,
    }
    setLoading(true)
    const response = await fetch(`/api/project-details`, { method: 'POST', body: JSON.stringify(params) })
    const data = await response.json()

    setPageInfo({
      page,
      size,
      search,
      category,
      status,
      service,
      total: data.total
    })
    setProjects(page === 1 ? data.list : [ ...projects, ...data.list ])
    setLoading(false)
  }
  const fetchProjectDetail = async (id: number) => {
    setLoading(true)
    const response = await fetch(`/api/project-details?id=${id}`, { method: 'GET' })
    const data: { total: number, list: ProjectDetailsResponseData } = await response.json()

    handleOpenProjectDetails(data.list[0])
  }

  useEffect(() => {
    if (props.router.query.id) {
      fetchProjectDetail(parseInt(`${props.router.query.id}`))
    }

    fetchProjects(pageInfo)
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Our Projects - CEC Construction Corporation</title>
      </Head>

      <Box sx={{ backgroundColor: '#F8F9F9', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ContentBanner imageSrc='url("/static/images/projects.jpg")' subTitle="" title="Our Projects" />

        <ContentContainer sx={{ pt: '28px !important', pb: '56px !important' }}>
          <table>
            <thead>
              <tr>
                <StyledTh sx={{ position: { xs: 'relative' , sm: 'sticky' }, top: { xs: 0, sm: 100 } }}>
                  <ContentContainer sx={{ p: '0 14px !important' }}>
                    <Box sx={{ display: { xs: 'block', sm: 'flex' } }}>
                      <FormControl sx={{ width: { xs: '100%', sm: '300px' }, textAlign: 'left', marginRight: { xs: '0', sm: '16px' } }}>
                        <Select
                          labelId="service-select-label"
                          id="service-select"
                          label='Service'
                          value={pageInfo.service}
                          displayEmpty
                          onChange={handleServiceChange}
                          sx={{
                            boxShadow: trigger ? '0 0 2px 0 rgba(0, 0, 0, 0.2), 0 12px 24px -4px rgba(0, 0, 0, 0.2)' : '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
                            borderRadius: '8px',
                            backgroundColor: '#FFF',
                            '.MuiOutlinedInput-notchedOutline': {
                              border: '0 !important',
                              borderRadius: '8px',
                            },
                            '.Mui-focused': {
                              border: '0 !important',
                              '&.MuiOutlinedInput-notchedOutline': {
                                border: '0 !important',
                              },
                            }
                          }}
                        >
                          <MenuItem value="all">
                            <Typography component="span" sx={{ color: '#bababa', fontWeight: '300' }}>All Services</Typography>
                          </MenuItem>
                          {SERVICES_ID_SELECT.map(serv => (
                            <MenuItem key={serv.id} value={serv.value}>{serv.label}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {/* <FormControl sx={{ width: { xs: '100%', sm: '300px' }, textAlign: 'left', marginRight: { xs: '0', sm: '16px' }, marginTop: { xs: '16px', sm: '0' }, }}>
                        <Select
                          labelId="category-select-label"
                          id="category-select"
                          value={pageInfo.category}
                          displayEmpty
                          onChange={handleCategoryChange}
                          sx={{
                            boxShadow: trigger ? '0 0 2px 0 rgba(0, 0, 0, 0.2), 0 12px 24px -4px rgba(0, 0, 0, 0.2)' : '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
                            borderRadius: '8px',
                            backgroundColor: '#FFF',
                            '.MuiOutlinedInput-notchedOutline': {
                              border: '0 !important',
                              borderRadius: '8px',
                            },
                            '.Mui-focused': {
                              border: '0 !important',
                              '&.MuiOutlinedInput-notchedOutline': {
                                border: '0 !important',
                              },
                            }
                          }}
                        >
                          <MenuItem value="all">
                            <Typography component="span" sx={{ color: '#bababa', fontWeight: '300' }}>All Categories</Typography>
                          </MenuItem>
                          {CATEGORIES_SELECT.map(c => (
                            <MenuItem key={c.id} value={c.value}>{c.label}</MenuItem>
                          ))}
                        </Select>
                      </FormControl> */}
                      <SearchInput
                        variant="filled"
                        placeholder="Search"
                        value={pageInfo.search}
                        onChange={handleSearchChange}
                        sx={{
                          marginTop: { xs: '16px', sm: '0' },
                          '& input': {
                            borderRadius: '8px',
                            padding: '16.5px 14px',
                            boxShadow: trigger ? '0 0 2px 0 rgba(0, 0, 0, 0.2), 0 12px 24px -4px rgba(0, 0, 0, 0.2)' : '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
                          },
                          width: { xs: '100%', sm: '80%' }
                        }}
                      />
                    </Box>
                  </ContentContainer>
                </StyledTh>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Grid container>
                    {projects.length === 0 && !loading && (
                      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: 200 }}>
                        <span style={{ fontStyle: 'italic' }}>No data to display</span>
                      </Box>
                    )}
                    {projects.map(project => (
                      <Grid key={project.id} item xs={12} sm={6} md={4} lg={3}>
                        <StyledBox onClick={() => handleOpenProjectDetails(project)}>
                          <Box sx={{
                            height: '150px',
                            position: 'relative',
                          }}>
                            <Image
                              alt={project.name}
                              src={project.fileNames?.[0] ? `/static/images/projects/${project.fileNames?.[0]}` : '/static/images/cec-no-image.jpg'}
                              fill
                              sizes="80vw"
                              style={{ objectFit: 'cover' }}
                              placeholder="blur"
                              blurDataURL="/static/images/cec-no-image.jpg"
                            />
                          </Box>
                          <Box sx={{ textAlign: 'left' }}>
                            <Box sx={{ p: '16px', display: 'flex', flex: 3, flexDirection: 'column', height: { xs: '100px', sm: '110px' } }}>
                              <Typography component="span" sx={{ color: '#637381', fontSize: '0.875rem', fontWeight: '400' }}>
                                {project.city || '-'}
                              </Typography>
                              <Typography component="span" sx={{ fontWeight: '600', fontSize: '1rem' }}>
                                {project.name}
                              </Typography>
                            </Box>
                            <Divider sx={{ borderStyle:'dashed' }} />
                            <Box sx={{ p: '16px', display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                              <Typography component="span" sx={{ fontSize: '0.9rem' }}>
                                {project.status ? project.status : 'Completed'}
                              </Typography>
                              {/* <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                {project.services.map(serv => {
                                  return (
                                    <Tooltip key={serv.id} title={serv.label} placement="top">
                                      {SERVICES_ICONS[serv.id]}
                                    </Tooltip>
                                  )
                                })}
                              </Box> */}
                            </Box>
                          </Box>
                        </StyledBox>
                      </Grid>
                    ))}
                    {loading && [1,2,3,4].map(i => (
                      <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                        <Box sx={{ p: '16px' }}>
                          <Skeleton variant="rounded" height="317px" />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <DefaultButton
                    onClick={handleLoadMore}
                    sx={{
                      alignSelf: 'center',
                      m: '32px 0 0 0',
                      display: projects.length < pageInfo.total ? 'inline-flex' : 'none'
                    }}
                  >
                    Load more
                  </DefaultButton>
                </td>
              </tr>
            </tbody>
          </table>
        </ContentContainer>
        <Dialog
          fullWidth
          maxWidth="xl"
          open={open}
          onClose={() => setOpen(false)}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ minWidth: '50%', backgroundColor: '#212B36' }}>
              {open && <Carousel max={(displayedProject && displayedProject.fileNames || []).length}>
                {(displayedProject && displayedProject.fileNames || []).map(i => (
                  <Box key={i} sx={{
                    height: '700px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <Image
                      alt={i}
                      src={i ? `/static/images/projects/${i}` : '/static/images/cec-no-image.jpg'}
                      fill
                      sizes="80vw"
                      style={{ objectFit: 'contain' }}
                      placeholder="blur"
                      blurDataURL="/static/images/cec-no-image.jpg"
                    />
                  </Box>
                ))}
              </Carousel>}
            </Box>
            <DialogContent sx={{ maxHeight: '700px' }}>
              <DialogContentText>
                <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography component="span" sx={{ fontWeight: '600', fontSize: '1.1rem', color: '#212B36' }}>
                      {displayedProject?.name}
                    </Typography>
                    <Typography component="span" sx={{ color: '#637381', fontSize: '0.875rem', fontWeight: '400', mt: '4px' }}>
                      {displayedProject?.location || '-'}
                    </Typography>
                  </Box>
                  <IconButton sx={{ height: '40px', width: '40px', position: 'absolute', top: -10, right: -12 }} onClick={() => setOpen(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <br/><Divider /><br/>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  {displayedProject?.clientImg && <Box
                    sx={{
                      height: '75px',
                      width: '75px',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
                      borderRadius: '4px',
                      mr: '16px',
                    }}
                  >
                    <Image
                      alt={displayedProject?.client || '-'}
                      src={`/static/images/clients/${displayedProject?.clientImg}`}
                      fill
                      sizes="80vw"
                      style={{ objectFit: 'contain' }}
                      placeholder="blur"
                      blurDataURL="/static/images/cec-no-image.jpg"
                    />
                  </Box>}
                  <Box>
                    <Typography component="span" sx={{ color: '#212B36', fontSize: '1rem', fontWeight: '500' }}>
                      {displayedProject?.client || '-'}
                    </Typography><br/>
                    <Typography component="span" sx={{ color: '#637381', fontSize: '0.875rem', fontWeight: '400' }}>
                      {displayedProject?.startDate || ''} - {displayedProject?.endDate || ''}
                    </Typography>
                  </Box>
                </Box>
                <br/>
                <Typography component="span" sx={{ mt: '8px', color: '#212B36', fontSize: '1rem', fontWeight: '500' }}>
                  Scope:
                </Typography><br/>
                <Box sx={{ p: '12px 42px' }}>
                  <Grid container>
                    {(displayedProject?.scope || []).map(s => (
                      <Grid item xs={6} key={s.id}>
                        <Typography component="span" sx={{ m: '2px 12px', color: '#212B36', fontSize: '0.95rem', display: 'list-item', fontWeight: '300' }}>
                          {s.label}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box><br/><br/>
                {displayedProject?.scopeDescription && (
                  <Fragment>
                    <Typography component="span" sx={{ mt: '8px', color: '#212B36', fontSize: '1rem', fontWeight: '500' }}>
                      Description:
                    </Typography><br/>
                    <Typography component="span" sx={{ m: '2px 12px', color: '#212B36', fontSize: '0.95rem', fontWeight: '300', margin: '8px 0 0 0', whiteSpace: 'pre-line' }}>
                      {displayedProject?.scopeDescription || ''}
                    </Typography>
                  </Fragment>
                )}

                {/* <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mt: '16px' }}>
                  {(displayedProject?.services || []).map(serv => {
                    return (
                      <Chip
                        key={serv.id}
                        icon={SERVICES_ICONS[serv.id]}
                        label={serv.label}
                        variant="outlined"
                        sx={{ p: '16px 8px', m: '0 4px' }}
                      />
                    )
                  })}
                </Box> */}
              </DialogContentText>
            </DialogContent>
          </Box>
        </Dialog>
        <SwipeableDrawer
          anchor="bottom"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          onOpen={() => setOpenDrawer(true)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
        >
          <Box sx={{ backgroundColor: '#212B36', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ height: '6px', width: '50px', backgroundColor: '#637381', borderRadius: '16px' }}></div>
          </Box>
          <Box sx={{ backgroundColor: '#212B36', width: '100%' }}>
            {openDrawer && <Carousel max={(displayedProject && displayedProject.fileNames || []).length} iconSize="3.5rem">
              {(displayedProject && displayedProject.fileNames || []).map(i => (
                <Box
                  key={i}
                  sx={{
                    height: '300px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    alt={i}
                    src={i ? `/static/images/projects/${i}` : '/static/images/cec-no-image.jpg'}
                    fill
                    sizes="80vw"
                    style={{ objectFit: 'contain' }}
                    placeholder="blur"
                    blurDataURL="/static/images/cec-no-image.jpg"
                  />
                </Box>
              ))}
            </Carousel>}
          </Box>
          <Box sx={{ padding: '12px 16px', mb: '16px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography component="span" sx={{ fontWeight: '600', fontSize: '1rem', color: '#212B36' }}>
                  {displayedProject?.name}
                </Typography>
                <Typography component="span" sx={{ color: '#637381', fontSize: '0.8rem', fontWeight: '400', mt: '4px' }}>
                  {displayedProject?.location || '-'}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ margin: '12px 0' }} />
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: '8px' }}>
              {displayedProject?.clientImg && <Box
                sx={{
                  height: '60px',
                  width: '60px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
                  borderRadius: '4px',
                  mr: '16px',
                }}
              >
                <Image
                  alt={displayedProject?.client || '-'}
                  src={`/static/images/clients/${displayedProject?.clientImg}`}
                  fill
                  sizes="80vw"
                  style={{ objectFit: 'contain' }}
                  placeholder="blur"
                  blurDataURL="/static/images/cec-no-image.jpg"
                />
              </Box>}
              <Box>
                <Typography component="span" sx={{ color: '#212B36', fontSize: '0.8rem', fontWeight: '500' }}>
                  {displayedProject?.client || '-'}
                </Typography><br/>
                <Typography component="span" sx={{ color: '#637381', fontSize: '0.7rem', fontWeight: '400' }}>
                  {displayedProject?.startDate || ''} - {displayedProject?.endDate || ''}
                </Typography>
              </Box>
            </Box>
            <Typography component="span" sx={{ color: '#212B36', fontSize: '0.875rem', fontWeight: '500' }}>
              Scope:
            </Typography><br/>
            <Box sx={{ p: '8px 12px', mb: '8px' }}>
              <Grid container>
                {(displayedProject?.scope || []).map(s => (
                  <Grid item xs={6} key={s.id}>
                    <Typography component="span" sx={{ m: '2px 12px', color: '#212B36', fontSize: '0.8rem', display: 'list-item', fontWeight: '300' }}>
                      {s.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box><br/><br/>
            {displayedProject?.scopeDescription && (
              <Fragment>
                <Typography component="span" sx={{ mt: '8px', color: '#212B36', fontSize: '1rem', fontWeight: '500' }}>
                  Description:
                </Typography><br/>
                <Typography component="span" sx={{ m: '2px 12px', color: '#212B36', fontSize: '0.95rem', fontWeight: '300', margin: '8px 0 0 0', whiteSpace: 'pre-line' }}>
                  {displayedProject?.scopeDescription || ''}
                </Typography>
              </Fragment>
            )}
            {/* <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', mt: '16px' }}>
              {(displayedProject?.services || []).map(serv => {
                return (
                  <Chip
                    key={serv.id}
                    icon={SERVICES_ICONS[serv.id]}
                    label={serv.label}
                    variant="outlined"
                    sx={{ p: '8px 4px', m: '0 4px' }}
                  />
                )
              })}
            </Box> */}
          </Box>
        </SwipeableDrawer>

        <Button
          variant="contained"
          size="large"
          sx={{
            display: scrollToTopTrigger ? 'inline-flex' : 'none',
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

export default withRouter(Projects)
