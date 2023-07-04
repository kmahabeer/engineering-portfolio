import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSeoSkeleton } from "./TypeSeo";
import type { TypeTagSkeleton } from "./TypeTag";

export interface TypeEngineeringProjectsFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    publishedDate?: EntryFieldTypes.Date;
    content?: EntryFieldTypes.RichText;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTagSkeleton>>;
    seoFields?: EntryFieldTypes.EntryLink<TypeSeoSkeleton>;
}

export type TypeEngineeringProjectsSkeleton = EntrySkeletonType<TypeEngineeringProjectsFields, "engineeringProjects">;
export type TypeEngineeringProjects<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeEngineeringProjectsSkeleton, Modifiers, Locales>;
