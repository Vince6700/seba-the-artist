export default {
    title: 'Navigation',
    name: 'navigation',
    type: 'document',
    fields: [
        {
            title: 'name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Navigation image',
            name: 'navigationImage',
            type: 'image',
            validation: Rule => Rule.required()
        },
    ],
}