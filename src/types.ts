type ResourceIdentifier = string;

type IssueIdentifier   = ResourceIdentifier;
type ArticleIdentifier = ResourceIdentifier;

type AuthorIdentifier  = string;

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
  }

  tags: string[];
}

export type ArticleData = ResourceData & {
  authors: AuthorIdentifier[];

  paths: {
    content: string;
  }

  content: string;
}

export type IssueData = ResourceData & {
  issue: number;

  editors: AuthorIdentifier[];

  articles: ArticleIdentifier[];
}

export type AuthorData = {
  displayName : string;
  firstName   : string;
  lastName    : string;
  email       : string;
  institution : string;
  viaf        : string;
}

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
}

export type IndexedIssuesData = {
  ids  : IssueIdentifier[];
  data : IssuesData;
}

export type IndexedAuthorsData = {
  ids  : AuthorIdentifier[];
  data : AuthorsData;
}

export type Data = {
  authors  : IndexedAuthorsData;
  articles : IndexedArticlesData;
  issues   : IndexedIssuesData;
};

export type ArticlesMapping = { [key: ArticleIdentifier]: ArticleTitle };

export type Index = {
  generalWords  : { [key: string]: ArticleIdentifier[] };
  languageWords : { [key: string]: ArticleIdentifier[] };
};

type Match = {
  searchTerm    : string;
  results       : ArticleTitle[];
};

export type Matches = Match[];

export type MatchesResponse = {
  articleTitles : ArticlesMapping;
  matches       : Matches;
};
