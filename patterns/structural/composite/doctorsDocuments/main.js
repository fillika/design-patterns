// This examples I have taken from here
// https://jsmanifest.com/the-composite-pattern-in-javascript/

const Document = require("./document");
const DocumentComposite = require("./documentComposite");

let pr2Form = new Document(`Primary Treating Phys Progress Report (PR2)`);
let w2Form = new Document(`Tax Form (W2)`);

let forms = new DocumentComposite;
forms.add(pr2Form);
forms.add(w2Form);
forms.sign(`Bobby Lopez`);

let s2Form = new Document(`Semi Form (S2)`)
let forms2 = new DocumentComposite(`Title for forms 2`);
forms2.add(s2Form);
forms2.sign(`John Doe`);
forms.add(forms2);

console.log(forms.toString());