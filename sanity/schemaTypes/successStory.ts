import { defineField, defineType } from 'sanity'

export const successStory = defineType({
  name: 'successStory',
  title: 'Success Story',
  type: 'document',
  fields: [
    defineField({
      name: 'studentName',
      title: 'Student Name',
      type: 'string',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'marks',
      title: 'Marks/Percentage',
      type: 'string',
    }),
    defineField({
      name: 'rank',
      title: 'Rank',
      type: 'string',
    }),
    defineField({
      name: 'testimonialQuote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'studentName',
      subtitle: 'marks',
      media: 'photo',
    },
  },
})