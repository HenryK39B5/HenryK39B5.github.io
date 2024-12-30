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
            "回首向来萧瑟处，归去，也无风雨也无晴。",
            "他所不知道的是，梦想已经落在他身后，落在纽约以西那广袤无垠的大地上，落在黑暗夜幕下连绵不绝的美国原野上。",
            "于是我们奋力前进，却如同逆水行舟，注定要不停地退回过去。",
            "正如米基·盖纳的不朽名言，感情充沛没有问题，但开车时千万别这样。",
            "除此之外，我一直在辛苦工作，一天下来，最不想见到的就是麻烦，而你在这个年纪，自然希望每天以刺激作结。",
            "你永远不该在极度疲劳的时候做重要的决定。",
            "我隐约感觉到，深刻未必是接近真实的同义词。",
            "绅士就是：所做的，不是自己想做之事，而是自己应做之事。",
            "“最最喜欢你，绿子。”“什么程度？”“像喜欢春天的熊一样。”",
            "“不要同情自己！”他说，“同情自己是卑劣懦夫干的勾当。”",
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