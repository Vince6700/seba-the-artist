export default {
  title: 'infos générales',
  name: 'generalInfo',
  type: 'document',
  fields: [
    {
      title: 'email',
      name: 'email',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ],
}