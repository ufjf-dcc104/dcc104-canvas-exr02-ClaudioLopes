function Sprite(){
  this.x = 500;
  this.y = 450;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 15;
  this.height = 15;
  this.cooldown = 0;
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

Sprite.prototype.moverTiro = function(dt){
  this.vy = this.vy + (this.ay-60)*dt;
  this.y = this.y + this.vy*dt;
};

Sprite.prototype.colidiuCom = function (alvo) {
  if(this.x+this.width < alvo.x) return false;
  if(this.x > alvo.x+this.width) return false;
  if(this.y+this.height < alvo.y) return false;
  if(this.y > alvo.y+this.height) return false;
  return true;
};

Sprite.prototype.desenharImg = function (ctx, img) {
  ctx.fillStyle = this.color;
  ctx.drawImage(img, this.x, this.y, this.width, this.height);
  if(this.debug){
    ctx.strokeStyle = "grey";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
};
