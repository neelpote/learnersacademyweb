import { defineField, defineType } from 'sanity'

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gradeLevel',
      title: 'Grade Level',
      type: 'string',
      options: {
        list: [
          { title: 'Class 6', value: 'class-6' },
          { title: 'Class 7', value: 'class-7' },
          { title: 'Class 8', value: 'class-8' },
          { title: 'Class 9', value: 'class-9' },
          { title: 'Class 10', value: 'class-10' },
          { title: 'Class 11', value: 'class-11' },
          { title: 'Class 12', value: 'class-12' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'syllabus',
      title: 'Syllabus',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'gradeLevel',
    },
  },
})