const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/default'
        }
      ]
    },
    {
      id: 'ui-element',
      title: 'Usulan',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'menu-generate-token',
          title: 'Generate Token',
          type: 'item',
          icon: 'feather icon-server',
          url: '/login-token'
        },
        {
          id: 'menu-daftar-usulan',
          title: 'Daftar Usulan',
          type: 'item',
          icon: 'feather icon-server',
          url: '/usulan-ku/daftar-usulan'
        },
        
        {
          id: 'verifikasi-usulan',
          title: 'Verifikasi Usulan',
          type: 'item',
          icon: 'feather icon-server',
          url: '/verifikasi-usulan'
        }
       
      ]
    }
  ]
};

export default menuItems;
