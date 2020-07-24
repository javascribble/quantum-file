import html from '../templates/file.js';

export class File extends quantum.Component {
    constructor() {
        super();
    }

    static template = quantum.template(html);
}

quantum.define('quantum-file', File);