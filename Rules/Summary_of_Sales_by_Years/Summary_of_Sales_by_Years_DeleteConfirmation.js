export default function DeleteConfirmation(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	return dialogs.confirm("Delete current entity?").then((result) => {
		if (result === true) {
			return clientAPI.executeAction('/prueba/Actions/Summary_of_Sales_by_Years/Summary_of_Sales_by_Years_DeleteEntity.action').then(
				(success) => Promise.resolve(success),
				(failure) => Promise.reject('Delete entity failed ' + failure));
		} else {
			return Promise.reject('User Deferred');
		}
	});
}