import { Group } from "../../../app/structures/group";
import { User } from "../../../app/structures/user";


export const USERS: User[] = [
	new User(0, "Alice", "Alice@gmail.com"),
	new User(1, "Bob", "Bob@gmail.com"),
	new User(2, "Charlie", "Charlie@gmail.com"),
	new User(3, "Dave", "Dave@gmail.com"),
	new User(4, "Eve", "Eve@gmail.com"),
	new User(5, "Missy", "Missy@gmail.com"),
	new User(6, "Frank", "Frank@gmail.com"),
	new User(7, "Grace", "Grace@gmail.com"),
	new User(8, "Heidi", "Heidi@gmail.com"),
	new User(9, "Ivan", "Ivan@gmail.com"),
	new User(10, "Judy", "Judy@gmail.com"),
	new User(11, "Kate", "Kate@gmail.com"),
	new User(12, "Lily", "Lily@gmail.com"),
	new User(13, "Michael", "Michael@gmail.com"),
	new User(14, "Noel", "Noel@gmail.com"),
	new User(15, "Oscar", "Oscar@gmail.com"),
	new User(16, "Peggy", "Peggy@gmail.com"),
	new User(17, "Quinn", "Quinn@gmail.com"),
	new User(18, "Rupert", "Rupert@gmail.com"),
	new User(19, "Sybil", "Sybil@gmail.com"),
	new User(20, "Ted", "Ted@gmail.com"),
	new User(21, "Undine", "Undine@gmail.com"),
	new User(22, "Victor", "Victor@gmail.com"),
	new User(23, "Wendy", "Wendy@gmail.com"),
	new User(24, "Xavier", "Xavier@gmail.com"),
	new User(25, "Yale", "Yale@gmail.com"),
	new User(26, "Zoe", "Zoe@gmail.com"),
	new User(27, "1-X-North", "1-X-North@gmail.com"),
	new User(27, "2xr8", "2xr8@gmail.com"),
]


export const GROUPS: Group[] = [
	new Group(0, "Group All", USERS),
	new Group(1, "Group ONE", [USERS[0], USERS[3], USERS[6], USERS[9], USERS[12]]),
	new Group(1, "Group TWO", [USERS[1], USERS[4], USERS[7], USERS[10], USERS[13], USERS[16]]),
	new Group(1, "Group THREE", [USERS[2], USERS[5], USERS[8], USERS[11], USERS[14], USERS[16], USERS[20]]),
]


export const FRIENDSHIPS: [number, number][] = [
	[0, 1],
	[0, 5],
	[0, 10],
	[0, 15],
	[0, 20],
	[0, 25],
	[100, 0],
	[100, 26],
]