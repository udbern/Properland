export default {
  name: 'agent',
  title: 'Agents',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Agent Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Agent Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'propertySales',
      title: 'Property Sales',
      type: 'number',
    },
    {
      name: 'customerSatisfaction',
      title: 'Customer Satisfaction',
      type: 'number',
    },
    {
      name: 'propertyTransactions',
      title: 'Property Transactions',
      type: 'number',
    },
  ],
}
