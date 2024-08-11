export const roles = {
    User: 'User',
    Staff: 'Staff',
    Doctor: 'Doctor',
    Editor: 'Editor',
    Pathologist: 'Pathologist',
    Admin: 'Admin'
  };
  
  export const rolePermissions = {
    [roles.User]: ['/dashboard', '/book-appointment', '/payment'],
    [roles.Staff]: ['/dashboard', '/book-appointment', '/payment', '/manage-appointments'],
    [roles.Doctor]: ['/dashboard', '/view-reports'],
    [roles.Editor]: ['/dashboard', '/upload-report'],
    [roles.Pathologist]: ['/dashboard', '/validate-reports'],
    [roles.Admin]: ['/dashboard', '/manage-users', '/manage-payments']
  };
  