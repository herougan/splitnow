export interface Transaction {

	// === Base ===
	message: string;
	image: string;
	group_id: number;
  
	member_ids: number[];
	payee_id: number;
  
	amount: number;
	currency_id: number;

	description: string;
	comments: Comment[];
	datetime: Date;

	// ==== Meta ====
	// Picture
	picture_id: string;
	ai_ocr_used: boolean;
	// Location
	address: string;
	coordinates: string;
	city: string;
}

export interface Comment {
	member_id: string;
	text: string;

	datetime: Date;
}

export enum SplitMode {
	Dutch = 0,
	EachItem = 1,

	Random = 9,
}