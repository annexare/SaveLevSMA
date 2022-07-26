import { FC } from 'react'
import { NextSeo, SocialProfileJsonLd } from 'next-seo'

import CssBaseline from '@mui/material/CssBaseline'

import mainLevPhoto from 'public/img/4.jpg'
import { ESocialLinks, WEBSITE_URL } from 'src/data'
import { useTranslation } from 'src/hooks/useTranslation'

export { mainLevPhoto }

export const BaseCssSeo: FC = () => {
  const t = useTranslation()

  return (
    <>
      <CssBaseline />

      <NextSeo
        title={t.title}
        description={t.description}
        openGraph={{
          images: [
            {
              url: WEBSITE_URL + mainLevPhoto.src,
              width: mainLevPhoto.width,
              height: mainLevPhoto.height,
              alt: t.name,
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{ cardType: 'summary_large_image' }}
      />

      <SocialProfileJsonLd
        type="Person"
        name={t.name}
        url={WEBSITE_URL}
        sameAs={[ESocialLinks.facebook, ESocialLinks.instagram]}
      />
    </>
  )
}
