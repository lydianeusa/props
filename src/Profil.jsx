const Profil = ({user}) =>{
    return (
        <div>
          <p>{user.age}</p>  
          <p>{user.address}</p>
        </div>
    )
}

export default Profil;