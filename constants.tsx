
import React from 'react';
import { Testimonial, Feature } from './types';

export const PRIMARY_GREEN = '#b0ff3e';

export const FEATURES: Feature[] = [
  {
    id: 'consistency',
    title: 'PHASE 1: CHARACTER CONSISTENCY',
    description: 'Learn the "DNA Framework" to keep your AI character looking the same across thousands of images and various backgrounds.',
    value: '$497'
  },
  {
    id: 'production',
    title: 'PHASE 2: HOLLYWOOD PRODUCTION',
    description: 'Turn static images into viral videos using tools like Higgsfield + our secret high-fidelity editing workflow.',
    value: '$497'
  },
  {
    id: 'monetization',
    title: 'PHASE 3: MONETISATION MASTERY',
    description: 'The psychology of converting "cold" traffic into automated revenue through digital products and high-ticket affiliate deals.',
    value: '$497'
  },
  {
    id: 'community',
    title: 'PHASE 4: THE INNER CIRCLE VIP COMMUNITY',
    description: 'Direct access to Tim, Luka, and 1,000+ other students. Daily wins, updated prompts, and networking with top creators.',
    value: '$997'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: '@Slat',
    avatar: 'https://picsum.photos/seed/slat/100/100',
    earnings: '$12,400',
    content: '"HELPED ME GROW MY FACELESS YOUTUBE CHANNEL TO 300K" - This is a game-changer for Youtube automation. The consistency workflow alone saved me weeks of work.',
    timestamp: '2 weeks ago',
    image: 'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6957be20d350afb784a69ddf.png',
    video: 'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/69277eb45f7cbc1156d0a668.mp4'
  },
  {
    id: '2',
    name: '@ness.hl',
    avatar: 'https://picsum.photos/seed/ness/100/100',
    earnings: '$61,300',
    content: '"HELPED US GROW AI INFLUENCER IN CRYPTO NICHE" - This is the group you want to join if you\'re serious about going viral. We hit 100k in 14 days.',
    timestamp: '3 weeks ago',
    image: 'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/69580f14748303b6b2aa94b1.png',
    video: 'https://storage.googleapis.com/msgsndr/TGsyH70nsz7y3hijuqTn/media/6947fd7eaca6ab01a4d422cc.mp4'
  }
];

export const BONUSES = [
  {
    id: '1',
    title: 'THE 72-HOUR LAUNCH ACCELERATOR',
    value: '$1,000',
    desc: 'The exact "Speed-Run Protocol" to go from Zero to Live Account in just 3 days.'
  },
  {
    id: '2',
    title: 'THE "SELL IN YOUR SLEEP" SYSTEM',
    value: '$500',
    desc: 'Turn your bio link into an automated cash register that captures leads while you sleep.'
  },
  {
    id: '3',
    title: 'THE "LIVE PROMPTING" SESSIONS',
    value: '$1,000',
    desc: 'Exclusive sessions teaching the psychology of converting cold traffic into maximum profit.'
  },
  {
    id: '4',
    title: 'VIP INNER CIRCLE ACCESS',
    value: '$1,500',
    desc: 'Get access to our private Discord where we share daily updates, new tools, and winning prompts.'
  }
];