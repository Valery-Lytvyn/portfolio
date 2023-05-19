import htmlIcon from '../assets/icon/html_icon.png';
import cssIcon from '../assets/icon/css_icon.png';
import sassIcon from '../assets/icon/sass_icon.png';
import jsIcon from '../assets/icon/js_icon.png';
import bootstrapIcon from '../assets/icon/bootstrap_icon.png';
import reactIcon from '../assets/icon/react_icon.png';
import reduxIcon from '../assets/icon/redux_icon.png';
import eShop from '../assets/images/e_shop.webp';
import shop from '../assets/images/shop.webp';
import gumClub from '../assets/images/gum_club.webp';
import app3D from '../assets/images/3-D_portfolio.webp';
import weather from '../assets/images/weather_app.webp';
import todo from '../assets/images/todo.webp';
import eShopSmall from '../assets/images/e_shop_small.webp';
import shopSmall from '../assets/images/shop_small.webp';
import gumClubSmall from '../assets/images/gum_club_small.webp';
import app3DSmall from '../assets/images/3-D_portfolio_small.webp';
import weatherSmall from '../assets/images/weather_app_small.webp';
import todoSmall from '../assets/images/todo_small.webp';


export const projects = [
   {
      id: 1,
      picture: shop,
      smallPicture: shopSmall,
      label: 'commerce_app',
      icons: [reactIcon, reduxIcon, sassIcon, bootstrapIcon]
   },
   {
      id: 2,
      picture: gumClub,
      smallPicture: gumClubSmall,
      label: 'gym-club',
      icons: [reactIcon, sassIcon, bootstrapIcon]
   },
   {
      id: 3,
      picture: app3D,
      smallPicture: app3DSmall,
      label: '3d-portfolio',
      icons: [reactIcon, sassIcon, bootstrapIcon]
   },
   {
      id: 4,
      picture: eShop,
      smallPicture: eShopSmall,
      label: 'shop_app',
      icons: [reactIcon, reduxIcon, sassIcon, bootstrapIcon]
   },
   {
      id: 5,
      picture: todo,
      smallPicture: todoSmall,
      label: 'Todo_App',
      icons: [reactIcon, sassIcon, bootstrapIcon]
   },
   {
      id: 6,
      picture: weather,
      smallPicture: weatherSmall,
      label: 'weather_forecast',
      icons: [jsIcon, cssIcon, htmlIcon]
   },
]