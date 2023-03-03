import path from 'path';
import { snippetJsonGenerator } from '@/snippet-generator';

describe('snippetJsonGenerator', () => {
  const templateFilePath = path.join(__dirname, './template.handlebars');
  it('base use', async () => {
    const json = await snippetJsonGenerator(templateFilePath, {
      snippetName: 'test-name',
      prefix: 'test',
    });
    console.info(json['test-name'].body);
    expect(json['test-name'].body).toStrictEqual([
      `export default function () {`,
      `  return 'hello world';`,
      `}`,
      ``,
    ]);
  });
});
