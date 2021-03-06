import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency-decorators';

export default class UserTestsEditController extends Controller {
  @service semanticForm;

  @task
  * submit() {
    // TODO somehow inform the user that the form could be successfully submitted
  }

  @task
  * save() {
    yield this.semanticForm.update(this.model.graph, {graphs: this.model.graphs, model: this.model.test});
    this.model.test.modified = new Date();
    yield this.model.test.save();
  }

  @task
  * reset() {
    yield this.semanticForm.delete(this.model.graph, {graphs: this.model.graphs, model: this.model.test});
    this.transitionToRoute('user-tests.edit', this.model.test.id);
  }

  @task
  * delete() {
    yield this.semanticForm.delete(this.model.graph, {graphs: this.model.graphs, model: this.model.test});
    yield this.model.test.destroyRecord();
    this.transitionToRoute('user-tests.index');
  }
}
