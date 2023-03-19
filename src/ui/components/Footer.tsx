import { Box, Typography } from '@mui/material'

import type { SxProps } from '@mui/material'

const Footer = () => (
  <Box component="footer" sx={styles.footer}>
    <Typography align="center" color="text.secondary" variant="body2">
      Copyright &copy; {new Date().getFullYear()} Erenzia LLC. All rights
      reserved.
    </Typography>
  </Box>
)

const styles: Record<string, SxProps> = {
  footer: {
    my: 2,
  },
}

export default Footer
