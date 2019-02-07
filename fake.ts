export function fake<T>(partial?: Partial<T>): T {
  return partial != null ? (partial as T) : <T>{};
}
