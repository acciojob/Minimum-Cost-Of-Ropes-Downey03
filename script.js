function calculateMinCost() {
  //your code here
	let cost = 0;
	let input = document.getElementById("rope-lengths").value;
	  let arr = input.split(",");
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
