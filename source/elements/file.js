import html from '../templates/file.js';

const { Component, template, define } = quantum;

export class File extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-file', File);