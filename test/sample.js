tm.preload(function() {
    tm.util.FileManager.load("vs", { url: "../shaders/shader.vs", type: "GET" });
    tm.util.FileManager.load("fs", { url: "../shaders/shader.fs", type: "GET" });
    tm.graphics.TextureManager.add("main", "../images/texture0.png");
});

tm.main(function() {
    var app = tm.app.CanvasApp("#canvas2d");
    app.element.style.display = "none";
    app.fps = 60;

    var glCanvas = document.getElementById("canvas3d"); fitWindow(glCanvas);
    var scene = new Scene(
        glCanvas, 
        tm.util.FileManager.get("vs").data, 
        tm.util.FileManager.get("fs").data
    );
    scene.gl.clearColor(0, 0, 0, 1.0);

    var textures = {};
    for (var name in tm.graphics.TextureManager.textures) {
        textures[name] = createTexture(scene.gl, tm.graphics.TextureManager.get(name).element);
    }
    Sprite.mainTexture = textures["main"];

    var player = new Sprite(Sprite.mainTexture);
    player.glow = 1.0;
    player.texX = 3;
    player.texY = 0;
    player.scale = 1.5;
    player.x = 0;
    player.y = -7;
    scene.add(player);

    for (var i = 0; i < 1; i++) {

        var enemy = new Sprite(Sprite.mainTexture);
        enemy.glow = 1.0;
        enemy.texX = 4;
        enemy.texY = 2;
        enemy.x = 0;
        enemy.y = 10;
        scene.add(enemy);

        // set attack pattern to enemy
        // enemy.update = Patterns["boss22"].createTicker(attackParam(player));

    }

    var frameCount = -1;
    var lastUpdate = Date.now();
    app.update = function() {
        scene.update();
        scene.draw();

        if (app.keyboard.getKey("up"))          player.y += 0.2;
        else if (app.keyboard.getKey("down"))   player.y -= 0.2;
        if (app.keyboard.getKey("right"))       player.x += 0.2;
        else if (app.keyboard.getKey("left"))   player.x -= 0.2;

        frameCount += 1;
        var ms = Date.now();
        if (ms - lastUpdate >= 1000) {
            console.log("fps = " + frameCount);
            lastUpdate = ms;
            frameCount = 0;
        }
    };

    app.run();
});

var attackParam = function(target) {
    return {
        target: target,
        rank: 0.5,
        bulletFactory: function(spec) {
            var b = new Sprite(Sprite.mainTexture);
            b.texX = 3;
            b.texY = 1;
            b.scale = 0.6;
            if (spec.label === null || spec.label === void 0) {
                b.texX = 3;
                b.texY = 1;
            } else if (spec.label === "g" || spec.label.indexOf("green") === 0) {
                b.texX = 2;
                b.texY = 1;
            } else if (spec.label === "b" || spec.label.indexOf("blue") === 0) {
                b.texX = 1;
                b.texY = 1;
            } else if (spec.label.indexOf("bit") !== -1) {
                b.alive = true;
                b.texX = 7;
                b.texY = 7;
            } else {
                b.texX = 3;
                b.texY = 1;
            }

            if (spec.label && spec.label.indexOf("alive") !== -1) {
                b.alive =  true;
            }

            if (spec.label === "s") {
                b.scale = 0.4;
            } else if (spec.label === "sg") {
                b.scale = 0.4;
                b.texX = 2;
                b.texY = 1;
            } else if (spec.label === "sb") {
                b.scale = 0.4;
                b.texX = 1;
                b.texY = 1;
            }
            return b;
        },
        isInsideOfWorld: function(b) {
            return -22 < b.x && b.x < 22 && -22 < b.y && b.y < 22;
        },
        updateProperties: false,
        speedRate: 0.1
    };
};
