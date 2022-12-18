import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default createConfig({
  name: 'default',
  title: 'g.w2n.dev',

  projectId: '82wdqgun',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool({
      // Note: These are both optional
      defaultApiVersion: 'v2021-10-21',
      defaultDataset: 'production',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
