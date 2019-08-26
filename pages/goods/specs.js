export default {
    spec: [
        {
            id: 1,
            name: '颜色',
            content:[
                {
                    id: 11,
                    name: '黄色/白色'
                },{
                    id: 12,
                    name: '黑色/闪亮橘'
                },{
                    id: 13,
                    name: '鲨鱼灰/闪亮黄'
                }
            ],
        },
        {
            id: 2,
            name: '尺码',
            content:[
                {
                    id: 21,
                    name: '39'
                },{
                    id: 22,
                    name: '40',
                },{
                    id: 23,
                    name: '40.5'
                },{
                    id: 24,
                    name: '41'
                },{
                    id: 25,
                    name: '42'
                },{
                    id: 26,
                    name: '42.5'
                },{
                    id: 27,
                    name: '43'
                },{
                    id: 28,
                    name: '43.5'
                },{
                    id: 29,
                    name: '44'
                }
            ]
        }
    ],
    skuList: [
        {
            specs: '11_21',
            goods_price: 1200,
            goods_headimg: 'https://cdn.tianshic.com/uploads/2019/07/27/bea558114b16003aad3c8e0a3ec1d9b8.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,m_fixed,w_800,h_800/quality,q_90/sharpen,150/format,jpg',
            stock: 10
        },{
            specs: '11_24',
            goods_price: 1300,
            goods_headimg: 'https://cdn.tianshic.com/uploads/2019/07/27/bea558114b16003aad3c8e0a3ec1d9b8.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,m_fixed,w_800,h_800/quality,q_90/sharpen,150/format,jpg',
            stock: 99
        },{
            specs: '11_23',
            goods_price: 1300,
            goods_headimg: 'https://cdn.tianshic.com/uploads/2019/07/27/bea558114b16003aad3c8e0a3ec1d9b8.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,m_fixed,w_800,h_800/quality,q_90/sharpen,150/format,jpg',
            stock: -1
        },{
            specs: '12_21',
            goods_price: 1300,
            goods_headimg: 'https://cdn.tianshic.com/uploads/2019/07/27/bea558114b16003aad3c8e0a3ec1d9b8.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,m_fixed,w_800,h_800/quality,q_90/sharpen,150/format,jpg',
            stock: 99
        },{
            specs:'13_27',
            goods_price: 1300,
            goods_headimg: 'https://cdn.tianshic.com/uploads/2019/07/27/bea558114b16003aad3c8e0a3ec1d9b8.jpg?x-oss-process=image/auto-orient,1/interlace,1/resize,m_fixed,w_800,h_800/quality,q_90/sharpen,150/format,jpg',
            stock: -1
        }

    ]
}