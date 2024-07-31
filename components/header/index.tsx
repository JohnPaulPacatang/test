import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AppBar, Box, Drawer, Toolbar, IconButton, Typography, useScrollTrigger } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import { Column, Row, Flex, Centered, DefaultButton } from '../common'

import NAV_ITEMS from '@/data/navigation'
import { NavItems } from '@/data/types'

// banner color: #016CBA

export const maxWidth = 1400
export const navBarHeight = 166
export const navBarHeightMobile = 84
const drawerWidth = 280
const logoSize = 100
const logoSizeMobile = 64

const Header = () => {
  const router = useRouter()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [collapse, setCollapse] = useState(false)
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 })

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  }

  const handlePathClick = (path: string, closeDrawer?: boolean) => {
    if (closeDrawer) {
      setDrawerOpen(false)
    }

    // router.push(path)
  }

  const handleGetQuote = () => {
    if (drawerOpen) setDrawerOpen(false)
    window.scrollTo(0, document.body.scrollHeight)
  }

  useEffect(() => {
    setCollapse(router.pathname !== '/')
  }, [router.pathname])

  return (
    <React.Fragment>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: trigger || collapse ? '0px 2px 150px -40px rgba(0,0,0,0.5)' : 'none',
          transition: 'none',
        }}
      >
        <Toolbar
          sx={{
            p: 0,
            justifyContent: 'center',
            transition: 'height 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, backdrop-filter 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            background: {
              xs: 'rgb(255, 255, 255, 0.7)',
              md: trigger || collapse ? 'rgb(255, 255, 255, 0.7)' : 'linear-gradient(to bottom, rgba(0,45,92,1) 0%, rgba(0,45,92,0.7) 60%,rgba(0,45,92,0) 100%)'
            },
            ...trigger || collapse ? {
              height: navBarHeightMobile,
              backdropFilter: 'blur(8px)',
            } : {
              height: { xs: navBarHeightMobile, md: navBarHeight },
            },
            '& a': {
              textDecoration: 'none',
              color: '#212B36'
            },
          }}
        >
          <Box sx={{ maxWidth: maxWidth, display: 'flex', flexGrow: 1, alignItems: 'center' }}>
            <Flex>
              <Link href='/'>
                <Row sx={{ cursor: 'pointer' }} onClick={() => handlePathClick('/', true)}>
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Image
                      src="/static/images/logo-no-bg.png"
                      alt="logo"
                      width={trigger || collapse ? logoSizeMobile : logoSize}
                      height={trigger || collapse ? logoSizeMobile : logoSize}
                      style={{
                        transition: 'height 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
                        margin: '0 12px'
                      }}
                    />
                  </Box>
                  <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <Image
                      src="/static/images/logo-no-bg.png"
                      alt="logo"
                      width={logoSizeMobile}
                      height={logoSizeMobile}
                      style={{
                        transition: 'height 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms, width 250ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
                        margin: '0 12px'
                      }}
                    />
                  </Box>
                  <Column>
                    <Typography
                      variant="poster"
                      sx={{
                        transition: 'font-size 200ms cubic-bezier(0.17, 0.04, 0.03, 0.94), color 200ms cubic-bezier(0.17, 0.04, 0.03, 0.94)',
                        ...trigger || collapse ? {
                          fontSize: '1.5rem',
                          lineHeight: '18px',
                          color: '#414141',
                        } : {
                          fontSize: { xs: '1.5rem', md: '2.8rem' },
                          color: { xs: '#414141', md: '#FFF' },
                          lineHeight: { xs: '18px', md: '30px' },
                        },
                      }}
                    >
                      CEC
                    </Typography>
                    <Typography
                      variant="poster"
                      sx={{
                        transition: 'font-size 200ms cubic-bezier(0.17, 0.04, 0.03, 0.94), color 200ms cubic-bezier(0.17, 0.04, 0.03, 0.94)',
                        ...trigger || collapse ? {
                          fontSize: '1.2rem',
                          color: '#414141',
                          lineHeight: '16px',
                        } : {
                          fontSize: { xs: '1.2rem', md: '2rem' },
                          color: { xs: '#414141', md: '#FFF' },
                          mt: { xs: '0', md: '4px' },
                          lineHeight: { xs: '16px', md: '30px' },
                        },
                      }}
                    >
                      CONSTRUCTION
                    </Typography>
                    <Typography
                      variant="poster"
                      sx={{
                        transition: 'font-size 200ms cubic-bezier(0.17, 0.04, 0.03, 0.94), color 200ms cubic-bezier(0.17, 0.04, 0.03, 0.94)',
                        ...trigger || collapse ? {
                          letterSpacing: '0.8px',
                          fontSize: '1.2rem',
                          color: '#414141',
                          lineHeight: '16px',
                        } : {
                          fontSize: { xs: '1.2rem', md: '2rem' },
                          color: { xs: '#414141', md: '#FFF' },
                          letterSpacing: { xs: '0.8px', md: '1.4px' },
                          lineHeight: { xs: '16px', md: '30px' },
                        },
                      }}
                    >
                      CORPORATION
                    </Typography>
                  </Column>
                </Row>
              </Link>
            </Flex>
            <Centered sx={{ flex: 2, display: { xs: 'none', lg: 'flex' }, justifyContent: 'space-evenly' }}>
              {NAV_ITEMS.map((item: NavItems) => (
                <Link key={item.id} href={item.path}>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 600,
                      cursor: 'pointer',
                      color: trigger || collapse ? '#414141' : '#FFF',
                    }}
                    onClick={() => handlePathClick(item.path)}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Centered>
            <Flex sx={{ justifyContent: 'end', mr: '12px' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2, display: { lg: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <DefaultButton onClick={handleGetQuote} sx={{ display: { xs: 'none', lg: 'block' }, margin: '8px 0' }}>
                Get a quote
              </DefaultButton>
            </Flex>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor='right'
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              '> span:first-of-type': {
                borderTop: '1px solid #dedede',
              },
            },
            '& a': {
              textDecoration: 'none',
              color: '#212B36',
            },
          }}
        >
          <Row sx={{ height: navBarHeightMobile, justifyContent: 'space-between', margin: '0 24px' }}>
            <span></span>
            <CloseRoundedIcon onClick={handleDrawerToggle} sx={{ fontSize: '32px' }} />
          </Row>
          {NAV_ITEMS.map((item: NavItems) => (
            <Typography
              key={item.id}
              component="span"
              onClick={() => handlePathClick(item.path, true)}
              sx={{
                fontWeight: 600,
                cursor: 'pointer',
                borderBottom: '1px solid #dedede',
                p: '24px',
              }}
            >
              <Link key={item.id} href={item.path}>
                {item.label}
              </Link>
            </Typography>
          ))}
          <Box sx={{ flexGrow: 1 }} />
          <DefaultButton onClick={handleGetQuote} sx={{ margin: '16px' }}>
            Get a quote
          </DefaultButton>
        </Drawer>
      </Box>
    </React.Fragment>
  )
}

export default Header
