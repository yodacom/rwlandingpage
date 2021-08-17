import UserExampleCell from 'src/components/UserExample/UserExampleCell'

type UserExamplePageProps = {
  id: Int
}

const UserExamplePage = ({ id }: UserExamplePageProps) => {
  return <UserExampleCell id={id} />
}

export default UserExamplePage
