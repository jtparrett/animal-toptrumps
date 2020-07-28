## How to run locally

1. Install dependencies `yarn`
2. Export the FaunaDB secret `export FAUNADB_SECRET=YourSecretKey`
3. Run migrations `migrate`
4. Start netlify dev `yarn start`
5. Visit `http://localhost:8888`

## How to get a FaunaDB secret

1. Create a free FaunaDB account at https://fauna.com (or login with GitHub)
2. Create a new database
3. Visit the security tab (on the left)
4. Click "NEW KEY"
5. Name your key
6. Click "SAVE"
7. Copy the new key for use in step 2. of "How to run locally"
