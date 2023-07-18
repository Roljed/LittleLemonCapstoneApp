import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm/BookingForm';
import BookingPage from './Pages/Booking/BookingPage';


test('Checking Occasion Section', () => {
  render( <BookingForm />);

  const occurence = screen.getByText("Occasion");

  expect(occurence).toBeInTheDocument();
})