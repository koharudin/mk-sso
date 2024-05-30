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
          id: 'table',
          title: 'Generate Token',
          type: 'item',
          icon: 'feather icon-server',
          url: '/login-token'
        },
        {
          id: 'table',
          title: 'Daftar Usulan',
          type: 'item',
          icon: 'feather icon-server',
          url: '/usulan-ku/daftar-usulan'
        },
        
        {
          id: 'table',
          title: 'Usulan Baru',
          type: 'item',
          icon: 'feather icon-server',
          url: '/usulan-ku/daftar-usulan/1/baru'
        }
        ,
        {
          id: 'table',
          title: 'Detail Usulan',
          type: 'item',
          icon: 'feather icon-server',
          url: '/usulan-ku/daftar-usulan/1/detail'
        },
        {
          id: 'table',
          title: 'Edit Usulan',
          type: 'item',
          icon: 'feather icon-server',
          url: '/usulan-ku/daftar-usulan/1/edit'
        }
      ]
    }
  ]
};

export default menuItems;
