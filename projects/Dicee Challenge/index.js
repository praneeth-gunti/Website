var rand = Math.floor(Math.random() * 6) + 1;
var rand1 = Math.floor(Math.random() * 6) + 1;
var str = "images/dice"+rand+".png";
var str1 = "images/dice"+rand1+".png";
document.querySelector("img.img1").setAttribute("src", str);
document.querySelector("img.img2").setAttribute("src", str1);

if(rand > rand1)
  document.querySelector("div h1").textContent = "⛳Player 1 wins!";
else if(rand < rand1)
  document.querySelector("div h1").textContent = "Player 2 wins!⛳";
else
  document.querySelector("div h1").textContent = "⛳ Draw ⛳";
