export default {
    name: 'property',
    title: 'Properties',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
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
        name: 'propertyImage',
        type: 'image',
        title: 'Property Image',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'forSale',
        title: 'For Sale',
        type: 'boolean',
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
      },
      {
        name: 'propertyComponents',
        title: 'Property Components',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'icon', title: 'Icon', type: 'string' },
              { name: 'value', title: 'Value', type: 'number' },
              { name: 'label', title: 'Label', type: 'string' },
            ],
          },
        ],
      },
      {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                        }
                    ]
                }
            ],      
        },
      {
        name: 'gallery',
        title: 'Property Gallery',
        type: 'array',
        validation: Rule => Rule.max(3),
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
        description: 'A collection of images showcasing the property (maximum 3 images)',
      },
      {
        name: 'agents',
        title: 'Agents',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'agent' }] }],
        description: 'Agents responsible for this property',
      },
    ]
  };  