export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ');
}

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export type Memory = {
  [address: string]: number | null;
};

export function generateMemory(count = 10) {
  const mem: Memory = {};
  for (let i = 0; i < count; i++) {
    mem[`[${i}]`] = randInt(0, 99);
  }
  mem['tmp'] = null;
  return mem;
}
