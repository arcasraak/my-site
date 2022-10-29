const publicUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
const baseUrl = `${publicUrl}/api/og/image`;

interface Params {
  title: string;
  description?: string;
}

export const createOgImageUrl = ({ title, description }: Params) => {
  const params = new URLSearchParams();
  params.append('title', title);

  if (description) {
    params.append('description', description);
  }
  return `${baseUrl}?${params.toString()}`;
};
