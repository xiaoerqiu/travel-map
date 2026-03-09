/**
 * 模拟中国各地与台湾地区全年各月份推荐的著名旅游景点数据 (扩充至60个)
 * 采用稳定图床，如果外部图片加载失败会自动由前端生成 SVG 优美占位符取代
 */

const baseImages = [
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1444084316824-dc26d6657664?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800'
];

function getImage(index) {
    return baseImages[index % baseImages.length];
}

export const travelData = [
    // ======= 1月：冬季冰雪游与热带避寒 =======
    { id: 'm1-1', month: 1, name: '黑龙江·哈尔滨冰雪大世界', coordinates: [126.56, 45.78], desc: '极致的极寒体验，欣赏世界上最大规模的冰雕雪雕群，体验梦幻般的冰雪王国。', image: getImage(0) },
    { id: 'm1-2', month: 1, name: '海南·三亚亚龙湾', coordinates: [109.64, 18.22], desc: '告别北方的严寒，在这里享受阳光、沙滩与清澈蔚蓝的海水，是冬季避寒圣地。', image: getImage(1) },
    { id: 'm1-3', month: 1, name: '云南·大理苍山洱海', coordinates: [100.16, 25.69], desc: '冬日阳光明媚，在苍山脚下洱海之滨喂一喂红嘴鸥，体验白族风情。', image: getImage(2) },
    { id: 'm1-4', month: 1, name: '吉林·长白山天池', coordinates: [128.05, 42.03], desc: '冬季的长白山白雪皑皑，雾凇奇观与冰封的天池构成绝美的北国画卷。', image: getImage(3) },
    { id: 'm1-5', month: 1, name: '台湾·北投温泉', coordinates: [121.50, 25.13], desc: '冬日里泡在地热谷的温泉中，享受寒意中独有的温暖与日式风情建筑。', image: getImage(4) },

    // ======= 2月：新春探春与民俗 =======
    { id: 'm2-1', month: 2, name: '北京·故宫博物院', coordinates: [116.39, 39.91], desc: '紫禁城过大年，如果碰上初雪，红墙白雪交相辉映，充满了古代年味的美感。', image: getImage(5) },
    { id: 'm2-2', month: 2, name: '陕西·西安城墙', coordinates: [108.94, 34.25], desc: '西安的最美时刻，城墙上挂满新春花灯，让人置身大唐不夜城的盛世之中。', image: getImage(6) },
    { id: 'm2-3', month: 2, name: '台湾·平溪天灯节', coordinates: [121.73, 25.02], desc: '满天星斗与冉冉升起的天灯交织在一起，是新春祈福的绝美盛会。', image: getImage(7) },
    { id: 'm2-4', month: 2, name: '贵州·肇兴侗寨', coordinates: [109.18, 25.90], desc: '春节期间侗族同胞换上盛装，体验最浓郁的侗寨民俗、风雨桥与长桌宴。', image: getImage(8) },
    { id: 'm2-5', month: 2, name: '福建·泉州开元寺', coordinates: [118.58, 24.91], desc: '半城烟火半城仙，元宵期间漫步泉州街头，欣赏最具闽南传统的花灯游艺。', image: getImage(9) },

    // ======= 3月：江南春色与花海 =======
    { id: 'm3-1', month: 3, name: '江苏·扬州瘦西湖', coordinates: [119.41, 32.41], desc: '烟花三月下扬州，瘦西湖畔柳丝拂水，正是江南名城一年中最具水乡韵味之时。', image: getImage(0) },
    { id: 'm3-2', month: 3, name: '江西·婺源', coordinates: [117.86, 29.25], desc: '漫山遍野的油菜花海与粉墙黛瓦的徽派建筑交相辉映，被誉为中国最美的乡村。', image: getImage(1) },
    { id: 'm3-3', month: 3, name: '西藏·林芝桃花村', coordinates: [94.36, 29.65], desc: '雪山之下，粉色的高原野桃花绵延百里，构成了世外桃源般的壮丽藏地春色。', image: getImage(2) },
    { id: 'm3-4', month: 3, name: '台湾·阿里山樱花季', coordinates: [120.80, 23.51], desc: '搭乘复古森林小火车穿梭在粉飞的吉野樱花林中，感受浪漫的春天。', image: getImage(3) },
    { id: 'm3-5', month: 3, name: '湖北·武汉大学', coordinates: [114.36, 30.54], desc: '樱花城堡下赏樱，感受百年学府在春季带来的人文与自然结合的美学。', image: getImage(4) },

    // ======= 4月：繁花似锦与水乡 =======
    { id: 'm4-1', month: 4, name: '河南·洛阳龙门石窟', coordinates: [112.47, 34.55], desc: '四月正是洛阳牡丹花开时节，同时游览跨越千年的宏伟石刻造像。', image: getImage(5) },
    { id: 'm4-2', month: 4, name: '浙江·杭州西湖', coordinates: [120.14, 30.24], desc: '最美人间四月天，漫步苏堤春晓，欣赏湖光山色。', image: getImage(6) },
    { id: 'm4-3', month: 4, name: '广东·陈家祠', coordinates: [113.24, 23.12], desc: '岭南春日里的古建筑探访，欣赏木雕、石雕等极尽精巧的广式传统工艺。', image: getImage(7) },
    { id: 'm4-4', month: 4, name: '广西·龙脊梯田', coordinates: [110.11, 25.75], desc: '四月春耕灌水时节，漫山遍野的梯田如镜面般反射天空，极为壮观。', image: getImage(8) },
    { id: 'm4-5', month: 4, name: '新疆·伊犁杏花沟', coordinates: [83.56, 43.52], desc: '中世纪遗留下来最大的原始野杏林，在春日阳光下整个山谷弥漫着连绵的粉色。', image: getImage(9) },

    // ======= 5月：初夏与秀美山水 =======
    { id: 'm5-1', month: 5, name: '广西·桂林漓江', coordinates: [110.45, 25.04], desc: '初夏乘坐竹筏游曳漓江，看倒影如画，感受大自然的鬼斧神工。', image: getImage(0) },
    { id: 'm5-2', month: 5, name: '安徽·黄山风景区', coordinates: [118.17, 30.13], desc: '五月去黄山看奇松怪石和云海，气温舒适，是登山赏景的最佳月份之一。', image: getImage(1) },
    { id: 'm5-3', month: 5, name: '台湾·日月潭', coordinates: [120.91, 23.86], desc: '湖面如镜，天气晴朗，非常适合环湖骑行或乘船游览，感受宝岛明珠。', image: getImage(2) },
    { id: 'm5-4', month: 5, name: '湖南·张家界森林公园', coordinates: [110.47, 29.31], desc: '三千奇峰拔地而起，初夏雨后云雾缭绕，仿佛置身于阿凡达的星球。', image: getImage(3) },
    { id: 'm5-5', month: 5, name: '福建·霞浦滩涂', coordinates: [120.00, 26.88], desc: '五月霞光最美，这里的光影变幻构成了全国最具艺术感的渔乡油画。', image: getImage(4) },

    // ======= 6月：西北草原与滨海风情 =======
    { id: 'm6-1', month: 6, name: '新疆·伊犁那拉提草原', coordinates: [83.26, 43.32], desc: '绿草如茵，野花遍地。这是领略塞外高山草原风光最美的时节。', image: getImage(5) },
    { id: 'm6-2', month: 6, name: '宁夏·沙湖', coordinates: [106.37, 38.82], desc: '一面是沙一面是湖，六月份沙鸥翔集，感受塞外江南的独特风貌。', image: getImage(6) },
    { id: 'm6-3', month: 6, name: '台湾·垦丁国家公园', coordinates: [120.79, 21.94], desc: '初夏的垦丁迎来了阳光与冲浪季，湛蓝的海水令人沉醉。', image: getImage(7) },
    { id: 'm6-4', month: 6, name: '山东·青岛八大关', coordinates: [120.34, 36.05], desc: '初夏海风习习，漫步在充满万国建筑风情的街道，品尝地道海鲜与啤酒。', image: getImage(8) },
    { id: 'm6-5', month: 6, name: '四川·峨眉山', coordinates: [103.33, 29.53], desc: '盛夏将至，峨眉金顶的清凉与佛光是消夏洗心的好去处。', image: getImage(9) },

    // ======= 7月：避暑清凉之夏 =======
    { id: 'm7-1', month: 7, name: '青海·青海湖', coordinates: [100.18, 36.88], desc: '七月正值油菜花大面积盛开，湖水湛蓝，气温凉爽宜人，是极佳的避暑地。', image: getImage(0) },
    { id: 'm7-2', month: 7, name: '贵州·黄果树瀑布', coordinates: [105.66, 25.98], desc: '夏季丰水期，巨大的水幕坠入犀牛潭，气势磅礴，清凉无比。', image: getImage(1) },
    { id: 'm7-3', month: 7, name: '河北·承德避暑山庄', coordinates: [117.93, 40.99], desc: '清代皇家古典园林，夏天山庄内凉风习习，感受湖光山色与雄伟建筑。', image: getImage(2) },
    { id: 'm7-4', month: 7, name: '辽宁·大连金石滩', coordinates: [122.01, 39.08], desc: '七月的大连凉风送爽，是北方地区最负盛名的滨海度假地。', image: getImage(3) },
    { id: 'm7-5', month: 7, name: '甘肃·张掖七彩丹霞', coordinates: [99.98, 38.96], desc: '夏季傍晚落日映射在丹霞地貌上，呈现出令人震颤的七彩斑斓。', image: getImage(4) },

    // ======= 8月：神圣西藏与大漠 =======
    { id: 'm8-1', month: 8, name: '西藏·拉萨布达拉宫', coordinates: [91.11, 29.65], desc: '夏末秋初西藏氧气相对充足，气候舒爽。朝圣雄伟的布达拉宫。', image: getImage(5) },
    { id: 'm8-2', month: 8, name: '甘肃·敦煌莫高窟', coordinates: [94.81, 40.03], desc: '探秘千佛洞的壁画艺术，随后在月牙泉看雄浑的沙漠夕阳。', image: getImage(6) },
    { id: 'm8-3', month: 8, name: '新疆·喀纳斯风景区', coordinates: [87.01, 48.69], desc: '八月的喀纳斯湖水呈现出神秘多变的色彩，四周西伯利亚泰加林郁郁葱葱。', image: getImage(7) },
    { id: 'm8-4', month: 8, name: '台湾·太鲁阁国家公园', coordinates: [121.60, 24.16], desc: '鬼斧神工的大理岩峡谷，深邃险峻，夏日徒步其间清幽沁人。', image: getImage(8) },
    { id: 'm8-5', month: 8, name: '山东·长岛', coordinates: [120.73, 37.93], desc: '八月黄渤海交界处，这里的海岛纯净静谧，避开了人群拥挤的海滩。', image: getImage(9) },

    // ======= 9月：初秋色彩斑斓 =======
    { id: 'm9-1', month: 9, name: '四川·九寨沟', coordinates: [103.92, 33.26], desc: '初秋的九寨沟彩林漫山，湖泊呈现出宝石般的斑斓迷幻色彩。', image: getImage(0) },
    { id: 'm9-2', month: 9, name: '内蒙古·额济纳胡杨林', coordinates: [101.06, 41.95], desc: '九月末的金色童话，沧桑的千年胡杨在湛蓝天空下闪耀着生命金光。', image: getImage(1) },
    { id: 'm9-3', month: 9, name: '辽宁·盘锦红海滩', coordinates: [121.98, 40.89], desc: '碱蓬草红透了整片海岸，如同一张无边无际的红毯徐徐铺开。', image: getImage(2) },
    { id: 'm9-4', month: 9, name: '台湾·清境农场', coordinates: [121.15, 24.05], desc: '被称为台湾“小瑞士”，秋高气爽与羊群在青青草原互动，远离烦嚣。', image: getImage(3) },
    { id: 'm9-5', month: 9, name: '湖南·橘子洲头', coordinates: [112.95, 28.18], desc: '看万山红遍，层林尽染，漫江碧透的湘江秋景图。', image: getImage(4) },

    // ======= 10月：金秋大美 =======
    { id: 'm10-1', month: 10, name: '北京·八达岭长城', coordinates: [116.00, 40.35], desc: '金秋的北京拥有最美的天空，看满山红叶，登临长城一览群山。', image: getImage(5) },
    { id: 'm10-2', month: 10, name: '四川·稻城亚丁', coordinates: [100.31, 28.45], desc: '水蓝色星球上的最后一片净土，神山圣水与金黄草甸让人毕生难忘。', image: getImage(6) },
    { id: 'm10-3', month: 10, name: '陕西·秦始皇兵马俑', coordinates: [109.28, 34.38], desc: '秋季凉爽，探访十三朝古都，感受大秦帝国威武军阵的震撼。', image: getImage(7) },
    { id: 'm10-4', month: 10, name: '云南·泸沽湖', coordinates: [100.76, 27.71], desc: '十月的泸沽湖波光粼粼像一块湛蓝的宝石，探访摩梭人的女儿国。', image: getImage(8) },
    { id: 'm10-5', month: 10, name: '台湾·九份老街', coordinates: [121.84, 25.10], desc: '微凉的秋夜，点亮红灯笼的山城小镇恍若千与千寻的梦境。', image: getImage(9) },

    // ======= 11月：深秋绚烂 =======
    { id: 'm11-1', month: 11, name: '云南·腾冲银杏村', coordinates: [98.49, 25.02], desc: '整个村庄被金黄的百年银杏叶覆盖，仿佛童话世界，唯美浪漫。', image: getImage(0) },
    { id: 'm11-2', month: 11, name: '湖北·神农架', coordinates: [110.67, 31.74], desc: '十一月的神农架彩林斑斓，云海翻腾，充满着原始森林的神秘。', image: getImage(1) },
    { id: 'm11-3', month: 11, name: '福建·武夷山', coordinates: [117.98, 27.63], desc: '秋日武夷山丹霞地貌和九曲溪的竹筏漂流更为惬意，品大红袍体会禅意。', image: getImage(2) },
    { id: 'm11-4', month: 11, name: '四川·四姑娘山', coordinates: [102.89, 31.11], desc: '东方的阿尔卑斯，秋季雪山映衬着金黄彩林，极具视觉冲击力。', image: getImage(3) },
    { id: 'm11-5', month: 11, name: '湖南·凤凰古城', coordinates: [109.60, 27.95], desc: '深秋气温转凉，沱江边的吊脚楼更为静谧，体味沈从文笔下的边城。', image: getImage(4) },

    // ======= 12月：南方暖冬与跨年 =======
    { id: 'm12-1', month: 12, name: '福建·厦门鼓浪屿', coordinates: [118.06, 24.44], desc: '冬季气候温和，漫步在拥有万国建筑的浪漫小岛，吹着海风慢享时光。', image: getImage(5) },
    { id: 'm12-2', month: 12, name: '广东·珠海长隆', coordinates: [113.53, 22.09], desc: '温暖怡人的冬季，在这里欣赏极具震撼的巨型鲸鲨和海洋动物。', image: getImage(6) },
    { id: 'm12-3', month: 12, name: '台湾·高雄驳二', coordinates: [120.27, 22.61], desc: '阳光明媚不湿冷，在驳二文创区感受现代工业风与前卫艺术。', image: getImage(7) },
    { id: 'm12-4', month: 12, name: '海南·海花岛', coordinates: [109.21, 19.66], desc: '在气温最舒爽的时候游玩这座宏伟的人工文旅综合岛屿。', image: getImage(8) },
    { id: 'm12-5', month: 12, name: '黑龙江·雪乡', coordinates: [128.85, 44.53], desc: '纯正的中国雪乡，厚重的积雪如同白色的蘑菇屋，感受最强烈的冬季色彩。', image: getImage(9) }
];
