import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Image,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider,
  Button,
} from "@chakra-ui/react";
import { Product } from "../types";

export const ProductCard = ({ product }: { product: Product }) => (
  <Card maxW="sm" h="full" variant="elevated">
    <CardHeader>
      <Box h={20}>
        <Heading size="md">{product.title}</Heading>
        <Text>{product.description}</Text>
      </Box>
    </CardHeader>
    <CardBody>
      <Stack>
        <Image
          src={product.thumbnail}
          alt={`Thumbnail of ${product.title}`}
          borderRadius="lg"
          h={64}
          objectFit="contain"
        />
        <Divider />
        <Stat>
          <StatLabel>{product.brand}</StatLabel>
          <StatNumber>${product.price}</StatNumber>
          <StatHelpText>{product.stock} in stock</StatHelpText>
        </Stat>
      </Stack>

      <Button colorScheme="teal" size="sm" w="100%">
        Add to cart
      </Button>
    </CardBody>
  </Card>
);
