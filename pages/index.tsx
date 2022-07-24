import { useContext } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import PaymentIcon from '@mui/icons-material/Payment'

import infoImage from 'public/img/1.jpeg'
import { BaseCssSeo } from 'src/components/BaseCssSeo'
import { BaseScripts } from 'src/components/BaseScripts'
import { CreditCard } from 'src/components/CreditCard'
import { TopNavBar } from 'src/components/TopNavBar'
import { InstagramButton } from 'src/components/social/InstagramButton'
import { ESocialLinks, creditCards, paypalEmail } from 'src/data'

import { LocaleContext } from './_app'

const Home: NextPage = () => {
  const { t } = useContext(LocaleContext)

  return (
    <>
      <BaseCssSeo />

      <TopNavBar />

      <Container component="main" maxWidth="md" sx={{ my: '1em' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography component="h1" fontSize={32} paragraph>
              {t.infoH1}
            </Typography>

            <>
              {t.infoBody.map((line: string, index: number) => (
                <Typography key={index} paragraph>
                  {line}
                </Typography>
              ))}
            </>

            <Card sx={{ flex: 1, flexGrow: 1 }}>
              <CardMedia
                component={() => <Image src={infoImage} alt={t.name} />}
                sx={{ flex: 1 }}
              />
              <CardContent>
                <Typography align="right" color="text.secondary">
                  {t.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" fontSize={24} paragraph>
              {t.paymentDetails}
            </Typography>

            <Grid container spacing={1}>
              {creditCards.map((card) => (
                <Grid key={card.number} item xs={12} sm={6} md={12}>
                  <CreditCard {...card} />
                </Grid>
              ))}

              <Grid item xs={12} sm={6} md={12}>
                <Card elevation={2} raised sx={{ flex: 1 }}>
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom variant="subtitle2">
                      PayPal
                    </Typography>
                    <Typography>{paypalEmail}</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={12}>
                <Card elevation={2} raised sx={{ flex: 1 }}>
                  <CardContent>
                    <Typography color="text.secondary" gutterBottom variant="subtitle2">
                      {t.monoBanka}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      href="https://send.monobank.ua/jar/hbxwPtEkH"
                      size="small"
                      startIcon={<PaymentIcon />}
                    >
                      {t.monoDonate}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

            <Typography component="h2" fontSize={24} paragraph marginTop="1em">
              {t.socialNetworks}
            </Typography>

            <Typography paragraph>{t.socialNetworksInfo}</Typography>

            <InstagramButton href={ESocialLinks.instagram}>
              {t.socialMy}&nbsp;Instagram
            </InstagramButton>

            <InstagramButton href={ESocialLinks.instagramMom}>
              {t.socialMom}&nbsp;Instagram
            </InstagramButton>

            <InstagramButton href={ESocialLinks.instagramDad}>
              {t.socialDad}&nbsp;Instagram
            </InstagramButton>
          </Grid>
        </Grid>
      </Container>

      <Container component="footer" maxWidth="md">
        &nbsp;
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a> */}
      </Container>

      <BaseScripts />
    </>
  )
}

export default Home
