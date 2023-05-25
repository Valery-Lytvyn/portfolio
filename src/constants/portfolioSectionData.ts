import htmlIcon from "../assets/icon/html_icon.png";
import cssIcon from "../assets/icon/css_icon.png";
import sassIcon from "../assets/icon/sass_icon.png";
import jsIcon from "../assets/icon/js_icon.png";
import bootstrapIcon from "../assets/icon/bootstrap_icon.png";
import reactIcon from "../assets/icon/react_icon.png";
import reduxIcon from "../assets/icon/redux_icon.png";
import eShop from "../assets/images/e_shop.webp";
import shop from "../assets/images/shop.webp";
import gumClub from "../assets/images/gum_club.webp";
import app3D from "../assets/images/3-D_portfolio.webp";
import weather from "../assets/images/weather_app.webp";
import todo from "../assets/images/todo.webp";
import eShopSmall from "../assets/images/e_shop_small.webp";
import shopSmall from "../assets/images/shop_small.webp";
import gumClubSmall from "../assets/images/gum_club_small.webp";
import app3DSmall from "../assets/images/3-D_portfolio_small.webp";
import weatherSmall from "../assets/images/weather_app_small.webp";
import todoSmall from "../assets/images/todo_small.webp";

export interface ProjectData {
  id: number;
  picture: string;
  smallPicture: string;
  label: string;
  projectName: string;
  icons: Array<string>;
}

export const projects: Array<ProjectData> = [
  {
    id: 1,
    picture: shop,
    smallPicture: shopSmall,
    label: "commerce_app",
    projectName: "Shop",
    icons: [reactIcon, reduxIcon, sassIcon, bootstrapIcon],
  },
  {
    id: 2,
    picture: gumClub,
    smallPicture: gumClubSmall,
    label: "gym-club",
    projectName: "Gym club",
    icons: [reactIcon, sassIcon, bootstrapIcon],
  },
  {
    id: 3,
    picture: app3D,
    smallPicture: app3DSmall,
    label: "3d-portfolio",
    projectName: "3D portfolio",
    icons: [reactIcon, sassIcon, bootstrapIcon],
  },
  {
    id: 4,
    picture: eShop,
    smallPicture: eShopSmall,
    label: "shop_app",
    projectName: "Shop",
    icons: [reactIcon, reduxIcon, sassIcon, bootstrapIcon],
  },
  {
    id: 5,
    picture: todo,
    smallPicture: todoSmall,
    label: "Todo_App",
    projectName: "Todo",
    icons: [reactIcon, sassIcon, bootstrapIcon],
  },
  {
    id: 6,
    picture: weather,
    smallPicture: weatherSmall,
    label: "weather_forecast",
    projectName: "Forecast weather",
    icons: [jsIcon, cssIcon, htmlIcon],
  },
];

interface PortfolioData {
  title: string;
  subtitle: string;
}

export const portfolioTextData: PortfolioData = {
  title: "My works",
  subtitle:
    "Every project comprises a small portion of coding, a significant amount of time devoted, and an even greater amount of heartfelt dedication :)",
};
