import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function BasicCard({data}) {
  return (
    <Card variant="outlined" sx={{ width: 320 ,
        alignSelf: 'center',
    }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5,
        color: 'darkblue',
    }}>
     {data.city}
      </Typography>
      <Typography level="body2">{data.weather[0].description}</Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <LocationOnIcon />
      </IconButton>
      <Typography level="h1" style={{
        color: 'darkblue',
      }}>{data.main.temp}<Typography level='body2'>°C</Typography></Typography>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">More Info</Typography>

          <Typography fontSize="sm" fontWeight="lg">
            Humidity : {data.main.humidity}
          </Typography>
          <Typography fontSize="sm" fontWeight="lg">
           WInd Speed : {data.wind.speed}
          </Typography>
          <Typography fontSize="sm" fontWeight="lg">
            Pressure : {data.main.pressure}
          </Typography>
        </div>
        {/* <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Share
        </Button> */}
      </Box>
    </Card>
  );
}