import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './Components/BookingForm/BookingForm';


test('Checking different sections', () => {
  render( <BookingForm />);

  const occurence = screen.getByText("Occasion");
  expect(occurence).toBeInTheDocument();

  expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
  expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
  expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
  expect(screen.getByText('Make Your Reservation')).toBeInTheDocument();
})

test('Make a reservation', () => {
  render( <BookingForm />);
  const datepicker = screen.getByLabelText('Choose date');
  const selectTime = screen.getByLabelText('Choose time');
  const numberInput = screen.getByLabelText('Number of guests');
  const submitButton = screen.getByText('Make Your Reservation');

  const date = new Date()
  const currentDate = date.getDate()
  fireEvent.change(datepicker, { target: { value: {currentDate} } });
  fireEvent.change(selectTime, { target: { value: '18:00' } });
  fireEvent.change(numberInput, { target: { value: 5 } });

  fireEvent.click(submitButton);

  expect(screen.getByText('Make Your Reservation')).toBeInTheDocument();
})