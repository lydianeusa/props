import Profil from './Profil';

const Header =()=>{

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 43,
    address: "1 rue de la paix, 22969 La Pie sur Garonne",
  }

  return (
    <div>
        <p>{user.firstName}</p>
        <Profil user={user}/>
    </div>
  );
}

export default Header;

