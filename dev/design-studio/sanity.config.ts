import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {templates} from './templates'
import {themePreviewTool} from './plugins/theme-preview-tool'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  plugins: [
    structureTool({structure}),
    themePreviewTool(),
    // @todo
    // visionTool(),
  ],
  name: 'default',
  title: 'Design Studio',
  projectId: 'vr2mh9ho',
  dataset: 'production',
  schema: {
    templates,
    types: schemaTypes,
  },
})
