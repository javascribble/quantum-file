import { Component, template, define } from '../import.js';
import html from '../templates/file.js';

export class File extends Component {
    constructor() {
        super();
    }

    static template = template(html);
}

define('quantum-file', File);