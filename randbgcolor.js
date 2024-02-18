const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33C9', '#33C9FF', '#C9FF33', '#FF336A', '#336AFF', '#6AFF33',
    '#FF3333', '#3333FF', '#33FF33', '#FFAA33', '#33FFAA', '#AA33FF'
];

function randomcolor() {
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];

document.body.style.backgroundColor = randomColor;
document.getElementById('color-code').textContent = randomColor;
}
