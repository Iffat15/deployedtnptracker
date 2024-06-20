import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RowCard() {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', width: 260 }}>
      <AspectRatio ratio="1">
        <img
          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
          srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography variant="h6" component="div">
          Yosemite Park
        </Typography>
        <Typography variant="body2" color="text.secondary">
          California, USA
        </Typography>
      </CardContent>
      <CardContent sx={{ display: 'flex', alignItems: 'center', writingMode: 'vertical-rl' }}>
        <Typography variant="body2" color="primary">
          Ticket
        </Typography>
      </CardContent>
    </Card>
  );
}
