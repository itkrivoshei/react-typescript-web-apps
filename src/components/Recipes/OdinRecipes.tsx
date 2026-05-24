import React, { useMemo, useState } from 'react';
import {
  Button,
  List,
  ListItem,
  Typography,
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  ThemeProvider,
  createTheme,
  Stack,
  Chip,
  Divider,
} from '@mui/material';

type RecipeId = 'homemade-lasagna' | 'acorn-squash' | 'microwave-baked-potato';

interface Recipe {
  id: RecipeId;
  title: string;
  imageSrc: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

interface RecipeListProps {
  recipes: Recipe[];
  onSelectRecipe: (recipeId: RecipeId) => void;
}

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f59e0b',
    },
    secondary: {
      main: '#fed7aa',
    },
    background: {
      default: '#1c1917',
      paper: '#292524',
    },
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.06em',
    },
    h3: {
      fontWeight: 800,
      letterSpacing: '-0.04em',
    },
  },
  shape: {
    borderRadius: 18,
  },
});

const recipes: Recipe[] = [
  {
    id: 'homemade-lasagna',
    title: 'Homemade Lasagna',
    imageSrc:
      'https://www.allrecipes.com/thmb/zZCLBop9DmB05w3z1LtTtWUGjcY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19344_homemade-lasagna_Rita2-1x1-1-b4f53c3ba2f4475c97665908a6fd1783.jpg',
    description:
      "This traditional lasagna recipe is layered with a rich meat sauce and a creamy parmesan white sauce, plus the perfect amount of mozzarella cheese! You won't find a better recipe for homemade lasagna.",
    ingredients: [
      '12 lasagna noodles',
      '500g of ground beef',
      '1 onion, chopped',
      '2 cloves of garlic, minced',
      '2 cups ricotta cheese',
      '1 egg',
      '3 cups shredded mozzarella cheese',
      '3 cups grated Parmesan cheese',
      '2 tablespoons fresh basil',
      '2 cups tomato sauce',
      'Salt and pepper to taste',
    ],
    steps: [
      'Preheat oven to 375°F (190°C).',
      'In a large pot, cook lasagna noodles in boiling water until al dente. Rinse with cold water and drain well.',
      'In a large skillet, cook and stir ground beef, onion, and garlic over medium heat until brown. Add tomato sauce and basil; simmer for 10 minutes.',
      'In a mixing bowl, combine ricotta cheese, egg, salt, and pepper; mix well.',
      'Spread a thin layer of meat sauce in the bottom of a baking dish. Layer with lasagna noodles, ricotta mixture, mozzarella, parmesan, and meat sauce. Repeat layers until all ingredients are used, finishing with a layer of mozzarella and Parmesan.',
      'Bake in preheated oven for 50 minutes. Let stand for 10 minutes before serving.',
    ],
  },
  {
    id: 'acorn-squash',
    title: 'Acorn Squash',
    imageSrc:
      'https://www.allrecipes.com/thmb/gWKtlXa_borjWzer06AMsIllJOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/16796-acorn-squash-1x1-76-a112f8ea8d90419ea1836dca402d9d8c.jpg',
    description:
      "Learn how to cook acorn squash using this quick and easy recipe. It's sweet and buttery — my family loves it!",
    ingredients: [
      '1 medium acorn squash, halved and seeded',
      '2 tablespoons brown sugar',
      '1 tablespoon butter',
    ],
    steps: [
      'Preheat the oven to 350 degrees F (175 degrees C).',
      'Place acorn squash halves cut-side down onto a cookie sheet. Bake in the preheated oven until flesh begins to soften, about 30 to 45 minutes.',
      'Remove squash from the oven and transfer one squash half, cut-side up, to a deep baking dish. Spoon butter and brown sugar into the cavity. Place remaining squash half, cut-side down, over top to seal.',
      'Return to the oven and continue to bake until flesh is soft, 30 minutes.',
    ],
  },
  {
    id: 'microwave-baked-potato',
    title: 'Microwave Baked Potato',
    imageSrc:
      'https://www.allrecipes.com/thmb/cxaoqgpqkLuAiImkSFIxPKz_yKw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/85337-microwave-baked-potato-21-edefae39276544be801966be339afbf2.jpg',
    description:
      'A quick and easy way to get the comfort of a baked potato without the wait. This microwave version is just as tasty and satisfying.',
    ingredients: [
      '1 large russet potato',
      '1 teaspoon olive oil',
      'Salt and pepper to taste',
      'Your favorite potato toppings',
    ],
    steps: [
      'Thoroughly wash and prick your potato with a fork. This allows steam to release as it’s cooking.',
      'Rub the potato with the olive oil and sprinkle with salt and pepper.',
      'Place potato on microwave-safe dish and microwave on high for 5 minutes. Flip the potato and cook for an additional 5 minutes.',
      "Using a towel or oven mitt, gently squeeze the sides of the potato. If it's soft, it's done. If not, continue to microwave and check at 1-minute intervals.",
      'Split the potato down the middle, fluff with a fork, and add your favorite toppings.',
    ],
  },
];

const pageBackground =
  'radial-gradient(circle at top left, rgba(245, 158, 11, 0.18), transparent 30rem), radial-gradient(circle at bottom right, rgba(120, 53, 15, 0.3), transparent 28rem), #1c1917';

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onSelectRecipe }) => {
  return (
    <Container
      component='main'
      maxWidth='lg'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        py: { xs: 5, md: 8 },
      }}
    >
      <Box sx={{ maxWidth: 780, mb: { xs: 4, md: 5 } }}>
        <Typography
          variant='overline'
          color='primary'
          sx={{ fontWeight: 800, letterSpacing: '0.18em' }}
        >
          Simple cookbook
        </Typography>
        <Typography
          variant='h1'
          sx={{
            mt: 1,
            color: 'secondary.main',
            fontSize: { xs: '3rem', md: '5rem' },
            lineHeight: 0.95,
          }}
        >
          Odin Recipes
        </Typography>
        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ mt: 2, maxWidth: 640, lineHeight: 1.8 }}
        >
          A small recipe collection with the original cooking-school feel,
          cleaned up with modern cards, warmer contrast, and clearer reading
          flow.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, minmax(0, 1fr))',
          },
          gap: 2.5,
        }}
      >
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            sx={{
              height: '100%',
              overflow: 'hidden',
              border: '1px solid rgba(245, 158, 11, 0.16)',
              background:
                'linear-gradient(180deg, rgba(68, 64, 60, 0.98), rgba(41, 37, 36, 0.98))',
              boxShadow: '0 24px 80px rgba(0, 0, 0, 0.26)',
            }}
          >
            <CardActionArea
              onClick={() => onSelectRecipe(recipe.id)}
              sx={{ height: '100%', alignItems: 'stretch' }}
            >
              <CardMedia
                component='img'
                image={recipe.imageSrc}
                alt={recipe.title}
                sx={{ height: 210, objectFit: 'cover' }}
              />
              <CardContent sx={{ p: 2.5 }}>
                <Stack direction='row' spacing={1} sx={{ mb: 1.5 }}>
                  <Chip
                    size='small'
                    label={`${recipe.ingredients.length} ingredients`}
                    color='primary'
                    variant='outlined'
                  />
                  <Chip
                    size='small'
                    label={`${recipe.steps.length} steps`}
                    variant='outlined'
                  />
                </Stack>
                <Typography variant='h5' color='secondary.main' gutterBottom>
                  {recipe.title}
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{ lineHeight: 1.7 }}
                >
                  {recipe.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack }) => {
  return (
    <Container component='main' maxWidth='md' sx={{ py: { xs: 3, md: 6 } }}>
      <Button variant='outlined' color='primary' onClick={onBack} sx={{ mb: 3 }}>
        Back to Recipes
      </Button>

      <Card
        sx={{
          overflow: 'hidden',
          border: '1px solid rgba(245, 158, 11, 0.18)',
          background:
            'linear-gradient(180deg, rgba(68, 64, 60, 0.98), rgba(41, 37, 36, 0.98))',
          boxShadow: '0 28px 90px rgba(0, 0, 0, 0.32)',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component='img'
            image={recipe.imageSrc}
            alt={recipe.title}
            sx={{ height: { xs: 260, md: 360 }, objectFit: 'cover' }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, transparent 30%, rgba(28, 25, 23, 0.86) 100%)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: 32 },
              right: { xs: 20, md: 32 },
              bottom: { xs: 20, md: 28 },
            }}
          >
            <Typography variant='overline' color='primary'>
              Recipe details
            </Typography>
            <Typography
              variant='h3'
              component='h1'
              sx={{ color: 'secondary.main', mt: 0.5 }}
            >
              {recipe.title}
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ maxWidth: 720, lineHeight: 1.8 }}
          >
            {recipe.description}
          </Typography>

          <Stack direction='row' spacing={1} sx={{ my: 3, flexWrap: 'wrap' }}>
            <Chip label={`${recipe.ingredients.length} ingredients`} />
            <Chip label={`${recipe.steps.length} steps`} />
          </Stack>

          <Divider sx={{ mb: 3 }} />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
              gap: { xs: 3, md: 4 },
            }}
          >
            <Box>
              <Typography variant='h5' color='primary' gutterBottom>
                Ingredients
              </Typography>
              <List dense disablePadding>
                {recipe.ingredients.map((ingredient) => (
                  <ListItem key={ingredient} sx={{ px: 0, py: 0.75 }}>
                    <Typography variant='body2' color='text.secondary'>
                      {ingredient}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <Typography variant='h5' color='primary' gutterBottom>
                Steps
              </Typography>
              <Stack component='ol' spacing={1.5} sx={{ pl: 2.5, m: 0 }}>
                {recipe.steps.map((step) => (
                  <Typography
                    key={step}
                    component='li'
                    variant='body2'
                    color='text.secondary'
                    sx={{ lineHeight: 1.7, pl: 0.5 }}
                  >
                    {step}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

function OdinRecipes() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<RecipeId | null>(
    null
  );

  const selectedRecipe = useMemo(
    () => recipes.find((recipe) => recipe.id === selectedRecipeId),
    [selectedRecipeId]
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          background: pageBackground,
          color: 'text.primary',
        }}
      >
        {selectedRecipe ? (
          <RecipeDetail
            recipe={selectedRecipe}
            onBack={() => setSelectedRecipeId(null)}
          />
        ) : (
          <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipeId} />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default OdinRecipes;
