import React, { useState } from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Box,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f59e0b',
    },
    background: {
      default: '#1c1917',
      paper: '#292524',
    },
  },
});

interface RecipeCardProps {
  title: string;
  imageSrc: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

function OdinRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState('');

  const goBack = () => {
    setSelectedRecipe('');
  };

  const renderRecipe = () => {
    switch (selectedRecipe) {
      case 'AcornSquash':
        return <AcornSquash />;
      case 'HomemadeLasagna':
        return <HomemadeLasagna />;
      case 'MicrowaveBakedPotato':
        return <MicrowaveBakedPotato />;
      default:
        return <RecipeList />;
    }
  };

  function RecipeList() {
    return (
      <Container
        maxWidth='sm'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          py: 4,
        }}
      >
        <Typography variant='overline' color='primary'>
          Simple cookbook
        </Typography>
        <Typography variant='h3' component='h1' gutterBottom color='white'>
          Odin Recipes
        </Typography>
        <List sx={{ width: '100%' }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSelectedRecipe('HomemadeLasagna')}>
              Homemade Lasagna
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSelectedRecipe('AcornSquash')}>
              Acorn Squash
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setSelectedRecipe('MicrowaveBakedPotato')}
            >
              Microwave Baked Potato
            </ListItemButton>
          </ListItem>
        </List>
      </Container>
    );
  }

  function BackButton() {
    return (
      <Button variant='outlined' sx={{ mb: 2 }} onClick={goBack}>
        Back to Recipes
      </Button>
    );
  }

  function RecipeCard({
    title,
    imageSrc,
    description,
    ingredients,
    steps,
  }: RecipeCardProps) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          py: 4,
          px: 2,
          background:
            'radial-gradient(circle at top, rgba(245, 158, 11, 0.14), transparent 32rem)',
        }}
      >
        <BackButton />
        <Card
          sx={{
            maxWidth: 900,
            borderRadius: 4,
            border: '1px solid rgba(245, 158, 11, 0.18)',
            overflow: 'hidden',
          }}
        >
          <CardMedia
            component='img'
            height='280'
            image={imageSrc}
            alt={title}
          />
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant='h4' gutterBottom>
              {title}
            </Typography>
            <Typography variant='body1' color='text.secondary' component='p'>
              {description}
            </Typography>
            <Typography variant='h6' sx={{ mt: 3 }}>
              Ingredients
            </Typography>
            <List>
              {ingredients.map((ingredient: string, idx: number) => (
                <ListItem key={idx}>{ingredient}</ListItem>
              ))}
            </List>
            <Typography variant='h6'>Steps</Typography>
            <List>
              {steps.map((step: string, idx: number) => (
                <ListItem key={idx}>
                  <Typography>{step}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Box>
    );
  }

  function AcornSquash() {
    return (
      <Box>
        <RecipeCard
          title='Acorn Squash'
          imageSrc='https://www.allrecipes.com/thmb/gWKtlXa_borjWzer06AMsIllJOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/16796-acorn-squash-1x1-76-a112f8ea8d90419ea1836dca402d9d8c.jpg'
          description="Learn how to cook acorn squash using this quick and easy recipe. It's sweet and buttery — my family loves it!"
          ingredients={[
            '1 medium acorn squash, halved and seeded',
            '2 tablespoons brown sugar',
            '1 tablespoon butter',
          ]}
          steps={[
            'Preheat the oven to 350 degrees F (175 degrees C).',
            'Place acorn squash halves cut-side down onto a cookie sheet. Bake in the preheated oven until flesh begins to soften, about 30 to 45 minutes.',
            'Remove squash from the oven and transfer one squash half, cut-side up, to a deep baking dish. Spoon butter and brown sugar into the cavity. Place remaining squash half, cut-side down, over top to seal.',
            'Return to the oven and continue to bake until flesh is soft, 30 minutes.',
          ]}
        />
      </Box>
    );
  }

  function HomemadeLasagna() {
    return (
      <Box>
        <RecipeCard
          title='Homemade Lasagna'
          imageSrc='https://www.allrecipes.com/thmb/zZCLBop9DmB05w3z1LtTtWUGjcY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19344_homemade-lasagna_Rita2-1x1-1-b4f53c3ba2f4475c97665908a6fd1783.jpg'
          description="This traditional lasagna recipe is layered with a rich meat sauce and a creamy parmesan white sauce, plus the perfect amount of mozzarella cheese! You won't find a better recipe for homemade lasagna."
          ingredients={[
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
          ]}
          steps={[
            'Preheat oven to 375°F (190°C).',
            'In a large pot, cook lasagna noodles in boiling water until al dente. Rinse with cold water and drain well.',
            'In a large skillet, cook and stir ground beef, onion, and garlic over medium heat until brown. Add tomato sauce and basil; simmer for 10 minutes.',
            'In a mixing bowl, combine ricotta cheese, egg, salt, and pepper; mix well.',
            'Spread a thin layer of meat sauce in the bottom of a baking dish. Layer with lasagna noodles, ricotta mixture, mozzarella, parmesan, and meat sauce. Repeat layers until all ingredients are used, finishing with a layer of mozzarella and Parmesan.',
            'Bake in preheated oven for 50 minutes. Let stand for 10 minutes before serving.',
          ]}
        />
      </Box>
    );
  }

  function MicrowaveBakedPotato() {
    return (
      <Box>
        <RecipeCard
          title='Microwave Baked Potato'
          imageSrc='https://www.allrecipes.com/thmb/cxaoqgpqkLuAiImkSFIxPKz_yKw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/85337-microwave-baked-potato-21-edefae39276544be801966be339afbf2.jpg'
          description='A quick and easy way to get the comfort of a baked potato without the wait. This microwave version is just as tasty and satisfying.'
          ingredients={[
            '1 large russet potato',
            '1 teaspoon olive oil',
            'Salt and pepper to taste',
            'Your favorite potato toppings',
          ]}
          steps={[
            'Thoroughly wash and prick your potato with a fork. This allows steam to release as it’s cooking.',
            'Rub the potato with the olive oil and sprinkle with salt and pepper.',
            'Place potato on microwave-safe dish and microwave on high for 5 minutes. Flip the potato and cook for an additional 5 minutes.',
            "Using a towel or oven mitt, gently squeeze the sides of the potato. If it's soft, it's done. If not, continue to microwave and check at 1-minute intervals.",
            'Split the potato down the middle, fluff with a fork, and add your favorite toppings.',
          ]}
        />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        {renderRecipe()}
      </Box>
    </ThemeProvider>
  );
}

export default OdinRecipes;
