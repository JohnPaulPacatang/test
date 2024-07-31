import React, { useState, useEffect } from 'react'
import { styled, Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'

import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded'

import { Row, StyledInput, DefaultButton } from '../common'

const ContentBannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  backgroundColor: '#212B36',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
  justifyContent: 'center',
}))
const Banner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  backgroundImage: 'url("/static/images/quote.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 50%',
  backgroundSize: 'cover',
  [theme.breakpoints.down('sm')]: {
    backgroundImage: 'none',
  },
}))
const GradientWrapper = styled(Box)(({ theme }) => ({
  height: '500px',
  [theme.breakpoints.down('sm')]: {
    height: '300px',
  },
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(to right, rgba(33,43,54,1) 0%, rgba(33,43,54,0.85) 30%, rgba(33,43,54,0.85) 70%, rgba(33,43,54,1) 100%)',
  padding: '0 24px',
}))
const QuoteInput = styled(StyledInput)({
  color: '#FFF',
  width: '80%',
  maxWidth: '500px',
  marginBottom: '20px',
})
const StyledTypography = styled(Typography)({
  '& a': {
    textDecoration: 'none',
    color: '#FFF',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

const QuoteBanner = () => {
  const [formValues, setFormValues] = useState({ Name: '', Contact: '', Message: '' })
  const [formErrors, setFormErrors] = useState({ Name: '', Contact: '', Message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [open, setOpen] = useState(false)

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: 'Name' | 'Contact' | 'Message') => {
    setFormValues({ ...formValues, [field]: e.target.value })
  }

  const validate = () => {
    let errors = 0
    if (!formValues.Name) {
      setFormErrors((prevState) => ({ ...prevState, Name: 'Name is required' }))
      errors++
    } else {
      setFormErrors((prevState) => ({ ...prevState, Name: '' }))
      if (errors > 0) errors--
    }
    if (!formValues.Contact) {
      setFormErrors((prevState) => ({ ...prevState, Contact: 'Contact is required' }))
      errors++
    } else {
      setFormErrors((prevState) => ({ ...prevState, Contact: '' }))
      if (errors > 0) errors--
    }
    if (!formValues.Message) {
      setFormErrors((prevState) => ({ ...prevState, Message: 'Message is required' }))
      errors++
    } else {
      setFormErrors((prevState) => ({ ...prevState, Message: '' }))
      if (errors > 0) errors--
    }

    if (formValues.Contact.includes('@')) {
      if (!new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(formValues.Contact)) {
        setFormErrors((prevState) => ({ ...prevState, Contact: 'Please enter a valid email' }))
        errors++
      } else {
        setFormErrors((prevState) => ({ ...prevState, Contact: '' }))
        if (errors > 0) errors--
      }
    } else {
      if (!new RegExp(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/).test(formValues.Contact)) {
        setFormErrors((prevState) => ({ ...prevState, Contact: 'Please enter a valid contact number or email' }))
        errors++
      } else {
        setFormErrors((prevState) => ({ ...prevState, Contact: '' }))
        if (errors > 0) errors--
      }
    }

    return !!!errors
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    setLoading(true)
    const isValid = validate()
    if (!isValid) {
      setLoading(false)
      return
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true)
        setOpen(true)
        setFormValues({ Name: '', Contact: '', Message: '' })
      }
      setLoading(false)
    })
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [submitted])

  const dynamicRoute = useRouter().asPath
  useEffect(() => {
    setFormValues({ Name: '', Contact: '', Message: '' })
    setFormErrors({ Name: '', Contact: '', Message: '' })
    setLoading(false)
    setSubmitted(false)
    setOpen(false)
  }, [dynamicRoute])

  return (
    <ContentBannerContainer>
      <Banner sx={{ maxWidth: '800px' }}>
        <GradientWrapper>
          <Box sx={{ p: { xs: '0', md: '0 120px 0 80px' } }}>
            <Typography variant="h3" sx={{ color: '#fb741c', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Let&apos;s talk!
            </Typography>
            <Typography component="span" sx={{ color: '#FFF', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Tell us about your project, ask us about our services or equipments, or just say hello!
            </Typography>
            <Row sx={{ marginTop: '32px' }}>
              <EmailIcon sx={{ color: '#FFF', mr: '12px' }} />
              <StyledTypography sx={{ color: '#FFF', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <a href="mailto:info@cec.com.ph">info@cec.com.ph</a>
              </StyledTypography>
            </Row>
            <Row sx={{ marginTop: '16px' }}>
              <LocationOnIcon sx={{ color: '#FFF', mr: '12px' }} />
              <StyledTypography sx={{ color: '#FFF', lineHeight: '20px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <a href="https://www.google.com/maps/place/CEC+Construction+Corporation/@14.558428,121.081566,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c7b5879b4a67:0xd4c9542230b6a9db!8m2!3d14.558428!4d121.081566!16s%2Fg%2F11kpf4qwp4?hl=en-US" target='_blank'>
                  Unit S-6 & S-7 2F, Armal Center,<br /> Caruncho Ave., Malinao, Pasig City
                </a>
              </StyledTypography>
            </Row>
          </Box>
        </GradientWrapper>
      </Banner>
      <Box sx={{ maxWidth: '600px', display: 'flex', flex: 1, alignItems: { xs: 'center', sm: 'start'}, justifyContent: 'center', flexDirection: 'column' }}>
        <QuoteInput
          variant="filled"
          label="Name"
          onChange={(e) => handleChangeInput(e, 'Name')}
          error={!!formErrors.Name}
          helperText={formErrors.Name}
          value={formValues.Name}
        />
        <QuoteInput
          variant="filled"
          label="Contact number or Email"
          onChange={(e) => handleChangeInput(e, 'Contact')}
          error={!!formErrors.Contact}
          helperText={formErrors.Contact}
          value={formValues.Contact}
        />
        <QuoteInput
          multiline
          variant="filled"
          label="Message"
          onChange={(e) => handleChangeInput(e, 'Message')}
          error={!!formErrors.Message}
          helperText={formErrors.Message}
          value={formValues.Message}
        />
        <DefaultButton sx={{ mb: { xs: '30px', sm: 0 } }} onClick={handleSubmit}>
          {submitted ? <DoneOutlineRoundedIcon /> : loading ? <CircularProgress /> : 'Send Request'}
        </DefaultButton>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          Message sent!
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: '#000',
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          We have received your message and rest assured that we will get back to you as soon as possible!
        </DialogContent>
        <DialogActions>
          <DefaultButton autoFocus onClick={handleClose}>
            Got it!
          </DefaultButton>
        </DialogActions>
      </Dialog>
    </ContentBannerContainer>
  )
}

export default QuoteBanner
