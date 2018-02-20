import Controller from '@ember/controller';
import { inject } from '@ember/service';

export default Controller.extend({
    session: inject('session'),

    actions: {
        authenticate() {
            let controller = this;
            let { identification, password } = this.getProperties('identification', 'password');

            this.get('session').authenticate('authenticator:oauth2', identification, password).catch(reason => {
                controller.toast.error(`${reason.error}`, 'Error Encountered', { progressBar: false, preventDuplicates: false, positionClass: 'toast-top-right', });
                this.set('errorMessage', reason.error);
            });
        }
    }
});
