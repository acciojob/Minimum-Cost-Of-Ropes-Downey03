function calculateMinCost() {
  //your code here
	let cost = 0;
	let form = document.getElementById("form");
	let input = form.get('input[type="text"]').value
	let button = form.get('button[type="button"]')
	  let arr = input.split(",");
console.log(arr)
	while(arr.length>1)
	{
		arr.sort(function(a,b){
			return a-b;
		})
		arr[1]=arr[0]+arr[1];
		cost += arr[1]
		arr.shift();
	}  
	document.getElementById("result").textContent = cost;
}  
