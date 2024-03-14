import { useFetchProducts } from "./api/useFetchProducts";
import {
  Alert,
  AlertIcon,
  Box,
  CircularProgress,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ProductCard } from "./components/ProductCard";
import { useState } from "react";
import { CategoryFilter } from "./components/CategoryFilter";

function App() {
  const { data: products, isLoading, error } = useFetchProducts();

  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  const filteredProducts = selectedCategory
    ? products?.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <Container maxW="1280px">
        <Stack>
          <Heading>Products</Heading>
          <Text>Take a look on all the products!</Text>
          <Divider />
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Divider />
          {isLoading && <CircularProgress isIndeterminate />}
          {!!error && (
            <Alert status="error">
              <AlertIcon />
              There was an error when fetching the products
            </Alert>
          )}
          {!!filteredProducts && (
            <Wrap justifyContent="stretch" spacing={6}>
              {filteredProducts?.map((product) => (
                <WrapItem>
                  <ProductCard key={product.id} product={product} />
                </WrapItem>
              ))}
            </Wrap>
          )}
        </Stack>
      </Container>
    </>
  );
}

export default App;
