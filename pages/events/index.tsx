import React, { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  styled,
  Box,
  Typography,
  Grid,
  Divider,
  Dialog,
  DialogContent,
  DialogContentText,
  Chip,
  SwipeableDrawer,
  IconButton,
} from '@mui/material'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import ContentBanner from '@/components/banner/ContentBanner'
import { Row, ContentContainer, Column, Title } from '@/components/common'
import { EventDetails, EventsResponseData } from '@/data/types'
import Carousel from '@/components/slider/Carousel'

import { getDeviceWidth } from '@/utils'

const Events = () => {
  const [events, setEvents] = useState<EventsResponseData>([])
  const [news, setNews] = useState<EventsResponseData>([])

  const fetchEvents = async () => {
    const response = await fetch('/api/events')
    const data = await response.json()

    setEvents(data)
  }
  const fetchNews = async () => {
    const response = await fetch('/api/news')
    const data = await response.json()

    setNews(data)
  }

  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [open, setOpen] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [displayedEvent, setDisplayedEvent] = useState<EventDetails>()
  const handleOpenEventDetails = (event: EventDetails) => {
    setImageIndex(0)
    setDisplayedEvent(event)

    if (getDeviceWidth() > 900) {
      setOpen(true)
    } else {
      setOpenDrawer(true)
    }
  }

  const handleChangeImageIndex = (index: number) => {
    setImageIndex(index)
  }

  useEffect(() => {
    fetchEvents()
    fetchNews()
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Events and Awards - CEC Construction Corporation</title>
      </Head>
      
      <Box sx={{ backgroundColor: '#F8F9F9', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ContentBanner imageSrc='url("/static/images/about-us.jpg")' subTitle="Events" title="Latest News" />

        <ContentContainer sx={{ pt: '56px !important', pb: '12px !important' }}>
          <Grid container spacing={4}>
            {news.map(newsEvent => (
              <Grid key={newsEvent.id} item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: '#FFF',
                    borderRadius: '16px',
                    padding: '12px',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#e8e8e8',
                    },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                  }}
                  onClick={() => handleOpenEventDetails(newsEvent)}
                >
                  <Box sx={{ minWidth: '250px', height: '350px', overflow: 'hidden', borderRadius: '12px', mr: { md: '16px', xs: 0 }, mb: { xs: '16px', md: 0 } }}>
                    <Image
                      alt={'-'}
                      src={`/static/images/events/${newsEvent.images[0].src}`}
                      width={250}
                      height={350}
                      sizes="50vh"
                      style={{ objectFit: 'cover' }}
                      placeholder="blur"
                      blurDataURL="/static/images/cec-no-image.jpg"
                    />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
                    <Typography component="span" sx={{ textAlign: { xs: 'center', md: 'left' }, fontWeight: '600', fontSize: '1.1rem', color: '#212B36' }}>
                      {newsEvent.title}
                    </Typography>
                    <Typography component="span" sx={{ textAlign: { xs: 'center', md: 'left' }, color: '#353f47', fontSize: '0.875rem', fontWeight: '400', mt: '8px' }}>
                      {newsEvent.date}
                    </Typography>
                    <Typography component="span" sx={{ textAlign: { xs: 'center', md: 'left' }, color: '#637381', fontSize: '0.75rem', fontWeight: '400', mt: '4px' }}>
                      {newsEvent.location}
                    </Typography>
                    <Typography component="span" sx={{ textAlign: { xs: 'center', md: 'left' }, color: '#353f47', fontSize: '0.875rem', fontWeight: '400', mt: '24px' }}>
                      {newsEvent.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </ContentContainer>

        <ContentBanner imageSrc='url("/static/images/mission.jpg")' subTitle="Events" title="Company Events" />
        <ContentContainer sx={{ paddingTop: '48px !important' }}>
          <Grid container spacing={4}>
            {events.map(event => (
              <Grid key={event.id} item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: '#FFF',
                    borderRadius: '16px',
                    padding: '12px',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#e8e8e8',
                    },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                  }}
                  onClick={() => handleOpenEventDetails(event)}
                >
                  <Box sx={{ minWidth: '250px', height: '250px', overflow: 'hidden', borderRadius: '12px', mr: { md: '16px', xs: 0 }, mb: { xs: '16px', md: 0 } }}>
                    <Image
                      alt={'-'}
                      src={`/static/images/events/${event.images[0].src}`}
                      width={250}
                      height={250}
                      sizes="50vh"
                      style={{ objectFit: 'cover' }}
                      placeholder="blur"
                      blurDataURL="/static/images/cec-no-image.jpg"
                    />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, pt: '8px' }}>
                    <Typography component="span" sx={{ fontWeight: '600', fontSize: '1.1rem', color: '#212B36' }}>
                      {event.title}
                    </Typography>
                    <Typography component="span" sx={{ color: '#353f47', fontSize: '0.875rem', fontWeight: '400', mt: '8px' }}>
                      {event.date}
                    </Typography>
                    <Typography component="span" sx={{ color: '#637381', fontSize: '0.75rem', fontWeight: '400', mt: '4px' }}>
                      {event.location}
                    </Typography>
                    <Typography component="span" sx={{ color: '#353f47', fontSize: '0.875rem', fontWeight: '400', mt: '24px', textAlign: 'left' }}>
                      {event.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </ContentContainer>
      </Box>

      <Dialog
        fullWidth
        maxWidth="xl"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ minWidth: '50%', backgroundColor: '#212B36' }}>
            {open && <Carousel onChangeIndex={handleChangeImageIndex} max={(displayedEvent && displayedEvent.images || []).length}>
              {(displayedEvent && displayedEvent.images || []).map(eventImage => (
                <Box key={eventImage.id} sx={{
                  height: '700px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <Image
                    alt={eventImage.description || ''}
                    src={eventImage.src ? `/static/images/events/${eventImage.src}` : '/static/images/cec-no-image.jpg'}
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
                    {displayedEvent?.title}
                  </Typography>
                  <Typography component="span" sx={{ color: '#353f47', fontSize: '0.875rem', fontWeight: '400', mt: '8px' }}>
                    {displayedEvent?.date || '-'}
                  </Typography>
                  <Typography component="span" sx={{ color: '#637381', fontSize: '0.75rem', fontWeight: '400', mt: '4px' }}>
                    {displayedEvent?.location || '-'}
                  </Typography>
                </Box>
                <IconButton sx={{ height: '40px', width: '40px', position: 'absolute', top: -10, right: -12 }} onClick={() => setOpen(false)}>
                  <CloseRoundedIcon />
                </IconButton>
              </Box>
              <br/><Divider /><br/>
              <br/>
              <Typography component="span" sx={{ mt: '8px', color: '#212B36', fontSize: '1rem', fontWeight: '500' }}>
                Description:
              </Typography><br/><br/>
              <Typography component="span" sx={{ m: '24px 12px', color: '#212B36', fontSize: '0.95rem', fontWeight: '300' }}>
                {displayedEvent?.images[imageIndex].description}
              </Typography>
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
          {openDrawer && <Carousel onChangeIndex={handleChangeImageIndex} max={(displayedEvent && displayedEvent.images || []).length}>
            {(displayedEvent && displayedEvent.images || []).map(eventImage => (
              <Box key={eventImage.id} sx={{
                height: '300px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <Image
                  alt={eventImage.description || ''}
                  src={eventImage.src ? `/static/images/events/${eventImage.src}` : '/static/images/cec-no-image.jpg'}
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
              <Typography component="span" sx={{ fontWeight: '600', fontSize: '1.1rem', color: '#212B36' }}>
                {displayedEvent?.title}
              </Typography>
              <Typography component="span" sx={{ color: '#353f47', fontSize: '0.875rem', fontWeight: '400', mt: '8px' }}>
                {displayedEvent?.date || '-'}
              </Typography>
              <Typography component="span" sx={{ color: '#637381', fontSize: '0.75rem', fontWeight: '400', mt: '4px' }}>
                {displayedEvent?.location || '-'}
              </Typography>
            </Box>
            <IconButton sx={{ height: '40px', width: '40px', position: 'absolute', top: -10, right: -12 }} onClick={() => setOpenDrawer(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <br/><Divider /><br/>
          <br/>
          <Box sx={{ height: '150px' }}>
            <Typography component="span" sx={{ mt: '8px', color: '#212B36', fontSize: '1rem', fontWeight: '500' }}>
              Description:
            </Typography><br/><br/>
            <Typography component="span" sx={{ m: '24px 12px', color: '#212B36', fontSize: '0.95rem', fontWeight: '300' }}>
              {displayedEvent?.images[imageIndex].description}
            </Typography>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Fragment>
  )
}

export default Events
