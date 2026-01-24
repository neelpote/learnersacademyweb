import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'learners-academy',
  title: "The Learners' Academy CMS",
  
  projectId: 'nxtrkki6',
  dataset: 'production',
  
  plugins: [structureTool()],
  
  schema: {
    types: schemaTypes,
  },
  
  basePath: '/studio',
})