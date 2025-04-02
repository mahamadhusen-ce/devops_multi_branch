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
// Sprite animation example
const sprite = {
    img: new Image(),
    frameWidth: 64,
    frameHeight: 64,
    currentFrame: 0,
    totalFrames: 8,
    frameCounter: 0,
    frameDelay: 5
};

sprite.img.src = 'spritesheet.png';

function animateSprite() {
    sprite.frameCounter++;
    if (sprite.frameCounter >= sprite.frameDelay) {
        sprite.frameCounter = 0;
        sprite.currentFrame = (sprite.currentFrame + 1) % sprite.totalFrames;
    }
    
    ctx.drawImage(
        sprite.img,
        sprite.currentFrame * sprite.frameWidth,
        0,
        sprite.frameWidth,
        sprite.frameHeight,
        player.x,
        player.y,
        player.width,
        player.height
    );
}
// Start the game
gameLoop();
