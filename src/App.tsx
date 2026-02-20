import { CartProvider } from '@/hooks/useCart';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import Products from '@/sections/Products';
import Categories from '@/sections/Categories';
import Testimonials from '@/sections/Testimonials';
import Newsletter from '@/sections/Newsletter';
import Footer from '@/sections/Footer';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Toaster 
          position="top-center" 
          richColors 
          toastOptions={{
            style: {
              fontFamily: 'Quicksand, sans-serif',
            },
          }}
        />
        <Header />
        <main>
          <Hero />
          <Features />
          <Products />
          <Categories />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
