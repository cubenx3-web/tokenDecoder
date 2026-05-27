import { jwtDecode, type JwtPayload } from "jwt-decode";
import { useState, type FormEvent } from "react";

function App() {


  const [token, setToken] = useState<string> ("");
  const [decode, setDecode] = useState<JwtPayload | undefined>();
  const [error, setError] = useState <string>("");

  function submitHandler(e:FormEvent){
    
    e.preventDefault()
    try{
      setDecode( jwtDecode(token));
      setError("")
    }
    catch(e){
      setError("Invalid Token")
    }

    
    


  }

  return (
    <>
      <div className="bg-black w-dvw h-dvh relative text-gray-200 shadow-2xl flex flex-col shadow-orange-50 items-center justify-center gap-10">
        <form 
        onSubmit={submitHandler}
        className={` bg-gray-900/50 backdrop-blur-2xl min-w-100 p-3 gap-5 min-h-50 border flex flex-col rounded-lg `}
        >
          <div className={`text-2xl font-bold text-center w-full`}>Token Decoder</div>
          <textarea className="border rounded-lg p-2 min-h-30" placeholder="Enter Your Jwt Token" value={token} onChange={(e)=>(setToken(e.target.value))} required></textarea>
          
          <button type="submit" className={`bg-blue-600 backdrop-blur-lg hover:bg-blue-400/40 active:bg-blue-800 p-1 rounded-lg`}>Decode</button>
        </form>
        <div className="border p-5 text-sm rounded-lg ring-3 ring-blue-400/60">
          {
            decode && Object.entries(decode).map(([key, value]) => (
              <div className="" key={key}>{key} : {value.toString()}</div>
            ))
          }
          <div>{error}</div>
        </div>

      </div>
     
    </>
  )
}

export default App
