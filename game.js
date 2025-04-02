// Initialize canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let score = 0;
let gameRunning = true;

// Player object
const player = {
    x: 50,
    y: canvas.height - 100,
    width: 50,
    height: 50,
    color: '#3498db',
    speed: 5,
    jumping: false,
    jumpHeight: 0,
    maxJump: 100
};

// Game loop
function gameLoop() {
    if (!gameRunning) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update game state
    updatePlayer();
    
    // Draw everything
    drawPlayer();
    drawScore();
    
    // Continue loop
    requestAnimationFrame(gameLoop);
}

// Player functions
function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y - player.jumpHeight, player.width, player.height);
}

function updatePlayer() {
    // Simple jump animation
    if (player.jumping) {
        player.jumpHeight += 5;
        if (player.jumpHeight >= player.maxJump) {
            player.jumping = false;
        }
    } else if (player.jumpHeight > 0) {
        player.jumpHeight -= 5;
    }
}

// Score display
function drawScore() {
    ctx.fillStyle = 'black';
    ctx.font = '24px Arial';
    ctx.fillText(`Score: ${score}`, 20, 30);
}

// Event listeners
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !player.jumping) {
        player.jumping = true;
    }
});

// Start the game
gameLoop();
