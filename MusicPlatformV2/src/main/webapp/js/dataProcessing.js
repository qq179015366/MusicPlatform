//注意：导航、选项卡 依赖 element 模块，否则无法进行功能性操作
layui.use('element', function() {
    var element = layui.element;
});

$(function() {
    loadMusicData();
    loadMusicListData();
});

function loadMusicListData() {
    layui.use('table', function() {
        var tb = layui.table;
        tb.render({
            elem: '#MusicList_tb',
            height: 400,
            url: 'emp' //数据接口
                ,
            page: true //开启分页
                ,
            limits: [5, 7, 10, 15, 20, 25, 30],
            where: {
                type: 'list'
            },
            request: { //重新定义请求参数,定义过后的结果为:?page=1&pageSize=10
                pageName: 'page',
                limitName: 'pageSize'
            },
            response: { //重新定义响应的字段
                countName: 'count', //规定数据总数的字段名称，默认：count
                dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    {
                        field: 'dept',
                        title: '歌单名',
                        templet: '<div>{{d.dept.dname}}</div>'
                    }, {
                        title: '详细',
                        templet: '<div><button onclick="edit({{d.empno}})" class="layui-btn layui-btn-normal" type="button"><i class="layui-icon layui-icon-edit"></i>修改</button><button onclick="del({{d.empno}})" class="layui-btn layui-btn-danger" type="button"><i class="layui-icon layui-icon-delete"></i>删除</button></div>'
                    }
                ]
            ]
        });

    });
}


function loadMusicData() {
    layui.use('table', function() {
        var tb = layui.table;
        tb.render({
            elem: '#Music_tb_single',
            height: 400,
            url: 'emp' //数据接口
                ,
            page: true //开启分页
                ,
            limits: [5, 7, 10, 15, 20, 25, 30],
            where: {
                type: 'list'
            },
            request: { //重新定义请求参数,定义过后的结果为:?page=1&pageSize=10
                pageName: 'page',
                limitName: 'pageSize'
            },
            response: { //重新定义响应的字段
                countName: 'count', //规定数据总数的字段名称，默认：count
                dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    {
                        field: 'empno',
                        title: '音乐名',
                        fixed: 'left'
                    }, {
                        field: 'ename',
                        title: '作曲家'
                    }, {
                        field: 'job',
                        title: '上传者'
                    }, {
                        field: 'hiredate',
                        title: '上传时间'
                    }, {
                        field: 'dept',
                        title: '曲风',
                        templet: '<div>{{d.dept.dname}}</div>'
                    }, {
                        title: '试听',
                        templet: '<div><button onclick="edit({{d.empno}})" class="layui-btn layui-btn-normal" type="button"><i class="layui-icon layui-icon-edit"></i>修改</button><button onclick="del({{d.empno}})" class="layui-btn layui-btn-danger" type="button"><i class="layui-icon layui-icon-delete"></i>删除</button></div>'
                    }
                ]
            ]
        });

    });
    layui.use('table', function() {
        var tb = layui.table;
        tb.render({
            elem: '#Music_tb_list',
            height: 400,
            url: 'emp' //数据接口
                ,
            page: true //开启分页
                ,
            limits: [5, 7, 10, 15, 20, 25, 30],
            where: {
                type: 'list'
            },
            request: { //重新定义请求参数,定义过后的结果为:?page=1&pageSize=10
                pageName: 'page',
                limitName: 'pageSize'
            },
            response: { //重新定义响应的字段
                countName: 'count', //规定数据总数的字段名称，默认：count
                dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    {
                        field: 'empno',
                        title: '音乐名',
                        fixed: 'left'
                    }, {
                        field: 'ename',
                        title: '作曲家'
                    }, {
                        field: 'job',
                        title: '上传者'
                    }, {
                        field: 'hiredate',
                        title: '上传时间'
                    }, {
                        field: 'dept',
                        title: '曲风',
                        templet: '<div>{{d.dept.dname}}</div>'
                    }, {
                        title: '试听',
                        templet: '<div><button onclick="edit({{d.empno}})" class="layui-btn layui-btn-normal" type="button"><i class="layui-icon layui-icon-edit"></i>修改</button><button onclick="del({{d.empno}})" class="layui-btn layui-btn-danger" type="button"><i class="layui-icon layui-icon-delete"></i>删除</button></div>'
                    }
                ]
            ]
        });

    });
    layui.use('table', function() {
        var tb = layui.table;
        tb.render({
            elem: '#Music_tb_singer',
            height: 400,
            url: 'emp' //数据接口
                ,
            page: true //开启分页
                ,
            limits: [5, 7, 10, 15, 20, 25, 30],
            where: {
                type: 'list'
            },
            request: { //重新定义请求参数,定义过后的结果为:?page=1&pageSize=10
                pageName: 'page',
                limitName: 'pageSize'
            },
            response: { //重新定义响应的字段
                countName: 'count', //规定数据总数的字段名称，默认：count
                dataName: 'data' //规定数据列表的字段名称，默认：data
            },
            cols: [
                [ //表头
                    {
                        field: 'empno',
                        title: '音乐名',
                        fixed: 'left'
                    }, {
                        field: 'ename',
                        title: '作曲家'
                    }, {
                        field: 'job',
                        title: '上传者'
                    }, {
                        field: 'hiredate',
                        title: '上传时间'
                    }, {
                        field: 'dept',
                        title: '曲风',
                        templet: '<div>{{d.dept.dname}}</div>'
                    }, {
                        title: '试听',
                        templet: '<div><button onclick="edit({{d.empno}})" class="layui-btn layui-btn-normal" type="button"><i class="layui-icon layui-icon-edit"></i>修改</button><button onclick="del({{d.empno}})" class="layui-btn layui-btn-danger" type="button"><i class="layui-icon layui-icon-delete"></i>删除</button></div>'
                    }
                ]
            ]
        });

    });
}