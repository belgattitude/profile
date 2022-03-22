import type { I18nActiveNamespaces } from '@/core/i18n/i18n-namespaces.type';

export type HomeConfig = {
  // Define installed namespaces in the type here
  // to allow full typechecking of your translation keys.
  i18nNamespaces: Readonly<I18nActiveNamespaces<'common' | 'resume'>>;
};
export const resumeConfig: HomeConfig = {
  /** Namespaces that should be loaded for this page */
  i18nNamespaces: ['common', 'resume'],
} as const;
