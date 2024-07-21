export const REGEX_PATTERNS = {
  NUMBER_HYPHEN: /^[0-9-]+$/, // 半角数字とハイフンのみ
  ONLY_NUMBER: /^\d+$/, // 半角数字のみ
  PHONE_NUMBER: /^0\d{1,3}-\d{1,4}-\d{4}$/,
  EMAIL: /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\^\$\*\.\[\]\{\}\(\)\?\!@#%&\/\\,><'":;\|_~`]).*$/,
  PASSWORD_NG_SYMBOL:
    /^[a-zA-Z0-9\^\$\*\.\[\]\{\}\(\)\?\!@#%&\/\\,><'":;\|_~`]+$/,
  PASSWORD_ALPHANUMERIC: /^[a-zA-Z0-9]+$/, // 半角英数字のみ
  PASSWORD_ALPHANUMERIC_REQUIRED: /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/, // 半角英数字の両方が必須
} as const
