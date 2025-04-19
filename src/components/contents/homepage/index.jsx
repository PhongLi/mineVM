'use client';

function HomePage() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-4 py-12 text-center">
      {/* Circle Logo */}
      <div className="mb-12 h-48 w-48 animate-pulse rounded-full bg-primary-600 md:h-64 md:w-64"></div>

      {/* Main Heading */}
      <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl">
        <span className="text-primary-500">Minetendo</span> is a decentralized
      </h1>

      {/* Subheading */}
      <h2 className="mb-12 text-2xl md:text-3xl lg:text-4xl">
        mining ecosystem built on{' '}
        <span className="text-primary-500">Abstract Chain</span>
      </h2>

      {/* CTA Button */}
      <button className="button button--outline w-auto px-8 py-3 text-lg">
        Connect Wallet To Start Mining
      </button>
    </div>
  );
}

export default HomePage;
