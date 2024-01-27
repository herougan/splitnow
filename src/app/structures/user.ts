export interface User {
	id: number;
	name: string;
	email: string;
	
	is_guest: Boolean;

	card_id: number;
	google_id: number;
	sgqr_id: number;
}