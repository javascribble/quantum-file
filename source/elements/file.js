import { Component, template } from '../../references/quantum.js';
import html from '../templates/file.js';

export class File extends Component {
    constructor() {
        super();
    }

    static template = template(html);

    static attributes = [];
}

customElements.define('quantum-file', File);