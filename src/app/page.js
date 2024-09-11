
import data from './public/data.json'
export default async function Home() {
 

  
  return (
    <div>
    <h1>File Content</h1>
    <div>{data[0].name}</div>
    <div>{data[1].name}</div>
    
    {/* <pre>{data.map(rec=>{
      return (
        <div>
        <div key={rec.id} >{rec.name}</div>
        </div>
      )
    })}</pre> */}
  </div>
  );
}
