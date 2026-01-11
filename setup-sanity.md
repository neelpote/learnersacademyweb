# Sanity Setup Instructions

## Fix API Access Issues

The errors you're seeing are because Sanity needs to be configured to allow public read access. Here's how to fix it:

### Option 1: Enable Public Read Access (Recommended for Development)

1. Go to [Sanity Management Console](https://www.sanity.io/manage)
2. Select your project: **nxtrkki6**
3. Go to **Settings** → **API**
4. Under **CORS Origins**, add:
   - `http://localhost:3000` (for your website)
   - `http://localhost:3333` (for Sanity Studio)
5. Under **API Settings**, make sure **Public read access** is enabled
6. Save the changes

### Option 2: Create an API Token (More Secure)

1. Go to [Sanity Management Console](https://www.sanity.io/manage)
2. Select your project: **nxtrkki6**
3. Go to **Settings** → **API** → **Tokens**
4. Click **Add API Token**
5. Name: "Website Read Token"
6. Permissions: **Viewer** (read-only)
7. Copy the token
8. Add to your `.env.local` file:
   ```
   SANITY_API_TOKEN=your_token_here
   ```

### Quick Fix (Try This First)

Run this command to make your dataset public:

```bash
npx sanity dataset visibility set public
```

This will allow public read access to your production dataset.

## After Setup

1. Restart your development server
2. Visit http://localhost:3000
3. The API errors should be resolved
4. You can start adding content in Sanity Studio at http://localhost:3333