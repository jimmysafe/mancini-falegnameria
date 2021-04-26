import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Pagina Ambiente [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/ambiente) */
export type Ambiente = Entry & {
  __typename?: 'Ambiente';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AmbienteLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  photosCollection?: Maybe<AssetCollection>;
};


/** Pagina Ambiente [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/ambiente) */
export type AmbienteLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Pagina Ambiente [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/ambiente) */
export type AmbienteTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Pagina Ambiente [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/ambiente) */
export type AmbienteSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Pagina Ambiente [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/ambiente) */
export type AmbientePhotosCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AmbienteCollection = {
  __typename?: 'AmbienteCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Ambiente>>;
};

export type AmbienteFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  photosCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<AmbienteFilter>>>;
  AND?: Maybe<Array<Maybe<AmbienteFilter>>>;
};

export type AmbienteLinkingCollections = {
  __typename?: 'AmbienteLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AmbienteLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum AmbienteOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  cardCollection?: Maybe<CardCollection>;
  ambienteCollection?: Maybe<AmbienteCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsCardCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsAmbienteCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/card) */
export type Card = Entry & {
  __typename?: 'Card';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CardLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  photo?: Maybe<Asset>;
  text?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/card) */
export type CardLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/card) */
export type CardTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/card) */
export type CardPhotoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/card) */
export type CardTextArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CardCollection = {
  __typename?: 'CardCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Card>>;
};

export type CardFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  photo_exists?: Maybe<Scalars['Boolean']>;
  text_exists?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  text_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CardFilter>>>;
  AND?: Maybe<Array<Maybe<CardFilter>>>;
};

export type CardLinkingCollections = {
  __typename?: 'CardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
};


export type CardLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CardLinkingCollectionsHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum CardOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags_exists?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<ContentfulMetadataTagsFilter>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};



export type Entry = {
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type EntryFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  OR?: Maybe<Array<Maybe<EntryFilter>>>;
  AND?: Maybe<Array<Maybe<EntryFilter>>>;
};

export enum EntryOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}


/** [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/home) */
export type Home = Entry & {
  __typename?: 'Home';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HomeLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  cardsCollection?: Maybe<HomeCardsCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/home) */
export type HomeLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/home) */
export type HomeTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/kyru8i5axomi/content_types/home) */
export type HomeCardsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type HomeCardsCollection = {
  __typename?: 'HomeCardsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Card>>;
};

export type HomeCollection = {
  __typename?: 'HomeCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Home>>;
};

export type HomeFilter = {
  sys?: Maybe<SysFilter>;
  contentfulMetadata?: Maybe<ContentfulMetadataFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  cardsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<HomeFilter>>>;
  AND?: Maybe<Array<Maybe<HomeFilter>>>;
};

export type HomeLinkingCollections = {
  __typename?: 'HomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomeLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export enum HomeOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};


export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  home?: Maybe<Home>;
  homeCollection?: Maybe<HomeCollection>;
  card?: Maybe<Card>;
  cardCollection?: Maybe<CardCollection>;
  ambiente?: Maybe<Ambiente>;
  ambienteCollection?: Maybe<AmbienteCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QueryHomeArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryHomeCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<HomeFilter>;
  order?: Maybe<Array<Maybe<HomeOrder>>>;
};


export type QueryCardArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCardCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CardFilter>;
  order?: Maybe<Array<Maybe<CardOrder>>>;
};


export type QueryAmbienteArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAmbienteCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AmbienteFilter>;
  order?: Maybe<Array<Maybe<AmbienteOrder>>>;
};


export type QueryEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<EntryFilter>;
  order?: Maybe<Array<Maybe<EntryOrder>>>;
};

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
};

export type AmbienteQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type AmbienteQuery = (
  { __typename?: 'Query' }
  & { ambienteCollection?: Maybe<(
    { __typename?: 'AmbienteCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Ambiente' }
      & Pick<Ambiente, 'title' | 'slug'>
      & { photosCollection?: Maybe<(
        { __typename?: 'AssetCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Asset' }
          & Pick<Asset, 'title' | 'description' | 'url'>
        )>> }
      )> }
    )>> }
  )> }
);

export type AmbientiQueryVariables = Exact<{ [key: string]: never; }>;


export type AmbientiQuery = (
  { __typename?: 'Query' }
  & { ambienteCollection?: Maybe<(
    { __typename?: 'AmbienteCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Ambiente' }
      & Pick<Ambiente, 'title' | 'slug'>
      & { photosCollection?: Maybe<(
        { __typename?: 'AssetCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Asset' }
          & Pick<Asset, 'url'>
        )>> }
      )> }
    )>> }
  )> }
);

export type ThumbnailsAmbientiQueryVariables = Exact<{ [key: string]: never; }>;


export type ThumbnailsAmbientiQuery = (
  { __typename?: 'Query' }
  & { ambienteCollection?: Maybe<(
    { __typename?: 'AmbienteCollection' }
    & { items: Array<Maybe<(
      { __typename?: 'Ambiente' }
      & Pick<Ambiente, 'title' | 'slug'>
      & { photosCollection?: Maybe<(
        { __typename?: 'AssetCollection' }
        & { items: Array<Maybe<(
          { __typename?: 'Asset' }
          & Pick<Asset, 'url'>
        )>> }
      )> }
    )>> }
  )> }
);


export const AmbienteDocument = gql`
    query ambiente($slug: String!) {
  ambienteCollection(where: {slug: $slug}) {
    items {
      title
      slug
      photosCollection {
        items {
          title
          description
          url
        }
      }
    }
  }
}
    `;

/**
 * __useAmbienteQuery__
 *
 * To run a query within a React component, call `useAmbienteQuery` and pass it any options that fit your needs.
 * When your component renders, `useAmbienteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAmbienteQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAmbienteQuery(baseOptions: Apollo.QueryHookOptions<AmbienteQuery, AmbienteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AmbienteQuery, AmbienteQueryVariables>(AmbienteDocument, options);
      }
export function useAmbienteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AmbienteQuery, AmbienteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AmbienteQuery, AmbienteQueryVariables>(AmbienteDocument, options);
        }
export type AmbienteQueryHookResult = ReturnType<typeof useAmbienteQuery>;
export type AmbienteLazyQueryHookResult = ReturnType<typeof useAmbienteLazyQuery>;
export type AmbienteQueryResult = Apollo.QueryResult<AmbienteQuery, AmbienteQueryVariables>;
export const AmbientiDocument = gql`
    query Ambienti {
  ambienteCollection {
    items {
      title
      slug
      photosCollection {
        items {
          url
        }
      }
    }
  }
}
    `;

/**
 * __useAmbientiQuery__
 *
 * To run a query within a React component, call `useAmbientiQuery` and pass it any options that fit your needs.
 * When your component renders, `useAmbientiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAmbientiQuery({
 *   variables: {
 *   },
 * });
 */
export function useAmbientiQuery(baseOptions?: Apollo.QueryHookOptions<AmbientiQuery, AmbientiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AmbientiQuery, AmbientiQueryVariables>(AmbientiDocument, options);
      }
export function useAmbientiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AmbientiQuery, AmbientiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AmbientiQuery, AmbientiQueryVariables>(AmbientiDocument, options);
        }
export type AmbientiQueryHookResult = ReturnType<typeof useAmbientiQuery>;
export type AmbientiLazyQueryHookResult = ReturnType<typeof useAmbientiLazyQuery>;
export type AmbientiQueryResult = Apollo.QueryResult<AmbientiQuery, AmbientiQueryVariables>;
export const ThumbnailsAmbientiDocument = gql`
    query ThumbnailsAmbienti {
  ambienteCollection {
    items {
      title
      slug
      photosCollection(limit: 1) {
        items {
          url
        }
      }
    }
  }
}
    `;

/**
 * __useThumbnailsAmbientiQuery__
 *
 * To run a query within a React component, call `useThumbnailsAmbientiQuery` and pass it any options that fit your needs.
 * When your component renders, `useThumbnailsAmbientiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThumbnailsAmbientiQuery({
 *   variables: {
 *   },
 * });
 */
export function useThumbnailsAmbientiQuery(baseOptions?: Apollo.QueryHookOptions<ThumbnailsAmbientiQuery, ThumbnailsAmbientiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ThumbnailsAmbientiQuery, ThumbnailsAmbientiQueryVariables>(ThumbnailsAmbientiDocument, options);
      }
export function useThumbnailsAmbientiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ThumbnailsAmbientiQuery, ThumbnailsAmbientiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ThumbnailsAmbientiQuery, ThumbnailsAmbientiQueryVariables>(ThumbnailsAmbientiDocument, options);
        }
export type ThumbnailsAmbientiQueryHookResult = ReturnType<typeof useThumbnailsAmbientiQuery>;
export type ThumbnailsAmbientiLazyQueryHookResult = ReturnType<typeof useThumbnailsAmbientiLazyQuery>;
export type ThumbnailsAmbientiQueryResult = Apollo.QueryResult<ThumbnailsAmbientiQuery, ThumbnailsAmbientiQueryVariables>;