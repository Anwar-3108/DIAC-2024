export function fetchCount(amount=1) {
return new Promise(async (resolve) => {
   const response =await fetch('http://localhost:5174/')
   const data= await response.json()
   resolve({data})
})
}