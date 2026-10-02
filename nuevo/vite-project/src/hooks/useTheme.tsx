import { useState,useEffect } from "react"
type Theme = 'light' | 'dark'
const THEME_STORAGE_KEY = 'classroom-theme'

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light')
    const [hasLoadedTheme, setHasLoadedTheme] = useState(false)

    useEffect(() => {
        const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
        if (storedTheme === 'light' || storedTheme === 'dark') {
          setTheme(storedTheme)
        }
        setHasLoadedTheme(true)
      }, [])

    useEffect(() => {
        if (!hasLoadedTheme) {
        return
        }
    
        document.documentElement.dataset.theme = theme
        window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    }, [theme, hasLoadedTheme])

    const toggleTheme = (): void => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }
    return {
    theme,
    hasLoadedTheme,
    toggleTheme
  }
}
