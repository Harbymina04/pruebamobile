export default function DeleteConfirmation(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	return dialogs.confirm("Delete current entity?").then((result) => {
		if (result === true) {
			return clientAPI.executeAction('/prueba/Actions/Order_Details_Extendeds/Order_Details_Extendeds_DeleteEntity.action').then(
				(success) => Promise.resolve(success),
				(failure) => Promise.reject('Delete entity failed ' + failure));
		} else {
			return Promise.reject('User Deferred');
		}
	});
}