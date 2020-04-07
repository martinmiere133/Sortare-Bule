
let values = [] ;
let w = 10;
let states = [];
var slider;
var ms = 0; 
function setup() {
	createCanvas(800, 200);
	slider = createSlider(10, 1000, 10, 10)

	values  = new Array(floor(width/w));
	for(let i = 0 ;i<values.length ;i++)
	{values[i] = random(height);
		states[i]=-1;
	}
	frameRate(5);
	bubblesort(values);
}
async function bubblesort(values)
{
	for(let i= 0 ; i<values.length-1;i++)
	{
		for(let k = i;k<states.length ; k++)
			states[k]=0;
		for(let j = i+1 ;j<values.length;j++)
			if(values[i]>values[j])
			{
				ms = slider.value();
				console.log(ms);
				await sleep(ms);
				swap(values,i,j);
				states[i] = 1 ;
				states[j] = -1 ;
			}
	}

}
async function swap(arr, a , b)
{
	let temp = arr[a];
	arr[a]=arr[b];
	arr[b]=temp;
}
function draw() {
	background(51);
	for(let i= 0 ;i<values.length;i++)
	{

		stroke(0);
		fill(255);
		if(states[i]==0)
		{
			fill(255,0,0);
		}
		else if(states[i]==1)
		{
			fill(0,0,255)
		}
		else {fill(0,255,0);
			states[i]=0;
		}
		rect(i*w, height -values[i], w, values[i]);
	}
}

function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve,ms));
}