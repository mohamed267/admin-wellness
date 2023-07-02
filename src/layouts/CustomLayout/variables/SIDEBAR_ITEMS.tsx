import Dashboard from "assets/icons/sidebar/Dashboard";
import User from "assets/icons/sidebar/User";
import { SideBarItem } from "types";
import Event from "assets/icons/sidebar/Event";
import Services from "assets/icons/sidebar/Services";
import Blog from "assets/icons/sidebar/Blog";
import Guide from "assets/icons/sidebar/Guide";
import Settings from "assets/icons/sidebar/Settings";




export const SIDEBAR_ITEMS: Array<SideBarItem> = [
    {
      label: 'dashboard',
      icon : Dashboard  ,
      href: "/dashboard", 
      activeKey: "/dashboard"
    },
    {
        label: 'users',
        icon : User  ,
        href: "#", 
        activeKey: "/users",
        children:[
          {
            label: 'clients',
            href: "/users/clients", 
            activeKey: "/users/clients",
          },
          {
            label: 'partners',
            href: "/users/partners", 
            activeKey: "/users/partners",
          }
        ]
    },
    {
      label: 'events',
      icon : Event  ,
      href: "/events", 
      activeKey: "/events"
    },
    {
      label: 'services',
      icon : Services  ,
      href: "/services", 
      activeKey: "/services"
    },
    {
      label: 'blog',
      icon : Blog  ,
      href: "/blog", 
      activeKey: "/blog"
    },
    {
      label: 'guide',
      icon : Guide  ,
      href: "/guide", 
      activeKey: "/guide"
    },
    {
      label: 'settings',
      icon : Settings  ,
      href: "/settings", 
      activeKey: "/settings"
    },

  
];