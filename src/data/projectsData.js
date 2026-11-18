export const projectsData = [
  {
    id: '01',
    name: 'PESO Basud Portal',
    subtitle: 'Government Job Application System',
    description: 'An ongoing full-stack web platform for the Public Employment Service Office (PESO) in Basud, Camarines Norte. It allows citizens to apply for jobs online, streamlining employment processing and improving accessibility for local job seekers.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase'],
    live: 'https://basud-peso-delta.vercel.app/',
    code: `export PESOBasudPortal\n from "Government-System"`,
    status: 'Ongoing'
  },
  {
    id: '02',
    name: 'PESO Database Management System',
    subtitle: 'Internal Applicant & Program Records Management',
    description: 'An internal management system developed for PESO Basud to organize applicant records, monthly job applicant registries, employment program categories, and DSWD livelihood association information. The interface includes an overview dashboard, searchable records, category filters, duplicate review, blocked-record management, data exports, and backup/restore tools. This portfolio case study uses privacy-safe screenshots and feature descriptions only; no individual applicant records are displayed.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Database Management'],
    source: 'Internal Government System',
    code: `export PESOBasudDBMS\n from "Internal-Management-System"`,
    status: 'Internal System',
    features: [
      {
        title: 'Dashboard & Analytics',
        description: 'Provides an at-a-glance overview of applicant totals, active and blocked records, category distribution, and registration trends.'
      },
      {
        title: 'Applicant Records',
        description: 'Supports searchable applicant records, category filters, date-range filtering, configurable columns, duplicate review, and export tools.'
      },
      {
        title: 'Job Applicant Registry',
        description: 'Organizes monthly job applicant entries with search, month selection, Excel export, and backup and restore controls.'
      },
      {
        title: 'DSWD Livelihood Tracking',
        description: 'Keeps program and association information organized, with summary totals, program filters, and status tracking.'
      },
      {
        title: 'Privacy-conscious administration',
        description: 'The public portfolio preview intentionally hides person-level records and account details. It demonstrates the interface and capabilities without exposing applicant information.'
      }
    ],
screenshots: [
      {
        title: 'Dashboard & Analytics',
        image: '/peso-dbms/1.png',
        description: 'Aggregate statistics, category distribution, and registration activity.'
      },
      {
        title: 'Applicant Management',
        image: '/peso-dbms/2.png',
        description: 'Applicant category summaries, search, filters, and record-management controls. Individual records are concealed.'
      },
      {
        title: 'Job Applicant Registry',
        image: '/peso-dbms/3.png',
        description: 'Monthly registry tools, search, export, backup, and restore. Individual entries are concealed.'
      },
      {
        title: 'DSWD Management',
        image: '/peso-dbms/4.png',
        description: 'Livelihood association summaries, program filters, and status tracking. individual entries are concealed.'
      },
    ]
  },
  {
    id: '03',
    name: 'Ghetto Rider',
    subtitle: 'Motorcycle Booking System',
    description: 'A motorcycle-only booking system designed for local transportation in Camarines Norte, Bicol. Provides a fast and accessible way for users to book rides online with a focus on convenience and regional mobility.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    live: 'https://ghettorider.vercel.app/',
    code: `export GhettoRider\n from "Booking-System"`
  },
  {
    id: '04',
    name: 'Ghetto Meter',
    subtitle: 'Android Fare Meter App',
    description: 'A mobile Android application built with Kotlin that calculates accurate fare based on travel distance. Designed as a fare meter system for motorcycle transportation.',
    live: 'https://github.com/joaquincuenca/ghettoMeter',
    tags: ['Kotlin', 'Android', 'Mobile App', 'GPS'],
    code: `export GhettoMeter\n from "Android-App"`
  },
  {
    id: '05',
    name: 'AR: Historiscan',
    subtitle: 'Augmented Reality',
    description: 'Augmented Reality museum guide using Unity & Vuforia. Offline capable.',
    tags: ['Unity', 'Vuforia', 'C#'],
    code: `export ARHistoriscan\n from "AR-Project"`
  },
  {
    id: '06',
    name: 'PESO Frame',
    subtitle: 'Image Layout Tool for Staff',
    description: 'A React-based static tool designed for PESO staff to easily drag and drop images into a predefined frame layout without using external editing software. Built to simplify content creation and reduce manual editing work.',
    tags: ['React', 'Tailwind CSS', 'UI Tool', 'Static App'],
    code: `export PESOFrame\n from "UI-Tool"`,
    live: 'https://peso-basud-frame.vercel.app/'
  }
]
