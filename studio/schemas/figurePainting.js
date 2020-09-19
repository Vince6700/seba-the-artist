export default {
  title: 'Peinture Figurative',
  name: 'figurePainting',
  type: 'document',
  fields: [
    {
      title: 'Nom',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      max: 500
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      title: 'Peinture',
      name: 'painting',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Rangée',
      name: 'row',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      title: 'Colonne',
      name: 'column',
      type: 'number',
      validation: Rule => Rule.required()
    },
  ],
  orderings: [
    {
      title: 'date order',
      name: 'dateOrder',
      by: [
        {field: 'date', direction: 'desc'}
      ]
    },
    {
      title: 'rangée',
      name: 'rowOrder',
      by: [
        {field: 'row', direction: 'asc'}
      ]
    }
  ],
}