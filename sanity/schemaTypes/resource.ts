import { defineField, defineType } from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Resource (Lead Magnet)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Study Material', value: 'study-material' },
          { title: 'Practice Papers', value: 'practice-papers' },
          { title: 'Exam Tips', value: 'exam-tips' },
          { title: 'Syllabus Guide', value: 'syllabus-guide' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
})