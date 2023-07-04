import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSeoSkeleton } from "./TypeSeo";
import type { TypeTagSkeleton } from "./TypeTag";

export interface TypeVfxProjectsFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    publishedDate?: EntryFieldTypes.Date;
    content?: EntryFieldTypes.RichText;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTagSkeleton>>;
    seoFields?: EntryFieldTypes.EntryLink<TypeSeoSkeleton>;
}

export type TypeVfxProjectsSkeleton = EntrySkeletonType<TypeVfxProjectsFields, "vfxProjects">;
export type TypeVfxProjects<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeVfxProjectsSkeleton, Modifiers, Locales>;
