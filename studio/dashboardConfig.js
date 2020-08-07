export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f2c9a90953e72802dce623e',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-m6qopbq5',
                  apiId: '046aacb4-c791-48a4-ae31-3aa5ead3946c'
                },
                {
                  buildHookId: '5f2c9a903796e7676bc15ab1',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-izz3uhfc',
                  apiId: '44347492-70e0-4ef5-a743-c88e8f187238'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/olivoil/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-izz3uhfc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
