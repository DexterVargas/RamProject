type Links = {
    id:string;
    title:string;
    ref: string;
}

export const navLinks:Links[] = [
    {
        id: "home",
        title: "Home",
        ref: 'homeRef'
    },
    {
        id: "services",
        title: "Our Services",
        ref: 'servicesRef'
        
    },
    {
        id: "client",
        title: "Our Clients",
        ref: 'clientRef'
    },
    {
        id: "about",
        title: "About Us",
        ref: 'aboutRef'
    },
    {
        id: "contact",
        title: "Contact Us",
        ref: 'contactRef'
    },
    {
        id: "careers",
        title: "Careers",
        ref: 'careersRef'
    },
];

export const pageTitle = {
    title : 'KreiFos',
    subTitle: 'KreiFos Business Solutions',
    otherTitle: ''
}