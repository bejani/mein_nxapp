
import data from './public/data.json'
export default async function Home() {
 

  
  return (
    <div>
    <h1>File Content</h1>
    <pre>{data.map(rec=>{
      return (
        <div>
        <div key={rec.id} >{rec.name}</div>
        </div>
      )
    })}</pre>
  </div>
  );
}
