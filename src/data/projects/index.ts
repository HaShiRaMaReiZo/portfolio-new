// Import all project files here
import { deliveryProject } from './delivery-project';
import { apkManagerProject } from './apk-manager-project';
import { expenseTrackerProject } from './expense-tracker-project';

// Export all projects as an array
export const projects = [
  deliveryProject,
  apkManagerProject,
  expenseTrackerProject,
];

// Export types and categories
export { type Project, categories } from './types';

