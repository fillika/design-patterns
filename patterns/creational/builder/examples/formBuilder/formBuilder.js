class Form {
    constructor() {
        this.fields = [];
    }

    addField(label, type, options) {
        this.fields.push({ label, type, options });
    }
}

class FormBuilder {
    constructor() {
        this.form = new Form();
    }

    withField(label, type, options) {
        this.form.addField(label, type, options);
        return this;
    }

    build() {
        return this.form;
    }
}

const form = new FormBuilder()
    .withField('Name', 'text')
    .withField('Email', 'email', { required: true })
    .build();

console.log(form);
