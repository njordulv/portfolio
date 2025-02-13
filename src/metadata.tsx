import { siteConfig as config } from '@/config/site'

export const Metadata: React.FC = () => {
  return (
    <>
      <meta
        name="viewport"
        content={`width=${config.viewport.width}, initial-scale=${config.viewport.initialScale}`}
      />
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords.join(', ')} />
      <meta name="author" content={config.author} />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:image" content="/og-image.jpg" />
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:type" content="website" />
    </>
  )
}
