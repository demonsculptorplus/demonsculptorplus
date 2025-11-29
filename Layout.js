import React from 'react';

import CustomerLayout from './components/layouts/CustomerLayout';

export default function Layout({ children, currentPageName }) {
  // Always use customer layout - admin access is handled within pages
  return <CustomerLayout>{children}</CustomerLayout>;
}
