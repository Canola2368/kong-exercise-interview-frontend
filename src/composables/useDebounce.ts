export default function useDebounce<T extends (...args: any[]) => void>(
  func: T,
  wait = 300,
) {
  let timer: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    clearTimeout(timer as ReturnType<typeof setTimeout>)
    timer = setTimeout(() => {
      func(...args)
    }, wait)
  }
}
