import { LinkedIn, Twitter } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, IconButton, Toolbar } from '@mui/material'

import type { SxProps } from '@mui/material'

const HeaderBar = () => (
  <>
    <AppBar color="inherit" elevation={0}>
      <Toolbar sx={styles.appBar}>
        <Box sx={{ flex: 1 }}>
          <Avatar alt="Erenzia" src="/erenzia-logo.png" variant="rounded" />
        </Box>
        <Box>
          <IconButton
            href="https://www.linkedin.com/company/erenzia/"
            target="_blank"
          >
            <LinkedIn />
          </IconButton>
          <IconButton href="https://twitter.com/ErenziaGroup" target="_blank">
            <Twitter />
          </IconButton>
          <Button
            href="mailto:hello@erenzia.com"
            sx={styles.contactButton}
            target="_blank"
            variant="contained"
          >
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    <Toolbar /> {/* To add the correct spacing above the content */}
  </>
)

const styles: Record<string, SxProps> = {
  appBar: {
    mx: { xs: 1, md: 4 },
  },
  contactButton: {
    ml: 2,
  },
}

export default HeaderBar
