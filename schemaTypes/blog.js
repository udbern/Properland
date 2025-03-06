export default {
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }], // Ensure this is correctly defined
      },
      {
        name: 'mainImage',
        title: 'Featured Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'excerpt',
        title: 'Excerpt',
        type: 'text',
        description: 'Short summary of the blog post',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          { type: 'block' },
          {
            type: 'image',
            fields: [
              {
                name: 'alt',
                title: 'Alternative text',
                type: 'string',
              },
            ],
          },
          {
            type: 'object',
            name: 'quote',
            title: 'Quote',
            fields: [
              {
                name: 'text',
                title: 'Text',
                type: 'text',
              },
              {
                name: 'author',
                title: 'Quote Author',
                type: 'string',
              },
            ],
          },
        ],
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
    ],
  };
