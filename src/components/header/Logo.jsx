import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="button button--solid-red flex h-10 items-center justify-center px-6">
        LOGO
      </div>
    </Link>
  );
}

export default Logo;
