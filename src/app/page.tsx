// src/app/pages/page.tsx
import Link from 'next/link';

export default function Home() {

  return (
    <main>
      <h1>Optigrit</h1>
      <Link href="/users/login">Login</Link><br/>
      <Link href="/components/website">Website</Link>
      </main>
  );
}
