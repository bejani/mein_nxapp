
import data from './public/data.json'
export default async function Home() {
 

  
  return (
    <div>
    <h1>File Content</h1>
    <pre>{data.map(rec=>{
      return (
        <div>
        <div>{rec.name}</div><div>{rec.description}</div>
        </div>
      )
    })}</pre>
  </div>
  );
}
