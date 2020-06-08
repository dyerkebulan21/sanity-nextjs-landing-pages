export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ede1fbb57a8527ed51b4fdb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ownkh272',
                  apiId: '5c20d7ea-7bc5-4fab-b552-6c38b48731dc'
                },
                {
                  buildHookId: '5ede1fbbe456d20263b48548',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-negbi732',
                  apiId: '1cbaaef7-a334-4c60-b9bd-235aeac56f31'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dyerkebulan21/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-negbi732.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
