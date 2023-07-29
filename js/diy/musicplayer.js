const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: false, //自动播放
    order: 'random', //播放顺序 random | list
    mutex: true,  //阻止多个播放器同时播放
    
    audio: [
	{
        name: "反方向的钟",
        artist: "周杰伦",
        url: "https://typora-lqy.oss-cn-hangzhou.aliyuncs.com/music/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%8F%8D%E6%96%B9%E5%90%91%E7%9A%84%E9%92%9F.mp3",
        cover: "https://typora-lqy.oss-cn-hangzhou.aliyuncs.com/image/image-20230708211706904.png"
    }, 
    {
        name: "晴天",
        artist: "周杰伦",
        url: "https://typora-lqy.oss-cn-hangzhou.aliyuncs.com/music/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%99%B4%E5%A4%A9%20.mp3",
        cover: "https://typora-lqy.oss-cn-hangzhou.aliyuncs.com/image/image-20230708211538313.png"
    },
    {
        name: "我落泪情绪零碎",
        artist: "周杰伦",
        url: "https://typora-lqy.oss-cn-hangzhou.aliyuncs.com/music/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E6%88%91%E8%90%BD%E6%B3%AA%E6%83%85%E7%BB%AA%E9%9B%B6%E7%A2%8E.mp3",
        cover: "https://typora-lqy.oss-cn-hangzhou.aliyuncs.com/image/image-20230708211506430.png"
    },
	]
});
