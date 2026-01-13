import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import './App.css';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminProductsPage } from './pages/admin/AdminProductsPage';
import { AdminOrdersPage } from './pages/admin/AdminOrdersPage';
import { AdminPaymentsPage } from './pages/admin/AdminPaymentsPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { ProtectedAdminRoute } from './components/ProtectedAdminRoute';
import Terms from './pages/terms';
import PrivacyPolicy from './pages/privacy-policy';
import RefundPolicy from './pages/refund-policy';
import ShippingPolicy from './pages/shipping-policy';
import ContactUs from './pages/contact-us';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Noise texture overlay */}
        <div className="noise-overlay" />
        
        <Routes>
          {/* Customer Routes */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="pt-[140px] md:pt-[160px]">
                  <HomePage />
                </main>
              </>
            }
          />

          <Route
            path="/products"
            element={
              <>
                <Header />
                <main className="pt-[140px] md:pt-[160px]">
                  <ProductsPage />
                </main>
              </>
            }
          />

          <Route
            path="/product/:id"
            element={
              <>
                <Header />
                <main className="pt-[140px] md:pt-[160px]">
                  <ProductDetailPage />
                </main>
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <main className="pt-[140px] md:pt-[160px]">
                  <CheckoutPage />
                </main>
              </>
            }
          />

          <Route
            path="/order-confirmation/:orderNumber"
            element={
              <>
                <Header />
                <main className="pt-[140px] md:pt-[160px]">
                  <OrderConfirmationPage />
                </main>
              </>
            }
          />

          <Route
            path="/track-order"
            element={
              <>
                <Header />
                <main className="pt-[140px] md:pt-[160px]">
                  <OrderTrackingPage />
                </main>
              </>
            }
          />

          <Route
            path="/terms"
            element={
              <>
                <Header />
                <main className="pt-[140px] md:pt-[160px]">
                  <Terms />
                </main>
              </>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <>
                <Header />
                <main className="pt-[140px] md:pt-[160px]">
                  <PrivacyPolicy />
                </main>
              </>
            }
          />

          <Route
            path="/refund-policy"
            element={
              <>
                <Header />
                <main className="pt-[140px] md:pt-[160px]">
                  <RefundPolicy />
                </main>
              </>
            }
          />

          <Route
            path="/shipping-policy"
            element={
              <>
                <Header />
                <main className="pt-[140px] md:pt-[160px]">
                  <ShippingPolicy />
                </main>
              </>
            }
          />

          <Route
            path="/contact-us"
            element={
              <>
                <Header />
                <main className="pt-[140px] md:pt-[160px]">
                  <ContactUs />
                </main>
              </>
            }
          />


          
          {/* Admin Routes - Protected */}
          <Route path="/admin" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<ProtectedAdminRoute><AdminDashboardPage /></ProtectedAdminRoute>} />
          <Route path="/admin/products" element={<ProtectedAdminRoute><AdminProductsPage /></ProtectedAdminRoute>} />
          <Route path="/admin/orders" element={<ProtectedAdminRoute><AdminOrdersPage /></ProtectedAdminRoute>} />
          <Route path="/admin/payments" element={<ProtectedAdminRoute><AdminPaymentsPage /></ProtectedAdminRoute>} />
          <Route path="/admin/settings" element={<ProtectedAdminRoute><AdminSettingsPage /></ProtectedAdminRoute>} />
        </Routes>
        
       <Footer />

        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              border: '2px solid #000',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 'bold'
            }
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;