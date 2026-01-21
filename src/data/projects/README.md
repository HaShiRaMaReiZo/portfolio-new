# Projects Data Structure

This folder contains individual project files. Each project has its own file, making it easy to add, remove, or update projects.

## How to Add a New Project

### Step 1: Create a New Project File

Create a new file in this folder (e.g., `expense-app.ts`) and copy the structure from `expense-app.example.ts`:

```typescript
import { Project } from './types';

export const expenseApp: Project = {
  id: 2, // Make sure this is unique
  title: 'Your Project Title',
  description: 'Short description for the card',
  fullDescription: 'Detailed description for the modal',
  image: '/your-project/main-image.jpg',
  screenshots: [
    '/your-project/screenshot1.jpg',
    '/your-project/screenshot2.jpg',
  ],
  technologies: ['React', 'Node.js', 'TypeScript'],
  category: 'web', // 'fullstack', 'web', or 'mobile'
  featured: true, // or false
  liveUrl: 'https://your-url.com', // Optional
  githubUrl: 'https://github.com/...', // Optional
  components: [ // Optional
    {
      name: 'Component Name',
      description: 'Component description',
      technologies: ['Tech1', 'Tech2']
    }
  ]
};
```

### Step 2: Add Images to Public Folder

1. Create a folder in `public/` for your project screenshots (e.g., `public/expense-app/`)
2. Add your main image and screenshots to that folder
3. Reference them in your project file using paths like `/expense-app/image.jpg`

### Step 3: Export Your Project

Open `index.ts` and:
1. Import your new project: `import { expenseApp } from './expense-app';`
2. Add it to the projects array: `expenseApp,`

Example:
```typescript
import { deliveryProject } from './delivery-project';
import { expenseApp } from './expense-app'; // Add this

export const projects = [
  deliveryProject,
  expenseApp, // Add this
];
```

That's it! Your new project will automatically appear in the Projects section.

## Project Properties

- **id**: Unique number for each project
- **title**: Project name (displayed on card)
- **description**: Short description (shown on card)
- **fullDescription**: Detailed description (shown in modal)
- **image**: Main image path (from public folder)
- **screenshots**: Array of screenshot paths (optional)
- **technologies**: Array of technology names
- **category**: 'fullstack', 'web', or 'mobile'
- **featured**: Boolean - shows "Featured" badge if true
- **liveUrl**: Optional - link to live project
- **githubUrl**: Optional - link to GitHub repository
- **components**: Optional - array of project components with their own descriptions

## File Structure

```
src/data/projects/
├── types.ts              # TypeScript interfaces and categories
├── index.ts              # Exports all projects
├── delivery-project.ts   # Delivery project data
├── expense-app.example.ts # Template for new projects
└── README.md             # This file
```

