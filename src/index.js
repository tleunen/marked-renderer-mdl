const marked = require('marked');

const renderer = new marked.Renderer();

renderer.heading = (text, level) => {
    const headingClasses = [
        'display-4',
        'display-3',
        'display-2',
        'display-1',
        'headline',
        'title'
    ];

    const className = `mdl-typography--${headingClasses[level - 1]}`;
    const id = text.replace(/ /g, '-').toLowerCase();

    return (
        `<h${level} id="${id}" class="${className}">${text}</h${level}>\n`
    );
};


renderer.table = (header, body) => {
    const className = 'mdl-data-table mdl-js-data-table mdl-shadow--2dp';

    return (
        `<table class="${className}">
            <thead>${header}</thead>
            <tbody${body}</tbody>
        </table>\n`
    );
};

module.exports = renderer;
