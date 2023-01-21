import Icons from "../../../constants/Icons";

const routes = [
    {
        path: "/client",
        name: "Dashboard",
        icon: <Icons.Dashboard size={20} />,
    },
    {
        path: "/client/productsCatalog",
        name: "Products Catalog",
        icon: <Icons.shop size={20} />,

    },
    {
        path: "/client/productList",
        name: "My Product List",
        icon: <Icons.list size={20} />,
        subRoutes: [
            {
                path: "/client/productList/",
                name: "List 1",
                icon: <Icons.dote size={20} />,
            },
            {
                path: "/client/productList/",
                name: "List 2",
                icon: <Icons.dote size={20}  />,
            }, 
            {
                // path: "/client/reports/orders",
                name: "Create new list",
                icon: <Icons.dote size={20} />,
                model:true
            },

        ]
            
    },
    {
        path: "/client/orders",
        name: "Orders  ",
        icon: <Icons.Products size={20} />,
    },
    {
        path: "/client/reports",
        name: "Reports",
        icon: <Icons.report size={20} />,
        subRoutes: [
            {
                path: "/client/reports/orders",
                name: "Orders reports ",
                icon: <Icons.dote size={20} />,
            },
            {
                path: "/client/reports/customers",
                name: "Top customers",
                icon: <Icons.dote size={20}  />,
            },
            {
                path: "/client/reports/products",
                name: "Top products",
                icon: <Icons.dote size={20}  />,
            },
            
            
        ],
    },
    {
        path: "/client/profile",
        name: "Profile",
        icon: <Icons.profile size={20} />,
    },

];

export default routes