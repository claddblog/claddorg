
import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-12 text-gray-900">
      <Header />
      <h1 className="text-3xl font-bold mb-2">Christopher C. Ladd</h1>
      <p className="text-lg mb-6">Independent Researcher — Structure, Systems, Mathematics</p>

      <ul className="space-y-2 text-blue-700 underline text-base">
        <li><Link href="/resume">Curriculum Vitae</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><a href="mailto:christopher.ladd@utexas.edu">Email</a></li>
      </ul>
    </main>
  );
}

