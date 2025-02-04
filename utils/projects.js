import project1 from '../src/assets/projects/1.png';
import project2 from '../src/assets/projects/2.jpg';
import project3 from '../src/assets/projects/3.png';

export const projects = [
    {
        id: 1,
        title: 'Bongo Explorer | Tour & Travel',
        image: project1,
        description: 'A complete travel guide online application based on React that connects visitors, tour guides, and administrators. It has a multi-role system with separate dashboards for admins, guides, and travellers. Administrators have complete control over tour packages, guide requests, and other details. Guides may view and accept tour assignments, while tourists can browse various packages, choose their preferred excursions, and select guides. The platform also includes a secure payment mechanism for seamless transactions, as well as a strong authentication system to assure secure access for each role.',
        category: 'FULL-STACK',
        techStacks: ['React', 'Tailwing CSS', 'Ant Design', 'Firebase', 'Express JS', 'MongoDB'],
        liveLink: 'https://bongo-explorer.web.app',
        githubClient: 'https://github.com/Sadi73/bongo-explorer-client-side',
        githubServer: 'https://github.com/Sadi73/bongo-explorer-server-side',
    },
    {
        id: 2,
        title: 'Cosystay | Hotel Management',
        image: project2,
        description: 'A web application for hotel employees and customers that manages hotel rooms and bookings. The app features a simple dashboard where hotel staff can add new rooms, handle reservations, and track guest information. The platform also allows guests to browse available rooms and make reservations. It makes it simple and effective for hotel personnel and guests to manage hotel operations and reservations.',
        category: 'FULL-STACK',
        techStacks: ['Next JS', 'Tailwing CSS', 'Material UI', 'Express JS', 'MongoDB', 'Node Mailer', 'Socket.io'],
        liveLink: 'https://hotel-booking-system-gilt.vercel.app',
        githubClient: 'https://github.com/Sadi73/hotel-booking-system',
        githubServer: 'https://github.com/Sadi73/hotel-booking-system-server',
    },
    {
        id: 3,
        title: 'Banu & Haque Homes',
        image: project3,
        description: 'A simple real estate web application where users can browse a list of properties available for sale or rent. By clicking on a property, users can view detailed information about it. The platform also includes an authentication system to ensure secure access for users.',
        category: 'FRONT-END',
        techStacks: ['React', 'Tailwing CSS', 'Firebase'],
        liveLink: 'https://banu-and-haque-homes.web.app',
        githubClient: 'https://github.com/Sadi73/banu-and-haque-homes',
    },
];
