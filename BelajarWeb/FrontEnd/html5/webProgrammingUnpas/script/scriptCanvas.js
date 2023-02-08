const c = document.getElementById("canvas");

// atur ukuran canvas
c.width = window.innerWidth;
c.height = window.innerHeight;

// Tentukan context
const my = c.getContext("2d");

// manipulasi canvas

// membuat rectangle
my.fillStyle = "pink";
my.strokeStyle = "#999";
my.lineWidth = "5";

my.rect(50, 50, 300, 300);
my.fill();
