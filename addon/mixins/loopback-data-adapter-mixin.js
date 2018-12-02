import Mixin from '@ember/object/mixin';
import { inject as injectService } from '@ember/service';

export default Mixin.create({
  session: injectService(),

  authorize(xhr) {
    let { id:accessToken } = this.get('session.data.authenticated');
    xhr.setRequestHeader('Authorization', accessToken);
  },
});
