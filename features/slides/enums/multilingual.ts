// NOTE: keyは「Google Cloud Translation API」用のtextに合わせている
export const MULTILINGUAL = {
  ja: '日本語',
  en: 'English',
  'zh-CN': '中国語 (簡体)',
  'zh-TW': '中国語 (繁体)',
  hi: 'ヒンディー語',
  ru: 'ロシア語',
  fr: 'フランス語',
  es: 'スペイン語',
  de: 'ドイツ語',
  ar: 'アラビア語',
  bn: 'ベンガル語',
  ko: '韓国語',
} as const

export const MULTILINGUAL_OPTIONS = Object.entries(MULTILINGUAL).map(
  ([value, label]) => ({
    value: value as keyof typeof MULTILINGUAL,
    label,
  }),
)
