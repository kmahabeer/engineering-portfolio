import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeTagFields {
  tagName?: EntryFieldTypes.Symbol;
}

export type TypeTagSkeleton = EntrySkeletonType<TypeTagFields, 'tag'>;
export type TypeTag<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeTagSkeleton, Modifiers, Locales>;
