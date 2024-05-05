export default function useDebounce(func: (...args: any[]) => void, timeout = 300) {
  let timer: NodeJS.Timeout | null = null

  const debouncedFunction = (...args: any[]) => {
    clearTimeout(timer as NodeJS.Timeout)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }

  return debouncedFunction
}
