/*
 _____
|  ___\
|_|_
 ___\
|_|___
  |___\

  */

import { Box } from '@mui/material'

import type { Theme } from '@mui/material'
import type { SystemStyleObject } from '@mui/system'

const Logo = ({ sx = {} }: { sx?: SystemStyleObject<Theme> }) => (
  <Box sx={[s.container, sx]}>
    <Box sx={s.topProtrusion} />
    <Box sx={s.innerTop} />
    <Box sx={s.innerBottom} />
    <Box sx={s.outerBottom} />
    <Box sx={s.bottomProtrusion} />
    <Box sx={s.midProtrusion} />
    <Box sx={s.outerTop} />
    <Box sx={s.shadows}>
      <Box sx={s.innerTopShadow} />
      <Box sx={s.innerBottomShadow} />
      <Box sx={s.bottomLeftShadow} />
      <Box sx={s.bottomRightShadow} />
    </Box>
  </Box>
)

const linearGradient = ({ palette }: Theme, direction: string) =>
  `linear-gradient(to ${direction}, ${palette.primary.main}, rgba(0, 0, 0, 0.5))`

const s: Record<string, SystemStyleObject> = {
  container: {
    height: '16em',
    position: 'relative',
    '& > .MuiBox-root': {
      borderColor: 'primary.main',
      position: 'absolute',
    },
  },
  innerBottom: {
    border: 'solid',
    borderRadius: '0 0 1em 1em',
    borderWidth: '0 0 0 1em',
    height: '6em',
    left: '3.75em',
    width: '8em',
    top: '10em',
  },
  bottomProtrusion: {
    border: 'solid',
    borderRadius: '0 0.75em 1em 0',
    borderWidth: '1em 1em 1em 0',
    height: '4em',
    left: '4em',
    top: '12em',
    transform: 'skew(20deg, 0)',
    width: '8em',
  },
  midProtrusion: {
    border: 'solid',
    borderRadius: '1em',
    borderWidth: '1em 1em 1em 0',
    height: '4em',
    left: '3em',
    top: '6em',
    transform: 'skew(20deg, 0)',
    width: '7em',
  },
  topProtrusion: {
    border: 'solid',
    borderRadius: '0 0.75em 1em 0',
    borderWidth: '1em 1em 1em 0',
    height: '4em',
    left: '5em',
    top: 0,
    transform: 'skew(20deg, 0)',
    width: '7em',
  },
  innerTop: {
    border: 'solid',
    borderRadius: '1em 1em 0 0',
    borderWidth: '1em 0 0 1em',
    height: '4em',
    left: '3.75em',
    width: '8em',
    top: '3em',
  },
  outerBottom: {
    border: 'solid',
    borderRadius: '1em 0 0 1em',
    borderWidth: '1em 0 1em 1em',
    height: '4em',
    width: '4.75em',
    top: '9em',
  },
  outerTop: {
    border: 'solid',
    borderRadius: '1em 0 0 1em',
    borderWidth: '1em 0 1em 1em',
    height: '7em',
    width: '4.75em',
    top: 0,
  },
  shadows: {
    '& > .MuiBox-root': {
      position: 'absolute',
    },
  },
  innerTopShadow: {
    background: (theme) => linearGradient(theme as Theme, 'bottom'),
    height: '2em',
    left: '3.75em',
    top: '4em',
    width: '1em',
  },
  innerBottomShadow: {
    background: (theme) => linearGradient(theme as Theme, 'top'),
    height: '2em',
    left: '3.75em',
    top: '10em',
    width: '1em',
  },
  bottomLeftShadow: {
    background: (theme) => linearGradient(theme as Theme, 'right'),
    height: '1em',
    left: '1.75em',
    top: '12em',
    width: '2em',
  },
  bottomRightShadow: {
    background: (theme) => linearGradient(theme as Theme, 'left'),
    height: '1em',
    left: '4.75em',
    top: '12em',
    width: '2em',
  },
}

export default Logo
