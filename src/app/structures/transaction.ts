export interface Transaction {
	message: string;
	image: string;
	group_id: number;
  
	member_ids: number[];
	payee_id: number;
  
	amount: number;
	currency_id: number;
}

export enum SplitMode {
	Dutch = 0,
	EachItem = 1,

	Random = 9,
}