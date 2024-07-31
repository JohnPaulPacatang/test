import { styled } from '@mui/material'

const Spinner = styled('div')({
  '@keyframes spinner': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  width: '50px',
  height: '50px',
  border: '5px solid #f3f3f3',
  borderTop: '5px solid #E45424',
  borderRadius: '50%',
  animation: 'spinner 1.5s linear infinite',
})

export default Spinner
