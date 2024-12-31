import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function debounce<T extends (...args: any[]) => void>(
    callback: T,
    delay: number = 600
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout

  return (...args: Parameters<T>) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}