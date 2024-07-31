import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import {
  styled,
  Box,
  Typography,
  Grid,
  Pagination,
  MenuItem,
  FormControl,
  SwipeableDrawer,
  Dialog,
  DialogContent,
  DialogContentText,
  IconButton,
  Button,
  CircularProgress,
} from '@mui/material'
import parse from 'html-react-parser'
import Link from 'next/link'
import useDownloader from 'react-use-downloader'

import Select, { SelectChangeEvent } from '@mui/material/Select';

import ContentBanner from '@/components/banner/ContentBanner'
import { Row, ContentContainer, StyledInput, DefaultButton } from '@/components/common'

// import project15 from '../../public/static/images/projects/p-15-banban-small.jpg'
// import project9 from '../../public/static/images/projects/p-9-matahimik-5-small.jpg'
// import projectWarehouse from '../../public/static/images/projects/p-warehouse.jpg'

import structuralRetrofitting from '../../public/static/images/services/structural-retrofitting.jpg'
import structuralRetrofitting2 from '../../public/static/images/services/structural-retrofitting-2.jpg'
import structuralRetrofitting3 from '../../public/static/images/services/structural-retrofitting-3.jpg'
import pileDriving from '../../public/static/images/services/pile-driving.jpg'
import boredPiling from '../../public/static/images/services/bored-piling.jpg'
import sheetPiling from '../../public/static/images/services/sheet-piling.jpg'
import roads from '../../public/static/images/services/roads-site-dev.jpg'
import excavation from '../../public/static/images/services/general-excavation-dewatering.jpg'
import designAndBuild from '../../public/static/images/services/structural-design-build.jpg'
import generalConstruction from '../../public/static/images/services/general-construction.jpg'
import lightweightConcrete from '../../public/static/images/services/lighweight-concrete-topping.jpg'
import structuralSteel from '../../public/static/images/services/structural-steel.jpg'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import EmailIcon from '@mui/icons-material/EmailRounded'
import CallIcon from '@mui/icons-material/CallRounded'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded'
import ApartmentIcon from '@mui/icons-material/Apartment'
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined'
import CarRepairOutlinedIcon from '@mui/icons-material/CarRepairOutlined'

import { EquipmentDetails, EquipmentsResponseData } from '@/data/types'
import Spinner from '@/components/common/Spinner'
import { EQUIPMENT_CATEGORIES_SELECT } from '@/data/constants'
import { useDebounce } from '@/utils/hooks/debounce'
import { getDeviceWidth } from '@/utils'
import Image from 'next/image';

const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)

const ProjectWrapper = styled(Box)({
  borderRadius: '6px',
  display: 'flex',
  height: '250px',
  alignItems: 'end',
  width: '100%',
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
const StyledUl = styled('ul')({
  textAlign: 'left',
  color: '#637381',
})
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

const Services = () => {
  // TODO: add table loading, add filter and search function
  const [equipments, setEquipments] = useState<EquipmentsResponseData>([])
  const [loading, setLoading] = useState(false)
  const [pageInfo, setPageInfo] = useState({ total: 0, page: 1, size: 12, search: '', category: 'all' })

  const handleCategoryChange = (event: SelectChangeEvent) => {
    const newPageInfo = {
      ...pageInfo,
      page: 1,
      category: event.target.value as string,
    }
    setPageInfo(newPageInfo)
    fetchEquipments(newPageInfo)
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
  const debounced = useDebounce((pInfo) => fetchEquipments(pInfo))

  const fetchEquipments = async ({ page, size, search, category }: { page: number, size: number, search: string, category: string }) => {
    const params = {
      page,
      size,
      search,
      category,
    }
    setLoading(true)
    const response = await fetch(`/api/equipments`, { method: 'POST', body: JSON.stringify(params) })
    const data = await response.json()

    setPageInfo({
      page,
      size,
      search,
      category,
      total: Math.ceil(data.total / size)
    })
    setEquipments(data.list)
    setLoading(false)
  }

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    if (loading || pageInfo.page === page) {
      return
    }

    const newPageInfo = {
      ...pageInfo,
      page,
    }

    setPageInfo(newPageInfo)
    fetchEquipments(newPageInfo)
  }

  useEffect(() => {
    fetchEquipments(pageInfo)
  }, [])

  const [displayedEquipment, setDisplayedEquipment] = useState<EquipmentDetails>()
  const [open, setOpen] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleOpenEquipmentDetails = (equipment: any) => {
    setDisplayedEquipment(equipment)

    if (getDeviceWidth() > 500) {
      setOpen(true)
    } else {
      setOpenDrawer(true)
    }
  }

  const handleCloseDetailsModal = () => {
    setDisplayedEquipment(undefined)
    setOpen(false)
  }
  const handleCloseDetailsDrawer = () => {
    setDisplayedEquipment(undefined)
    setOpenDrawer(false)
  }

  const { size, elapsed, percentage, download,  cancel, error, isInProgress } =  useDownloader()
  const fileUrl = "/static/files/CEC-Heavy-Equipments-Brochure.pdf"
  const filename = "CEC-Heavy-Equipments-Brochure.pdf"

  const basicServices = [
    { id: 12, name: 'Structural Retrofitting', image: structuralRetrofitting3 },
    { id: 1, name: 'Structural Retrofitting', image: structuralRetrofitting },
    { id: 11, name: 'Structural Retrofitting', image: structuralRetrofitting2 },
    { id: 2, name: 'Pile Driving', image: pileDriving },
    { id: 3, name: 'Sheet Piling', image: sheetPiling },
    { id: 4, name: 'Roads and Site Development', image: roads },
    { id: 5, name: 'Bored Piling', image: boredPiling },
    { id: 6, name: 'General Excavation and Dewatering', image: excavation },
    { id: 7, name: 'Structural Design and Build', image: designAndBuild },
    { id: 8, name: 'General Construction', image: generalConstruction },
    { id: 9, name: 'Lightweight Concrete Topping', image: lightweightConcrete },
    { id: 10, name: 'Structural Steel', image: structuralSteel },
  ]

  return (
    <Fragment>
      <Head>
        <title>What we do best - CEC Construction Corporation</title>
      </Head>

      <Box sx={{ backgroundColor: '#F8F9F9', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ContentBanner subTitle="Technical Capabilities" title="What We Do Best" />

        <ContentContainer sx={{ paddingTop: '48px !important', paddingBottom: '0 !important' }}>
          <Typography component="span" sx={{ textAlign: 'left', color: '#637381', fontWeight: 400, fontSize: { xs: '16px', sm: '18px' } }}>
            We specialized in <b>Design and Rehabilitation / Retrofitting and Construction of Reinforced Concrete and Steel Structures</b> such as:
          </Typography>
          <StyledUl sx={{ textAlign: 'left', color: '#637381', fontSize: { xs: '16px', sm: '18px' } }}>
            <li>Buildings</li>
            <li>Roads, Overpasses, and Bridges</li>
            <li>Warehouses and Industrial Plants</li>
          </StyledUl>

          <Typography component="span" sx={{ textAlign: 'left',color: '#637381', fontWeight: 400, fontSize: { xs: '16px', sm: '18px' } }}>
            We are proficient in the following fields of <b style={{ whiteSpace: 'nowrap' }}>Structural Engineering:</b>
          </Typography>
          <StyledUl sx={{ textAlign: 'left', color: '#637381', fontSize: { xs: '16px', sm: '18px' }, mb: '48px' }}>
            <li>Structural Retrofitting</li>
            <li>Pile Driving</li>
            <li>Sheet Piling</li>
            <li>Roads and Site Development</li>
            <li>Bored Piling</li>
            <li>General Excavation and Dewatering</li>
            <li>Structural Design and Build</li>
            <li>General Construction</li>
            <li>Lightweight Concrete Topping</li>
            <li>Structural Steel</li>
            {/* <li>Construction of Roads</li> */}
            {/* <li>Design and Construction of Conventional Buildings</li>
            <li>Design and Construction of Industrial Buildings</li>
            <li>Design and Construction of Warehouses</li>
            <li>Design and Construction of Foot Bridges</li>
            <li>Design of Steel Towers</li>
            <li>Design of Foundations</li>
            <li>Seismic Retrofitting</li>
            <li>Design of Pre-Cast Components including Slabs, Beams, and Claddings</li>
            <li>Fire Protection and Sanitary Works</li>
            <li>Steel Fabrications</li> */}
          </StyledUl>

          {/* <Typography component="span" sx={{ textAlign: 'left', color: '#637381', fontWeight: 400, fontSize: { xs: '16px', sm: '18px' } }}>
            And other services such as:
          </Typography>
          <StyledUl sx={{ textAlign: 'left', color: '#637381', fontSize: { xs: '16px', sm: '18px' } }}>
            <li>Structural steel and concrete repair and rehabilitation industry using various systems such as metal sheets jacketing</li>
            <li>Carbon and glass fiber composite materials</li>
            <li>Structural epoxies</li>
            <li>Epoxy injection materials and all kind of waterproofing paintings system materials</li>
          </StyledUl> */}

          <Grid container spacing={4} sx={{ mb: '48px' }} justifyContent="center">
            {basicServices.map(serv => (
              <Grid item xs={12} sm={4} key={serv.id}>
                <ProjectWrapper sx={{
                  backgroundImage: `url(${serv.image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 50%',
                  backgroundRepeat: 'no-repeat'
                }}>
                  <ProjectWrapper sx={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
                    boxShadow: '0 0 2px 0 rgb(145 158 171 / 30%), 0 12px 24px -4px rgb(145 158 171 / 20%)',
                  }}>
                    <Row sx={{ p: '16px', borderRadius: '0 0 4px 4px' }}>
                      {/* <ApartmentIcon sx={{ color: '#FFF', mr: '8px', fontSize: '1.8rem' }} /> */}
                      <Typography sx={{ color: '#FFF', fontWeight: '600', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                        {serv.name}
                      </Typography>
                    </Row>
                  </ProjectWrapper>
                </ProjectWrapper>
              </Grid>
            ))}

            {/* <Grid item xs={12} sm={4}>
              <ProjectWrapper sx={{
                backgroundImage: `url(${project15.src})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat'
              }}>
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
            </Grid>
            <Grid item xs={12} sm={4}>
              <ProjectWrapper sx={{
                backgroundImage: `url(${projectWarehouse.src})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat'
              }}>
                <ProjectWrapper sx={{
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)',
                  boxShadow: '0 0 2px 0 rgb(145 158 171 / 30%), 0 12px 24px -4px rgb(145 158 171 / 20%)',
                }}>
                  <Row sx={{ p: '16px', borderRadius: '0 0 4px 4px' }}>
                    <WarehouseOutlinedIcon sx={{ color: '#FFF', mr: '8px', fontSize: '1.8rem' }} />
                    <Typography sx={{ color: '#FFF', fontWeight: '600' }}>
                      Warehouses and Industrial Plants
                    </Typography>
                  </Row>
                </ProjectWrapper>
              </ProjectWrapper>
            </Grid> */}
          </Grid>
        </ContentContainer>

        <ContentBanner imageSrc='url("/static/images/equipments.jpg")' subTitle="Services" title="Equipment Rental" />
        <ContentContainer sx={{ paddingTop: '48px !important', paddingBottom: '0 !important' }}>
          <Box sx={{ display: { xs: 'block', sm: 'flex' } }}>
            <FormControl sx={{ width: '210px', textAlign: 'left', marginRight: { xs: '0', sm: '16px' } }}>
              <Select
                labelId="equipment-category-select-label"
                id="equipment-category-select"
                value={pageInfo.category}
                onChange={handleCategoryChange}
                sx={{
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
                <MenuItem value="all">All</MenuItem>
                {EQUIPMENT_CATEGORIES_SELECT.map(cat => (
                  <MenuItem key={cat.id} value={cat.label}>{cat.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <SearchInput
              variant="filled"
              placeholder="Search"
              onChange={handleSearchChange}
              sx={{
                marginTop: { xs: '16px', sm: '0' },
                '& input': {
                  padding: '16.5px 14px',
                },
              }}
            />
            <DefaultButton sx={{ width: 'auto', height: '56px', ml: 'auto', mb: { xs: '30px', sm: 0 } }} onClick={() => download(fileUrl, filename)}>
              {isInProgress ? <CircularProgress /> : <Fragment><DownloadRoundedIcon sx={{ mr: '12px' }} /> Download Equipment Brochure</Fragment>}
            </DefaultButton>
          </Box>
        </ContentContainer>
        <ContentContainer sx={{ paddingTop: '8px !important' }}>
          <Box sx={{ position: 'relative', minHeight: '300px' }}>
            {loading &&
              <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}>
                <Spinner />
              </Box>
            }
            {/* Table Mobile View */}
            <Grid container direction="row"
              sx={{
                textAlign: 'left',
                fontSize: '1rem',
                fontWeight: 600,
                pb: '16px',
                pl: '8px',
                borderBottom: '1px solid gray',
                display: { xs: 'flex', md: 'none' },
                color: '#212B36',
              }}
            >
              {/* <Grid item xs={1} sx={{ minWidth: '75px' }}>Units</Grid> */}
              <Grid item xs>Name</Grid>
              <Grid item xs={2} sx={{ minWidth: '105px' }}>Capacity</Grid>
            </Grid>
            {/* Table Desktop View */}
            <Grid container direction="row"
              sx={{
                textAlign: 'left',
                fontSize: '1rem',
                fontWeight: 600,
                pb: '16px',
                pl: '8px',
                borderBottom: '1px solid gray',
                display: { xs: 'none', md: 'flex' },
                color: '#212B36',
              }}
            >
              <Grid item xs={2}>Category</Grid>
              <Grid item xs={1} sx={{ minWidth: '85px' }}>Units</Grid>
              <Grid item xs>Name</Grid>
              <Grid item xs={2}>Capacity</Grid>
            </Grid>
            {!equipments.length && <Box sx={{ fontStyle: 'italic', color: '#637381', padding: '12px' }}>{loading ? 'Loading...' : 'No items'}</Box>}
            {equipments.map(equipment => (
              <Fragment key={equipment.id}>
                {/* Table Mobile View */}
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  sx={{
                    textAlign: 'left',
                    padding: '8px 0',
                    pl: '8px',
                    fontSize: '0.8rem',
                    display: { xs: 'flex', md: 'none' },
                    borderBottom: 'thin solid rgba(0, 0, 0, 0.12)',
                    color: '#637381',
                    cursor: equipment.fileName ? 'pointer' : 'default',
                  }}
                  onClick={() => handleOpenEquipmentDetails(equipment)}
                >
                  {/* <Grid item xs={1} sx={{ minWidth: '75px' }}>{equipment.units} {equipment.unitLabel ? equipment.unitLabel : `unit${equipment.units > 1 ? 's' : ''}`}</Grid> */}
                  <Grid item xs sx={{ paddingRight: '24px' }}>{equipment.name}</Grid>
                  <Grid item xs={2} sx={{ minWidth: '105px' }}>{parse(equipment.capacity || '')}</Grid>
                </Grid>
                {/* Table Desktop View */}
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  sx={{
                    textAlign: 'left',
                    padding: '12px 0',
                    pl: '8px',
                    display: { xs: 'none', md: 'flex' },
                    borderBottom: 'thin solid rgba(0, 0, 0, 0.12)',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                    color: '#637381',
                    cursor: equipment.fileName ? 'pointer' : 'default',
                  }}
                  onClick={() => handleOpenEquipmentDetails(equipment)}
                >
                  <Grid item xs={2}>{equipment.category}</Grid>
                  <Grid item xs={1} sx={{ minWidth: '85px' }}>{equipment.units} {equipment.unitLabel ? equipment.unitLabel : `unit${equipment.units > 1 ? 's' : ''}`}</Grid>
                  <Grid item xs>{equipment.name}</Grid>
                  <Grid item xs={2}>{parse(equipment.capacity || '')}</Grid>
                </Grid>
              </Fragment>
            ))}
          </Box>
          <Pagination count={pageInfo.total || 1} page={pageInfo.page} shape="rounded" sx={{ mt: '24px', alignSelf: 'center' }} onChange={handlePageChange} />

          <Box sx={{ marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component="span" sx={{ textAlign: 'center',color: '#637381', fontWeight: 400, fontSize: { xs: '16px', sm: '18px' } }}>
              For any equipment or rental inquiries, please contact us through the following channels:
            </Typography>

            <Box sx={{ mb: '48px' }}>
              <Row sx={{ marginTop: '16px' }}>
                <CallIcon sx={{ color: '#212B36', mr: '16px' }} />
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
                  <a href="mailto:caracena_structural@yahoo.com">caracena_structural@yahoo.com</a>
                </StyledTypography>
              </Row>
              <Row sx={{ marginTop: '4px', ml: '40px' }}>
                <StyledTypography>
                  <a href="mailto:info@cec.com.ph">info@cec.com.ph</a>
                </StyledTypography>
              </Row>
            </Box>
            <Typography component="span" sx={{ textAlign: 'center',color: '#637381', fontWeight: 400, fontSize: '14px' }}>
              Visit our <Link href="/contact">Contact Page</Link> for more details.<br/>You can also leave a message for us down below!
            </Typography>
          </Box>
        </ContentContainer>
      </Box>

      <Dialog
        fullWidth
        // maxWidth="md"
        open={open}
        onClose={handleCloseDetailsModal}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <DialogContent sx={{ maxHeight: '700px' }}>
            <DialogContentText>
              <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography component="span" sx={{ color: '#637381', fontSize: '0.875rem', fontWeight: '400', mt: '4px' }}>
                    {displayedEquipment?.category}
                  </Typography>
                  <Typography component="span" sx={{ fontWeight: '600', fontSize: '1.1rem', color: '#212B36' }}>
                    {displayedEquipment?.name}
                  </Typography>
                  <Typography component="span" sx={{ color: '#212B36', fontSize: '1rem', fontWeight: '400', mt: '4px' }}>
                    {displayedEquipment?.capacity ? `Capacity: ${displayedEquipment.capacity}` : ' '}
                  </Typography>
                </Box>
                <IconButton sx={{ height: '40px', width: '40px', position: 'absolute', top: -10, right: -12 }} onClick={handleCloseDetailsModal}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>
            </DialogContentText>
          </DialogContent>
          {/* <Box sx={{ backgroundColor: '#212B36' }}> */}
          <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            <Box
              sx={{
                height: '500px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {displayedEquipment && 
                <Image
                  alt={displayedEquipment.name}
                  src={displayedEquipment.fileName ? `/static/images/equipments/${displayedEquipment.fileName}` : '/static/images/cec-no-image.jpg'}
                  fill
                  sizes="80vw"
                  style={{ objectFit: 'contain' }}
                  placeholder="blur"
                  blurDataURL="/static/images/cec-no-image.jpg"
                />
              }
            </Box>
          </Box>
        </Box>
      </Dialog>

      <SwipeableDrawer
        anchor="bottom"
        open={openDrawer}
        onClose={handleCloseDetailsDrawer}
        onOpen={() => setOpenDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <DialogContent sx={{ maxHeight: '700px' }}>
            <DialogContentText>
              <Box sx={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography component="span" sx={{ color: '#637381', fontSize: '0.875rem', fontWeight: '400', mt: '4px' }}>
                    {displayedEquipment?.category}
                  </Typography>
                  <Typography component="span" sx={{ fontWeight: '600', fontSize: '1.1rem', color: '#212B36' }}>
                    {displayedEquipment?.name}
                  </Typography>
                  <Typography component="span" sx={{ color: '#212B36', fontSize: '1rem', fontWeight: '400', mt: '4px' }}>
                    {displayedEquipment?.capacity ? `Capacity: ${displayedEquipment.capacity}` : ' '}
                  </Typography>
                </Box>
                <IconButton sx={{ height: '40px', width: '40px', position: 'absolute', top: -10, right: -12 }} onClick={handleCloseDetailsDrawer}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>
            </DialogContentText>
          </DialogContent>
          {/* <Box sx={{ backgroundColor: '#212B36' }}> */}
          <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            <Box
              sx={{
                height: '500px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {displayedEquipment && 
                <Image
                  alt={displayedEquipment.name}
                  src={displayedEquipment.fileName ? `/static/images/equipments/${displayedEquipment.fileName}` : '/static/images/cec-no-image.jpg'}
                  fill
                  sizes="80vw"
                  style={{ objectFit: 'contain' }}
                  placeholder="blur"
                  blurDataURL="/static/images/cec-no-image.jpg"
                />
              }
            </Box>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Fragment>
  )
}

export default Services
