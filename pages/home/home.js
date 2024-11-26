Page({
    data:{},
    onLoad: function(){
        my.getAuthCode({
            scopes: ['auth_user'],
            success: res => {
                console.log(res);
            }
        })
    },
    onShow: function(){
        my.getLocation({
            type: 'gcj02',
            success: function(res) {
              console.log(res);
            }
        })
    }
})