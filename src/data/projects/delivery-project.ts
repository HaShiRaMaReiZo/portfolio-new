import { Project } from './types';

export const deliveryProject: Project = {
  id: 1,
  title: 'Delivery Service Project',
  description: 'A full-stack delivery service platform with Laravel backend, web dashboard, and two Flutter mobile applications for riders and clients.',
  fullDescription: 'A comprehensive delivery service platform consisting of a Laravel REST API and web dashboard for administration, along with two Flutter mobile applications: one for delivery riders and another for clients. The system enables real-time order tracking, payment processing, and efficient delivery management.',
  image: '/web-ss/web-1.jpg',
  screenshots: [
    // Web App Screenshots
    '/web-ss/web-1.jpg',
    '/web-ss/web-2.jpg',
    '/web-ss/web-3.jpg',
    '/web-ss/web-5.jpg',
    '/web-ss/web-6.jpg',
    '/web-ss/web-7.jpg',
    // Rider App Screenshots
    '/rider-ss/rider-1.jpg',
    '/rider-ss/rider-2.jpg',
    '/rider-ss/rider-3.jpg',
    '/rider-ss/rider-4.jpg',
    '/rider-ss/rider-5.jpg',
    '/rider-ss/rider-6.jpg',
    // Client App Screenshots
    '/client-ss/client-1.jpg',
    '/client-ss/client-2.jpg',
    '/client-ss/client-3.jpg',
    '/client-ss/client-4.jpg',
    '/client-ss/client-5.jpg',
    '/client-ss/client-6.jpg',
    '/client-ss/client-7.jpg',
  ],
  technologies: ['Laravel', 'PHP', 'Flutter', 'Dart', 'REST API', 'MySQL', 'Mobile Development'],
  category: 'fullstack',
  featured: true,
  components: [
    {
      name: 'Laravel API & Web Dashboard',
      description: 'Backend REST API and administrative web interface built with Laravel for managing orders, users, and deliveries.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'REST API'],
      screenshots: [
        '/web-ss/web-1.jpg',
        '/web-ss/web-2.jpg',
        '/web-ss/web-3.jpg',
        '/web-ss/web-5.jpg',
        '/web-ss/web-6.jpg',
        '/web-ss/web-7.jpg',
      ]
    },
    {
      name: 'Rider App (rider_v2_app)',
      description: 'Flutter mobile application for delivery riders to receive orders, navigate to locations, and update delivery status.',
      technologies: ['Flutter', 'Dart', 'Mobile Development'],
      screenshots: [
        '/rider-ss/rider-1.jpg',
        '/rider-ss/rider-2.jpg',
        '/rider-ss/rider-3.jpg',
        '/rider-ss/rider-4.jpg',
        '/rider-ss/rider-5.jpg',
        '/rider-ss/rider-6.jpg',
      ]
    },
    {
      name: 'Client App (ok_delivery)',
      description: 'Flutter mobile application for clients to place orders, track deliveries in real-time, and make payments.',
      technologies: ['Flutter', 'Dart', 'Mobile Development'],
      screenshots: [
        '/client-ss/client-1.jpg',
        '/client-ss/client-2.jpg',
        '/client-ss/client-3.jpg',
        '/client-ss/client-4.jpg',
        '/client-ss/client-5.jpg',
        '/client-ss/client-6.jpg',
        '/client-ss/client-7.jpg',
      ]
    }
  ]
};

