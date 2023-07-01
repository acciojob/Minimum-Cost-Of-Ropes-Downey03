function calculateMinCost() {
  //your code here
	let input = document.getElementById("rope-lengths").value;
	  let arr = input.split(",");
	while(arr.length>1)
	{
		arr.sort(function(a,b){
			return a-b;
		})
		arr[1]=arr[0]+arr[1];
		arr.shift();
	}  
return arr;
}  
