export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '625603af13bb6c123592164b',
                  title: 'Sanity Studio',
                  name: 'axyz-sanity-2-studio',
                  apiId: '2a148c50-60a3-4b81-bfc0-c2ee179b75ed'
                },
                {
                  buildHookId: '625603af8afc3a13ba28217f',
                  title: 'Portfolio Website',
                  name: 'axyz-sanity-2',
                  apiId: 'ea9d64c4-878b-4f14-b96d-4f3c8321325c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/animanoir/axyz-sanity-2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://axyz-sanity-2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
