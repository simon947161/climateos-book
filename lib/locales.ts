export type LocaleCode = "zh" | "en" | "es" | "fr" | "de" | "ar";

export type LocaleStatus = "original" | "pending" | "machine-draft" | "reviewed";

export type LocaleDefinition = {
  code: LocaleCode;
  label: string;
  nativeLabel: string;
  dir: "ltr" | "rtl";
  status: LocaleStatus;
};

export const locales: LocaleDefinition[] = [
  { code: "zh", label: "Chinese", nativeLabel: "中文", dir: "ltr", status: "original" },
  { code: "en", label: "English", nativeLabel: "English", dir: "ltr", status: "pending" },
  { code: "es", label: "Spanish", nativeLabel: "Español", dir: "ltr", status: "pending" },
  { code: "fr", label: "French", nativeLabel: "Français", dir: "ltr", status: "pending" },
  { code: "de", label: "German", nativeLabel: "Deutsch", dir: "ltr", status: "pending" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", dir: "rtl", status: "pending" },
];

export function getLocale(code: string) {
  return locales.find((locale) => locale.code === code);
}

export function getLocaleStatusLabel(status: LocaleStatus) {
  if (status === "original") return "Original";
  if (status === "machine-draft") return "Machine draft";
  if (status === "reviewed") return "Reviewed";
  return "Pending";
}
