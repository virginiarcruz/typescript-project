
interface TypeObject {
  title: string,
  experience: number
}

interface CreateUserData {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | TypeObject>
}

export function CreateUser({name, email, password}: CreateUserData) {
  const user = {
    name,
    email,
    password
  }

  return user
}