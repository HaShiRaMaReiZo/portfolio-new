import { Project } from './types';

export const apkManagerProject: Project = {
  id: 2,
  title: 'APK Manager',
  description: 'A Laravel-based application management platform that allows developers to upload APK files and provides a client interface for users to browse, download, and install applications.',
  fullDescription: 'A comprehensive Laravel web application that serves as a platform for managing Android APK files. The system features a developer interface where developers can upload, manage, and organize their applications. The client interface provides end-users with an intuitive way to browse available applications, view details, and download/install APK files directly to their devices.',
  image: '/apk-manager/am-1.jpg',
  screenshots: [
    // Main screenshot
    '/apk-manager/am-1.jpg',
    // Developer Interface Screenshots
    '/apk-manager/developer-interface/di-1.jpg',
    '/apk-manager/developer-interface/di-2.jpg',
    '/apk-manager/developer-interface/di-3.jpg',
    '/apk-manager/developer-interface/di-4.jpg',
    // Client Interface Screenshots
    '/apk-manager/client-interface/ci-1.jpg',
    '/apk-manager/client-interface/ci-2.jpg',
    '/apk-manager/client-interface/ci-3.jpg',
    '/apk-manager/client-interface/ci-4.jpg',
  ],
  technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'File Upload', 'Web Development'],
  category: 'web',
  featured: true,
  components: [
    {
      name: 'Developer Interface',
      description: 'Administrative interface for developers to upload, manage, and organize APK files. Includes file upload functionality, app metadata management, and developer dashboard.',
      technologies: ['Laravel', 'PHP', 'Bootstrap', 'File Upload'],
      screenshots: [
        '/apk-manager/developer-interface/di-1.jpg',
        '/apk-manager/developer-interface/di-2.jpg',
        '/apk-manager/developer-interface/di-3.jpg',
        '/apk-manager/developer-interface/di-4.jpg',
      ]
    },
    {
      name: 'Client Interface',
      description: 'User-friendly interface for end-users to browse available applications, view app details, and download/install APK files directly to their devices.',
      technologies: ['Laravel', 'PHP', 'Bootstrap', 'JavaScript'],
      screenshots: [
        '/apk-manager/client-interface/ci-1.jpg',
        '/apk-manager/client-interface/ci-2.jpg',
        '/apk-manager/client-interface/ci-3.jpg',
        '/apk-manager/client-interface/ci-4.jpg',
      ]
    }
  ]
};

