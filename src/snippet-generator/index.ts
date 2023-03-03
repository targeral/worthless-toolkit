import path from 'path';
import type {
  CodeSnippetsJson,
  CodeSnippetObject,
  SnippetJsonGeneratorOptions,
} from '../types/snippet-generator';
/**
 * @param templateFilePath
 * @param_desc
 * path of template file, eg: /User/project/function.handlebars.
 * If it is a relative path, then `process.cwd()` will be converted to an absolute path as the root path
 *
 * @func_description Transform template file to json that is used in vscode code snippets
 * @return CodeSnippetsJson
 */
export const snippetJsonGenerator = async (
  templateFilePath: string,
  options: SnippetJsonGeneratorOptions,
): Promise<CodeSnippetsJson> => {
  const snippetName = options.snippetName ?? path.basename(templateFilePath);
  const absTemplatePath = path.isAbsolute(templateFilePath)
    ? templateFilePath
    : path.join(process.cwd(), templateFilePath);
  const { fs } = await import('@modern-js/utils');
  const template = await fs.readFile(absTemplatePath, 'utf-8');

  return {
    [snippetName]: {
      body: parseCodeSnippetStr(template),
      prefix: options.prefix,
      scope: options.scope,
      description: options.description,
    },
  };
};

const parseCodeSnippetStr = (code: string): CodeSnippetObject['body'] => {
  return code.split('\n');
};
