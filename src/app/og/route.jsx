import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET() {
  const imageData = await fetch(new URL('../opengraph-image.png', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );
  return new ImageResponse(
    (
      <img width="1500" height="500" src={imageData} alt="4846Fess | 48 & 46 Groups Fans Autobase based in Indonesia🇮🇩" />
    ),
    {
      width: 1500,
      height: 500,
    },
  );
}