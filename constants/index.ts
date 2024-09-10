export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Create Perks',
      route: '/events/create',
    },
    {
      label: 'FAQs for Users',
      route: '/faq/consumer',
    },
    {
      label: 'FAQs for Organizers',
      route: '/faq/organizer',
    },
    {
      label: 'My Profile',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }