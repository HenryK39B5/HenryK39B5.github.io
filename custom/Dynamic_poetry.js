var binft = function (r) {
    var isTransparent = true;
    function getRandomColor() {
        if(isTransparent){
            isTransparent = false;
            //此处修改字体颜色,最后的 0 和 1 不要改
            return "rgba(255,255,255,0)"
        }else{
            isTransparent = true;
            return "rgba(255,255,255,1)"
        }
    }  
    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var oneword = document.createElement("span");
            oneword.textContent = "_"; // 此处是末尾字符,如果想用光标样式可以改为"|"
            oneword.style.color = getRandomColor();
            n.appendChild(oneword);
        }
        return n
    }
    function i() {
        var t = wordList[c.skillI];
        c.step ? c.step-- : (c.step = refreshDelayTime, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = showTotalWordDelayTime) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % wordList.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(maxLength, maxLength + c.prefixP) : Math.min(maxLength, t.length - c.skillP))), setTimeout(i, d)
    }
    var l = "",
    //此处改成你自己的诗词
    wordList = [ 
            "莫听穿林打叶声，何妨吟啸且徐行.",
            "竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生.",
            "回首向来萧瑟处，归去，也无风雨也无晴.",
            "他所不知道的是，梦想已经落在他身后，落在纽约以西那广袤无垠的大地上，落在黑暗夜幕下连绵不绝的美国原野上。",
            "于是我们奋力前进，却如同逆水行舟，注定要不停地退回过去。",
            "正如米基·盖纳的不朽名言，感情充沛没有问题，但开车时千万别这样。",
            "照顾好自己，关于智力（在精力充沛的时候好好学习），关于身体（别拔眉毛），关于品德（别让自己陷入不得不说谎的境地），我会给你空间，比皮驰思给你的更多。",
            "我再也不想在这个世界上看到被培养成闲人的女性。我这辈子有个重要的目标，就是让你不要变成那样的人——那种会将自己和别人一齐毁掉的人。",
            "除此之外，我一直在辛苦工作，一天下来，最不想见到的就是麻烦，而你在这个年纪，自然希望每天以刺激作结。",
            "你永远不该在极度疲劳的时候做重要的决定。",
        ].map(function (r) {
    return r + ""
    }),
    showTotalWordDelayTime = 2,
    refreshDelayTime = 1,
    maxLength = 1,
    d = 75,
    c = {
        text: "",
        prefixP: -maxLength,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: showTotalWordDelayTime,
        step: refreshDelayTime
    };
    i()
};
binft(document.getElementById('binft'));