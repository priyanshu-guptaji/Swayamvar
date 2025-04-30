import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import HomePage from '../Pages/HomePage';
import BrideCollection from '../Pages/BrideCollection';
import GroomCollection from '../Pages/GroomCollection';
import DecorationPage from '../Pages/DecorationPage';
import ContactPage from '../Pages/ContactPage';
import BridalWear from '../Pages/BrideCollection/Categories/BridalWear';
import BridalAccessories from '../Pages/BrideCollection/Categories/BridalAccessories';
import BridalMehendi from '../Pages/BrideCollection/Categories/BridalMehendi';
import BridalFootwear from '../Pages/BrideCollection/Categories/BridalFootwear';
import Heritage from '../Pages/BrideCollection/Categories/Heritage';
import GroomWear from '../Pages/GroomCollection/Categories/GroomWear';
import GroomAccessories from '../Pages/GroomCollection/Categories/GroomAccessories';
import GroomFootwear from '../Pages/GroomCollection/Categories/GroomFootwear';
import GroomMehendi from '../Pages/GroomCollection/Categories/GroomMehendi';
import GroomStateWear from '../Pages/GroomCollection/Categories/GroomStateWear';
import ErrorBoundary from '../components/ErrorBoundary';
import WishlistPage from '../Pages/WishlistPage';
import VenuePage from '../Pages/VenuePage';
import ReturnGiftsPage from '../Pages/ReturnGiftsPage';
import InvitationCardsPage from '../Pages/InvitationCardsPage';
import GiftsPage from '../Pages/GiftsPage';
import EInvitationCardsPage from '../Pages/EInvitationCardsPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/venues',
        element: <VenuePage />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/contact',
        element: <ContactPage />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/decorations',
        element: <DecorationPage />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/gifts',
        element: <GiftsPage />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/return-gifts',
        element: <ReturnGiftsPage />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/invitation-cards',
        element: <InvitationCardsPage />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/e-invitation-cards',
        element: <EInvitationCardsPage />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/bride-collection',
        element: <BrideCollection />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/groom-collection',
        element: <GroomCollection />,
        errorElement: <ErrorBoundary />
      },
      // Bridal Category Routes
      {
        path: '/bride-collection/wear',
        element: <BridalWear />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/bride-collection/accessories',
        element: <BridalAccessories />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/bride-collection/mehendi',
        element: <BridalMehendi />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/bride-collection/footwear',
        element: <BridalFootwear />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/bride-collection/heritage',
        element: <Heritage />,
        errorElement: <ErrorBoundary />
      },
      // Groom Category Routes
      {
        path: '/groom-collection/wear',
        element: <GroomWear />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/groom-collection/accessories',
        element: <GroomAccessories />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/groom-collection/footwear',
        element: <GroomFootwear />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/groom-collection/mehendi',
        element: <GroomMehendi />,
        errorElement: <ErrorBoundary />
      },
      {
        path: '/groom-collection/heritage',
        element: <GroomStateWear />,
        errorElement: <ErrorBoundary />
      },
      {
        path: 'wishlist',
        element: <WishlistPage />,
        errorElement: <ErrorBoundary />
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
