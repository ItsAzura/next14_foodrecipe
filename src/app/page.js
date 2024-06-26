import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Recipe App</h1>
      <Link href={'/recipe'}>Explore Recipe</Link>
    </div>
  );
}
