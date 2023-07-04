import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSeoSkeleton } from "./TypeSeo";
import type { TypeTagSkeleton } from "./TypeTag";

export interface TypeArtworkFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    publishedDate?: EntryFieldTypes.Date;
    content?: EntryFieldTypes.RichText;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTagSkeleton>>;
    seoFields?: EntryFieldTypes.EntryLink<TypeSeoSkeleton>;
}

export type TypeArtworkSkeleton = EntrySkeletonType<TypeArtworkFields, "artwork">;
export type TypeArtwork<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeArtworkSkeleton, Modifiers, Locales>;
