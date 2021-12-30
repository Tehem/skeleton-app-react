const AVAILABLE_LOCALES = ['en-US', 'fr-FR']

const DEFAULT_LOCALE = AVAILABLE_LOCALES[0]

const LOCALE_FALLBACKS: { [key: string]: string } = {
    en: 'en-US',
    fr: 'fr-FR',
}

export default function getLocale(): string {
    let locale = DEFAULT_LOCALE
    ;(window.navigator.languages || [window.navigator.language]).find(
        (lang) => {
            if (lang) {
                if (AVAILABLE_LOCALES.includes(lang)) {
                    locale = lang
                    return true
                }
                const fallback = LOCALE_FALLBACKS[lang.split('-')[0] || '']
                if (AVAILABLE_LOCALES.includes(fallback)) {
                    locale = fallback
                    return true
                }
            }
            return false
        }
    )
    return locale
}
