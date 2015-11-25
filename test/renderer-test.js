/* eslint-env mocha */
import marked from 'marked';
import expect from 'expect';
import renderer from '../src';

describe('marked-renderer-mdl', () => {
    it('should render mdl headings', () => {
        const headingsClasses = [
            'display-4',
            'display-3',
            'display-2',
            'display-1',
            'headline',
            'title'
        ];

        headingsClasses.forEach((style, level) => {
            const headingLevel = level + 1;
            const prefix = new Array(headingLevel).fill('#').join('');
            const className = `mdl-typography--${headingsClasses[level]}`;

            const actual = prefix + ' My Heading';
            const expected = `<h${headingLevel} id="my-heading" class="${className}">My Heading</h${headingLevel}>\n`;

            expect(marked(actual, { renderer: renderer })).toEqual(expected);
        });
    });

    it('should render mdl tables', () => {
        const actual = `
| Col1  | Col2  | Col3  |
|-------|-------|-------|
| Cell1 | Cell2 | Cell3`;
        const expected = `<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead><tr>\n<th>Col1</th>\n<th>Col2</th>\n<th>Col3</th>\n</tr>\n</thead>
            <tbody<tr>\n<td>Cell1</td>\n<td>Cell2</td>\n<td>Cell3</td>\n</tr>\n</tbody>
        </table>\n`;

        expect(marked(actual, { renderer: renderer })).toEqual(expected);
    });
});
