import { Project } from './types';

export const expenseTrackerProject: Project = {
  id: 3,
  title: 'Expense Tracker App',
  description: 'A React Native mobile application with Node.js backend for tracking personal expenses. Built as a learning project to practice React Native fundamentals.',
  fullDescription: 'A React Native mobile application with Node.js backend for tracking personal expenses. This was my first React Native project, built for learning and training purposes. The app allows users to add, view, and manage their expenses. While the UI is basic, it demonstrates understanding of React Native core concepts, state management, and API integration with a Node.js backend.',
  image: '/expense-tracker-ss/et1.jpg',
  screenshots: [
    '/expense-tracker-ss/et1.jpg',
    '/expense-tracker-ss/et2.jpg',
    '/expense-tracker-ss/et3.jpg',
    '/expense-tracker-ss/et4.jpg',
    '/expense-tracker-ss/et5.jpg',
    '/expense-tracker-ss/et6.jpg',
    '/expense-tracker-ss/et7.jpg',
    '/expense-tracker-ss/et8.jpg',
    '/expense-tracker-ss/et9.jpg',
  ],
  technologies: ['React Native', 'Node.js', 'JavaScript', 'Mobile Development', 'REST API'],
  category: 'mobile',
  featured: false,
  components: [
    {
      name: 'React Native Mobile App',
      description: 'Mobile application built with React Native for tracking expenses. Includes features for adding, viewing, and managing expenses.',
      technologies: ['React Native', 'JavaScript', 'Mobile Development'],
      screenshots: [
        '/expense-tracker-ss/et1.jpg',
        '/expense-tracker-ss/et2.jpg',
        '/expense-tracker-ss/et3.jpg',
        '/expense-tracker-ss/et4.jpg',
        '/expense-tracker-ss/et5.jpg',
        '/expense-tracker-ss/et6.jpg',
        '/expense-tracker-ss/et7.jpg',
        '/expense-tracker-ss/et8.jpg',
        '/expense-tracker-ss/et9.jpg',
      ]
    },
    {
      name: 'Node.js Backend',
      description: 'RESTful API backend built with Node.js to handle expense data, user authentication, and data persistence.',
      technologies: ['Node.js', 'JavaScript', 'REST API'],
    }
  ]
};
