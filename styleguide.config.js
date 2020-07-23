module.exports = {
  // components: 'src/[^index]**/**/[^index]*.js*',
  sections: [
    {
      name: 'Introduction',
      content: 'sg_docs/introduction.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'sg_docs/installation.md',
          description: 'The description for the installation section'
        },
        // {
        //   name: 'Configuration',
        //   content: 'docs/configuration.md'
        // },
        // {
        //   name: 'Live Demo',
        //   external: true,
        //   href: 'http://example.com'
        // }
      ]
    },
    {
      name: 'UI Components',
      // content: 'docs/ui.md',
      components: 'src/[^index]**/**/[^index]*.js*',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    }
  ]
};
