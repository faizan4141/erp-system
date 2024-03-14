import { render } from '@testing-library/react';
import App from './App';

test('renders App Component', () => {
 const { getByText } = render(<App />);
 const dashboardHeading = getByText('Dashboard');
 const productsManagementButton = getByText('Products Management');
 const ordersManagementButton = getByText('Orders Management');
 const ordersCalendarViewButton = getByText('View Orders Calendar');

 expect(dashboardHeading).toBeInTheDocument();

 expect(productsManagementButton).toBeInTheDocument();

 expect(ordersManagementButton).toBeInTheDocument();

 expect(ordersCalendarViewButton).toBeInTheDocument();

});
