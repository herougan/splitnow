export class Transaction {
	
	constructor(
		public message: string,

		public member_ids: number[] = [],
		public payee_id: number,

		public amount: number,
		public currency_id: number,

		public description?: string,
		public comments: Comment[] = [],
		public datetime: Date = new Date(),

		// ==== Meta ====
		public picture_id?: string,
		public ai_ocr_used?: boolean,
		public address?: string,
		public coords?: string,
		public city?: string,
	) {}
}

export class Comment {
	
	constructor(
		public member_id: string,
		public text: string,

		public datetime: Date,
	) {}
}

export enum SplitMode {
	Dutch = 0,
	EachItem = 1,

	Random = 9,
}