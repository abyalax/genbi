import { Metadata } from 'next';
import { envServer } from '~/common/env/server';
import { PageLanding } from './_components/page-landing';

export const metadata: Metadata = {
  title: 'LandingPage | GenBI Organization',
  description: "Explore Abya's personal website showcasing development projects, technical blogs, and more.",
  authors: [{ name: 'Abya Lacks', url: envServer.BASE_URL }],
  keywords: ['Profile Developer', 'Personal Website', 'Fullstack Developer', 'Abya Lacks', 'Software Engineer Portfolio'],
  creator: 'Abya Lacks',
  publisher: 'Abya Lacks',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Abya's Profile",
    description: 'Discover innovative web and software development projects by Abya.',
    url: envServer.BASE_URL,
    siteName: "Abya's Portfolio",
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: '/profile/profile-2.png',
        width: 1200,
        height: 630,
        alt: "Abya's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Abya's Profile",
    description: 'Software engineer, web developer, and digital creator. Explore my work.',
    site: '@abya_dev',
    creator: '@abya_dev',
    images: ['/profile/profile-2.png'],
  },
};

export const permissions = [];

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <PageLanding />;
}
