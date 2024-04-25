import { Group } from "../../../app/structures/group";
import { User } from "../../../app/structures/user";


export const USERS: User[] = [
	new User(0, "Alice"),
	new User(1, "Bob"),
	new User(2, "Charlie"),
	new User(3, "Dave"),
	new User(4, "Eve"),
	new User(6, "Frank"),
	new User(7, "Grace"),
	new User(8, "Heidi"),
	new User(9, "Ivan"),
	new User(10, "Judy"),
	new User(11, "Kate"),
	new User(12, "Lily"),
	new User(13, "Michael"),
	new User(14, "Noel"),
	new User(15, "Oscar"),
	new User(16, "Peggy"),
	new User(17, "Quinn"),
	new User(18, "Rupert"),
	new User(19, "Sybil"),
	new User(20, "Ted"),
	new User(21, "Undine"),
	new User(22, "Victor"),
	new User(23, "Wendy"),
	new User(24, "Alice"),
	new User(25, "Alice"),
]


export const GROUPS: Group[] = [
	new Group(0, "Group All", USERS),
	new Group(1, "Group ONE", [USERS[0], USERS[3], USERS[6], USERS[9], USERS[12]]),
	new Group(1, "Group TWO", [USERS[1], USERS[4], USERS[7], USERS[10], USERS[13], USERS[16]]),
	new Group(1, "Group THREE", [USERS[2], USERS[5], USERS[8], USERS[11], USERS[14], USERS[16], USERS[20]]),
]


export const FRIENDSHIPS: [number, number][] = [

]