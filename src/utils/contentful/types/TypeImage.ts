import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeImageFields {
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    cloudinaryImage: EntryFieldTypes.Object;
}

export type TypeImageSkeleton = EntrySkeletonType<TypeImageFields, "image">;
export type TypeImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeImageSkeleton, Modifiers, Locales>;
