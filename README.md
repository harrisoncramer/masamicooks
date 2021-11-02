# masamicooks

## Development

1. Configure `.env.development` file for Contentful API.
```
### .env.development

# All environment variables will be sourced and made available to gatsby-config.js, gatsby-node.js, etc.

CONTENTFUL_SPACE_ID='your_contentful_space_id'
CONTENTFUL_ACCESS_TOKEN='your_contentful_access_token'
```

2. `npm install`
3. `npm run dev`

## Production

This repository is configured to deploy to a production environment whenever there is a push into the main branch. The 
