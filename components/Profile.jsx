import { Stack, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';

function Profile() {
  const { data: session, status } = useSession();

  return (
    <Stack
    direction="row"
    alignItems="center"
    justifyItems="center"
    color="primary"
    >

      {status === "authenticated" ? (
        <Typography align='center' color="terciary">
          {session.user.name}
        </Typography>
      ) : (
        <Typography>
          There was an error
        </Typography>
      )}
    </Stack>
  );
}
export default Profile;
