export const instagram = () => window.open('https://instagram.com/lovelyoyrmia','_blank') 

export const github = () => window.open('https://github.com/lovelyoyrmia','_blank')

export const facebook = () => window.open('https://www.facebook.com/lovelyo.mokalu','_blank')

export const linkedin = () => window.open('https://www.linkedin.com/in/lovelyo-mokalu-a831aa175/','_blank')


export const FooterItems = [
    {
        id: 1,
        title: 'How to use',
        subTitle: [
            {
                subId: 1,
                name: 'Latest News',
                path: '/latest-news'
            },
            {
                subId: 2,
                name: 'News by Categories',
                path: '/news-by-categories'
            },
            {
                subId: 3,
                name: 'News by Terms',
                path: '/news-by-terms'
            },
            {
                subId: 4,
                name: 'News by Sources',
                path: '/news-by-sources'
            }
            
        ]
    },
    {
        id: 2,
        title: 'About',
        subTitle: [
            {
                subId: 1,
                name: 'About Me',
                path: '/about'
            },
            {
                subId: 2,
                name: 'Contact Me',
                path: '/contact'
            }
        ]
    }
]

export const SocialMedia = [
    {
        id: 1,
        title: 'Instagram',
        cName: 'fab fa-instagram',
        target: instagram
    },
    {
        id: 2,
        title: 'GitHub',
        cName: 'fab fa-github',
        target: github
    },
    {
        id: 3,
        title: 'Facebook',
        cName: 'fab fa-facebook',
        target: facebook
    },
    {
        id: 4,
        title: 'Linkedin',
        cName: 'fab fa-linkedin',
        target: linkedin
    }
]