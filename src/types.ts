type ResourceIdentifier = string;

type IssueIdentifier   = ResourceIdentifier;
type ArticleIdentifier = ResourceIdentifier;

type AuthorIdentifier  = string;
type TagIdentifier     = string;

type ResourceTitle = string;
type ArticleTitle = ResourceTitle;

enum ResourceType {
  Article     = 'article',
  Brief       = 'brief',
  Editorial   = 'editorial',
  Issue       = 'issue',
  Review      = 'review',
  Translation = 'translation',
}

type ResourceData = {
  type: ResourceType;

  identifier: ArticleIdentifier | IssueIdentifier;

  doi: string;

  title: string;

  abstract: string;

  dates: {
    publication: string;
  }

  paths: {
    cover: string;
    pdf: string;
    content: string;
    tei: string;
  }

  tags: string[];
};

type Author = {
  displayName: string;
  id: AuthorIdentifier;
};

export type Authors = Author[];

export type ArticleData = ResourceData & {
  authors: Authors;

  paths: {
    content: string;
  }

  content: string;
};

export type IssueData = ResourceData & {
  issue: number;

  editors: {
    displayName: string;
    id: AuthorIdentifier;
  }[];

  articles: ArticleIdentifier[];
};

export type AuthorData = {
  displayName : string;
  firstName   : string;
  lastName    : string;
  email       : string;
  institution : string;
  viaf        : string;
};

type ArticlesData = {
  [key: ArticleIdentifier]: ArticleData;
};

type IssuesData = {
  [key: IssueIdentifier]: IssueData;
};

type AuthorsData = {
  [key: AuthorIdentifier]: AuthorData;
};

export type IndexedArticlesData = {
  ids  : ArticleIdentifier[];
  data : ArticlesData;
};

export type IndexedIssuesData = {
  ids  : IssueIdentifier[];
  data : IssuesData;
};

export type IndexedAuthorsData = {
  ids  : AuthorIdentifier[];
  data : AuthorsData;
};

export type ResourceTag = {
  slug        : string;
  displayName : string;
  ids         : string[];
};

export type ResourceTags = { [key: string]: ResourceTag};

export type TagData = {
  slug        : string;
  displayName : string;
  articles    : ArticleIdentifier[];
  issues      : IssueIdentifier[];
};

type TagsData = {
  [key: TagIdentifier]: TagData;
};

export type IndexedTagsData = {
  ids  : TagIdentifier[];
  data : TagsData;
};

export type Data = {
  authors  : IndexedAuthorsData;
  articles : IndexedArticlesData;
  issues   : IndexedIssuesData;
  tags     : IndexedTagsData;
};

export type ArticlesMapping = { [key: ArticleIdentifier]: ArticleTitle };

export type Index = {
  generalWords  : { [key: string]: ArticleIdentifier[] };
  languageWords : { [key: string]: ArticleIdentifier[] };
};

type Match = {
  searchTerm  : string;
  highlighted : string;
  results     : ArticleTitle[];
  id          : string;
};

export type Matches = Match[];

export type MatchesResponse = {
  articleTitles : ArticlesMapping;
  matches       : Matches;
};
