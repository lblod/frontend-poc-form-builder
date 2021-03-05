import Controller from '@ember/controller';
import template from '../util/basic-form-template';
import { v4 as uuidv4 } from 'uuid';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';
import { inject as service } from '@ember/service';
import { ForkingStore } from '@lblod/ember-submission-form-fields';
import { sym as RDFNode } from 'rdflib';

export const GRAPHS = {
  formGraph: new RDFNode('http://data.lblod.info/form'),
  metaGraph: new RDFNode('http://data.lblod.info/metagraph'),
  sourceGraph: new RDFNode(`http://data.lblod.info/sourcegraph`),
};

export default class FormsPlaygroundController extends Controller {

  @service('meta-data-extractor') meta;

  @tracked store;
  @tracked template;

  constructor() {
    super(...arguments);
    this.produced = 0;
    this.template = template;
  }

  @task
   * refresh() {
    this.store = new ForkingStore();
    this.store.parse(this.template, GRAPHS.formGraph.value, 'text/turtle');
    const meta = yield this.meta.extract(this.store, {graphs: GRAPHS});
    this.store.parse(meta, GRAPHS.metaGraph.value, 'text/turtle');
  }

  @action
  insertFieldInForm(field) {
    this.produced += 1;
    const displayType = field.displayType.value;
    const form = 'main';
    const group = '8e24d707-0e29-45b5-9bbf-a39e4fdb2c11';
    const uuid = uuidv4();

    const ttl = `
##########################################################
# ${field.label.value}
##########################################################
fields:${uuid} a form:Field ;
    mu:uuid "${uuid}";
    sh:name "Name" ;
    sh:order ${this.produced * 10} ;
    sh:path ext:${uuidv4()} ;
    form:displayType displayTypes:${displayType} ;
    sh:group fields:${group} .

fieldGroups:${form} form:hasField fields:${uuid} .`;
    this.template += `\n${ttl}`;
    this.refresh.perform();
  }

}


