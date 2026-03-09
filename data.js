/**
 * 模拟中国及台湾地区全年各月份推荐著名旅游景点的数据
 * 坐标格式为: [经度, 纬度] (高德坐标系 GCJ-02)
 */
export const travelData = [
    // 1月：冬季冰雪游 或 避寒游
    {
        id: 'm1-1',
        month: 1,
        name: '哈尔滨冰雪大世界',
        coordinates: [126.56, 45.78],
        desc: '在摄氏零下数十度的极寒中，欣赏世界上最大规模的冰雕雪雕群，体验梦幻般的冰雪王国。',
        image: 'https://images.unsplash.com/photo-1547844053-ed11849a6332?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'm1-2',
        month: 1,
        name: '三亚亚龙湾',
        coordinates: [109.64, 18.22],
        desc: '告别北方的严寒，在这里享受阳光、沙滩与清澈蔚蓝的海水，是冬季避寒的绝佳圣地。',
        image: 'https://images.unsplash.com/photo-1506461883276-594a12b11ac6?auto=format&fit=crop&q=80&w=800'
    },

    // 2月：新春探春游
    {
        id: 'm2-1',
        month: 2,
        name: '台湾·台北 101 / 阳明山花季',
        coordinates: [121.56, 25.04],
        desc: '恰逢初春，既可登顶101俯瞰繁华都市，亦可前往阳明山欣赏漫山遍野的早春樱花与杜鹃。',
        image: 'https://images.unsplash.com/photo-1552993873-0aa1cdcb6159?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'm2-2',
        month: 2,
        name: '云南·大理古城',
        coordinates: [100.16, 25.69],
        desc: '春光明媚，苍山洱海风光秀丽，感受白族文化与悠闲烂漫的春日时光。',
        image: 'https://images.unsplash.com/photo-1596484552993-fcdb9cfd455d?auto=format&fit=crop&q=80&w=800'
    },

    // 3月：江南春色
    {
        id: 'm3-1',
        month: 3,
        name: '江苏·扬州瘦西湖',
        coordinates: [119.41, 32.41],
        desc: '烟花三月下扬州，瘦西湖畔柳丝拂水，正是江南名城一年中最具古典水乡韵味的时刻。',
        image: 'https://images.unsplash.com/photo-1543781744-24e54eb86d63?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'm3-2',
        month: 3,
        name: '江西·婺源',
        coordinates: [117.86, 29.25],
        desc: '漫山遍野的油菜花海与粉墙黛瓦的徽派建筑交相辉映，被誉为中国最美的乡村。',
        image: 'https://images.unsplash.com/photo-1522856339183-5a0221ef24a6?auto=format&fit=crop&q=80&w=800'
    },

    // 4月：牡丹与古都
    {
        id: 'm4-1',
        month: 4,
        name: '河南·洛阳龙门石窟',
        coordinates: [112.47, 34.55],
        desc: '除了参观震惊世界的石刻艺术，四月正是洛阳牡丹花开时节，文化与自然之美并存。',
        image: 'https://images.unsplash.com/photo-1628178651280-3536bf30be1e?auto=format&fit=crop&q=80&w=800'
    },

    // 5月：初夏胜景
    {
        id: 'm5-1',
        month: 5,
        name: '广西·桂林漓江',
        coordinates: [110.45, 25.04],
        desc: '桂林山水甲天下。初夏乘坐竹筏游曳漓江，看倒影如画，感受大自然的鬼斧神工。',
        image: 'https://images.unsplash.com/photo-1529921847247-8b8b1db600cc?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'm5-2',
        month: 5,
        name: '台湾·日月潭',
        coordinates: [120.91, 23.86],
        desc: '湖面如镜，青山倒映。初夏时节天气晴朗，非常适合环湖骑行或乘船游览，感受宝岛明珠的静谧。',
        image: 'https://images.unsplash.com/photo-1577789098716-e523f668fc42?auto=format&fit=crop&q=80&w=800'
    },

    // 6月：高原与西北
    {
        id: 'm6-1',
        month: 6,
        name: '新疆·伊犁那拉提草原',
        coordinates: [83.26, 43.32],
        desc: '六月的新疆绿草如茵，野花遍地，牛羊成群。这是一年中最能领略塞外高山草原风光的时间。',
        image: 'https://images.unsplash.com/photo-1628864756303-a2ed9694e822?auto=format&fit=crop&q=80&w=800'
    },

    // 7月：避暑胜地
    {
        id: 'm7-1',
        month: 7,
        name: '青海·青海湖',
        coordinates: [100.18, 36.88],
        desc: '高原上的蔚蓝明珠，七八月份正值油菜花大面积盛开，湖水湛蓝，气温凉爽宜人，是极佳的避暑地。',
        image: 'https://images.unsplash.com/photo-1596773534599-4d6cb60d75a9?auto=format&fit=crop&q=80&w=800'
    },

    // 8月：神秘西藏
    {
        id: 'm8-1',
        month: 8,
        name: '西藏·拉萨布达拉宫',
        coordinates: [91.11, 29.65],
        desc: '夏末秋初，西藏氧气相对充足，气候舒爽。朝圣雄伟的布达拉宫，感受神圣与庄严。',
        image: 'https://images.unsplash.com/photo-1533282206411-ae3ab707bcca?auto=format&fit=crop&q=80&w=800'
    },

    // 9月：初秋斑斓
    {
        id: 'm9-1',
        month: 9,
        name: '四川·九寨沟',
        coordinates: [103.92, 33.26],
        desc: '“九寨归来不看水”。秋季的九寨沟彩林漫山，湖泊呈现出宝石般的斑斓迷幻色彩，是被上帝打翻的调色盘。',
        image: 'https://images.unsplash.com/photo-1610484083377-51f43eb913df?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'm9-2',
        month: 9,
        name: '台湾·阿里山',
        coordinates: [120.80, 23.51],
        desc: '秋高气爽，乘坐森林小火车穿越神木林，清晨观赏壮丽的云海日出。',
        image: 'https://images.unsplash.com/photo-1600100411831-294c73ba3f2c?auto=format&fit=crop&q=80&w=800'
    },

    // 10月：金秋十月
    {
        id: 'm10-1',
        month: 10,
        name: '北京·故宫博物院',
        coordinates: [116.39, 39.91],
        desc: '秋天的北京拥有最美的蓝天，红墙黄瓦在落叶点缀下显得分外端庄，是感受皇家气象的最佳时节。',
        image: 'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?auto=format&fit=crop&q=80&w=800'
    },

    // 11月：深秋绚烂
    {
        id: 'm11-1',
        month: 11,
        name: '云南·腾冲银杏村',
        coordinates: [98.49, 25.02],
        desc: '深秋时节，整个村庄被金黄的百年银杏叶覆盖，仿佛童话世界，充满浓郁的秋日浪漫。',
        image: 'https://images.unsplash.com/photo-1542459424-699a224db7f4?auto=format&fit=crop&q=80&w=800'
    },

    // 12月：温暖跨年
    {
        id: 'm12-1',
        month: 12,
        name: '福建·厦门鼓浪屿',
        coordinates: [118.06, 24.44],
        desc: '冬季气候温和，漫步在拥有万国建筑的浪漫小岛，吹着海风，享受慵懒闲适的慢时光。',
        image: 'https://images.unsplash.com/photo-1587560565257-2fe6877017de?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'm12-2',
        month: 12,
        name: '台湾·垦丁',
        coordinates: [120.79, 21.94],
        desc: '位于台湾最南端，12月依然温暖如春，是享受南国风情与海岸线骑行的理想冬日避世地。',
        image: 'https://images.unsplash.com/photo-1563806283138-0eb81ecb06ab?auto=format&fit=crop&q=80&w=800'
    }
];
