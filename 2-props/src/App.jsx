import UserCard from "./components/UserCard"
import maharana from'./assets/maharana.jpg'
import prithvi from'./assets/prithvi.jpg'
import pic from'./assets/babbar.jpg'
function App() {

  return (
    
<div>
<UserCard name='babbar' desc='desc1' image={pic} style={{"border-radius":"10px"}}/>
<UserCard name='maharana prtap' desc='desc2' image={maharana} style={{borderRadius:"10px"}}/>
<UserCard name='prithvi raj chohan' desc='desc3' image={prithvi} style={{"border-radius":"10px"}}/>
</div>

  )
}

export default App
