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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'marks',
      title: 'Marks/Percentage',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2020).max(new Date().getFullYear()),
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