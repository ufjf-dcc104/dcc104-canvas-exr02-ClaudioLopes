function Sprite(){
  this.x = 500;
  this.y = 450;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 15;
  this.height = 15;
  this.color = "blue";
}

Sprite.prototype.desenhar = function(ctx){
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y, this.width, this.height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x,this.y, this.width, this.height);
};

Sprite.prototype.mover = function(dt){
  this.vx = this.vx + (this.ax)*dt;
  this.x = this.x + this.vx*dt;
};

Sprite.prototype.moverEnemy = function(dt){
  this.vy = this.vy + (this.ay+60)*dt;
  this.y = this.y + this.vy*dt;
};
