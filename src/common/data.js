// src/common/data.js

export const menuData = {
  logo: "GoStock",
  totalInvestment: {
    amount: "$5380.90",
    percentageChange: "+18.10%",
  },
  menu: [
    {
      name: "Home",
      icon: "home",
      link: "/home",
    },
    {
      name: "Dashboard",
      icon: "dashboard",
      link: "/dashboard",
      active: true,
    },
    {
      name: "Wallet",
      icon: "wallet",
      link: "/wallet",
    },
    {
      name: "News",
      icon: "news",
      link: "/news",
    },
    {
      name: "Stock & Fund",
      icon: "stock_fund",
      link: "/stock-fund",
      subMenu: [
        {
          name: "Stock",
          link: "/stock",
        },
        {
          name: "Cryptocurrency",
          link: "/cryptocurrency",
        },
        {
          name: "Mutual Fund",
          link: "/mutual-fund",
        },
        {
          name: "Gold",
          link: "/gold",
        },
      ],
    },
    {
      name: "Our community",
      icon: "community",
      link: "/community",
    },
    {
      name: "Settings",
      icon: "settings",
      link: "/settings",
    },
    {
      name: "Contact us",
      icon: "contact_us",
      link: "/contact-us",
    },
  ],
  notifications: {
    count: 6,
    link: "/notifications",
  },
};
