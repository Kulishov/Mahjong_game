   document.getElementById("IPage").innerHTML = '<canvas id="canvas" width="600" height="400">'
   document.getElementById("IPage2").innerHTML = "<p class='congtrat'>Поздравлем с победой "+ NameInfo +'. Ваш результат: '+ Counter +'!!!</p>'

            var canvas;
            var context2D;

            canvas = document.getElementById("canvas");
            context2D = canvas.getContext("2d");



            var particles = [];

            function randomFloat(min, max) {
                return min + Math.random() * (max - min);
            }


            function Particle ()
        {
            this.scale = 1.0;
            this.x = 0;
            this.y = 0;
            this.radius = 20;
            this.color = "#000";
            this.velocityX = 0;
            this.velocityY = 0;
            this.scaleSpeed = 0.1;

            this.update = function(ms)
            {
                // shrinking
                this.scale -= this.scaleSpeed * ms / 1000.0;

                if (this.scale <= 0)
                {
                    this.scale = 0;
                }

                // moving away from explosion center
                this.x += this.velocityX * ms/1000.0;
                this.y += this.velocityY * ms/1000.0;
            };

            this.draw = function(context2D)
            {
                // translating the 2D context to the particle coordinates
                context2D.save();
                context2D.translate(this.x, this.y);
                context2D.scale(this.scale, this.scale);

                // drawing a filled circle in the particle's local space
                context2D.beginPath();
                context2D.arc(0, 0, this.radius, 0, Math.PI*2, true);
                context2D.closePath();

                context2D.fillStyle = this.color;
                context2D.fill();

                context2D.restore();
            };
        }


            function createBasicExplosion(x, y)
        {
            // creating 4 particles that scatter at 0, 90, 180 and 270 degrees
            for
            (var angle=0; angle<360; angle+=90)
            {
                var particle = new Particle();

                // particle will start at explosion center
                particle.x = x;
                particle.y = y;

                particle.color = "#FF0000";

                var speed = 50.0;

                // velocity is rotated by "angle"
                particle.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
                particle.velocityY = speed * Math.sin(angle * Math.PI / 180.0);

                // adding the newly created particle to the "particles" array
                particles.push(particle);
            }
        }


            function createExplosion(x, y, color)
        {
            var
                    minSize = 10;
            var maxSize = 30;
            var count = 10;
            var minSpeed = 60.0;
            var maxSpeed = 200.0;
            var minScaleSpeed = 1.0;
            var maxScaleSpeed = 4.0;


            for (var angle=0; angle<360; angle += Math. round(360/count))
            {
                var particle = new Particle();

                particle.x = x;
                particle.y = y;

                particle.radius = randomFloat(minSize, maxSize);

                particle.color = color;

                particle.scaleSpeed = randomFloat(minScaleSpeed, maxScaleSpeed);

                var speed = randomFloat(minSpeed, maxSpeed);

                particle.velocityX = speed * Math.cos(angle * Math.PI / 180.0);
                particle.velocityY = speed * Math.sin(angle * Math.PI / 180.0);

                particles.push(particle);
            }
        }

        function update (frameDelay)
        {
            // draw a white background to clear canvas
            context2D.fillStyle = "#F4A460";
            context2D.fillRect(0, 0, context2D.canvas.width, context2D.canvas.height);

            // update and draw particles
            for (var i = 0; i<particles.length; i++)
            {
                var particle = particles[i];

                particle.update(frameDelay);
                particle.draw(context2D);
            }
        }


                  // canvas and 2D context initialization




            // starting the game loop at 60 frames per second
            var frameRate = 60.0;
            var frameDelay = 1000.0/frameRate;

            setInterval(function()
            {
                update(frameDelay);

            }, frameDelay);


            fire()
function fire(){
            

            BOOM()
            function BOOM()
            {
                var x = randomFloat(100, 400);
                var y = randomFloat(100, 200);

                createExplosion(x, y, "#F5F060");
                createExplosion(x, y, "#F56065");
                createExplosion(x, y, "#F560B0")
                createExplosion(x, y, "#B0F560");
            }

            var timerId = setInterval(BOOM, 500);

            setTimeout(function() {
                clearInterval(timerId);
                            }, 5000);
        }
           