var cur=0;
var size=5;
var id=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"]

function previous()
{
	if(cur==0)
	{
  	  cur=size
	}
	else
	{
  	  cur--
	}
	let img=document.getElementById('id')
	img.src=id[cur]
}

function next()
{
  if(cur==size)
  {
    cur=0
  }
  else
  {
    cur++
  }
  let img=document.getElementById('id')
  img.src=id[cur]
}