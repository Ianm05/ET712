import './App.css';

function App() {
  return (
   <div>
    <h1 style={{color:"crimson", textAlign:"center"}}>Student's full name</h1>
    <p> This is my first reactJS app</p>
    <p>Bucket list</p>
    <ol>
      <li> It gives you things to look forward to</li>
      <li>It makes life more meaningful</li>
      </ol>
    <h2> Inline styling</h2>
    <label for="email">Enter e-mail: </label>
    <input type="text" id="email" placeholder="Enter a email address..."style={{padding:"10px" , backgroundColor: "lightgreen"}}/>
    <button type="submit" style={{backgroundColor:"Crimson", padding:"10px 20px"}}>Submit</button>
    <hr/>
  <img src={Yellowtoneimg} style={{width:"500px", display:"block",margin:"auto", border: "groove 10px orange"}}/>
  <h2 className= 'subtitle'>Variables in JSX</h2>
  <p>Calling variable msg = {msg}</p>
  <p> Calling function printsomething ={printsomething()}</p>
</div>
  );

}
