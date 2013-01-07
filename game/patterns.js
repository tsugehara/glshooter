BulletML.dsl();

var Patterns = {};
(function() {
    function pattern(dsl) {
        return new AttackPattern(new BulletML.Root(dsl));
    }

    function zako1(delay, dir) {
        return pattern({
            top: action(
                wait(delay + "+$rand*5"),
                changeDirection(direction(45 * dir, "absolute"), 1),
                changeSpeed(speed(4), 60),
                wait(60),
                changeSpeed(speed(0), 10),
                wait(10),
                repeat(5 ,action(
                    fire(direction("$rand*10-5"), speed("2+$rank"), bullet()),
                    wait(2)
                )),
                changeDirection(direction(160 * dir, "absolute"), 1),
                changeSpeed(speed(4), 40)
            )
        });
    }

    Patterns.zako1 = zako1(0, 1);
    Patterns.zako1d = zako1(40, 1);
    Patterns.zako2 = zako1(0, -1);
    Patterns.zako2d = zako1(45, -1);

    Patterns.zako3 = pattern({
        top: action(
            wait("$rand*5"),
            changeDirection(direction(0, "aim"), 1),
            changeSpeed(speed(4), 40),
            wait(20),
            repeat(3, action(
                fire(direction("$rand*10-5"), speed("2+$rank"), bullet()),
                wait(5)
            ))
        )
    });

    Patterns.zako4 = pattern({
        top: action(
            wait("$rand*20"),
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(3), 1),
            wait("5+$rand*20"),
            changeSpeed(speed(0.2), 30),
            wait(30),
            actionRef("attack"),
            changeSpeed(speed(-3), 30)
        ),
        attack: action(
            wait("5+$rand*20"),
            repeat(2, action(
                fire(direction(-3*2, "aim"),      speed("1.4+$rank"), bullet()),
                fire(direction( 2*2, "sequence"), speed("1.5+$rank"), bullet()),
                fire(direction( 2*2, "sequence"), speed("1.6+$rank"), bullet()),
                fire(direction( 2*2, "sequence"), speed("1.7+$rank"), bullet()),
                wait(90)
            ))
        )
    });

    Patterns.zako4K = pattern({
        top: action(
            wait("$rand*20"),
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(3), 1),
            wait("5+$rand*20"),
            changeSpeed(speed(0.2), 30),
            wait(30),
            actionRef("attack"),
            changeSpeed(speed(-3), 30)
        ),
        attack: action(
            wait("5+$rand*20"),
            repeat(2, action(
                fire(direction(-3*2, "aim"),      speed("0.8+$rank"), bullet()), fire(direction( 2*2, "sequence"), speed(0.1, "sequence"), bullet()),
                fire(direction( 2*2, "sequence"), speed(0.1, "sequence"), bullet()),
                fire(direction( 2*2, "sequence"), speed(0.1, "sequence"), bullet()),
                wait(90)
            ))
        )
    });

    Patterns.zako5 = pattern({
        top: action(
            wait("$rand*20"),
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(3), 1),
            wait("5+$rand*20"),
            changeSpeed(speed(0.2), 30),
            wait(30),
            actionRef("attack"),
            changeSpeed(speed(-3), 30)
        ),
        attack: action(
            wait("5+$rand*20"),
            repeat(2, action(
                fire(direction("$rand*10-5"), speed("2.2+$rank"), bullet()),
                repeat(12, action(
                    wait(3),
                    fire(direction(0, "sequence"), speed(0.2, "sequence"), bullet())
                )),
                wait(80)
            ))
        )
    });

    Patterns.zako5K = pattern({
        top: action(
            wait("$rand*20"),
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(3), 1),
            wait("5+$rand*20"),
            changeSpeed(speed(0.2), 30),
            wait(30),
            actionRef("attack"),
            changeSpeed(speed(-3), 30)
        ),
        attack: action(
            wait("5+$rand*20"),
            fire(direction(-15*1.5), speed("0.6+$rank"), bullet()),
            repeat(4-1, action(
                fire(direction(15, "sequence"), speed(0, "sequence"), bullet())
            )),
            wait(80)
        )
    });

    Patterns.zako6 = pattern({
        top: action(
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(3), 1),
            wait("5+$rand*20"),
            changeSpeed(speed(0.3), 30),
            wait(45),
            actionRef("attack"),
            changeSpeed(speed(-3), 30)
        ),
        attack: action(
            repeat(8, actionRef("firebit", "$rand*360")),
            wait(90),
            repeat(8, actionRef("firebit", "$rand*360")),
            wait(90)
        ),
        firebit: action(
            fire(direction("$1", "aim"), speed("0.5+$rand"), bulletRef("bit", "$1"))
        ),
        bit: bullet(
            action(
                wait("10+$rank*3"),
                fire(direction("$1*-1", "relative"), speed("3.4+$rank"), bullet()),
                vanish()
            )
        )
    });

    Patterns.zako6K = pattern({
        top: action(
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(3), 1),
            wait("5+$rand*20"),
            changeSpeed(speed(0.3), 30),
            wait(45),
            actionRef("attack"),
            changeSpeed(speed(-3), 30)
        ),
        attack: action(
            repeat(8, actionRef("firebit", "$rand*360")),
            wait(90),
            repeat(8, actionRef("firebit", "$rand*360")),
            wait(90)
        ),
        firebit: action(
            fire(direction("$1", "aim"), speed("0.5+$rand"), bulletRef("bit", "$1"))
        ),
        bit: bullet(
            action(
                wait("10+$rank*3"),
                fire(direction("$1*-1", "relative"), speed("0.8+$rank"), bullet("g")),
                vanish()
            )
        )
    });

    Patterns.zako7 = pattern({
        top: action(
            wait("5+$rand*60"),
            changeDirection(direction("0", "absolute"), 1),
            wait(5),
            changeDirection(direction("$rand*10-5"), 30),
            changeSpeed("2.9+$rank", 1),
            wait(15),
            fire(direction("$rand*5-2.5"),speed("3.4+$rank"), bullet()),
            wait(15),
            changeDirection(direction(0), 30),
            wait(15),
            changeDirection(direction(0), 30)
        )
    });

    Patterns.zako8 = pattern({
        top1: action(
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(5), 1),
            wait(20),
            changeSpeed(speed(-0.2), 60),
            wait(400),
            changeSpeed(speed(-5), 30)
        ),
        top2: action(
            wait(90),
            fire(direction( 20, "absolute"), speed("2.2+$rank"), bullet()),
            repeat(300/6, action(
                fire(direction(-0.5, "sequence"), speed("2.2+$rank"), bullet()),
                wait(6)
            ))
        ),
        top3: action(
            wait(90),
            fire(direction(-20, "absolute"), speed("2.2+$rank"), bullet()),
            repeat(300/6, action(
                fire(direction( 0.5, "sequence"), speed("2.2+$rank"), bullet()),
                wait(6)
            ))
        )
    });

    Patterns.bigger = pattern({
        top: action(
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(2), 1),
            wait(30),
            changeDirection(direction(90, "absolute"), 1),
            changeSpeed(speed(0.2), 1),
            actionRef("attack"),
            repeat(30, action(
                changeDirection(direction(-90, "absolute"), 1),
                actionRef("attack"),
                actionRef("attack"),
                changeDirection(direction(90, "absolute"), 1),
                actionRef("attack"),
                actionRef("attack")
            ))
        ),
        attack: action(
            repeat(2, action(
                repeat("1+$rank*5", action(
                    fire(direction(-30, "aim"), speed("2+$rank"), bullet()),
                    fire(direction(20, "sequence"), speed("2+$rank"), bullet()),
                    fire(direction(20, "sequence"), speed("2+$rank"), bullet()),
                    fire(direction(20, "sequence"), speed("2+$rank"), bullet()),
                    wait(5)
                )),
                wait(10),
                repeat("1+$rank*5", action(
                    fire(direction(-40, "aim"), speed("2+$rank"), bullet("g")),
                    fire(direction(20, "sequence"), speed("2+$rank"), bullet("g")),
                    fire(direction(20, "sequence"), speed("2+$rank"), bullet("g")),
                    fire(direction(20, "sequence"), speed("2+$rank"), bullet("g")),
                    fire(direction(20, "sequence"), speed("2+$rank"), bullet("g")),
                    wait(5)
                )),
                wait(10)
            ))
        )
    });

    function tank1(delay) {
        return pattern({
            top: action(
                wait(delay),
                changeDirection(direction(80, "absolute"), 1),
                changeSpeed(speed(0.5), 1),
                wait("60+$rand*100"),
                repeat(30, action(
                    fire(speed("1.5+$rank"), bullet("sg")),
                    wait("60+$rand*100")
                ))
            )
        });
    }

    Patterns.tank1 = tank1(0);
    Patterns.tank1d = tank1(30);
    Patterns.tank1dd = tank1(60);

    function tank2(delay) {
        return pattern({
            top: action(
                wait(delay),
                changeDirection(direction(-80, "absolute"), 1),
                changeSpeed(speed(0.5), 1),
                wait("60+$rand*100"),
                repeat(30, action(
                    fire(speed("1.5+$rank"), bullet("sg")),
                    wait("60+$rand*100")
                ))
            )
        });
    }

    Patterns.tank2 = tank2(0);
    Patterns.tank2d = tank2(30);
    Patterns.tank2dd = tank2(60);

    Patterns.middle = pattern({
        top: action(
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(0.8), 1),
            wait(40),
            repeat(2, action(
                fire(direction(-90, "aim"), speed(4), bulletRef("bit", 60)),
                fire(direction(-90, "aim"), speed(2), bulletRef("bit", 80)),
                fire(direction(90, "aim"), speed(2), bulletRef("bit", -80)),
                fire(direction(90, "aim"), speed(4), bulletRef("bit", -60)),
                wait(60)
            ))
        ),
        bit: bullet(
            action(
                wait(2),
                changeSpeed(0, 1),
                fire(direction("$1", "relative"), speed(3), bullet("g")),
                repeat("1+$rank*10", action(
                    wait(1),
                    fire(direction(0, "sequence"), speed(0, "sequence"), bullet("g"))
                )),
                vanish()
            )
        )
    });

    Patterns.middleKR = pattern({
        top: action(
            changeDirection(direction(-90, "absolute"), 1),
            changeSpeed(speed(4), 1),
            wait(5),
            changeSpeed(speed(0), 70),
            wait(70),
            changeDirection(direction(-70, "absolute"), 1),
            changeSpeed(speed(0.1), 1),
            repeat(3, action(
                repeat(5, action(
                    fire(direction(-90, "absolute"), speed(1), bulletRef("bit", -1)),
                    fire(direction( 90, "absolute"), speed(1), bulletRef("bit",  1)),
                    wait(10)
                )),
                actionRef("wshot", -72-12),
                actionRef("wshot", -24-12),
                actionRef("wshot",  24-12),
                actionRef("wshot",  72-12),
                wait(40),
                repeat(5, action(
                    fire(direction(-90, "absolute"), speed(1), bulletRef("bit", -1)),
                    fire(direction( 90, "absolute"), speed(1), bulletRef("bit",  1)),
                    wait(10)
                )),
                actionRef("wshot", -48-12),
                actionRef("wshot",   0-12),
                actionRef("wshot",  48-12),
                wait(40)
            ))
        ),
        bit: bullet(
            action(
                wait(5),
                changeDirection(direction(-70, "absolute"), 1),
                changeSpeed(speed(0.1), 1),
                fire(direction("-2*$1", "absolute"), speed("0.001+$rank*0.01"), bulletRef("greenAccel")),
                repeat(90/7, action(
                    wait(5),
                    fire(direction("7*$1", "sequence"), speed(0.1, "sequence"), bulletRef("greenAccel"))
                )),
                vanish()
            )
        ),
        greenAccel: bullet(
            action(
                changeSpeed(speed("0.7+$rank", "relative"), 300)
            )
        ),
        wshot: action(
            fire(direction("$1"), speed("1.1+$rank"), bullet("b")),
            fire(direction(0, "sequence"), speed(-0.1, "sequence"), bullet("b")),
            fire(direction(0, "sequence"), speed(-0.1, "sequence"), bullet("b")),
            fire(direction(0, "sequence"), speed(-0.1, "sequence"), bullet("b")),
            repeat(3, action(
                fire(direction(8, "sequence"), speed( 0.3, "sequence"), bullet("b")),
                fire(direction(0, "sequence"), speed(-0.1, "sequence"), bullet("b")),
                fire(direction(0, "sequence"), speed(-0.1, "sequence"), bullet("b")),
                fire(direction(0, "sequence"), speed(-0.1, "sequence"), bullet("b"))
            ))
        )
    });

    Patterns.cannon = pattern({
        top1: action(
            wait(100),
            repeat(100, action(
                changeDirection(direction(180, "relative"), 600),
                repeat(30, action(
                    fire(direction(0, "relative"), speed("1.0+$rank"), bullet("g")),
                    fire(direction(90, "sequence"), speed("1.0+$rank"), bullet("g")),
                    fire(direction(90, "sequence"), speed("1.0+$rank"), bullet("g")),
                    fire(direction(90, "sequence"), speed("1.0+$rank"), bullet("g")),
                    wait(20)
                ))
            ))
        ),
        top2: action(
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(0.2), 1)
        )
    });

    Patterns.cannon2 = pattern({
        top1: action(
            wait(100),
            repeat(100, action(
                repeat(30, action(
                    changeDirection(direction(90, "relative"), 20),
                    repeat(5, action(
                        fire(direction(  0, "relative"), speed("0.6+$rank"), bullet("g")),
                        fire(direction(120, "sequence"), speed("0.6+$rank"), bullet("g")),
                        fire(direction(120, "sequence"), speed("0.6+$rank"), bullet("g")),
                        wait(2)
                    )),
                    wait(30)
                ))
            ))
        ),
        top2: action(
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(0.2), 1)
        )
    });

    Patterns.cannon3 = pattern({
        top1: action(
            actionRef("attack", -1)
        ),
        top2: action(
            actionRef("attack",  1)
        ),
        attack: action(
            changeDirection(direction(0, "absolute"), 100),
            wait(100),
            repeat(100, action(
                changeDirection(direction("10*$1", "relative"), 100),
                repeat(100/30, action(
                    fire(direction(  0, "relative"), speed("0.5+$rank"), bullet("g")),
                    fire(direction( 90, "sequence"), speed(0, "sequence"), bullet("g")),
                    fire(direction( 90, "sequence"), speed(0, "sequence"), bullet("g")),
                    fire(direction( 90, "sequence"), speed(0, "sequence"), bullet("g")),
                    wait(30)
                ))
            ))
        ),
        top3: action(
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(0.2), 1)
        )
    });

    Patterns.boss11 = pattern({
        top: action(
            actionRef("launch"),
            repeat(900, action(
                actionRef("attack1"),
                actionRef("move2"),
                actionRef("attack2"),
                actionRef("move2"),
                actionRef("attack3"),
                actionRef("move2")
            ))
        ),
        launch: action(
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(2), 1),
            wait(15),
            changeSpeed(speed(-0.5), 140),
            wait(140),
            changeSpeed(speed(0), 10)
        ),
        attack1: action(
            fire(direction(-125, "absolute"), speed(4), bulletRef("bit1", -1,  30)),
            fire(direction(-125, "absolute"), speed(4), bulletRef("bit1", -1, -30)),
            fire(direction( 125, "absolute"), speed(4), bulletRef("bit1",  1,  30)),
            fire(direction( 125, "absolute"), speed(4), bulletRef("bit1",  1, -30)),
            wait(10+360*3/10*2),
            wait(30)
        ),
        bit1: bullet(
            action(
                wait(12),
                changeSpeed(0, 1),
                fire(direction("$2"), speed("0.3+$rank"), bullet()),
                repeat(360*4/10, action(
                    fire(direction("10*$1", "sequence"), speed(0.02, "sequence"), bullet()),
                    wait(2)
                )),
                vanish()
            )
        ),
        move2: action(
            changeSpeed(speed(1), 100),
            wait(60),
            changeSpeed(speed(-1), 100),
            wait(66),
            changeSpeed(speed(0), 100),
            wait(100)
        ),
        attack2: action((function() {
            var result = [];
            for (var i = 0; i < 8; i++) {
                result.push(fire(direction(-125, "absolute"), speed(4), bulletRef("bit2", i* 10, i*0.1)));
                result.push(wait(60-i*5));
                result.push(fire(direction( 125, "absolute"), speed(4), bulletRef("bit2", i*-10, i*0.1)));
                result.push(wait(60-i*5));
            }
            return result;
        })()),
        bit2: bullet(
            action(
                wait(12),
                changeSpeed(0, 1),
                repeat(3, action(
                    actionRef("fire1", "$1+-80", "$2"),
                    actionRef("fire1", "$1+-40", "$2"),
                    actionRef("fire1", "$1+  0", "$2"),
                    actionRef("fire1", "$1+ 40", "$2"),
                    actionRef("fire1", "$1+ 80", "$2"),
                    wait(5)
                )),
                vanish()
            )
        ),
        fire1: action(
            fire(direction("$1-10", "absolute"), speed("1+$rank+$2"), bullet()),
            repeat(4, action(
                fire(direction(5, "sequence"), speed(0, "sequence"), bullet())
            ))
        ),
        attack3: action(
            fire(direction(-125, "absolute"), speed(4), bulletRef("bit3",  0)),
            fire(direction( 125, "absolute"), speed(4), bulletRef("bit3", "160*(1.1-$rank)/2")),
            repeat(25, action(
                fire(direction(0, "aim"), speed("0.8+$rank"), bullet("g")),
                fire(direction(0, "sequence"), speed("0.9+$rank"), bullet("g")),
                repeat("360/(40*(1.1-$rank))-1", action(
                    fire(direction("40*(1.1-$rank)", "sequence"), speed("0.8+$rank"), bullet("g")),
                    fire(direction(0, "sequence"), speed("0.9+$rank"), bullet("g"))
                )),
                wait(40)
            ))
        ),
        bit3: bullet(
            action(
                wait(12),
                changeSpeed(speed(0), 1),
                wait("$1"),
                repeat("6/(1.1-$rank)", action(
                    fire(direction("$rand*30-15"), bullet()),
                    fire(direction("$rand*30-15"), bullet()),
                    fire(direction("$rand*30-15"), bullet()),
                    wait("160*(1.1-$rank)")
                ))
            )
        )
    });

    Patterns.boss12 = pattern({
        top: action(
            changeDirection(direction(0, "absolute"), 1),
            actionRef("move"),
            repeat(300, action(
                actionRef("attack4"),
                actionRef("move"),
                actionRef("attack1"),
                actionRef("move"),
                actionRef("attack2"),
                actionRef("move")
            ))
        ),
        move: action(
            changeSpeed(speed(1), 100),
            wait(60),
            changeSpeed(speed(-1), 100),
            wait(64),
            changeSpeed(speed(0), 100),
            wait(100)
        ),
        attack1: action(
            fire(speed(0), bulletRef("bit10")),
            fire(speed(0), bulletRef("bit12")),
            wait(1500)
        ),
        bit10: bullet(
            action(
                repeat(120, action(
                    fire(direction( -90, "absolute"), speed(5.0), bulletRef("bit11")),
                    // fire(direction(-125, "absolute"), speed(4.0), bulletRef("bit11")),
                    fire(direction( -45, "absolute"), speed(2.7), bulletRef("bit11")),
                    // fire(direction( 180, "absolute"), speed(2.5), bulletRef("bit11")),
                    fire(direction(  45, "absolute"), speed(2.7), bulletRef("bit11")),
                    // fire(direction( 125, "absolute"), speed(4.0), bulletRef("bit11")),
                    fire(direction(  90, "absolute"), speed(5.0), bulletRef("bit11")),
                    wait(10)
                )),
                vanish()
            )
        ),
        bit11: bullet(
            action(
                wait(12),
                changeSpeed(speed(0), 1),
                fire(direction("$rand*10-5+ -150"), speed("1.8*$rank"), bullet()),
                fire(direction("$rand*10-5+  -90"), speed("1.8*$rank"), bullet()),
                fire(direction("$rand*10-5+  -30"), speed("1.8*$rank"), bullet()),
                fire(direction("$rand*10-5+   30"), speed("1.8*$rank"), bullet()),
                fire(direction("$rand*10-5+   90"), speed("1.8*$rank"), bullet()),
                fire(direction("$rand*10-5+  150"), speed("1.8*$rank"), bullet()),
                vanish()
            )
        ),
        bit12: bullet(
            action((function() {
                var a = [];
                a.push(fire(direction(-125, "absolute"), speed(4.0), bulletRef("bit13", 1)));
                a.push(wait(120));
                a.push(fire(direction( 125, "absolute"), speed(4.0), bulletRef("bit13", 1)));
                a.push(wait(120));
                for (var i = 100; 5 < i; i -= 10) {
                    a.push(fire(direction(-125, "absolute"), speed(4.0), bulletRef("bit13", 2)));
                    a.push(wait(i+5));
                    a.push(fire(direction( 125, "absolute"), speed(4.0), bulletRef("bit13", 2)));
                    a.push(wait(i));
                }
                for (var i = 0; i < 5; i++) {
                    a.push(fire(direction(-125, "absolute"), speed(4.0), bulletRef("bit13", 2)));
                    a.push(wait(5));
                    a.push(fire(direction( 125, "absolute"), speed(4.0), bulletRef("bit13", 2)));
                    a.push(wait(5));
                }
                a.push(vanish());
                return a;
            })())
        ),
        bit13: bullet(
            action(
                wait(12),
                changeSpeed(speed(0), 1),
                fire(direction("$rand*4-2"), speed("4*$rank+$1"), bullet("g")),
                repeat(20, action(
                    wait(1),
                    fire(direction(0, "sequence"), speed(0.3, "sequence"), bullet("g"))
                )),
                vanish()
            )
        ),
        attack2: action(
            fire(direction( -90, "absolute"), speed(5.0), bulletRef("bit21",  1)),
            fire(direction(-125, "absolute"), speed(4.0), bulletRef("bit20", -1)),
            fire(direction( 125, "absolute"), speed(4.0), bulletRef("bit20",  1)),
            fire(direction(  90, "absolute"), speed(5.0), bulletRef("bit21", -1)),
            wait(800)
        ),
        bit20: bullet(
            action(
                wait(12),
                changeSpeed(speed(0), 1),
                repeat(4, action(
                    changeDirection(direction("70*$1", "relative"), "60+$rank*40"),
                    repeat(70/9, action(
                        fire(direction(  0, "relative"), speed("0.8+$rank"), bullet()),
                        fire(direction( 90, "relative"), speed("0.8+$rank"), bullet()),
                        fire(direction(180, "relative"), speed("0.8+$rank"), bullet()),
                        fire(direction(270, "relative"), speed("0.8+$rank"), bullet()),
                        wait(9)
                    )),
                    changeDirection(direction("-70*$1", "relative"), "60+$rank*40"),
                    repeat(70/9, action(
                        fire(direction(  0, "relative"), speed("0.8+$rank"), bullet()),
                        fire(direction( 90, "relative"), speed("0.8+$rank"), bullet()),
                        fire(direction(180, "relative"), speed("0.8+$rank"), bullet()),
                        fire(direction(270, "relative"), speed("0.8+$rank"), bullet()),
                        wait(9)
                    ))
                )),
                vanish()
            )
        ),
        bit21: bullet(
            action((function() {
                var a = [];
                a.push(wait(12));
                a.push(changeSpeed(speed(0), 1));
                for (var i = -35; i < -10; i++) {
                    a.push(fire(direction(i + "*$1", "aim"), speed("2.4+$rank"), bullet("g")));
                    for (var j = 0; j < 3; j++) {
                        a.push(wait(1));
                        a.push(fire(direction(0, "sequence"), speed(0, "sequence"), bullet("g")));
                    }
                    a.push(wait(15));
                }
                return a;
            })())
        ),
        attack4: action(
            fire(direction(-125, "absolute"), speed(4), bulletRef("bit4", -1, 180)),
            fire(direction(-125, "absolute"), speed(4), bulletRef("bit4", -1, 150)),
            fire(direction(-125, "absolute"), speed(4), bulletRef("bit4", -1, 120)),
            fire(direction(-125, "absolute"), speed(4), bulletRef("bit4", -1,  90)),
            fire(direction( 125, "absolute"), speed(4), bulletRef("bit4",  1,  90)),
            fire(direction( 125, "absolute"), speed(4), bulletRef("bit4",  1, 120)),
            fire(direction( 125, "absolute"), speed(4), bulletRef("bit4",  1, 150)),
            fire(direction( 125, "absolute"), speed(4), bulletRef("bit4",  1, 180)),
            repeat(600/40, action(
                fire(direction(-125, "absolute"), speed(4), bulletRef("bit42")),
                wait(40/2),
                fire(direction( 125, "absolute"), speed(4), bulletRef("bit42")),
                wait(40/2)
            ))
        ),
        bit4: bullet(
            action(
                wait(12),
                changeSpeed(speed(0), 1),
                changeDirection(direction("$2*$1", "absolute"), 1),
                wait(5),
                changeDirection(direction("($2-100)*$1", "absolute"), 600),
                repeat(150, action(
                    fire(direction(0, "relative"), speed(5), bullet("g")),
                    wait(4)
                )),
                vanish()
            )
        ),
        bit42: bullet(
            action(
                wait(12),
                changeSpeed(speed(0), 1),
                fire(direction("$rand*10-2"), speed("0.8+$rank"), bullet()),
                fire(direction(1, "sequence"), speed(0, "sequence"), bullet()),
                fire(direction(1, "sequence"), speed(0, "sequence"), bullet()),
                vanish()
            )
        )
    });

    Patterns.boss21 = pattern({
        top: action(
            actionRef("initPosition"),
            repeat(100, action(
                actionRef("attack2"),
                actionRef("attack3"),
                actionRef("attack4")
            ))
        ),
        initPosition: action(
            changeDirection(direction(158, "absolute"), 1),
            changeSpeed(speed(0.6), 1),
            wait(5),
            fire(direction(0, "relative"), speed(0.6), bulletRef("bit11")),
            fire(direction(0, "relative"), speed(0.6), bulletRef("bit13")),
            wait(500),
            changeSpeed(speed(0), 60),
            wait(60),
            changeDirection(direction(0, "absolute"), 1),
            wait(120)
        ),
        bit11: bullet(
            action(
                wait(120),
                actionRef("bit11Action", 30, 2, 100),
                actionRef("bit11Action", 10, 2, 100),
                repeat(4, action(
                    actionRef("bit11Action", "-60+$rand*90", 0.8, 80)
                )),
                repeat(2, action(
                    actionRef("bit11Action", "-60+$rand*90", 0, 80),
                    actionRef("bit11Action", "-60+$rand*90", 0.8, 80)
                )),
                vanish()
            )
        ),
        bit11Action: action(
            fire(direction(0, "absolute"), bulletRef("bit12", "$1", "$3")),
            repeat(24-1, action(
                fire(direction(360/24, "sequence"), bulletRef("bit12", "$1", "$3"))
            )),
            wait("45*$2")
        ),
        bit12: bullet(
            action(
                wait("10+$rank*20"),
                fire(direction("155+$1", "absolute"), speed("1.2+$rank"), bulletRef("blueC", "$2")),
                vanish()
            )
        ),
        blueC: bullet(
            action(
                wait("$1"),
                fire(direction(0), speed("2+$rank"), bullet("r")),
                vanish()
            )
        ),
        bit13: bullet(action(
            wait(120),
            repeat(500/57, action(
                fire(direction(-25), speed("1.5+$rank"), bullet("g")),
                repeat(5, action(
                    fire(direction(-2, "sequence"), speed(0, "sequence"), bullet("g"))
                )),
                repeat(5, action(
                    fire(direction(-50, "sequence"), speed("1.5+$rank"), bullet("g")),
                    repeat(5, action(
                        fire(direction(-2, "sequence"), speed(0, "sequence"), bullet("g"))
                    ))
                )),
                wait(57)
            )),
            vanish()
        )),
        attack2: action(
            fire(speed(0), bulletRef("bit21")),
            fire(speed(0), bulletRef("bit22")),
            wait(900)
        ),
        bit21: bullet(action(
            repeat(8, action(
                fire(direction(-30/2-50), speed("1.8+$rank"), bullet("g")),
                repeat("6+$rank*8", action(
                    fire(direction("30/(6+$rank*8)", "sequence"), speed(0, "sequence"), bullet("g"))
                )),
                fire(direction(-30/2), speed("1.8+$rank"), bullet("g")),
                repeat("6+$rank*8", action(
                    fire(direction("30/(6+$rank*8)", "sequence"), speed(0, "sequence"), bullet("g"))
                )),
                fire(direction(-30/2+50), speed("1.8+$rank"), bullet("g")),
                repeat("6+$rank*8", action(
                    fire(direction("30/(6+$rank*8)", "sequence"), speed(0, "sequence"), bullet("g"))
                )),
                wait(65),

                fire(direction(-30/2-75), speed("1.8+$rank"), bullet("g")),
                repeat("6+$rank*8", action(
                    fire(direction("30/(6+$rank*8)", "sequence"), speed(0, "sequence"), bullet("g"))
                )),
                fire(direction(-30/2-25), speed("1.8+$rank"), bullet("g")),
                repeat("6+$rank*8", action(
                    fire(direction("30/(6+$rank*8)", "sequence"), speed(0, "sequence"), bullet("g"))
                )),
                fire(direction(-30/2+25), speed("1.8+$rank"), bullet("g")),
                repeat("6+$rank*8", action(
                    fire(direction("30/(6+$rank*8)", "sequence"), speed(0, "sequence"), bullet("g"))
                )),
                fire(direction(-30/2+75), speed("1.8+$rank"), bullet("g")),
                repeat("6+$rank*8", action(
                    fire(direction("30/(6+$rank*8)", "sequence"), speed(0, "sequence"), bullet("g"))
                )),
                wait(65)
            )),
            vanish()
        )),
        bit22: bullet(action(
            wait(20),
            fire(direction(-90, "absolute"), speed(2), bulletRef("bit221")),
            wait(60),
            fire(direction( 90, "absolute"), speed(2), bulletRef("bit221")),
            vanish()
        )),
        bit221: bullet(action(
            wait(30),
            changeSpeed(speed(0), 1),
            repeat(8, action(
                fire(direction(-120/2),        speed(0), bulletRef("bullet22", 0, "2.2+$rank")),
                fire(direction(0, "sequence"), speed(0), bulletRef("bullet22", 5, "2.2+$rank")),
                fire(direction(0, "sequence"), speed(0), bulletRef("bullet22",10, "2.2+$rank")),
                fire(direction(0, "sequence"), speed(0), bulletRef("bullet22",15, "2.2+$rank")),
                fire(direction(0, "sequence"), speed(0), bulletRef("bullet22",20, "2.2+$rank")),
                fire(direction(0, "sequence"), speed(0), bulletRef("bullet22",25, "2.2+$rank")),
                repeat("(6+$rank*4)", action(
                    fire(direction("120/(6+$rank*4)", "sequence"), speed(0), bulletRef("bullet22", 0, "2.2+$rank")),
                    fire(direction(0, "sequence"),     speed(0), bulletRef("bullet22", 5, "2.2+$rank")),
                    fire(direction(0, "sequence"),     speed(0), bulletRef("bullet22",10, "2.2+$rank")),
                    fire(direction(0, "sequence"),     speed(0), bulletRef("bullet22",15, "2.2+$rank")),
                    fire(direction(0, "sequence"),     speed(0), bulletRef("bullet22",20, "2.2+$rank")),
                    fire(direction(0, "sequence"),     speed(0), bulletRef("bullet22",25, "2.2+$rank"))
                )),
                wait(117)
            )),
            vanish()
        )),
        bullet22: bullet(action(
            wait("$1"),
            changeSpeed(speed("$1*0.05+$2"), 1)
        )),
        attack3: action((function() {
            var a = [];
            for (var i = 0; i < 30; i++) {
                a[a.length] = fire(direction("-45-$rand*120", "absolute"), speed("1.5+$rand*6"), bulletRef("blue3alive", i*0.5));
                a[a.length] = wait(2);
                a[a.length] = fire(direction(" 45+$rand*120", "absolute"), speed("1.5+$rand*6"), bulletRef("blue3alive", i*0.5));
                a[a.length] = wait(2);
            }
            a[a.length] = wait(120);
            for (var i = 0; i < 30; i++) {
                a[a.length] = fire(direction("-45-$rand*120", "absolute"), speed("1.5+$rand*6"), bulletRef("blue3alive", i*-0.5));
                a[a.length] = wait(2);
                a[a.length] = fire(direction(" 45+$rand*120", "absolute"), speed("1.5+$rand*6"), bulletRef("blue3alive", i*-0.5));
                a[a.length] = wait(2);
            }
            a[a.length] = wait(220);
            return a;
        })()),
        blue3alive: bullet(action(
            wait("10+$rand*5"),
            changeSpeed(speed(0), 20),
            wait(180),
            fire(direction("$1-2", "absolute"), speed("4.5+$rank"), bullet("b")),
            fire(direction("$1+2", "absolute"), speed("4.5+$rank"), bullet("b")),
            fire(direction("$1-1", "absolute"), speed("4.5+$rank"), bullet("b")),
            fire(direction("$1+1", "absolute"), speed("4.5+$rank"), bullet("b")),
            fire(direction("$1", "absolute"), speed("4+$rank"), bullet("b")),
            repeat(10, action(
                fire(direction(0, "sequence"), speed(0.2, "sequence"), bullet("b"))
            )),
            vanish()
        )),
        attack4: action(
            repeat(4, action(
                fire(direction(-125, "absolute"), speed(4.0), bulletRef("bit40", -1)),
                fire(direction( 125, "absolute"), speed(4.0), bulletRef("bit40",  1)),
                wait(170)
            )),
            wait(100)
        ),
        bit40: bullet(
            action(
                wait(12),
                changeSpeed(speed(0), 1),
                changeDirection(direction("170*$1+$rand*10", "relative"), "60+$rank*50"),
                repeat(70/5, action(
                    fire(direction(  0, "relative"), speed("1.2+$rank"), bullet()),
                    fire(direction( 90, "relative"), speed("1.2+$rank"), bullet()),
                    fire(direction(180, "relative"), speed("1.2+$rank"), bullet()),
                    fire(direction(270, "relative"), speed("1.2+$rank"), bullet()),
                    wait(5)
                )),
                repeat(2, action(
                    fire(direction("$rand*40-20"), speed("1.2+$rank"), bullet("g")),
                    repeat(10, action(
                        repeat(7, action(
                            fire(direction(360/7, "sequence"), speed(0, "sequence"), bullet("g"))
                        )),
                        wait(1)
                    ))
                )),

                changeDirection(direction("-170*$1", "relative"), "60+$rank*50"),
                repeat(70/5, action(
                    fire(direction(  0, "relative"), speed("1.2+$rank"), bullet()),
                    fire(direction( 90, "relative"), speed("1.2+$rank"), bullet()),
                    fire(direction(180, "relative"), speed("1.2+$rank"), bullet()),
                    fire(direction(270, "relative"), speed("1.2+$rank"), bullet()),
                    wait(5)
                )),
                repeat(2, action(
                    fire(direction("$rand*40-20"), speed("1.2+$rank"), bullet("g")),
                    repeat(10, action(
                        repeat(7, action(
                            fire(direction(360/7, "sequence"), speed(0, "sequence"), bullet("g"))
                        )),
                        wait(1)
                    ))
                )),
                vanish()
            )
        )
    });

    Patterns.boss22 = pattern({
        top: action(
            wait(60),
            repeat(100, action(
                actionRef("attack1"),
                actionRef("attack2")
            ))
        ),
        attack1: action((function() {
            var a = [];
            var s = 2;
            a[a.length] = changeDirection(direction(90, "absolute"), 1);
            a[a.length] = changeSpeed(speed(s), 40);
            a[a.length] = wait(20);
            a[a.length] = changeSpeed(speed(0), 40);
            a[a.length] = wait(20);
            for (var i = 0; i < 6; i++) {
                a[a.length] = fire(direction(-115, "absolute"), speed(10), bulletRef("bit1",  0, -1, i));
                a[a.length] = fire(direction( 115, "absolute"), speed(10), bulletRef("bit1",  0,  1, i));
                a[a.length] = wait(40);
                a[a.length] = changeSpeed(speed((i%2)?s:-s), 80);
                a[a.length] = wait(40);
                a[a.length] = changeSpeed(speed(0), 80);
                a[a.length] = wait(40);
            }
            a[a.length] = fire(direction(-115, "absolute"), speed(10), bulletRef("bit1",  0, -1, i));
            a[a.length] = fire(direction( 115, "absolute"), speed(10), bulletRef("bit1",  0,  1, i));
            a[a.length] = wait(40);
            a[a.length] = changeSpeed(speed((i%2)?s:-s), 40);
            a[a.length] = wait(20);
            a[a.length] = changeSpeed(speed(0), 40);
            a[a.length] = wait(60);
            return a;
        })()),
        bit1: bullet(action(
            wait(5),
            changeSpeed(speed(0), 1),
            wait("5+$1"),
            fire(direction("-120*$2"), speed("1.0+$rank+$3*0.2"), bullet()),
            repeat(240 / 12, action(
                fire(direction(+30, "sequence"), speed(0, "sequence"), bullet()),
                fire(direction("-30 + 12*$2", "sequence"), speed(0, "sequence"), bullet()),
                wait(1)
            )),
            fire(direction("+120*$2"), speed(0, "sequence"), bullet()),
            repeat(240 / 12, action(
                fire(direction(+30, "sequence"), speed(0, "sequence"), bullet()),
                fire(direction("-30 + -12*$2", "sequence"), speed(0, "sequence"), bullet()),
                wait(1)
            )),
            vanish()
        )),
        attack2: action(
            fire(direction(0), speed(0), bulletRef("bithori")),
            fire(direction(0), speed(0), bulletRef("bitvert")),
            wait(1220)
        ),
        bitvert: bullet(action((function() {
            var a = [];
            for (var i = -15; i < 15; i+=3) {
                a[a.length] = actionRef("fireBigBulletR", -80+i);
                a[a.length] = actionRef("fireBigBulletR", -40+i);
                a[a.length] = actionRef("fireBigBulletR",   0+i);
                a[a.length] = actionRef("fireBigBulletR",  40+i);
                a[a.length] = actionRef("fireBigBulletR",  80+i);
                a[a.length] = wait(50);
                a[a.length] = actionRef("fireBigBulletR",-100+i);
                a[a.length] = actionRef("fireBigBulletR", -60+i);
                a[a.length] = actionRef("fireBigBulletR", -20+i);
                a[a.length] = actionRef("fireBigBulletR",  20+i);
                a[a.length] = actionRef("fireBigBulletR",  60+i);
                a[a.length] = actionRef("fireBigBulletR", 100+i);
                a[a.length] = wait(50);
            }
            return a;
        })())),
        bithori: bullet(action(
            actionRef("fireBlueBit", 33),
            actionRef("fireBlueBit", 44),
            actionRef("fireBlueBit", 55),
            actionRef("fireBlueBit", 66),
            actionRef("fireBlueBit", 77),
            actionRef("fireBlueBit", 88),
            vanish()
        )),
        fireBlueBit: action(
            repeat(3, action(
                fire(direction(-90, "absolute"), speed(8), bulletRef("blueBitalive", "$1")),
                fire(direction( 90, "absolute"), speed(8), bulletRef("blueBitalive", "$1")),
                wait(40)
            ))
        ),
        blueBitalive: bullet(action(
            wait(5),
            changeSpeed(speed(0), 25),
            wait(30),
            changeDirection(direction(0, "absolute"), 1),
            changeSpeed(speed(1.5), 10),
            repeat(999, action(
                wait("$1"),
                actionRef("fireBigBulletG", -90),
                actionRef("fireBigBulletB",  90)
            ))
        )),
        fireBigBulletR: action(
            fire(direction("$rand*90", "absolute"), speed(1), bulletRef("redBB", "$1")),
            repeat(360/30-1, action(
                fire(direction(30, "sequence"), speed(0, "sequence"), bulletRef("redBB", "$1"))
            ))
        ),
        redBB: bullet(action(
            wait(10),
            fire(direction("$1", "absolute"), speed("3*$rank"), bullet()),
            vanish()
        )),
        fireBigBulletG: action(
            fire(direction("$rand*90", "absolute"), speed(1), bulletRef("greenBB", "$1")),
            repeat(360/30-1, action(
                fire(direction(30, "sequence"), speed(0, "sequence"), bulletRef("greenBB", "$1"))
            ))
        ),
        greenBB: bullet(action(
            wait(10),
            fire(direction("$1", "absolute"), speed("3*$rank"), bullet("g")),
            vanish()
        )),
        fireBigBulletB: action(
            fire(direction("$rand*90", "absolute"), speed(1), bulletRef("blueBB", "$1")),
            repeat(360/30-1, action(
                fire(direction(30, "sequence"), speed(0, "sequence"), bulletRef("blueBB", "$1"))
            ))
        ),
        blueBB: bullet(action(
            wait(10),
            fire(direction("$1", "absolute"), speed("3*$rank"), bullet("b")),
            vanish()
        ))
    });

})();