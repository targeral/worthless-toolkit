export interface CodeSnippetObject {
  scope?: string;
  prefix: string;
  body: string[];
  description?: string;
}

export interface CodeSnippetsJson {
  [snippetName: string]: CodeSnippetObject;
}

export interface SnippetJsonGeneratorOptions {
  snippetName?: string;
  scope?: string;
  prefix: string;
  description?: string;
}
