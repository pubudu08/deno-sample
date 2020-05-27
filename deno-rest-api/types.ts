export interface Product {
  id: string;
  name?: string;
  description: string;
  price: number;
}

// Bad: System restraints only encoded in the comments
interface User {
  /**
   *  A user can have either a username or email, but never both
   */
  id: number;
  username?: string;
  email?: string;
}

// Good: System restraints encoded in types
interface BaseUser {
  id: number;
}

interface UserWithEmail extends BaseUser {
  email: string;
}

interface UserWithUserName extends BaseUser {
  username: string;
}
