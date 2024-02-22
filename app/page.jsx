import AboutUs from "./components/AboutUs/AboutUs";
import Blog from "./components/Blogs/Blog";
import Customer from "./components/CustomerStory/Customer";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/page";
import Logo from "./components/Logos/Logo";
import Pricing from "./components/PricingPlan/Pricing";
import ProductFeature from "./components/ProductFeature/page";
import ProductFeatureOne from "./components/ProductFeature1/ProductFeature";
import Rating from "./components/Rating/Rating";
import Work from "./components/Works/Work";

export default function Home() {
  return (
    <>
      <Header />
      <ProductFeature/>
      <AboutUs/>
      <ProductFeatureOne/>
      <Work/>
      <Rating/>
      <Customer/>
      <Pricing/>
      <Faq/>
      <Blog/>
      <Logo/>
      <Footer/>
    </>
  );
}
