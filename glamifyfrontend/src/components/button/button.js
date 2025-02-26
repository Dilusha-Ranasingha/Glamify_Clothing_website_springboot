import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
    </Stack>
  );
}

export default ContainedButtons;
