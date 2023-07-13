import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSeoFields {
    pageTitle: EntryFieldTypes.Symbol;
    pageDescription?: EntryFieldTypes.Text;
    canonicalUrl?: EntryFieldTypes.Symbol;
}

export type TypeSeoSkeleton = EntrySkeletonType<TypeSeoFields, "seo">;
export type TypeSeo<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSeoSkeleton, Modifiers, Locales>;
