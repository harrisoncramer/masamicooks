# MasamiCooks

# <a href="https://www.masamicooks.com">masamicooks.com</a> 🍱🍜🍲

Welcome, this is the source code for <a href="masamicooks.com">masamicooks</a>, the online cooking blog!

The content for this site comes from Contentful, and is not stored within the repository.

## Development

1. Configure `.env` file for Contentful API.
```
CONTENTFUL_SPACE_ID=
CONTENTFUL_DELIVERY_TOKEN=
CONTENTFUL_PREVIEW_TOKEN=
```
2. `npm install`
3. `npm start`

## Production

This repository is configured to deploy to a production environment whenever there is a push into the main branch. The repository therefore relies upon several environment variables to be set, including:

1. `AWS_ACCESS_KEY_ID`
2. `AWS_SECRET_ACCESS_KEY`
3. `AWS_BUCKET_NAME`
4. `AWS_BUCKET_REGION`
5. `CLOUDFRONT_DISTRIBUTION_ID`
6. `TF_API_TOKEN`
7. `CONTENTFUL_ACCESS_TOKEN`
8. `CONTENTFUL_SPACE_ID`

Variables 1 and 2 are immediately accessible via the AWS console and allow Terraform to connect and configure our infrastructure.

After an initial deploy of the infrastructure from our local machine, we will have to supply variables 3 through 5 into the environment.

Item 6 is available via the Terraform Cloud console.

Items 7 and 8 are available via the Contentful console. These are the keys that allow Github Actions to pull down the content we need to build our site.

## Contentful

The contentful API triggers a deploy of our site whenever the user publishes a new piece of content. This is done via a webhook. The webhook is listened for inside of our deployment Github Action.

This action is basically triggered via a POST request to the `https://api.github.com/repos/harrisoncramer/masamicooks/dispatches` endpoint, carrying our authorization token from Github and the payload of:

```
{ "event_type": "webhook" }
```

This will get detected by our Github Action, which will run the deploy. We only send this POST in Contentful when a piece of content is published or unpublished!
