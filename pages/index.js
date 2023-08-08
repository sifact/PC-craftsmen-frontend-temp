import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProducts from "@/components/UI/FeaturedProducts";

export default function Home({ products, categories }) {
  return (
    <>
      <Banner />

      <FeaturedProducts products={products} />
      <FeaturedCategories categories={categories} />
    </>
  );
}

export const getStaticPropsProducts = async () => {
  const res = await fetch(
    "https://pc-craftsmen-backend.vercel.app/api/product"
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};

export const getStaticPropsCategories = async () => {
  const res = await fetch(
    "https://pc-craftsmen-backend.vercel.app/api/category"
  );
  const data = await res.json();

  return {
    props: {
      categories: data,
    },
    revalidate: 10,
  };
};

export async function getStaticProps() {
  const productsData = await getStaticPropsProducts();

  const categoriesData = await getStaticPropsCategories();

  return {
    props: {
      products: productsData.props.products,
      categories: categoriesData.props.categories,
    },
    revalidate: 10,
  };
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
