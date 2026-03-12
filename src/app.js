import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, 'views'));


const breakfastItems = [
    { name: 'BBQ Chicken', image: '/img/menu-1.jpg', delay: '0.1s' },
    { name: 'Grilled Meat', image: '/img/menu-2.jpg', delay: '0.2s' },
    { name: 'Pasta Dish', image: '/img/menu-3.jpg', delay: '0.3s' },
    { name: 'Special Burger', image: '/img/menu-4.jpg', delay: '0.4s' },
    { name: 'Roasted Chicken', image: '/img/menu-5.jpg', delay: '0.5s' },
    { name: 'Seafood Plate', image: '/img/menu-6.jpg', delay: '0.6s' },
    { name: 'Steak Meal', image: '/img/menu-7.jpg', delay: '0.7s' },
    { name: 'Chef Special', image: '/img/menu-8.jpg', delay: '0.8s' }
];

const lunchItems = [
    { name: 'Lunch Chicken', image: '/img/menu-2.jpg', delay: '0.1s' },
    { name: 'Lunch Pasta', image: '/img/menu-3.jpg', delay: '0.2s' },
    { name: 'Lunch Burger', image: '/img/menu-4.jpg', delay: '0.3s' },
    { name: 'Lunch Special', image: '/img/menu-5.jpg', delay: '0.4s' },
    { name: 'Lunch Seafood', image: '/img/menu-6.jpg', delay: '0.5s' },
    { name: 'Lunch Steak', image: '/img/menu-7.jpg', delay: '0.6s' },
    { name: 'Lunch Chef Mix', image: '/img/menu-8.jpg', delay: '0.7s' },
    { name: 'Lunch Classic', image: '/img/menu-1.jpg', delay: '0.8s' }
];

const dinnerItems = [
    { name: 'Dinner Pasta', image: '/img/menu-3.jpg', delay: '0.1s' },
    { name: 'Dinner Burger', image: '/img/menu-4.jpg', delay: '0.2s' },
    { name: 'Dinner Chicken', image: '/img/menu-5.jpg', delay: '0.3s' },
    { name: 'Dinner Seafood', image: '/img/menu-6.jpg', delay: '0.4s' },
    { name: 'Dinner Steak', image: '/img/menu-7.jpg', delay: '0.5s' },
    { name: 'Dinner Special', image: '/img/menu-8.jpg', delay: '0.6s' },
    { name: 'Dinner Classic', image: '/img/menu-1.jpg', delay: '0.7s' },
    { name: 'Dinner Mix', image: '/img/menu-2.jpg', delay: '0.8s' }
];
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home | Chefer',
        breakfastItems,
        lunchItems,
        dinnerItems
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About | Chefer' });
});

app.get('/menu', (req, res) => {
    res.render('menu', {
        title: 'Menu | Chefer',
        breakfastItems,
        lunchItems,
        dinnerItems
    });
});

app.get('/team', (req, res) => {
    res.render('team', {
        title: 'Chefs | Chefer'
    });
});

app.get('/testimonial', (req, res) => {
    res.render('testimonial', {
        title: 'Testimonial | Chefer'
    });
});

app.get('/blog', (req, res) => {
    res.render('blog', {
        title: 'Blog | Chefer'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact | Chefer'
    });
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404 | Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});