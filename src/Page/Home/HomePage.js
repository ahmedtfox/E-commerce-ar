import NavBarLogin from "../../components/utility/NavBarLogin";
import Slider from "../../components/Home/Slider";
import HomeCategory from "../../components/Home/HomeCategory";
import CardProductsContainer from "../../components/Products/CardProductsContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import BrandFeatured from "../../components/Brand/BrandFeatured";
import Footer from "../../components/utility/Footer";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <div className="font" style={{ minHeight: "670px" }}>
        <Slider />
        <HomeCategory />
        <CardProductsContainer title="الاكثر مبيعا" />
        <DiscountSection />
        <CardProductsContainer title="الاكثر بحثا" />
        <BrandFeatured />
      </div>
    </Container>
  );
}

export default HomePage;
