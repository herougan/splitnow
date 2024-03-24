export class User {
	// id: number;
	// name: string;
	// email?: string;
	
	// is_guest?: Boolean;

	// card_id?: number;
	// google_id?: number;
	// sgqr_id?: number;

	constructor(
		public id: number,
		public name: string,
		public friendIds: number[] = [],
		public email?: string,

		public is_guest?: Boolean,

		public card_id?: number,
		public google_id?: number,
		public sgqr_id?: number,
	) {}
}

export class SimpleUser {

	constructor(
		public name: string,
		public tempId: number,
	) {}

}