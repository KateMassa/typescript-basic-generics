type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(data: Partial<User>): User {
  // User create
  // User update
  return { ...data } as User;
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
