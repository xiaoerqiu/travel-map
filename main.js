import { travelData } from './data.js';

let map = null;
let currentMarkers = [];
let infoWindow = null;
let activeMonth = 1; // 默认展示 1 月

// 高德地图极简暗色自定义样式 ID (占位，如果无权限可留空使用默认，这里填入常用的官方模板 'amap://styles/darkblue')
const MAP_STYLE = 'amap://styles/darkblue';

/**
 * 初始化高德地图
 */
function initMap() {
    map = new AMap.Map('map-container', {
        zoom: 5,
        center: [108.940174, 34.341568], // 默认中心：中国版图中心(大致为西安)
        mapStyle: MAP_STYLE,
        pitch: 45, // 开启 3D 俯视视角
        viewMode: '3D', // 开启 3D 视图,实现更炫酷的体验
        features: ['bg', 'road', 'point'], // 隐藏多余的建筑区块等
        showLabel: false // 尽可能精简标签
    });

    // 初始化全局唯一的自定义浮层
    infoWindow = new AMap.InfoWindow({
        isCustom: true,  // 使用自定义窗体
        autoMove: true,
        offset: new AMap.Pixel(0, -35)
    });

    // 监听地图空白处点击，关闭弹窗并清除所有选中态
    map.on('click', () => {
        closeInfoWindow();
        clearMarkerSelection();
    });
}

/**
 * 渲染底部时间轴
 */
function renderTimeline() {
    const container = document.getElementById('timeline');
    container.innerHTML = '';

    for (let m = 1; m <= 12; m++) {
        const btn = document.createElement('div');
        btn.className = `month-item ${m === activeMonth ? 'active' : ''}`;
        btn.textContent = `${m}月`;
        btn.addEventListener('click', () => {
            if (activeMonth === m) return;
            activeMonth = m;
            updateTimelineUI();
            renderMarkersForMonth(activeMonth);
        });
        container.appendChild(btn);
    }
}

function updateTimelineUI() {
    const items = document.querySelectorAll('.month-item');
    items.forEach((item, index) => {
        if (index + 1 === activeMonth) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

/**
 * 为指定月份渲染标记
 */
function renderMarkersForMonth(month) {
    // 1. 关闭现有浮层
    closeInfoWindow();

    // 2. 清除旧 Marker (带有退场动画)
    if (currentMarkers.length > 0) {
        currentMarkers.forEach(marker => {
            const el = marker.getContent();
            if (el && el.classList) {
                el.classList.add('marker-leave'); // 添加退场 class
            }
        });

        // 等待动画结束再从地图上彻底移除
        const markersToRemove = [...currentMarkers];
        setTimeout(() => {
            if (map) {
                map.remove(markersToRemove);
            }
        }, 300);
        currentMarkers = [];
    }

    // 3. 筛选新数据
    const monthData = travelData.filter(item => item.month === month);

    // 4. 添加新 Marker
    // 错开一点时间让它们依次 popIn，效果更好
    monthData.forEach((item, index) => {
        setTimeout(() => {
            const markerContent = document.createElement('div');
            markerContent.className = 'custom-marker';

            const marker = new AMap.Marker({
                position: item.coordinates,
                content: markerContent,
                offset: new AMap.Pixel(-8, -8),
                extData: item // 绑定数据
            });

            // 绑定点击事件
            marker.on('click', function (e) {
                // 阻止事件冒泡到 map
                handleMarkerClick(this);
            });

            marker.setMap(map);
            currentMarkers.push(marker);
        }, index * 80); // 每个相隔 80ms 依次出现
    });

    // 5. 自动调整地图视野以包含所有新标记
    if (monthData.length > 0) {
        setTimeout(() => {
            // 通过覆盖物集合计算边界
            map.setFitView(currentMarkers, false, [50, 50, 100, 50], 13);
        }, monthData.length * 80 + 100);
    } else {
        // 若当月无数据，恢复默认全国视角
        map.setZoomAndCenter(5, [108.94, 34.34], false, 1000);
    }
}

/**
 * 处理 Marker 的点击事件
 */
function handleMarkerClick(marker) {
    // 清除其他 marker 的选中态
    clearMarkerSelection();

    // 给当前 marker 加 selected
    const el = marker.getContent();
    if (el) el.classList.add('selected');

    const data = marker.getExtData();

    // 平滑移动地图中心并适度放大
    map.setZoomAndCenter(7, data.coordinates, false, 800);

    // 构造并显示精美 InfoWindow
    openInfoWindow(marker, data);
}

/**
 * 清除所有 Marker 选中态
 */
function clearMarkerSelection() {
    currentMarkers.forEach(m => {
        const el = m.getContent();
        if (el) el.classList.remove('selected');
    });
}

/**
 * 打开精美的拟态信息浮层
 */
function openInfoWindow(marker, data) {
    const template = document.getElementById('info-card-template');
    const clone = template.content.cloneNode(true);

    const card = clone.querySelector('.info-card');
    const img = clone.querySelector('.card-image');
    const title = clone.querySelector('.card-title');
    const desc = clone.querySelector('.card-desc');
    const closeBtn = clone.querySelector('.close-btn');

    // 当网络图片加载失败时，生成一个美观的 SVG 作为占位降级
    img.onerror = function () {
        this.onerror = null; // 防止无限回退
        const fallbackText = encodeURIComponent(data.name.split('·')[1] || data.name);
        // 生成深色背景与白色文字的 SVG Base64 URI
        this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="%231e293b"/><text x="50%" y="50%" fill="%23ffffff" font-size="36" font-family="sans-serif" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${fallbackText}</text></svg>`;
    };

    img.src = data.image;
    title.textContent = data.name;
    desc.textContent = data.desc;

    // 通过外层 div 包装好之后再放入 AMap (它需要一个实际的 DOM)
    const wrapper = document.createElement('div');
    wrapper.appendChild(card);

    // 绑定关闭事件
    const btnInWrapper = wrapper.querySelector('.close-btn');
    btnInWrapper.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止冒泡
        closeInfoWindow();
        clearMarkerSelection();
    });

    infoWindow.setContent(wrapper);
    infoWindow.open(map, marker.getPosition());
}

/**
 * 关闭浮层
 */
function closeInfoWindow() {
    if (infoWindow && infoWindow.getIsOpen()) {
        infoWindow.close();
    }
}

// ============== 启动 ==============
window.onload = function () {
    // 确保 AMap 脚本已加载
    if (typeof AMap !== 'undefined') {
        initMap();
        renderTimeline();
        // 延迟一点渲染初始月份，等待地图准备就绪
        setTimeout(() => renderMarkersForMonth(activeMonth), 500);
    } else {
        // 如果没有配置 Key 等原因导致高德加载失败
        document.body.innerHTML = `
      <div style="color:white; padding: 40px; text-align: center; font-size: 24px; background: #0b0f19; height: 100vh;">
        <p>地图服务加载失败。</p>
        <p style="font-size: 16px; margin-top:20px; color:#a0aabf;">请检查是否已在 index.html 中填入正确的高德地图 API Key 和安全密钥 (securityJsCode)。</p>
      </div>`;
    }
};
