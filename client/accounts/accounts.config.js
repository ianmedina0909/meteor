AccountsTemplates.configure({
  showForgotPasswordLink: true,
  enablePasswordChange: true,
  sendVerificationEmail: true,
  confirmPassword: true,
});

AccountsTemplates.addFields([
  {
      _id: 'firstName',
      type: 'text',
      displayName: 'First Name',
      placeholder: 'Your First Name',
  },
  {
      _id: 'lastName',
      type: 'text',
      displayName: 'Last Name',
      placeholder: 'Your Last Name',
  },
]);