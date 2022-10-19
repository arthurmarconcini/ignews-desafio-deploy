import * as prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const endpoint = process.env.PRISMIC_API_ACCESS
  const client = prismic.createClient(endpoint)

  
 
  return client
}