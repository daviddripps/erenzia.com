import { LinkedIn, Twitter } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material'

import type { SystemStyleObject } from '@mui/system'
import Logo from './Logo'

const HeaderBar = () => (
  <AppBar color="inherit" elevation={0} position="static">
    <Toolbar sx={styles.appBar}>
      <Logo sx={styles.logo} />
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
)

const styles: Record<string, SystemStyleObject> = {
  appBar: {
    alignItems: 'start',
    mx: 1,
    my: 4,
  },
  contactButton: {
    ml: 2,
  },
  logo: {
    flex: 1,
    fontSize: 3, // Only use whole numbers. Decimals cause rendering issues.
  },
}

export default HeaderBar
