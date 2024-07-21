const btn = document.getElementById("btn");
const clear = document.getElementById("clr");
const frame = document.getElementById("frame");
const tarea = document.getElementById("txta");

async function generate() {
  const img = document.createElement("img");
  const prompt = tarea.value;
  if (prompt.trim() === "") {
    alert("Enter a valid prompt!!");
    return;
  }
  try {
    let obj = await fetch(
        `https://team-c3rb.onrender.com/genpage/api/generate/?prompt=${prompt}`
/*       `http://localhost:3000/genpage/api/generate/?prompt=${prompt}` */
    );
    let res = await obj.json();
    img.src = res.img_url;
    img.id = "fimg";
    frame.appendChild(img);
  } catch (e) {
    alert(e);
  }
}

function clean() {
  tarea.value = "";
  while (frame.childElementCount != 0) frame.removeChild(frame.firstChild);
}

btn.addEventListener("click", generate);
clear.addEventListener("click", clean);
