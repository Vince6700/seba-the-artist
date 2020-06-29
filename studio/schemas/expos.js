export default {
    title: 'Expos',
    name: 'Expos',
    type: 'document',
    fields: [
        {
            title: 'name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'description',
            name: 'description',
            type: 'text',
            max: 500
        },
        {
            title: 'date',
            name: 'date',
            type: 'datetime',
            validation: Rule => Rule.required()
        },
        {
            title: 'Slider Image',
            name: 'sliderImage',
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            title: 'lieu',
            name: 'place',
            type: 'geopoint'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        }
    ],
}