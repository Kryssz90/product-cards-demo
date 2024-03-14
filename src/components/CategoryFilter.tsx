import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useFetchProducts } from "../api/useFetchProducts";

interface Props {
  selectedCategory?: string;
  setSelectedCategory: (category: string) => void;
}

export const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  const { data: products } = useFetchProducts();

  const categories = products && [
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <FormControl>
      <FormLabel>Filter by category</FormLabel>
      <Select
        bg={"white"}
        placeholder="Select category"
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        {categories?.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};
