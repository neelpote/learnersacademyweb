import { defineField, defineType } from 'sanity'

export const teacher = defineType({
  name: 'teacher',
  title: 'Teacher',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'qualification',
      title: 'Qualification',
      type: 'string',
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
    }),
    defineField({
      name: 'teachingPhilosophy',
      title: 'Teaching Philosophy',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subject',
      media: 'photo',
    },
  },
})