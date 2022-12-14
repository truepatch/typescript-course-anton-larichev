export {};

type User = {
    name: string;
    age: number;
    skills: string[];
};

type Role = {
    name: string;
    id: number;
};

type UserWithRole = User & Role;
type UserOrRole = User | Role;

let user1: UserWithRole = {
    name: 'piter',
    age: 33,
    skills: ['a', 'b'],
    id: 1,
};
let user2: UserOrRole = {
    name: 'piter',
    // age: 33,
    // skills: ['a', 'b'],
    id: 1,
};



// composite type
type UserWithRoleComposite = {
    user: User;
    role: Role;
};

let userCompose: UserWithRoleComposite = {
    user: {
        name: 'Marat',
        age: 30,
        skills: ['1', '2'],
    },
    role: {
        name: 'admin',
        id: 1,
    },
};
