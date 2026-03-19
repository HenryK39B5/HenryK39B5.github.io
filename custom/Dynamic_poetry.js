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
            `回首向来萧瑟处，归去，也无风雨也无晴。`,
            `他所不知道的是，梦想已经落在他身后，落在纽约以西那广袤无垠的大地上，落在黑暗夜幕下连绵不绝的美国原野上。`,
            `于是我们奋力前进，却如同逆水行舟，注定要不停地退回过去。`,
            `没有了对高处的恐惧就体会不到高处之美。`,
            `在未来，当人工智能拥有超过人类的智力时，想象力也许是我们对于它们所拥有的惟一优势。`,
            `绅士就是：所做的，不是自己想做之事，而是自己应做之事。`,
            `“不要同情自己！”他说，“同情自己是卑劣懦夫干的勾当。`,
            `你也不能认为简单就是容易。简单需要特别的设计和很高的品味。`,
            `培养迭代思维。生活中所有的回报，无论是财富、人际关系，还是知识，都来自复利。`,
            `但我们应该做的是追随内心的渴望。如果你想认识一个漂亮姑娘，那就去认识她；如果你想喝杯饮料，那就去喝一杯；如果你真的想做一件事，那就去做好了。`,
            `一旦决定去做，就要迅速采取行动，并全神贯注，全力以赴。同时，要对结果保持耐心，因为你唯一能把握的只有自己，他人和外界环境都纷繁复杂、充满变数。`,
            `真理经常会被当成异端邪说，无法被公开讨论。真理只能靠探索去发现、靠耳语去传播，也许还能编撰成文，供人阅读。`,
            `但现在，我喜欢佛教的说法：“执怒就像握了一把要丢向他人的热煤炭，被烫伤的人反而是你。”`,
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
