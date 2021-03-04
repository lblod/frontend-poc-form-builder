export default
"@prefix form: <http://lblod.data.gift/vocabularies/forms/> .\n" +
"@prefix sh: <http://www.w3.org/ns/shacl#>.\n" +
"@prefix mu: <http://mu.semte.ch/vocabularies/core/> .\n" +
"@prefix fieldGroups: <http://data.lblod.info/field-groups/> .\n" +
"@prefix fields: <http://data.lblod.info/fields/> .\n" +
"@prefix displayTypes: <http://lblod.data.gift/display-types/> .\n" +
"@prefix skos: <http://www.w3.org/2004/02/skos/core#>.\n" +
"\n" +
"##########################################################\n" +
"#  property-group\n" +
"##########################################################\n" +
"fields:8e24d707-0e29-45b5-9bbf-a39e4fdb2c11 a form:PropertyGroup;\n" +
"    mu:uuid \"8e24d707-0e29-45b5-9bbf-a39e4fdb2c11\";\n" +
"    sh:description \"parent property-group, used to group fields and property-groups together\";\n" +
"    sh:name \"This is a simple example form configuration ttl, make sure you correctly mapped your own form configuration\" ;\n" +
"    sh:order 1 .\n" +
"\n" +
"##########################################################\n" +
"# basic selector\n" +
"##########################################################\n" +
"\n" +
"fields:68e149ec-1821-477b-a901-72924236ef9c a form:Field ;\n" +
"    mu:uuid \"68e149ec-1821-477b-a901-72924236ef9c\";\n" +
"    sh:name \"Kies een optie\" ;\n" +
"    sh:order 5 ;\n" +
"    sh:path skos:prefLabel ;\n" +
"    form:options  \"\"\"{\"conceptScheme\":\"http://lblod.data.gift/concept-schemes/33e233eb-6a9b-4141-b607-2ff72fe2ded2\", \"searchEnabled\": false}\"\"\" ;\n" +
"    form:displayType displayTypes:conceptSchemeSelector ;\n" +
"    sh:group fields:8e24d707-0e29-45b5-9bbf-a39e4fdb2c11 .\n" +
"\n" +
"##########################################################\n" +
"# basic field\n" +
"##########################################################\n" +
"fields:147a32fe-f3dd-47f0-9dc5-43e46acc32cb a form:Field ;\n" +
"    mu:uuid \"147a32fe-f3dd-47f0-9dc5-43e46acc32cb\";\n" +
"    sh:name \"Basic input field\" ;\n" +
"    sh:order 10 ;\n" +
"    sh:path skos:prefLabel ;\n" +
"    form:displayType displayTypes:defaultInput ;\n" +
"    sh:group fields:8e24d707-0e29-45b5-9bbf-a39e4fdb2c11 .\n" +
"\n" +
"##########################################################\n" +
"# form\n" +
"##########################################################\n" +
"fieldGroups:main a form:FieldGroup ;\n" +
"    mu:uuid \"70eebdf0-14dc-47f7-85df-e1cfd41c3855\" ;\n" +
"    form:hasField \n" +
"      fields:68e149ec-1821-477b-a901-72924236ef9c ,\n" +
"      fields:147a32fe-f3dd-47f0-9dc5-43e46acc32cb . ### Basic input-field\n" +
"\n" +
"form:6b70a6f0-cce2-4afe-81f5-5911f45b0b27 a form:Form ;\n" +
"    mu:uuid \"6b70a6f0-cce2-4afe-81f5-5911f45b0b27\" ;\n" +
"    form:hasFieldGroup fieldGroups:main .\n" +
"\n" +
"\n"