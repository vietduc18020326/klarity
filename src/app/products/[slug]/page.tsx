import { ProductSlugType } from "@/dummy";
import ProductDetailPage from "@/views/products/detail";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: ProductSlugType }>;
}) {
  const { slug } = await params;

  return <ProductDetailPage slug={slug} />;
}
