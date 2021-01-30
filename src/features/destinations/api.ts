import { useAPIClient } from 'features/http';

export async function loadDestinations() {
  const client = useAPIClient();
  const data = await client.get('destinations');

  return data.data;
}
