import { redirect } from 'next/navigation';

// The /products page has been promoted to the homepage.
export default function Products() {
  redirect('/');
}
