export function isPrime(n: number): boolean {
  if (n < 2) return false;
  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export function generateRandomPrime(): number {
  const primes: number[] = [];
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) primes.push(i);
  }
  if (primes.length === 0) {
    throw new Error('No primes available in the specified range');
  }
  const randomIndex = Math.floor(Math.random() * primes.length);
  return primes[randomIndex];
}