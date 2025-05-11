export interface IRow {
    name: string;
    free: boolean | string;
    pro: boolean | string;
    business: boolean | string;
    enterprise: boolean | string;
}

export interface IFaq {
    question: string;
    answer: string;
}

export const rows: IRow[] = [
    {
        name: 'Individual configuration',
        free: true,
        pro: true,
        business: true,
        enterprise: true
    },
    {
        name: 'No setup, or hidden fees',
        free: true,
        pro: true,
        business: true,
        enterprise: true
    },
    {
        name: 'Team size',
        free: '1 developer',
        pro: '3 developers',
        business: '10 developers',
        enterprise: 'Unlimited'
    },
    {
        name: 'Premium support',
        free: false,
        pro: true,
        business: true,
        enterprise: true
    },
    {
        name: 'Enterprise integrations',
        free: false,
        pro: false,
        business: true,
        enterprise: true
    }
];

export const faqs: IFaq[] = [
    {
        question: 'What is Flowbite?',
        answer:
            'Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.'
    },
    {
        question: 'How does Flowbite work?',
        answer:
            'Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.'
    },
    {
        question: 'Is there a Figma file available?',
        answer:
            'Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.'
    },
    {
        question: 'What are the differences between Flowbite and Tailwind UI?',
        answer:
            'Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.'
    },
    {
        question: 'What about browser support?',
        answer:
            'Flowbite is an open-source library of UI components based on the utility-first Tailwind CSS framework featuring dark mode support, a Figma design system, and more.'
    },
];

export const menus = [
    { title: 'Resources', items: ['Overview', 'Blog', 'Flowbite', 'Playground', 'Showcase'] },
    { title: 'Help', items: ['Contact us', 'Support', 'Bugs', 'Feature requests'] },
    { title: 'Company', items: ['About', 'Terms', 'Privacy policy'] }
];

export const brand = {
    copyrightText: '© 2023 Flowbite.com - All rights reserved.',
    logo: 'https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg',
    name: 'Flowbite',
    socials: [
        {
            title: 'Github stars',
            icon: 'github',
            url: 'https://github.com/themesberg/flowbite-svelte-admin-dashboard'
        },
        {
            title: 'Discord community',
            icon: 'discord',
            url: 'https://discord.gg/4eeurUVvTy'
        },
        {
            title: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com/flowbite_admin'
        }
    ]
};
