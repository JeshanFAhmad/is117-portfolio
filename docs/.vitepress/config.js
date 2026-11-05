import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Career Atlas',
  description: 'Explore emerging careers and roles across the AI industry.',
  base: '/is1117-portfolio/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Explore roles', link: '/roles/' },
      { text: 'Career guide', link: '/guide/' },
      { text: 'About', link: '/about' }
    ],
    sidebar: {
      '/roles/': [{ text: 'Role library', items: [
        { text: 'Overview', link: '/roles/' },
        { text: 'AI Forward Deployed Engineer', link: '/roles/ai-forward-deployed-engineer' },
        { text: 'AI Engineer', link: '/roles/ai-engineer' },
        { text: 'AI Product Manager', link: '/roles/ai-product-manager' },
        { text: 'AI Safety & Evaluation', link: '/roles/ai-safety-evaluation' }
      ] }],
      '/guide/': [{ text: 'Career guide', items: [
        { text: 'Getting started', link: '/guide/' },
        { text: 'Skills & learning plan', link: '/guide/skills' },
        { text: 'Researching job posts', link: '/guide/job-research' }
      ] }]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/JeshanFAhmad/is1117-portfolio' }],
    footer: { message: 'An evolving, student-friendly field guide to AI careers.', copyright: 'Built for learning and career exploration' }
  }
})

