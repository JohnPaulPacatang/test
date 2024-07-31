import { styled, Box, ButtonBase, TextField, Button, Typography } from '@mui/material'

const FlexBox = styled(Box)({
  display: 'flex',
})
const Flex = styled(FlexBox)({
  flex: 1,
})
const Row = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})
const Column = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})
const Centered = styled(Flex)({
  alignItems: 'center',
  justifyContent: 'center',
})
const DefaultButton = styled(ButtonBase)({
  textTransform: 'none',
  // backgroundColor: '#2198E8', // accent blue
  // backgroundColor: '#FB741C', // main orange
  backgroundColor: '#E45424', // accent orange
  color: '#FFF',
  boxShadow: 'none',
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: '500',
  padding: '12px 16px',
  borderRadius: '6px',
  '&:hover': {
    backgroundColor: '#CB4113',
  },
})
const StyledButton = styled(Button)({
  height: '42px',
  color: '#212B36',
  border: 'none',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(33, 43, 54, 0.1)',
    border: 'none',
  },
})
const StyledInput = styled(TextField)({
  color: '#FFF',
  '& .MuiInputBase-root': {
    borderRadius: '8px',
    backgroundColor: 'rgba(145, 158, 171, 0.08)',
    '&:before,:after': {
      display: 'none',
    },
  },
  '& label': {
    color: '#bababa',
    '&.Mui-focused': {
      color: '#bababa',
    },
  },
  '& input, & textarea': {
    color: '#FFF',
  },
  '& textarea': {
    height: '100px !important',
  },
})
const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  padding: '48px 36px',
  [theme.breakpoints.up('md')]: {
    padding: '96px 36px',
  },
  maxWidth: 1400, // maxWidth
  width: '100%',
  backgroundColor: 'transparent',
  flexDirection: 'column',
}))
const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}))

export {
  FlexBox,
  Flex,
  Centered,
  Row,
  Column,
  DefaultButton,
  StyledButton,
  StyledInput,
  ContentContainer,
  Title,
}
