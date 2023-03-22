import Head from 'next/head'
import {
  AddchartRounded,
  MergeRounded,
  PriceCheckRounded,
  QueryStatsRounded,
} from '@mui/icons-material'
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import Footer from '~/ui/components/Footer'
import HeaderBar from '~/ui/components/HeaderBar'

import type { SystemStyleObject } from '@mui/system'

export default function Home() {
  return (
    <>
      <Head>
        <title>Erenzia</title>
        <meta
          name="description"
          content="We build companies that leave legacies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderBar />
      <Container component="main" maxWidth="md" sx={styles.content}>
        <Grid container rowSpacing={4} spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h1">
              We purchase profitable, RevOps companies and supercharge them with
              applied AI to build brands that last.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6.5}>
            <Typography>
              Erenzia is a private investment firm acquiring profitable, lower
              mid-market companies that generate measurable top-line revenue. We
              focus on companies that provide RevOps software or have
              significant potential to grow their business by adding RevOps
              maturity to their business strategy or operations.
            </Typography>
            <Typography>
              We infuse existing teams with technology and management expertise,
              then leverage their combined capabilities to grow revenue and
              profit across our portfolio of companies. This is good for our
              companies and our LPs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5.5}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body1" fontWeight="bold">
                  What is RevOps?
                </Typography>
                <Stack spacing={2}>
                  <Typography variant="body2">
                    Revenue Operations (RevOps) is an operating model that
                    integrates sales, marketing, and customer success through
                    shared goals and metrics to focus on the end-to-end customer
                    experience.
                  </Typography>
                  <List dense disablePadding>
                    <ListItem>
                      <ListItemIcon>
                        <QueryStatsRounded color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Increase information velocity and visibility" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <MergeRounded color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Consolidate processes and tools across departments" />
                    </ListItem>
                  </List>
                  <Typography variant="body2">
                    RevOps is especially powerful for companies with recurring
                    revenue models:
                  </Typography>
                  <List dense disablePadding>
                    <ListItem>
                      <ListItemIcon>
                        <AddchartRounded color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Up to 200% increase in digital marketing ROI" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PriceCheckRounded color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Up to 20% increase in sales productivity" />
                    </ListItem>
                  </List>
                  <Divider />
                  <Typography variant="caption">
                    Source: Boston Consulting Group,{' '}
                    <Link href="https://www.bcg.com/publications/2020/revving-up-go-to-market-operations-b2b">
                      Revving Up Go-to-Market Operations in B2B
                    </Link>
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2">About our founder</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.founderImage}>
              <img alt="David Dripps" src="/i-zxjqzv3-X4-no-crop.png" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography sx={{ mt: 2 }}>
              David Dripps is a former investment banker and entrepreneur
              who&apos;s successfully founded and sold multiple companies.
              He&apos;s also an investor and advisor for several SaaS and
              consumer products startups.
            </Typography>
            <Typography>
              Prior to founding Erenzia, he led the Pages Experiences team at
              Facebook serving small and medium businesses to help them increase
              revenue and ROAS (Return on Ad Spend).
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ mt: 6 }} />
      <Footer />
    </>
  )
}

const styles: Record<string, SystemStyleObject> = {
  content: {
    px: { xs: 3, sm: 4 },
  },
  founderImage: {
    background: `linear-gradient(
                  270deg,
                  rgba(95, 127, 176, 0) 0%,
                  rgba(95, 127, 176, 1) 100%
                )`,
    height: '50%',
    marginTop: '25%',
    '> img': {
      height: '200%',
      marginTop: '-25%',
      width: '100%',
    },
  },
}
